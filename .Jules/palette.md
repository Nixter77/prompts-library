## 2025-05-27 - Form Accessibility and Interaction
**Learning:** Adding explicit `<label>` elements and loading states drastically improves usability. Users need to know what they are typing (when placeholder disappears) and that their action is being processed.
**Action:** Always wrap inputs in a container with a label linked via `htmlFor` and `id`. Use `isLoading` state to disable buttons and show feedback during async operations.
