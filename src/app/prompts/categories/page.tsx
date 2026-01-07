import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { formatCategoryLabel, slugifyCategory } from '@/lib/utils';
import { cookies } from 'next/headers';
import { translations, Language } from '@/lib/translations';

const CategoriesPage = async () => {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value as Language) || 'en';
  const t = translations[lang] || translations['en'];

  // Categories are defined by their slug.
  // We will map slugs to translated labels and descriptions using the translation object if available.
  // Otherwise we fall back to hardcoded defaults or DB content.

  // Actually, keeping descriptions in translation files for dynamic categories is hard.
  // But for the default ones, we can use translations.

  const getCategoryInfo = (slug: string) => {
    switch (slug) {
        case 'programming':
            return {
                label: t.category_programming,
                description: t.category_programming_desc
            };
        case 'images':
            return {
                label: t.category_images,
                description: t.category_images_desc
            };
        case 'data-analysis':
             return {
                label: t.category_data_analysis,
                description: t.category_data_analysis_desc
            };
        default:
            return {
                label: formatCategoryLabel(slug),
                description: t.categories_description
            };
    }
  }

  const defaultCategories = [
    { slug: 'programming' },
    { slug: 'images' },
    { slug: 'data-analysis' },
  ];

  const db = await open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database,
  });

  try {
    const categoriesFromDb = (await db.all(
      'SELECT DISTINCT category FROM prompts WHERE category IS NOT NULL AND category != ""'
    )) as { category: string }[];

    const mappedCategories = categoriesFromDb
      .map(({ category }) => slugifyCategory(category))
      .filter((slug) => slug.length > 0)
      .map((slug) => ({ slug }));

    const mergedCategories = [...defaultCategories, ...mappedCategories]
      .reduce((acc, category) => {
        if (!acc.some((item) => item.slug === category.slug)) {
          acc.push(category);
        }
        return acc;
      }, [] as { slug: string }[])
      .sort((a, b) => a.slug.localeCompare(b.slug));

    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-8">{t.categories_title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mergedCategories.map((category) => {
            const info = getCategoryInfo(category.slug);
            return (
              <Link href={`/prompts/categories/${category.slug}`} key={category.slug}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{info.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{info.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } finally {
    await db.close();
  }
};

export default CategoriesPage;
