## 2026-01-20 - Accessible Forms Pattern
**Learning:** Placeholder text is not a substitute for labels. Screen readers (and many users) rely on explicit labels linked to inputs via `htmlFor` and `id`. Also, users need visual feedback (loading spinners) for async actions to prevent double-submissions.
**Action:** Always wrap form inputs with a visible `<label>` that has a matching `htmlFor` attribute. Implement `isLoading` state on form submission to disable buttons and show a spinner.
