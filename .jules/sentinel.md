## 2026-01-28 - [Unprotected Destructive Endpoint]
**Vulnerability:** The `DELETE` endpoint at `/api/prompts/[id]` was fully accessible without authentication and utilized a service role client, allowing anyone to delete any prompt by ID.
**Learning:** API routes in Next.js do not inherit any default authentication. Using `supabaseAdmin` (service role) bypasses all Row Level Security (RLS) policies, making manual auth checks mandatory.
**Prevention:** Explicitly disable unused destructive endpoints or implement strict authentication/authorization checks before performing sensitive operations.
