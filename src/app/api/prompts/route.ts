import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { slugifyCategory } from '@/lib/utils';

export async function GET() {
  try {
    const { data: prompts, error } = await supabaseAdmin
      .from('prompts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { message: 'Error fetching prompts', error: error.message },
        { status: 500 }
      );
    }

    const normalizedPrompts = prompts.map((prompt) => ({
      ...prompt,
      category: slugifyCategory(prompt.category),
    }));

    return NextResponse.json(normalizedPrompts);
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const description =
      typeof body.description === 'string' && body.description.trim().length > 0
        ? body.description.trim()
        : null;
    const category = typeof body.category === 'string' ? body.category : '';
    const promptText = typeof body.prompt_text === 'string' ? body.prompt_text.trim() : '';
    const rawTags = Array.isArray(body.tags) ? body.tags : [];

    // Validation Limits
    const MAX_TITLE_LENGTH = 200;
    const MAX_DESCRIPTION_LENGTH = 1000;
    const MAX_CATEGORY_LENGTH = 100;
    const MAX_PROMPT_TEXT_LENGTH = 10000;
    const MAX_TAG_LENGTH = 50;
    const MAX_TAGS_COUNT = 20;

    if (!title || !category || !promptText) {
      return NextResponse.json(
        { message: 'Title, category, and prompt text are required.' },
        { status: 400 }
      );
    }

    if (title.length > MAX_TITLE_LENGTH) {
      return NextResponse.json(
        { message: `Title must be less than ${MAX_TITLE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    if (description && description.length > MAX_DESCRIPTION_LENGTH) {
      return NextResponse.json(
        {
          message: `Description must be less than ${MAX_DESCRIPTION_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    if (category.length > MAX_CATEGORY_LENGTH) {
      return NextResponse.json(
        { message: `Category must be less than ${MAX_CATEGORY_LENGTH} characters.` },
        { status: 400 }
      );
    }

    if (promptText.length > MAX_PROMPT_TEXT_LENGTH) {
      return NextResponse.json(
        {
          message: `Prompt text must be less than ${MAX_PROMPT_TEXT_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    const normalizedCategory = slugifyCategory(category);
    const normalizedTags = rawTags
      .map((tag) => (typeof tag === 'string' ? tag.trim() : ''))
      .filter((tag) => tag.length > 0);

    if (normalizedTags.length > MAX_TAGS_COUNT) {
      return NextResponse.json(
        { message: `Cannot add more than ${MAX_TAGS_COUNT} tags.` },
        { status: 400 }
      );
    }

    if (normalizedTags.some((tag) => tag.length > MAX_TAG_LENGTH)) {
      return NextResponse.json(
        { message: `Each tag must be less than ${MAX_TAG_LENGTH} characters.` },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('prompts')
      .insert({
        title,
        description,
        category: normalizedCategory,
        prompt_text: promptText,
        tags: normalizedTags.length > 0 ? normalizedTags : null,
      })
      .select('id')
      .single();

    if (error) {
      return NextResponse.json(
        { message: 'Error creating prompt', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Prompt added successfully!', id: data.id });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
