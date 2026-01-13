import CategoryClientPage from './CategoryClientPage';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Prompt } from '@/lib/types';
import path from 'path';
import { formatCategoryLabel, slugifyCategory } from '@/lib/utils';
import { cookies } from 'next/headers';
import { translations, Language } from '@/lib/translations';

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const categorySlug = slugifyCategory(category);

  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value as Language) || 'en';
  const t = translations[lang] || translations['en'];

  const db = await open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database,
  });

  try {
    // Filter by language and category in DB
    const prompts = await db.all<Prompt[]>(
        'SELECT * FROM prompts WHERE language = ? AND category = ?',
        lang,
        categorySlug
    );

    // Get translated label if possible
    let categoryLabel = formatCategoryLabel(categorySlug);
    if (categorySlug === 'programming') categoryLabel = t.category_programming;
    else if (categorySlug === 'images') categoryLabel = t.category_images;
    else if (categorySlug === 'data-analysis') categoryLabel = t.category_data_analysis;

    return (
      <CategoryClientPage
        prompts={prompts}
        categorySlug={categorySlug}
        categoryLabel={categoryLabel}
      />
    );
  } finally {
    await db.close();
  }
};

export default CategoryPage;
