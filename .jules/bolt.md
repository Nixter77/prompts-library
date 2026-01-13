## 2026-01-13 - Database Indexing & Server-Side Filtering
**Learning:** Filtering data in JavaScript after fetching all records ('SELECT *') is a major performance bottleneck as the dataset grows. Leveraging SQL 'WHERE' clauses with appropriate database indexes (e.g., composite index on '(language, category)') drastically reduces data transfer and memory usage.
**Action:** Always filter as much as possible at the database level. Ensure supporting indexes exist for filtered columns.
