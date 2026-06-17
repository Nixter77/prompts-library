'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { PromptListItem } from '@/lib/types';

interface CategoryClientPageProps {
  prompts: PromptListItem[];
  categorySlug: string;
  categoryLabel: string;
}

const CategoryClientPage = ({ prompts, categorySlug, categoryLabel }: CategoryClientPageProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredPrompts = prompts.filter((prompt) => {
    const matchesTitle = prompt.title.toLowerCase().includes(normalizedSearch);
    const matchesDescription = prompt.description
      ? prompt.description.toLowerCase().includes(normalizedSearch)
      : false;

    return normalizedSearch.length === 0 ? true : matchesTitle || matchesDescription;
  });

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">{categoryLabel} Prompts</h1>
      <p className="text-gray-500 mb-6">/{categorySlug}</p>
      <Input
        placeholder="Search prompts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8 w-full max-w-lg"
      />
      {filteredPrompts.length === 0 ? (
        <p className="text-gray-500">No prompts found for this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredPrompts.map((prompt) => (
            <Link href={`/prompts/${prompt.id}`} key={prompt.id}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle>{prompt.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{prompt.description || 'No description'}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryClientPage;
