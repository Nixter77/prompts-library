## 2026-01-24 - Unprotected DELETE Endpoint
**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint allowed unauthenticated deletion of any prompt using `supabaseAdmin`, which bypasses Row Level Security (RLS).
**Learning:** Admin clients (service role) bypass all database policies and must be strictly gated by application-level authentication. Explicitly check for user session/role before performing sensitive actions with admin clients.
**Prevention:** Never use service role clients in public API routes without explicit authentication checks; disable dangerous endpoints until auth is implemented.
