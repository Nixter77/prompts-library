# Palette's Journal

## 2026-01-28 - Implicit Labels vs Explicit Labels
**Learning:** The `Input` component pattern encourages using placeholders as labels, but this fails WCAG criteria for visible labels. Placeholders disappear when typing, straining short-term memory.
**Action:** Always wrap inputs in a container with a distinct `<label>` element linked via `htmlFor`, even if the design looks cleaner without it.
