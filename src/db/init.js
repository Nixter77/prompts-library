import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
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

  // Dummy data removed - only real user data needed

  console.log('Database initialized.');
});

db.close();
