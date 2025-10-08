import PromptClientPage from './PromptClientPage';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Prompt } from '@/lib/types';
import path from 'path';

const PromptPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const db = await open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database,
  });

  try {
    const prompt = await db.get<Prompt>('SELECT * FROM prompts WHERE id = ?', id);

    if (!prompt) {
      return <div>Prompt not found.</div>;
    }

    return <PromptClientPage prompt={prompt} />;
  } finally {
    await db.close();
  }
};

export default PromptPage;
