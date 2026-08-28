import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { slugifyCategory } from '@/lib/utils';

// Input validation limits
const TITLE_MAX_LENGTH = 200;
const DESCRIPTION_MAX_LENGTH = 1000;
const CATEGORY_MAX_LENGTH = 100;
const PROMPT_TEXT_MAX_LENGTH = 10000;
const TAG_MAX_LENGTH = 50;
const MAX_TAGS = 20;

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

    if (!title || !category || !promptText) {
      return NextResponse.json(
        { message: 'Title, category, and prompt text are required.' },
        { status: 400 }
      );
    }

    // Check for duplicates - Title
    const { data: existingTitle } = await supabaseAdmin
      .from('prompts')
      .select('id')
      .eq('title', title)
      .limit(1)
      .maybeSingle();

    if (existingTitle) {
      return NextResponse.json(
        { message: 'A prompt with this title already exists.' },
        { status: 409 }
      );
    }

    // Check for duplicates - Content
    const { data: existingContent } = await supabaseAdmin
      .from('prompts')
      .select('id')
      .eq('prompt_text', promptText)
      .limit(1)
      .maybeSingle();

    if (existingContent) {
      return NextResponse.json(
        { message: 'A prompt with this content already exists.' },
        { status: 409 }
      );
    }

    // Input length validation
    if (title.length > TITLE_MAX_LENGTH) {
      return NextResponse.json({ message: `Title exceeds maximum length of ${TITLE_MAX_LENGTH} characters.` }, { status: 400 });
    }
    if (description && description.length > DESCRIPTION_MAX_LENGTH) {
      return NextResponse.json({ message: `Description exceeds maximum length of ${DESCRIPTION_MAX_LENGTH} characters.` }, { status: 400 });
    }
    if (category.length > CATEGORY_MAX_LENGTH) {
      return NextResponse.json({ message: `Category exceeds maximum length of ${CATEGORY_MAX_LENGTH} characters.` }, { status: 400 });
    }
    if (promptText.length > PROMPT_TEXT_MAX_LENGTH) {
      return NextResponse.json({ message: `Prompt text exceeds maximum length of ${PROMPT_TEXT_MAX_LENGTH} characters.` }, { status: 400 });
    }
    if (rawTags.length > MAX_TAGS) {
      return NextResponse.json({ message: `Cannot have more than ${MAX_TAGS} tags.` }, { status: 400 });
    }
    if (rawTags.some((tag) => typeof tag === 'string' && tag.length > TAG_MAX_LENGTH)) {
      return NextResponse.json({ message: `One or more tags exceed maximum length of ${TAG_MAX_LENGTH} characters.` }, { status: 400 });
    }

    const normalizedCategory = slugifyCategory(category);
    const normalizedTags = rawTags
      .map((tag) => (typeof tag === 'string' ? tag.trim() : ''))
      .filter((tag) => tag.length > 0);

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
