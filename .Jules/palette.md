## 2024-05-23 - Accessibility First: Explicit Labels
**Learning:** Even in modern UI frameworks, simple HTML fundamentals like explicit `<label>` elements linked to inputs via `htmlFor`/`id` are often missed but crucial for accessibility. Placeholders are not replacements for labels.
**Action:** Always verify forms have explicit labels, even if the design uses placeholders. Use `aria-hidden="true"` for decorative required indicators (*).
