## 2025-05-22 - [Supabase Select All Anti-Pattern]
**Learning:** The codebase contained patterns where `select('*')` was used to fetch all rows, including large text fields, only to filter them client-side in Next.js. This causes massive over-fetching.
**Action:** Always vertically partition Supabase queries using `.select('col1, col2')` for list views. Even if client-side filtering is required due to data normalization issues, excluding large columns like `prompt_text` significantly reduces payload size.
