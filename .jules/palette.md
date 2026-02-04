## 2026-02-04 - [Form Accessibility & Feedback]
**Learning:** Native `placeholder` attributes are insufficient for accessibility; forms require explicit `<label>` elements connected via `htmlFor`/`id` for screen readers. Additionally, async form submissions without visual feedback (loading spinners, disabled states) lead to user confusion and duplicate submissions.
**Action:** Always wrap form inputs with semantic labels and implement `isSubmitting` states that disable inputs and show a loading indicator on the submit button.
