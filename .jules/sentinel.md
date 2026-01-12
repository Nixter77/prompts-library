## 2024-05-22 - Missing Input Validation
**Vulnerability:** The API endpoint `POST /api/prompts` lacked input length validation, allowing users to submit arbitrarily large strings.
**Learning:** Even with client-side validation (implied or expected), server-side validation is crucial to prevent Denial of Service (DoS) and database bloat.
**Prevention:** Always enforce maximum length limits on string inputs at the API level using strict checks before processing data.
