import CategoryClientPage from './CategoryClientPage';
import { supabaseAdmin } from '@/lib/supabase';
import { Prompt } from '@/lib/types';
import { formatCategoryLabel, slugifyCategory } from '@/lib/utils';
import { cookies } from 'next/headers';
import { translations, Language } from '@/lib/translations';

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const categorySlug = slugifyCategory(category);

  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value as Language) || 'en';
  const t = translations[lang] || translations['en'];

  // Optimization: Filter by category in DB and fetch only necessary fields.
  // Note: Database stores normalized categories (slugs) by design, so .eq() is safe.
  const { data: promptsFromDb } = await supabaseAdmin
    .from('prompts')
    .select('id, title, description')
    .eq('category', categorySlug);

  const prompts = (promptsFromDb || []) as Pick<Prompt, 'id' | 'title' | 'description'>[];

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
};

export default CategoryPage;
