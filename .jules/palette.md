## 2026-02-06 - Accessible Forms require explicit Labels
**Learning:** Relying on `placeholder` attributes for form inputs creates significant accessibility barriers. Inputs on the "Add Prompt" page were invisible to screen readers (and Playwright `getByLabel` checks) because they lacked associated labels.
**Action:** Always wrap inputs in a `<label>` or associate them with `htmlFor`/`id`. Verify accessibility programmatically using `getByLabel` locators in tests rather than just checking for visibility.
