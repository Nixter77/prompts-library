import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ message: 'Prompt id is required.' }, { status: 400 });
  }

  try {
    const { data: prompt, error } = await supabaseAdmin
      .from('prompts')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !prompt) {
      return NextResponse.json({ message: 'Prompt not found.' }, { status: 404 });
    }

    return NextResponse.json(prompt);
  } catch (error) {
    console.error('Unexpected error in GET /api/prompts/[id]:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ message: 'Prompt id is required.' }, { status: 400 });
  }

  try {
    const { error } = await supabaseAdmin
      .from('prompts')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json({ message: 'Error deleting prompt.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Prompt deleted successfully!' });
  } catch (error) {
    console.error('Unexpected error in DELETE /api/prompts/[id]:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
