## 2024-05-23 - Accessibility & Feedback Patterns
**Learning:** Native `<label>` elements linked with `htmlFor` are the most robust way to ensure accessibility for form inputs when using headless/shadcn-like UI libraries that don't provide a `Label` component. Coupling this with visible `isLoading` states prevents user frustration and double-submission.
**Action:** Default to standard accessible HTML structure for forms and always implement loading feedback for async actions.
