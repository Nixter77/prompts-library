## 2026-01-25 - [Unauthenticated DELETE Endpoint]
**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint was completely unauthenticated and used `supabaseAdmin` (service role), allowing anyone to delete any prompt by ID.
**Learning:** Using `supabaseAdmin` in API routes bypasses RLS, so explicit authentication checks are mandatory. Legacy or unused endpoints can become critical vulnerabilities if left exposed.
**Prevention:** Always verify authentication in API routes before performing sensitive actions. Disable unused endpoints explicitly with 403 Forbidden.
