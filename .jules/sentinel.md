# Sentinel's Journal

## 2026-01-27 - [CRITICAL] Unauthenticated DELETE Endpoint
**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint was fully exposed and allowed anyone to delete any prompt by ID without authentication.
**Learning:** Using `supabaseAdmin` (service role) in API routes bypasses RLS, so explicit application-level authorization checks are mandatory.
**Prevention:** Always verify user identity (e.g., via session) before performing destructive actions with privileged clients. If auth is not implemented, disable the endpoint.
