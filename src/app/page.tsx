'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-8"
    >
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-center">{t('home_title')}</h1>
        <p className="text-lg text-center text-gray-600">
          {t('home_description')}
        </p>
        <Link href="/prompts/categories">
          <Button size="lg">{t('home_button')}</Button>
        </Link>
      </main>
    </motion.div>
  );
}
