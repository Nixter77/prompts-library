## 2024-05-23 - Legacy "Fetch All" Pattern in List Views
**Learning:** The application was fetching the entire `prompts` table (including large `prompt_text`) and filtering in-memory for category pages. This worked for small datasets but is a major scalability bottleneck.
**Action:** When working on list views, always check if `.select('*')` is used and replace it with specific columns + DB-side filtering (`.eq()`), ensuring the data schema supports it (e.g. columns are indexed/normalized).
