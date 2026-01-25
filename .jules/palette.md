## 2026-01-25 - Form Accessibility and Feedback
**Learning:** The "Add Prompt" form lacked explicit labels (relying on placeholders) and provided no visual feedback during submission, making it inaccessible to screen readers and confusing during network delays.
**Action:** Consistently use explicit `<label>` elements linked via `htmlFor` and implement `isSubmitting` states with spinner icons on action buttons.
