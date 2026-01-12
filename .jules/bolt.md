## 2024-05-22 - Missing Database Index and N+1 Query Pattern
**Learning:** The application was fetching all prompts for a given language and filtering by category in the application layer (JavaScript) rather than in the database. Additionally, the `prompts` table lacked an index on `(language, category)`, which is critical for the most common filtering operation.
**Action:** Always verify that filtering happens at the database level (`WHERE` clause) and that corresponding indexes exist for those columns. Added a composite index and optimized the query.
