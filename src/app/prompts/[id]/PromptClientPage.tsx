'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Prompt } from '@/lib/types';

const PromptClientPage = ({ prompt }: { prompt: Prompt }) => {
  const handleCopy = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt.prompt_text);
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
        <Button onClick={handleCopy} className="mb-8">
          Copy to clipboard
        </Button>
        <div className="flex gap-2">
          {prompt.tags && prompt.tags.split(',').map((tag: string) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptClientPage;
