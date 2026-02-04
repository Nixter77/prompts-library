## 2024-05-22 - Explicit Labels & Loading Feedback
**Learning:** In controlled forms, users often double-submit because there is no immediate visual feedback (loading state) for async operations, and reliance on placeholders alone fails accessibility standards (screen readers) and disappears upon typing.
**Action:** Always wrap form inputs in explicit `<label>` elements and implement a `disabled` state with a spinner on the submit button during async requests.
