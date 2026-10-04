-- Enable Row Level Security on public tables.
-- Public (anon/authenticated) clients may only read prompts.
-- There are intentionally NO insert/update/delete policies: writes are only
-- possible through the server-side API routes using the service-role key,
-- which bypasses RLS and is protected by ADMIN_TOKEN.

ALTER TABLE public.prompts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read access to prompts" ON public.prompts;
CREATE POLICY "Public read access to prompts"
  ON public.prompts
  FOR SELECT
  TO anon, authenticated
  USING (true);
