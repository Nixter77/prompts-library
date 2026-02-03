## 2024-05-22 - [Form Accessibility and Feedback]
**Learning:** Forms in this application (specifically `add-prompt`) were missing basic accessibility features like visible labels and `htmlFor` association, relying solely on placeholders. They also lacked visual feedback during submission (no loading state).
**Action:** Always wrap form inputs in explicit `<label>` elements or use `htmlFor`. Implement `isSubmitting` state to disable buttons and show a spinner (using `lucide-react`'s `Loader2`) for all async form actions.
