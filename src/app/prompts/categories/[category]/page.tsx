import CategoryClientPage, { PromptListResponse } from './CategoryClientPage';
import { supabaseAdmin } from '@/lib/supabase';
import { formatCategoryLabel, slugifyCategory } from '@/lib/utils';
import { cookies } from 'next/headers';
import { translations, Language } from '@/lib/translations';

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const categorySlug = slugifyCategory(category);

  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value as Language) || 'en';
  const t = translations[lang] || translations['en'];

  // Optimized query: Select only necessary fields and filter by category in SQL
  // This avoids fetching large 'prompt_text' fields and filtering in-memory
  const { data: prompts } = await supabaseAdmin
    .from('prompts')
    .select('id, title, description, category')
    .eq('category', categorySlug);

  let categoryLabel = formatCategoryLabel(categorySlug);
  if (categorySlug === 'programming') categoryLabel = t.category_programming;
  else if (categorySlug === 'images') categoryLabel = t.category_images;
  else if (categorySlug === 'data-analysis') categoryLabel = t.category_data_analysis;

  return (
    <CategoryClientPage
      prompts={(prompts || []) as PromptListResponse[]}
      categorySlug={categorySlug}
      categoryLabel={categoryLabel}
    />
  );
};

export default CategoryPage;
