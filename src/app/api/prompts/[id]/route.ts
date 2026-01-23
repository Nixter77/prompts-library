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
  } catch {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  // Sentinel: Disabled unauthenticated deletion to prevent data loss.
  // TODO: Implement proper authentication/authorization before re-enabling.
  return NextResponse.json(
    { message: 'Forbidden' },
    { status: 403 }
  );
}
