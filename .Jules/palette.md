## 2024-05-22 - [Form Accessibility Pattern]
**Learning:** Found critical accessibility gap in form inputs where placeholders were used as labels. This is a common pattern in this codebase.
**Action:** When working on forms, always check for explicit `<label>` elements linked via `htmlFor`/`id`. If missing, wrap inputs in a container and add them. Ensure required fields are visually indicated.
