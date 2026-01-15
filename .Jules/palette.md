## 2025-05-15 - Explicit Form Labels
**Learning:** The project's UI components (`Input`, `Textarea`) do not include internal labeling mechanisms. Forms were found using only placeholders, which hurts accessibility and usability.
**Action:** When implementing forms, manually create `<label>` elements with `htmlFor` attributes linked to the input's `id`, and explicitly mark required fields with a visual indicator (e.g., red asterisk).
