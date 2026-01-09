## 2024-05-23 - [Direct SQLite Query Filtering]
**Learning:** The application uses `sqlite` and `sqlite3` directly without an ORM. A common anti-pattern observed was fetching all records for a language (`SELECT * FROM prompts WHERE language = ?`) and then filtering by category in JavaScript. This scales poorly.
**Action:** When working with list filtering in this codebase, always check if the filter can be moved to the SQL query (e.g., `WHERE language = ? AND category = ?`) and ensure appropriate database indexes are present in `src/db/init.js`.
