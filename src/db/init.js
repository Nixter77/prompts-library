import sqlite3 from 'sqlite3';
import { initialPrompts } from './prompts-data.js';

const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  // Create table
  db.run(`
    CREATE TABLE IF NOT EXISTS prompts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT NOT NULL,
      prompt_text TEXT NOT NULL,
      tags TEXT,
      language TEXT DEFAULT 'en'
    )
  `);

  // Clear existing data to avoid duplicates on re-init
  db.run('DELETE FROM prompts');

  // Insert initial prompts
  const stmt = db.prepare(`
    INSERT INTO prompts (id, title, description, category, prompt_text, tags, language)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  for (const prompt of initialPrompts) {
    stmt.run(
      prompt.id,
      prompt.title,
      prompt.description || null,
      prompt.category,
      prompt.prompt_text,
      prompt.tags || null,
      prompt.language || 'en'
    );
  }

  stmt.finalize();

  console.log(`Database initialized with ${initialPrompts.length} prompts.`);
});

db.close();
