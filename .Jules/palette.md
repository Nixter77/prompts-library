# Palette's Journal

## 2025-05-23 - Form Accessibility and Feedback
**Learning:** The "Add Prompt" form relies heavily on placeholders as labels, which disappear when typing, causing accessibility and usability issues. Additionally, `window.alert()` is used for feedback, which disrupts the user flow.
**Action:** Replace placeholders with persistent `<label>` elements linked via `htmlFor`. Implement inline loading states and non-blocking feedback mechanisms (like toast or inline text) instead of native alerts.
