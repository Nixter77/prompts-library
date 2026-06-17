## 2024-05-23 - Over-fetching in List Views
**Learning:** The application was fetching `*` (including large text fields) for list views and filtering in memory. This is a significant scalability bottleneck.
**Action:** Always verify that `.select()` queries for list views explicitly exclude large columns like `prompt_text` or `content` and use `Pick<T>` for type safety.
