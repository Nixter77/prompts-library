## 2026-02-04 - Insecure DELETE Endpoint
**Vulnerability:** The `/api/prompts/[id]` endpoint exposed an unauthenticated `DELETE` method that used `supabaseAdmin` to delete records. This allowed any user to permanently delete prompts by ID.
**Learning:** Using `supabaseAdmin` (service role) in API routes bypasses Row Level Security (RLS). Without application-level auth checks, these routes effectively make the database writeable/deletable by the public.
**Prevention:**
1. Disable unused HTTP methods (like DELETE) by returning 405.
2. Require authentication (session/token) for destructive actions.
3. Prefer using the authenticated Supabase client with RLS over `supabaseAdmin` for user-initiated actions.
