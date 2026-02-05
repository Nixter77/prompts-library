## 2026-01-26 - Missing Form Accessibility Patterns
**Learning:** The application's forms historically relied on `placeholder` attributes instead of explicit `<label>` elements, and used `window.alert()` for feedback, which creates accessibility barriers and poor UX.
**Action:** When touching forms, wrap inputs in a container with an explicit `<label htmlFor="...">` and implement inline `loading` and `error` states to replace native alerts.
