# Bolt's Journal

## 2024-05-22 - [Database Filtering Anti-Pattern]
**Learning:** The codebase was fetching all records (`select('*')`) and filtering in JavaScript (`.filter(...)`), causing massive data transfer overhead. This defeats the purpose of a database index.
**Action:** Always verify if a `GET` endpoint or page fetch is using `WHERE` clauses (Supabase `.eq()`, etc.) matching the user's intent, especially for list views.

## 2024-05-22 - [Data Consistency Assumptions]
**Learning:** Optimization often relies on data consistency (e.g. categories being slugs). Verifying this assumption via population scripts (`scripts/populate_db.mjs`) or write paths (`POST` routes) is crucial before removing "defensive" but inefficient code.
**Action:** When replacing client-side filtering with DB queries, verify that the DB data format matches the query parameters strictly.
