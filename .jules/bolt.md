## 2024-05-23 - [Database Filtering vs In-Memory Filtering]
**Learning:** The application was fetching *all* records (including large text fields) and filtering them in JavaScript. This is O(N) network transfer and O(N) memory usage.
**Action:** Always use SQL `WHERE` clauses (Supabase `.eq()`, `.gt()`, etc.) to filter data at the source. Select only necessary columns for list views to reduce payload size.

## 2024-05-23 - [Type Safety with Partial Selects]
**Learning:** Using `select('field1, field2')` with a TypeScript interface that requires more fields leads to unsafe casting (`as unknown as Type`).
**Action:** Define utility types (e.g., `Pick<Type, 'field1'>`) or specific interfaces for components that consume partial data, ensuring strict type safety without "lying" to the compiler.
