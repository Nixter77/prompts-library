'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Prompt } from '@/lib/types';
import { useRouter } from 'next/navigation';

const PromptClientPage = ({ prompt }: { prompt: Prompt }) => {
  const [copied, setCopied] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleCopy = async () => {
    if (!prompt) return;

    const text = prompt.prompt_text ?? '';

    // Try modern clipboard API first
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for old browsers: create a temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setCopied(true);
      // сбросим индикацию через 2 секунды
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // в консоль — для диагностики
      // eslint-disable-next-line no-console
      console.error('Copy failed', err);
      // ничего не делаем дальше; можно показать уведомление в будущем
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this prompt? This action cannot be undone.')) return;

    setIsDeleting(true);

    try {
      const res = await fetch(`/api/prompts/${prompt.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // In a real application, you would include authentication token here
          // 'Authorization': `Bearer ${authToken}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to delete prompt');
      }

      router.push('/');
      router.refresh(); // Refresh to update any cached data
    } catch (error) {
      console.error('Error deleting prompt:', error);
      alert(`Error deleting prompt: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsDeleting(false);
    }
  };

  if (!prompt) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{prompt.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{prompt.description}</p>
        <div className="bg-gray-100 p-4 rounded-md mb-8">
          <pre className="whitespace-pre-wrap break-words">{prompt.prompt_text}</pre>
        </div>
        <div className="flex gap-4 mb-8">
          <Button onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete Prompt'}
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {prompt.tags && Array.isArray(prompt.tags) && prompt.tags.map((tag: string) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptClientPage;
