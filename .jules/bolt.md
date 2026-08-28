## 2024-03-24 - [Over-fetching on Category Page]
**Learning:** The category page was fetching ALL prompts (`select('*')`) and filtering them in JavaScript. This is a severe performance bottleneck (O(N) network transfer and memory usage).
**Action:** Always filter using SQL `.eq()` and select only necessary columns to minimize data transfer.

## 2024-03-24 - [Environment Variable Dependency for Scripts]
**Learning:** Standalone scripts (like `scripts/seed_supabase.js`) require environment variables to be explicitly passed or loaded via `dotenv` (if available), whereas Next.js loads them automatically.
**Action:** When creating maintenance scripts, ensure they can handle missing environment variables gracefully or instruct the user on how to provide them.
