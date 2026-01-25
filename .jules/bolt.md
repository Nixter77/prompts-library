## 2024-05-23 - [Optimizing Payload Size for List Views]
**Learning:** Fetching full database rows (specifically `prompt_text`) for list views creates unnecessary overhead. TypeScript's `Pick<T>` combined with Supabase's `.select()` allows for type-safe partial fetching.
**Action:** Always create a specific `ListResponse` type for list components and strictly select only those columns in the backend query.
