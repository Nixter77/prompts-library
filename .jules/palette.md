## 2024-05-23 - [Input Components Lack Built-in Labels]
**Learning:** The design system's `Input` and `Textarea` components are low-level wrappers and do not include label support. This led to forms relying solely on placeholders, which hurts accessibility.
**Action:** When using these components, always wrap them in a semantic structure with a native `<label>` element linked via `htmlFor`/`id` to ensure accessibility.
