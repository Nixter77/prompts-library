## 2025-05-15 - [shadcn/ui Form Accessibility]
**Learning:** The project uses `shadcn/ui` style `Input` and `Textarea` components which are unstyled wrappers around native elements and do not include associated labels by default. This leads to accessibility issues where inputs are only identified by placeholders.
**Action:** When using these components, we must explicitly wrap them with a `<label>` element (using `htmlFor` and `id` matching) to ensure they are accessible to screen readers and visible to all users.
