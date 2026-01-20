## 2025-05-20 - [Form Accessibility Pattern]
**Learning:** Forms were relying entirely on placeholders, which is a significant accessibility barrier. Adding visible labels with `htmlFor` attributes is a quick win that immediately improves the experience for screen readers and users with cognitive disabilities.
**Action:** When auditing forms, check for visible labels first. If missing, wrap inputs in a flex container with a label element.
