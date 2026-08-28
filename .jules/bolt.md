## 2024-05-22 - [O(N) Fetch & Filter Anti-Pattern]
**Learning:** Fetching `select('*')` and filtering in memory due to complex logic (e.g., regex slugs) transfers massive unnecessary payloads (like `prompt_text`).
**Action:** Use `.select('id, title...')` to fetch only needed columns when DB-side filtering isn't possible, drastically reducing payload size.
