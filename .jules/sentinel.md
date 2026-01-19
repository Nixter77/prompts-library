## 2026-01-19 - Unauthenticated DELETE Endpoint
**Vulnerability:** The `DELETE` API route for prompts was publicly accessible and used the service role key, allowing unauthenticated deletion of any record.
**Learning:** API routes in this Next.js setup do not inherit default protection; admin clients must be gated by explicit auth checks.
**Prevention:** Disable dangerous endpoints by default or implement a middleware that verifies authentication tokens before reaching the route handler.
