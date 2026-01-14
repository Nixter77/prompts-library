import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabaseAdmin } from '@/lib/supabase';
import { cookies } from 'next/headers';
import { translations, Language } from '@/lib/translations';
import { BookOpen, FolderOpen, Globe, Code, Image, BarChart3, CheckCircle } from 'lucide-react';

const AboutPage = async () => {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value as Language) || 'en';
  const t = translations[lang] || translations['en'];

  let promptCount = 0;
  let categoryCount = 0;

  try {
    const { count } = await supabaseAdmin
      .from('prompts')
      .select('*', { count: 'exact', head: true });
    promptCount = count || 0;

    const { data: categories } = await supabaseAdmin
      .from('prompts')
      .select('category');

    if (categories) {
      const uniqueCategories = new Set(categories.map(c => c.category));
      categoryCount = uniqueCategories.size;
    }
  } catch (error) {
    console.error('Error fetching stats:', error);
  }

  const stats = [
    { label: t.about_stats_prompts, value: promptCount, icon: BookOpen },
    { label: t.about_stats_categories, value: categoryCount, icon: FolderOpen },
    { label: t.about_stats_languages, value: 2, icon: Globe },
  ];

  const features = [
    t.about_feature_1,
    t.about_feature_2,
    t.about_feature_3,
    t.about_feature_4,
  ];

  const categories = [
    { icon: Code, text: t.about_category_programming },
    { icon: Image, text: t.about_category_images },
    { icon: BarChart3, text: t.about_category_data },
  ];

  const steps = [
    t.about_how_step_1,
    t.about_how_step_2,
    t.about_how_step_3,
    t.about_how_step_4,
  ];

  return (
    <div className="flex flex-col items-center p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{t.about_title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl">
        {t.about_description}
      </p>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features */}
      <Card className="w-full mb-8">
        <CardHeader>
          <CardTitle>{t.about_features_title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="w-full mb-8">
        <CardHeader>
          <CardTitle>{t.about_categories_title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index} className="flex items-start gap-3">
                <category.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{category.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{t.about_how_title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
