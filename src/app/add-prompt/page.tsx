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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      setError(error instanceof Error ? error.message : 'Unknown error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Add a new prompt</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6">
        {error && (
          <div className="bg-destructive/15 text-destructive p-3 rounded-md text-sm font-medium">
            {error}
          </div>
        )}

        <div className="grid gap-2">
          <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            id="title"
            placeholder="E.g., Creative Writing Helper"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isSubmitting}
            maxLength={50}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="description" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="Short description of what this prompt does..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
            maxLength={200}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="category" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Category <span className="text-red-500">*</span>
          </label>
          <Input
            id="category"
            placeholder="E.g., writing"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            disabled={isSubmitting}
            maxLength={50}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="promptText" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Prompt Text <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="promptText"
            placeholder="The actual prompt content..."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            required
            rows={10}
            disabled={isSubmitting}
            maxLength={5000}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="tags" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Tags
          </label>
          <Input
            id="tags"
            placeholder="comma, separated, tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            disabled={isSubmitting}
            maxLength={100}
          />
          <p className="text-xs text-muted-foreground">Separate tags with commas.</p>
        </div>

        <Button type="submit" disabled={isSubmitting} className="mt-2">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Adding Prompt...
            </>
          ) : (
            'Add Prompt'
          )}
        </Button>
      </form>
    </div>
  );
};

export default AddPromptPage;
