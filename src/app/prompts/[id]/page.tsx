import PromptClientPage from './PromptClientPage';
import { supabaseAdmin } from '@/lib/supabase';
import { Prompt } from '@/lib/types';

const PromptPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const { data: prompt, error } = await supabaseAdmin
    .from('prompts')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !prompt) {
    return <div>Prompt not found.</div>;
  }

  return <PromptClientPage prompt={prompt as Prompt} />;
};

export default PromptPage;
