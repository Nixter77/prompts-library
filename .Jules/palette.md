## 2025-05-19 - Missing Form Labels Pattern
**Learning:** This app frequently uses `placeholder` attributes as the only visual label for inputs, which fails accessibility standards and disappears upon typing.
**Action:** When touching form components, systematically check for and add explicit `<label>` elements linked via `htmlFor` and `id`.
