## 2025-05-22 - Unauthenticated Admin DELETE Endpoint
**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint was accessible to anyone and used `supabaseAdmin` (Service Role), allowing unauthenticated deletion of any prompt.
**Learning:** API routes in Next.js do not inherit any default authentication. Using `supabaseAdmin` for "easy" database access in API routes creates critical privilege escalation vulnerabilities if explicit auth checks are missing.
**Prevention:** Avoid using `supabaseAdmin` in API routes unless absolutely necessary (e.g., webhooks). Prefer `supabase` (Anon/User client) with Row Level Security (RLS). Always explicitly verify authentication before sensitive operations.
