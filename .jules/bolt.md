## 2026-02-02 - [Payload Optimization vs Server-Side Filtering]
**Learning:** Initial attempt to filter by category on the server (`.eq()`) was rejected because it assumes strict data normalization. Legacy data might not match the slug exactly.
**Action:** Prioritize payload optimization (selecting specific columns) which is safe and measurable. Only use strict server-side filtering if data integrity/normalization is strictly enforced and verified.
