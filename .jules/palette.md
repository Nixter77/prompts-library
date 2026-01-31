## 2024-05-22 - Managing Loading State during Navigation
**Learning:** When using `router.push` after a successful form submission, setting state (like `setIsSubmitting(false)`) causes "update on unmounted component" warnings because the navigation happens immediately.
**Action:** Only reset loading state in the `catch` block. Let the navigation unmount the component in the success case.

## 2024-05-22 - Missing Form Labels
**Learning:** The codebase previously relied on `placeholder` attributes instead of explicit labels, which is an accessibility anti-pattern.
**Action:** When touching forms, wrap `Input` components in a grid with an explicit `<label>` element.
