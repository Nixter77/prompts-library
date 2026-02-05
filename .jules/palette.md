## 2025-05-21 - Accessible Forms and Feedback
**Learning:** Initial form implementations often lacked explicit labels (relying on placeholders) and used disruptive `alert()` calls for feedback, which creates accessibility barriers and a jarring user experience.
**Action:** Always wrap inputs in explicit `<label>` elements with `htmlFor`, and use inline state-based UI (like spinners and error messages) instead of blocking alerts.
