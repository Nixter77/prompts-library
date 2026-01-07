'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { slugifyCategory } from '@/lib/utils';

const AddPromptPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [promptText, setPromptText] = useState('');
  const [tags, setTags] = useState('');
  const [language, setLanguage] = useState('en');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
          language,
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
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Add a new prompt</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-4">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Textarea
          placeholder="Prompt text"
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          required
          rows={10}
        />
        <Input
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <div className="flex gap-4 items-center">
          <label className="font-medium">Language:</label>
          <div className="flex gap-2">
            <Button
              type="button"
              variant={language === 'en' ? 'default' : 'outline'}
              onClick={() => setLanguage('en')}
            >
              English
            </Button>
            <Button
              type="button"
              variant={language === 'ru' ? 'default' : 'outline'}
              onClick={() => setLanguage('ru')}
            >
              Russian
            </Button>
          </div>
        </div>
        <Button type="submit">Add prompt</Button>
      </form>
    </div>
  );
};

export default AddPromptPage;
