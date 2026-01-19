/* eslint-disable @typescript-eslint/no-require-imports */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Try to load from .env.local first, then .env
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set.');
  console.error('Make sure you have a .env.local file with these variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const promptsPath = path.join(__dirname, 'prompts_data.json');
const prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf8'));

function slugifyCategory(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function seed() {
  console.log(`Starting seed of ${prompts.length} prompts...`);
  console.log(`Target Supabase URL: ${supabaseUrl}`);

  let successCount = 0;
  let errorCount = 0;

  for (const prompt of prompts) {
    const { title, description, category, prompt_text, tags } = prompt;
    const slugCategory = slugifyCategory(category);

    const { error } = await supabase
      .from('prompts')
      .insert({
        title,
        description,
        category: slugCategory,
        prompt_text,
        tags
      })
      .select();

    if (error) {
      console.error(`Failed to insert "${title}":`, error.message);
      errorCount++;
    } else {
      console.log(`Inserted: ${title}`);
      successCount++;
    }
  }

  console.log(`\nSeed complete.`);
  console.log(`Success: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
}

seed();
