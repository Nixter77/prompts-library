# Sentinel's Journal

## 2026-02-02 - Unauthenticated DELETE Endpoint

**Vulnerability:** The `DELETE /api/prompts/[id]` endpoint was active and unauthenticated, allowing any user to delete any prompt by ID using `supabaseAdmin` which bypasses RLS.
**Learning:** Default scaffolded API routes (or copy-pasted code) may include dangerous methods like DELETE without implementing proper auth checks, assuming they might be needed later or protected by middleware that doesn't exist.
**Prevention:** Explicitly disable unused API methods (return 405) or ensure all state-changing endpoints have strict authentication and authorization checks before shipping.
