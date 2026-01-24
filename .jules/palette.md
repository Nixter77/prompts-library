## 2024-05-22 - [Accessibility: Missing Form Labels]
**Learning:** The application's forms heavily rely on placeholders without visible labels, which poses a significant accessibility barrier and disappears upon typing.
**Action:** Always wrap form inputs in a container with an explicit `<label>` element linked via `htmlFor`, using `gap-2` for spacing.
