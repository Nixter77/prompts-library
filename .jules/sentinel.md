## 2026-01-20 - Unauthenticated API Endpoint

**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint was exposed without any authentication, allowing any user to delete prompts using the privileged `supabaseAdmin` client.
**Learning:** Admin clients (like `supabaseAdmin` with service role key) bypass Row Level Security (RLS) policies. Using them in public API routes without explicit application-level authentication checks effectively grants admin privileges to anonymous users.
**Prevention:** Always verify user identity and permissions (e.g., checking for a valid session) at the start of any API route handler that uses privileged clients or performs sensitive operations. Default to "deny all" for destructive actions until auth is implemented.
