## 2024-05-22 - Manual Labeling for Shadcn Inputs
**Learning:** The project uses standalone Shadcn UI `Input` and `Textarea` components without the `Form` wrapper. These components do not include built-in labels, leading to accessibility gaps where inputs have no associated text labels.
**Action:** When using `Input` or `Textarea` outside of a `Form` context, always wrap them in a `div` with a native `<label>` element that references the input via `htmlFor` and `id`, and ensure required fields are visually marked.
