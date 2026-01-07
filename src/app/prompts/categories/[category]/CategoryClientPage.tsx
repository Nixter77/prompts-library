'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Prompt } from '@/lib/types';
import { useLanguage } from '@/context/LanguageContext';
import { Search } from 'lucide-react';

interface CategoryClientPageProps {
  prompts: Prompt[];
  categorySlug: string;
  categoryLabel: string;
}

// Normalize text for search (lowercase, remove extra spaces)
const normalizeText = (text: string | null | undefined): string => {
  if (!text) return '';
  return text.toLowerCase().trim();
};

// Split search query into words for multi-word search
const splitSearchTerms = (query: string): string[] => {
  return query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((term) => term.length > 0);
};

// Calculate search relevance score
const calculateRelevance = (prompt: Prompt, terms: string[]): number => {
  let score = 0;

  const title = normalizeText(prompt.title);
  const description = normalizeText(prompt.description);
  const tags = normalizeText(prompt.tags);
  const promptText = normalizeText(prompt.prompt_text);

  for (const term of terms) {
    // Title matches are most important (weight: 10)
    if (title.includes(term)) {
      score += 10;
      // Exact title match bonus
      if (title === term || title.startsWith(term + ' ') || title.endsWith(' ' + term)) {
        score += 5;
      }
    }

    // Tag matches are very important (weight: 8)
    if (tags.includes(term)) {
      score += 8;
    }

    // Description matches (weight: 5)
    if (description.includes(term)) {
      score += 5;
    }

    // Prompt text matches (weight: 2)
    if (promptText.includes(term)) {
      score += 2;
    }
  }

  return score;
};

const CategoryClientPage = ({ prompts, categorySlug, categoryLabel }: CategoryClientPageProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const filteredAndSortedPrompts = useMemo(() => {
    const terms = splitSearchTerms(searchTerm);

    if (terms.length === 0) {
      return prompts;
    }

    // Filter prompts that match at least one term in any field
    const matchingPrompts = prompts.filter((prompt) => {
      const title = normalizeText(prompt.title);
      const description = normalizeText(prompt.description);
      const tags = normalizeText(prompt.tags);
      const promptText = normalizeText(prompt.prompt_text);

      // Check if any term matches any field
      return terms.some(
        (term) =>
          title.includes(term) ||
          description.includes(term) ||
          tags.includes(term) ||
          promptText.includes(term)
      );
    });

    // Sort by relevance score
    return matchingPrompts.sort((a, b) => {
      const scoreA = calculateRelevance(a, terms);
      const scoreB = calculateRelevance(b, terms);
      return scoreB - scoreA;
    });
  }, [prompts, searchTerm]);

  // Parse tags for display
  const parseTags = (tagsString: string | null): string[] => {
    if (!tagsString) return [];
    return tagsString.split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">{categoryLabel}</h1>

      {/* Search input with icon */}
      <div className="relative w-full max-w-lg mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder={t('search_placeholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Results count */}
      {searchTerm.trim() && (
        <p className="text-sm text-gray-500 mb-4">
          {filteredAndSortedPrompts.length}{' '}
          {filteredAndSortedPrompts.length === 1 ? t('search_result_found') : t('search_results_found')}
        </p>
      )}

      {filteredAndSortedPrompts.length === 0 ? (
        <p className="text-gray-500">{t('no_prompts_found')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredAndSortedPrompts.map((prompt) => {
            const tags = parseTags(prompt.tags);
            return (
              <Link href={`/prompts/${prompt.id}`} key={prompt.id}>
                <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{prompt.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">
                      {prompt.description || 'No description'}
                    </p>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryClientPage;
