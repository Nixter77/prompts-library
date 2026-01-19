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

  // ⚡ Bolt Optimization:
  // Select only necessary columns to reduce network payload.
  // We exclude 'prompt_text' (can be 10k chars) as it's not needed for the list view.
  // Note: We still fetch all rows and filter in JS because legacy data might have un-normalized categories.
  // A future migration should normalize 'category' in DB to allow usage of .eq('category', categorySlug).
  const { data: allPrompts } = await supabaseAdmin
    .from('prompts')
    .select('id, title, description, category, tags, created_at');

  const prompts = (allPrompts || [])
    .filter((prompt) => slugifyCategory(prompt.category) === categorySlug)
    .map((prompt) => ({ ...prompt, category: categorySlug })) as unknown as Prompt[];

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
