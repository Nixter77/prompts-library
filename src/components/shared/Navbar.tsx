'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold">
        <Link href="/">{t('home_title')}</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/">{t('nav_home')}</Link>
        <Link href="/prompts/categories">{t('nav_categories')}</Link>
        <Link href="/about">{t('nav_about')}</Link>
        <Link href="/add-prompt">{t('nav_add_prompt')}</Link>
        <Button variant="outline" onClick={toggleLanguage} size="sm">
          {language === 'en' ? 'RU' : 'EN'}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
