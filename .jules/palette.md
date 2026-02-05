## 2025-05-22 - Improving Form UX and Accessibility
**Learning:** Native `alert()` calls block the main thread and provide poor user experience. Replacing them with inline error messages and non-blocking interactions significantly improves perceived performance and polish. Also, missing form labels are a common accessibility gap in rapid prototypes.
**Action:** Always check for `alert()` usage in forms and replace with state-driven UI feedback. Ensure all inputs have associated `<label>` elements.
