## 2026-02-06 - [Over-fetching in List Views]
**Learning:** List views were fetching all columns (including large `prompt_text`) but only displaying a subset. This significantly increases payload size and memory usage.
**Action:** Always verify `.select()` clauses in list views and use `Pick<Type>` to enforce strict type safety for partial data.
