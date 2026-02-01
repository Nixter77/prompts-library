## 2025-05-18 - [Package Manager Conflict]
**Learning:** The prompt instructed to use `pnpm`, but the repository contained `package-lock.json`, indicating `npm` is the source of truth. Following the rule "repository configuration overrides persona instructions", `npm` was used.
**Action:** Always check for lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`) to determine the correct package manager, disregarding persona defaults if they conflict.
