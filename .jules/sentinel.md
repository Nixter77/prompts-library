## 2025-05-22 - [Critical] Unauthenticated DELETE Endpoint Disabled
**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint utilized `supabaseAdmin` (Service Role Key) without any authentication or authorization checks. This allowed any user to delete any prompt by knowing its ID.
**Learning:** Next.js API routes do not inherit default protections. Using `supabaseAdmin` bypasses RLS, making explicit app-level auth checks mandatory.
**Prevention:** Always verify authentication (e.g., session check) before performing privileged operations like DELETE. If auth is not ready, disable the endpoint.
