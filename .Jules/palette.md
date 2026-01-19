## 2025-02-13 - [Explicit Labels & Inline Feedback]
**Learning:** Users often struggle with form fields that rely solely on placeholders, especially when the field is filled. Explicit `<label>` elements are crucial for accessibility and clarity. Additionally, replacing `window.alert` with inline error/success messages keeps the user in the context of the form and prevents jarring interruptions.
**Action:** Always pair inputs with explicit `<label>` elements linked via `htmlFor`. Use inline conditional rendering for form status messages instead of browser alerts.
