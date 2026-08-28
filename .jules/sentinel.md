## 2026-01-29 - Unsecured Admin Client in API Routes
**Vulnerability:** The DELETE endpoint used `supabaseAdmin` (service role key) without any authentication checks, allowing unauthenticated users to delete any data by ID.
**Learning:** `supabaseAdmin` bypasses all Row Level Security (RLS) policies. Using it in a Next.js API route without explicit session validation creates an immediate privilege escalation vulnerability.
**Prevention:** All API routes using admin clients must have explicit authentication (e.g., checking session/user role) or be disabled if unused.
