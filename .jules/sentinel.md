## 2026-01-23 - Critical: Unauthenticated DELETE Endpoint
**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint allowed any user to delete any prompt by ID without authentication or authorization.
**Learning:** `supabaseAdmin` client bypasses RLS, so endpoints using it MUST implement their own auth checks. Next.js API routes are public by default.
**Prevention:** Explicitly disable dangerous endpoints if unused. For used endpoints, verify user session (e.g. via Supabase Auth) and authorization (RLS or manual check) before performing actions.
