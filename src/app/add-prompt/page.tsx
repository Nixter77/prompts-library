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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

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
      setStatus('success');
      setMessage('Prompt added successfully! Redirecting...');

      // Delay redirect slightly so user sees success message
      setTimeout(() => {
        router.push(`/prompts/${data.id}`);
      }, 1500);

    } catch (error) {
      console.error('Error adding prompt:', error);
      setStatus('error');
      setMessage(`Error adding prompt: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Add a new prompt</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6">

        {status === 'error' && (
          <div className="p-4 rounded-md bg-red-50 text-red-700 text-sm" role="alert">
            {message}
          </div>
        )}

        {status === 'success' && (
          <div className="p-4 rounded-md bg-green-50 text-green-700 text-sm" role="alert">
            {message}
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="title"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Title <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Input
            id="title"
            placeholder="e.g. Creative Writing Assistant"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Description
          </label>
          <Textarea
            id="description"
            placeholder="A short description of what this prompt does..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="category"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Category <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Input
            id="category"
            placeholder="e.g. Writing, Coding, Art"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="promptText"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Prompt Text <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Textarea
            id="promptText"
            placeholder="The actual prompt text..."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            required
            rows={10}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="tags"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Tags
          </label>
          <Input
            id="tags"
            placeholder="comma, separated, tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            disabled={isSubmitting}
          />
          <p className="text-[0.8rem] text-muted-foreground">
            Separate tags with commas.
          </p>
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="animate-spin" />}
          {isSubmitting ? 'Adding...' : 'Add prompt'}
        </Button>
      </form>
    </div>
  );
};

export default AddPromptPage;
