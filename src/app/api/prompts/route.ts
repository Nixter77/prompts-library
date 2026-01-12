import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Prompt } from '@/lib/types';
import { randomUUID } from 'crypto';
import path from 'path';
import { slugifyCategory } from '@/lib/utils';

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
  } finally {
    await db.close();
  }
}

export async function POST(request: Request) {
  const db = await open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database,
  });

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
    const language = typeof body.language === 'string' ? body.language : 'en';

    if (!title || !category || !promptText) {
      return NextResponse.json({ message: 'Title, category, and prompt text are required.' }, { status: 400 });
    }

    // Input validation: Length limits
    if (title.length > 200) {
      return NextResponse.json({ message: 'Title exceeds maximum length of 200 characters.' }, { status: 400 });
    }
    if (description && description.length > 1000) {
      return NextResponse.json({ message: 'Description exceeds maximum length of 1000 characters.' }, { status: 400 });
    }
    if (category.length > 100) {
      return NextResponse.json({ message: 'Category exceeds maximum length of 100 characters.' }, { status: 400 });
    }
    if (promptText.length > 10000) {
      return NextResponse.json({ message: 'Prompt text exceeds maximum length of 10000 characters.' }, { status: 400 });
    }

    // Tag validation
    if (rawTags.length > 20) {
      return NextResponse.json({ message: 'Maximum of 20 tags allowed.' }, { status: 400 });
    }

    const normalizedCategory = slugifyCategory(category);
    const normalizedTags = rawTags
      .map((tag) => (typeof tag === 'string' ? tag.trim() : ''))
      .filter((tag) => tag.length > 0);

    for (const tag of normalizedTags) {
      if (tag.length > 50) {
        return NextResponse.json({ message: 'Tag exceeds maximum length of 50 characters.' }, { status: 400 });
      }
    }

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
  } finally {
    await db.close();
  }
}
