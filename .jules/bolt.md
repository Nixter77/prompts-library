## 2024-05-23 - Database-side Filtering vs In-Memory
**Learning:** The application was fetching all prompts (`select('*')`) and filtering by category in memory, which is inefficient. The database `category` column is reliably slugified by the seed script and POST endpoint, allowing safe exact-match filtering (`.eq('category', slug)`) on the database side.
**Action:** Prefer `.eq()` filtering and specific column selection (`.select('id, title...')`) in Supabase queries to reduce payload size and server memory usage, verifying first that data normalization allows it.
