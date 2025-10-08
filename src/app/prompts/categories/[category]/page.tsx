import CategoryClientPage from './CategoryClientPage';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Prompt } from '@/lib/types';
import path from 'path';
import { formatCategoryLabel, slugifyCategory } from '@/lib/utils';

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const categorySlug = slugifyCategory(category);

  const db = await open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database,
  });

  try {
    const allPrompts = await db.all<Prompt[]>('SELECT * FROM prompts');
    const prompts = allPrompts
      .filter((prompt) => slugifyCategory(prompt.category) === categorySlug)
      .map((prompt) => ({ ...prompt, category: categorySlug }));

    return (
      <CategoryClientPage
        prompts={prompts}
        categorySlug={categorySlug}
        categoryLabel={formatCategoryLabel(categorySlug)}
      />
    );
  } finally {
    await db.close();
  }
};

export default CategoryPage;
