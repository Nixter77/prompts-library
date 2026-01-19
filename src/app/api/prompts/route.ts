import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { slugifyCategory } from '@/lib/utils';

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
    console.error('Internal server error:', error);
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

    if (!title || !category || !promptText) {
      return NextResponse.json(
        { message: 'Title, category, and prompt text are required.' },
        { status: 400 }
      );
    }

    if (title.length > MAX_TITLE_LENGTH) {
      return NextResponse.json(
        { message: `Title must be under ${MAX_TITLE_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (description && description.length > MAX_DESCRIPTION_LENGTH) {
      return NextResponse.json(
        { message: `Description must be under ${MAX_DESCRIPTION_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (category.length > MAX_CATEGORY_LENGTH) {
      return NextResponse.json(
        { message: `Category must be under ${MAX_CATEGORY_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (promptText.length > MAX_PROMPT_TEXT_LENGTH) {
      return NextResponse.json(
        { message: `Prompt text must be under ${MAX_PROMPT_TEXT_LENGTH} characters.` },
        { status: 400 }
      );
    }

    const normalizedTags = rawTags
      .map((tag) => (typeof tag === 'string' ? tag.trim() : ''))
      .filter((tag) => tag.length > 0);

    if (normalizedTags.length > MAX_TAGS_COUNT) {
      return NextResponse.json(
        { message: `Cannot have more than ${MAX_TAGS_COUNT} tags.` },
        { status: 400 }
      );
    }

    if (normalizedTags.some((tag) => tag.length > MAX_TAG_LENGTH)) {
      return NextResponse.json(
        { message: `Tags must be under ${MAX_TAG_LENGTH} characters.` },
        { status: 400 }
      );
    }

    const normalizedCategory = slugifyCategory(category);

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
      console.error('Error creating prompt:', error);
      return NextResponse.json(
        { message: 'Error creating prompt' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Prompt added successfully!', id: data.id });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
