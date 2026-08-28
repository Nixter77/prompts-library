## 2026-02-03 - Unauthenticated DELETE Endpoint
**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint was accessible to any user without authentication, allowing arbitrary data deletion.
**Learning:** API routes in Next.js do not inherit any default authentication. Using `supabaseAdmin` bypasses RLS, so explicit auth checks or disabling dangerous methods is mandatory.
**Prevention:** Always verify that mutating endpoints (POST, PUT, DELETE) have authentication checks or are explicitly disabled if not ready for production. Use RLS-aware clients where possible.
