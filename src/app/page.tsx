'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-8"
    >
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-center">Prompts Library</h1>
        <p className="text-lg text-center text-gray-600">
          A collection of prompts for programming, image generation, and data
          analysis.
        </p>
        <Link href="/prompts/categories">
          <Button size="lg">Go to library</Button>
        </Link>
      </main>
    </motion.div>
  );
}
