# Sentinel's Journal

## 2026-01-26 - [Unauthenticated DELETE Endpoint]
**Vulnerability:** The `DELETE` endpoint at `/api/prompts/[id]` was publicly accessible and used `supabaseAdmin` to delete records, allowing any unauthenticated user to delete any prompt by ID.
**Learning:** Using service role clients in API routes bypasses RLS. Without explicit application-level checks, these endpoints are insecure by default.
**Prevention:** Always verify authentication (e.g., via session cookies or API keys) before performing privileged operations like DELETE. If no auth system exists, disable the endpoint.
