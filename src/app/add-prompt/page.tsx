'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { slugifyCategory } from '@/lib/utils';

const AddPromptPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [promptText, setPromptText] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!category.trim()) {
      newErrors.category = 'Category is required';
    }

    if (!promptText.trim()) {
      newErrors.promptText = 'Prompt text is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

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
          title: title.trim(),
          description: description.trim() || null,
          category: normalizedCategory,
          prompt_text: promptText.trim(),
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
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Add a new prompt</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-4">
        <div>
          <label htmlFor="title" className="text-sm font-medium leading-none mb-2 block">
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors(prev => ({...prev, title: ''}));
            }}
            required
            disabled={loading}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description" className="text-sm font-medium leading-none mb-2 block">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="category" className="text-sm font-medium leading-none mb-2 block">
            Category <span className="text-red-500">*</span>
          </label>
          <Input
            id="category"
            placeholder="Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              if (errors.category) setErrors(prev => ({...prev, category: ''}));
            }}
            required
            disabled={loading}
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        <div>
          <label htmlFor="promptText" className="text-sm font-medium leading-none mb-2 block">
            Prompt text <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="promptText"
            placeholder="Prompt text"
            value={promptText}
            onChange={(e) => {
              setPromptText(e.target.value);
              if (errors.promptText) setErrors(prev => ({...prev, promptText: ''}));
            }}
            required
            rows={10}
            disabled={loading}
          />
          {errors.promptText && <p className="text-red-500 text-sm mt-1">{errors.promptText}</p>}
        </div>

        <div>
          <label htmlFor="tags" className="text-sm font-medium leading-none mb-2 block">
            Tags
          </label>
          <Input
            id="tags"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            disabled={loading}
          />
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : 'Add prompt'}
        </Button>
      </form>
    </div>
  );
};

export default AddPromptPage;
