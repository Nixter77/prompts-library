## Bolt's Journal

## 2025-05-20 - Fetch-All-and-Filter Anti-Pattern
**Learning:** Found a critical performance bottleneck where the application fetched the entire 'prompts' table to filter by category in memory. This pattern scales poorly (O(N)) and wastes bandwidth/memory.
**Action:** Always verify database queries push filtering to the database layer (e.g., using `.eq()`) instead of relying on client/server-side array filtering.
