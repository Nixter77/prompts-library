import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { formatCategoryLabel, slugifyCategory } from '@/lib/utils';

const defaultCategories = [
  {
    slug: 'programming',
    description: 'Prompts for all your programming needs.',
  },
  {
    slug: 'images',
    description: 'Generate stunning images with these prompts.',
  },
  {
    slug: 'data-analysis',
    description: 'Analyze your data with these prompts.',
  },
];

const CategoriesPage = async () => {
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
      .map((slug) => ({
        slug,
        description: defaultCategories.find((cat) => cat.slug === slug)?.description ??
          'Collection of prompts for this topic.',
      }));

    const mergedCategories = [...defaultCategories, ...mappedCategories]
      .reduce((acc, category) => {
        if (!acc.some((item) => item.slug === category.slug)) {
          acc.push(category);
        }
        return acc;
      }, [] as { slug: string; description: string }[])
      .sort((a, b) => a.slug.localeCompare(b.slug));

    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-8">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mergedCategories.map((category) => {
            const label = formatCategoryLabel(category.slug);
            return (
              <Link href={`/prompts/categories/${category.slug}`} key={category.slug}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{category.description}</p>
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
