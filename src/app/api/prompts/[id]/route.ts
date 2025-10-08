import { NextRequest, NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Prompt } from '@/lib/types';
import path from 'path';

export async function GET(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ message: 'Prompt id is required.' }, { status: 400 });
  }

  const db = await open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database,
  });

  try {
    const prompt = await db.get<Prompt>('SELECT * FROM prompts WHERE id = ?', id);

    if (!prompt) {
      return NextResponse.json({ message: 'Prompt not found.' }, { status: 404 });
    }

    return NextResponse.json(prompt);
  } finally {
    await db.close();
  }
}
