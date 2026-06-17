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

  const { data: filteredPrompts } = await supabaseAdmin
    .from('prompts')
    .select('*')
    .eq('category', categorySlug);

  // Performance: Filtered at DB level.
  // Note: The 'category' column is expected to contain slugified values (e.g., 'data-analysis')
  // matching the URL parameter. This is enforced by the POST handler and population scripts.
  const prompts = (filteredPrompts || []).map((prompt) => ({
    ...prompt,
    category: categorySlug,
  })) as Prompt[];

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
