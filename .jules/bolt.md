## 2024-05-23 - Optimized List View Data Fetching
**Learning:** The application was fetching the entire `prompts` table (including large `prompt_text` and `tags`) for the category list view, even though only basic metadata was needed. This caused unnecessary data transfer and memory usage.
**Action:** Always verify that Supabase queries use specific column selection (`.select('col1, col2')`) instead of `.select('*')` for list views, especially when the table contains potentially large text or JSON fields.
