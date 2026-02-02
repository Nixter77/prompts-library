## 2024-05-22 - Form Accessibility Pattern
**Learning:** Raw input components from `src/components/ui` lack built-in labels, creating accessibility gaps for screen readers and lacking visual hierarchy.
**Action:** Always wrap inputs in a container (e.g., `div.space-y-2`) and pair them with a native `<label>` element using `htmlFor` matching the input's `id`, ensuring `peer-disabled` styles are applied for consistency.
