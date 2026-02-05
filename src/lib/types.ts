export interface Prompt {
  id: string;
  title: string;
  description?: string | null;
  category: string;
  prompt_text: string;
  tags: string[] | null;
}
