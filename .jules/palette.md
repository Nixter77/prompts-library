## 2025-05-27 - [Semantic Form Structure]
**Learning:** Using `placeholder` as a label is a common but critical accessibility failure. Standardizing on explicit `<label>` elements linked via `htmlFor` is essential for screen readers.
**Action:** Audit all form inputs to ensure they have an associated `<label>` and wrap them in a container (e.g., `div` or grid) to maintain layout structure.

## 2025-05-27 - [Async Loading Feedback]
**Learning:** Users lack confidence in form submissions without immediate visual feedback. Adding a `Loader2` spinner and disabling the button prevents double-submissions and reassures the user.
**Action:** Always implement `isSubmitting` state in forms that toggles the button's disabled state and shows a loading indicator.
