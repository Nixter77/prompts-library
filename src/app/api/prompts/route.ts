import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Prompt } from '@/lib/types';
import { randomUUID } from 'crypto';
import path from 'path';
import { slugifyCategory } from '@/lib/utils';

// Input length limits for security (DoS prevention)
const MAX_TITLE_LENGTH = 200;
const MAX_DESCRIPTION_LENGTH = 1000;
const MAX_CATEGORY_LENGTH = 100;
const MAX_PROMPT_TEXT_LENGTH = 10000;
const MAX_TAG_LENGTH = 50;
const MAX_TAGS_COUNT = 20;

export async function GET() {
  const db = await open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database,
  });

  try {
    const prompts = await db.all<Prompt[]>('SELECT * FROM prompts');
    const normalizedPrompts = prompts.map((prompt) => ({
      ...prompt,
      category: slugifyCategory(prompt.category),
    }));
    return NextResponse.json(normalizedPrompts);
  } catch (error) {
    console.error('Database error in GET /api/prompts:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  } finally {
    await db.close();
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
     return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
  }

  const title = typeof body.title === 'string' ? body.title.trim() : '';
  const description =
    typeof body.description === 'string' && body.description.trim().length > 0
      ? body.description.trim()
      : null;
  const category = typeof body.category === 'string' ? body.category : '';
  const promptText = typeof body.prompt_text === 'string' ? body.prompt_text.trim() : '';
  const rawTags = Array.isArray(body.tags) ? body.tags : [];
  const language = typeof body.language === 'string' ? body.language : 'en';

  // Input Validation
  if (!title || !category || !promptText) {
    return NextResponse.json({ message: 'Title, category, and prompt text are required.' }, { status: 400 });
  }

  // Security: Enforce length limits
  if (title.length > MAX_TITLE_LENGTH) {
    return NextResponse.json({ message: `Title must be under ${MAX_TITLE_LENGTH} characters.` }, { status: 400 });
  }
  if (description && description.length > MAX_DESCRIPTION_LENGTH) {
    return NextResponse.json({ message: `Description must be under ${MAX_DESCRIPTION_LENGTH} characters.` }, { status: 400 });
  }
  if (category.length > MAX_CATEGORY_LENGTH) {
    return NextResponse.json({ message: `Category must be under ${MAX_CATEGORY_LENGTH} characters.` }, { status: 400 });
  }
  if (promptText.length > MAX_PROMPT_TEXT_LENGTH) {
    return NextResponse.json({ message: `Prompt text must be under ${MAX_PROMPT_TEXT_LENGTH} characters.` }, { status: 400 });
  }
  if (rawTags.length > MAX_TAGS_COUNT) {
    return NextResponse.json({ message: `Cannot have more than ${MAX_TAGS_COUNT} tags.` }, { status: 400 });
  }

  const normalizedCategory = slugifyCategory(category);
  const normalizedTags: string[] = [];

  for (const tag of rawTags) {
     if (typeof tag === 'string') {
        const trimmed = tag.trim();
        if (trimmed.length > MAX_TAG_LENGTH) {
            return NextResponse.json({ message: `Tags must be under ${MAX_TAG_LENGTH} characters.` }, { status: 400 });
        }
        if (trimmed.length > 0) {
            normalizedTags.push(trimmed);
        }
     }
  }

  const db = await open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database,
  });

  try {
    const id = randomUUID();

    await db.run(
      'INSERT INTO prompts (id, title, description, category, prompt_text, tags, language) VALUES (?, ?, ?, ?, ?, ?, ?)',
      id,
      title,
      description,
      normalizedCategory,
      promptText,
      normalizedTags.length > 0 ? normalizedTags.join(',') : null,
      language
    );

    return NextResponse.json({ message: 'Prompt added successfully!', id });
  } catch (error) {
    console.error('Database error in POST /api/prompts:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  } finally {
    await db.close();
  }
}
