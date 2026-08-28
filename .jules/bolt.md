## 2024-05-23 - [In-Memory Filtering Constraint]
**Learning:** The application relies on in-memory filtering for categories to handle non-normalized legacy data (e.g. mixed casing/slugs). This forces full-table scans (fetching all rows) for category views.
**Action:** Since row-reduction via SQL `WHERE` is unsafe, optimizations must focus on column-reduction (payload size) using `.select('specific, columns')` to mitigate the performance cost of the full scan.
