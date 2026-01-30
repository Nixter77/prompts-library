## 2025-02-24 - Forms lack native labels
**Learning:** The application was using inputs without associated labels, relying only on placeholders. This fails WCAG criteria for accessible names.
**Action:** Always wrap inputs in a container with a native `<label>` element linked via `htmlFor`/`id`, as `src/components/ui` inputs are just wrappers around native inputs without label logic.
