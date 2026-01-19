'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { slugifyCategory } from '@/lib/utils';
import { AlertCircle, Loader2 } from 'lucide-react';

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Add a new prompt</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6">
        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <p>{error}</p>
          </div>
        )}

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
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="What is this prompt for?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={1000}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-sm font-medium">
            Category <span className="text-red-500">*</span>
          </label>
          <Input
            id="category"
            placeholder="e.g. Writing"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            maxLength={100}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="promptText" className="text-sm font-medium">
            Prompt Text <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="promptText"
            placeholder="Enter the full prompt text here..."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            required
            rows={10}
            maxLength={10000}
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
          />
          <p className="text-xs text-muted-foreground">Separate tags with commas</p>
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? 'Adding Prompt...' : 'Add Prompt'}
        </Button>
      </form>
    </div>
  );
};

export default AddPromptPage;
