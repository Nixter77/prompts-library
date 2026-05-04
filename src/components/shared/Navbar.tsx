'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun, Palette } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('scribblified');
    else setTheme('light');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-[var(--navbar-bg)] shadow-md transition-colors duration-200 text-[var(--navbar-text)]">
      <div className="text-2xl font-bold font-heading">
        <Link href="/">{t('home_title')}</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity font-body">{t('nav_home')}</Link>
        <Link href="/prompts/categories" className="hover:opacity-80 transition-opacity font-body">{t('nav_categories')}</Link>
        <Link href="/about" className="hover:opacity-80 transition-opacity font-body">{t('nav_about')}</Link>
        <Link href="/add-prompt" className="hover:opacity-80 transition-opacity font-body">{t('nav_add_prompt')}</Link>
        <Button variant="outline" onClick={toggleLanguage} size="sm" className="font-body cursor-pointer">
          {language === 'en' ? 'RU' : 'EN'}
        </Button>
        {mounted && (
          <Button variant="outline" size="sm" onClick={cycleTheme} className="cursor-pointer" aria-label="Toggle theme">
            {theme === 'light' && <Sun className="h-4 w-4" />}
            {theme === 'dark' && <Moon className="h-4 w-4" />}
            {theme === 'scribblified' && <Palette className="h-4 w-4" />}
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
