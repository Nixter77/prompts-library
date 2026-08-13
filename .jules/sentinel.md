## 2025-05-15 - Unauthenticated Admin Endpoint
**Vulnerability:** The DELETE /api/prompts/[id] endpoint utilized the supabaseAdmin client without any authentication checks, allowing any user to delete any prompt by ID.
**Learning:** Service role clients (supabaseAdmin) bypass RLS and must NEVER be used in public API routes without strict application-level authentication/authorization.
**Prevention:** Ensure all API routes using admin clients have explicit authentication checks (e.g., session validation, API key headers) or use the user-scoped client.
