import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { slugifyCategory } from '@/lib/utils';

// Input limits
const MAX_TITLE_LENGTH = 200;
const MAX_DESCRIPTION_LENGTH = 1000;
const MAX_CATEGORY_LENGTH = 100;
const MAX_PROMPT_TEXT_LENGTH = 10000;
const MAX_TAGS_COUNT = 20;
const MAX_TAG_LENGTH = 50;

export async function GET() {
  try {
    const { data: prompts, error } = await supabaseAdmin
      .from('prompts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching prompts:', error);
      return NextResponse.json(
        { message: 'Error fetching prompts' },
        { status: 500 }
      );
    }

    const normalizedPrompts = prompts.map((prompt) => ({
      ...prompt,
      category: slugifyCategory(prompt.category),
    }));

    return NextResponse.json(normalizedPrompts);
  } catch (error) {
    console.error('Unexpected error in GET /api/prompts:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    // Type checking and trimming
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const description =
      typeof body.description === 'string' ? body.description.trim() : null;
    const category = typeof body.category === 'string' ? body.category.trim() : '';
    const promptText = typeof body.prompt_text === 'string' ? body.prompt_text.trim() : '';
    const rawTags = Array.isArray(body.tags) ? body.tags : [];

    // Required fields check
    if (!title || !category || !promptText) {
      return NextResponse.json(
        { message: 'Title, category, and prompt text are required.' },
        { status: 400 }
      );
    }

    // Length validation
    if (title.length > MAX_TITLE_LENGTH) {
      return NextResponse.json(
        { message: `Title must be ${MAX_TITLE_LENGTH} characters or less.` },
        { status: 400 }
      );
    }
    if (description && description.length > MAX_DESCRIPTION_LENGTH) {
      return NextResponse.json(
        { message: `Description must be ${MAX_DESCRIPTION_LENGTH} characters or less.` },
        { status: 400 }
      );
    }
    if (category.length > MAX_CATEGORY_LENGTH) {
      return NextResponse.json(
        { message: `Category must be ${MAX_CATEGORY_LENGTH} characters or less.` },
        { status: 400 }
      );
    }
    if (promptText.length > MAX_PROMPT_TEXT_LENGTH) {
      return NextResponse.json(
        { message: `Prompt text must be ${MAX_PROMPT_TEXT_LENGTH} characters or less.` },
        { status: 400 }
      );
    }
    if (rawTags.length > MAX_TAGS_COUNT) {
      return NextResponse.json(
        { message: `Maximum ${MAX_TAGS_COUNT} tags allowed.` },
        { status: 400 }
      );
    }

    // Validate tag lengths
    const invalidTags = rawTags.filter(tag => typeof tag === 'string' && tag.length > MAX_TAG_LENGTH);
    if (invalidTags.length > 0) {
      return NextResponse.json(
        { message: `Tags must be ${MAX_TAG_LENGTH} characters or less.` },
        { status: 400 }
      );
    }

    const normalizedCategory = slugifyCategory(category);
    const normalizedTags = rawTags
      .map((tag) => (typeof tag === 'string' ? tag.trim() : ''))
      .filter((tag) => tag.length > 0);

    const { data, error } = await supabaseAdmin
      .from('prompts')
      .insert({
        title,
        description: description && description.length > 0 ? description : null,
        category: normalizedCategory,
        prompt_text: promptText,
        tags: normalizedTags.length > 0 ? normalizedTags : null,
      })
      .select('id')
      .single();

    if (error) {
      console.error('Error creating prompt:', error);
      return NextResponse.json(
        { message: 'Error creating prompt' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Prompt added successfully!', id: data.id });
  } catch (error) {
    console.error('Unexpected error in POST /api/prompts:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
