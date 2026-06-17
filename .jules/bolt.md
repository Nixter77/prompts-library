## 2024-05-23 - [Supabase Select Wildcard]
**Learning:** `select('*')` fetches all columns, including potentially large text fields (like `prompt_text`), even when only summary data is needed. This increases payload size and memory usage unnecessarily.
**Action:** Always explicitly list required columns (e.g., `.select('id, title')`) in list views to minimize data transfer.
