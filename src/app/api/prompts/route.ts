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
  } catch {
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
  } catch {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
