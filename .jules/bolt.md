# Bolt's Journal

## 2024-05-22 - [Optimizing Payload Size vs Filtering]
**Learning:** While database-side filtering (`.eq()`) is ideal, it can break applications with legacy data if normalization (e.g., slugs) isn't guaranteed in the DB.
**Action:** In such cases, prioritize **Column Selection** (`.select('col1, col2')`) to reduce payload size immediately, while keeping filtering in-memory until data migration/normalization can be performed.
