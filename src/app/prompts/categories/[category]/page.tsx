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

  // Optimization: Select only necessary columns to reduce payload size.
  // We explicitly exclude 'prompt_text' which can be very large.
  const { data: allPrompts } = await supabaseAdmin
    .from('prompts')
    .select('id, title, description, category');

  const prompts = (allPrompts || [])
    .filter((prompt) => slugifyCategory(prompt.category) === categorySlug)
    .map((prompt) => ({ ...prompt, category: categorySlug })) as Pick<
    Prompt,
    'id' | 'title' | 'description' | 'category'
  >[];

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
