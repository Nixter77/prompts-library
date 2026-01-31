# Palette's Journal

## 2024-05-22 - [Add Prompt Form Accessibility]
**Learning:** The "Add Prompt" form lacked basic accessibility features like explicit labels and loading states, relying solely on placeholders and blocking synchronous alerts. This creates a confusing experience for screen reader users and those with slow connections.
**Action:** Always wrap form inputs in explicit `<label>` tags and implement visual loading states (spinner + disabled) for async actions instead of relying on default browser alerts.
