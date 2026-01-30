## 2025-02-23 - Unprotected DELETE Endpoint
**Vulnerability:** The `DELETE` endpoint at `api/prompts/[id]` was publicly accessible without any authentication or authorization checks. This allowed any user to delete any prompt by ID.
**Learning:** Using `supabaseAdmin` (service role) bypasses Row Level Security (RLS), placing the burden of authorization entirely on the application code.
**Prevention:** Always verify user identity and permissions before performing destructive actions. If an endpoint is not intended for public use, disable it or implement strict authentication (e.g., admin-only middleware).
