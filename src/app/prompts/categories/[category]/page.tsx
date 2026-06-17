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

  const { data: promptsData } = await supabaseAdmin
    .from('prompts')
    .select('*')
    .eq('category', categorySlug) as { data: Prompt[] | null };

  const prompts = (promptsData || []).map((prompt) => ({
    ...prompt,
    category: categorySlug,
  }));

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
