'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { slugifyCategory } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const AddPromptPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [promptText, setPromptText] = useState('');
  const [tags, setTags] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const normalizedCategory = slugifyCategory(category);
      const tagList = tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const res = await fetch('/api/prompts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          category: normalizedCategory,
          prompt_text: promptText,
          tags: tagList,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      router.push(`/prompts/${data.id}`);
    } catch (error) {
      console.error('Error adding prompt:', error);
      setError(error instanceof Error ? error.message : 'Unknown error occurred');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Add a new prompt</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            id="title"
            placeholder="e.g. Creative Writing Helper"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={200}
            disabled={isLoading}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="What does this prompt do?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={1000}
            disabled={isLoading}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-sm font-medium">
            Category <span className="text-red-500">*</span>
          </label>
          <Input
            id="category"
            placeholder="e.g. writing, coding, business"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            maxLength={100}
            disabled={isLoading}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="promptText" className="text-sm font-medium">
            Prompt Text <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="promptText"
            placeholder="The actual prompt text..."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            required
            rows={10}
            maxLength={10000}
            disabled={isLoading}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tags" className="text-sm font-medium">
            Tags
          </label>
          <Input
            id="tags"
            placeholder="comma, separated, tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            disabled={isLoading}
            maxLength={50}
          />
          <p className="text-xs text-muted-foreground">
            Separate tags with commas
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-200">
              {error}
            </div>
          )}

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding Prompt...
              </>
            ) : (
              'Add Prompt'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPromptPage;
