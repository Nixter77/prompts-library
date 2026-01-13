## 2024-05-22 - Form Accessibility Pattern
**Learning:** Forms in this app were relying solely on placeholders, which is a significant accessibility issue (disappears on typing, poor contrast, screen reader issues).
**Action:** When touching forms, always add explicit `<label>` elements linked via `htmlFor`. Since there is no `Label` component, use `<label className="text-sm font-medium">`.
