export interface Prompt {
  id: string;
  title: string;
  description?: string | null;
  category: string;
  prompt_text: string;
  tags: string | null;
}

export type PromptSummary = Pick<Prompt, 'id' | 'title' | 'description' | 'category'>;
