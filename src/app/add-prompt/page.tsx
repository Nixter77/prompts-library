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
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      alert('Prompt added successfully!');
      router.push(`/prompts/${data.id}`);
    } catch (error) {
      console.error('Error adding prompt:', error);
      alert(`Error adding prompt: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Add a new prompt</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Input
            id="title"
            placeholder="e.g., Code Review Assistant"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="A short description of what this prompt does..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-sm font-medium">
            Category <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Input
            id="category"
            placeholder="e.g., Coding"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="promptText" className="text-sm font-medium">
            Prompt Text <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Textarea
            id="promptText"
            placeholder="The actual prompt content..."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            required
            rows={10}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tags" className="text-sm font-medium">
            Tags
          </label>
          <Input
            id="tags"
            placeholder="e.g., javascript, react, helper (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
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
