## 2026-01-21 - [Bare Input Components Pattern]
**Learning:** The `Input` and `Textarea` components in this project are low-level wrappers around HTML elements and lack built-in label support or layout handling.
**Action:** When implementing forms, always wrap these components in a grid or flex container and explicitly provide a `<label>` element linked via `htmlFor` + `id` for accessibility.
