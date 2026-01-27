## 2026-01-27 - Form Feedback Patterns
**Learning:** The application previously relied on `window.alert()` for form feedback, which disrupts the flow.
**Action:** Replaced with inline `error` state and `AlertCircle` icon. Future forms should follow this pattern instead of using toasts (unless a toast library is added).
