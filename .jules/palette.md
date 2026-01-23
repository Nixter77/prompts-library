## 2026-01-23 - Button Loading State Pattern
**Learning:** The `Button` component (shadcn/ui style) requires manual insertion of a spinner icon and `disabled` prop for loading states. It does not have a native `loading` prop.
**Action:** When adding loading states, always import `Loader2` from `lucide-react` and conditionally render it inside the `Button` children.
