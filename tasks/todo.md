# Task: Create Security Category & 10 Website Protection/Audit Prompts

## Research basis
- OWASP Top 10:2025 (Broken Access Control, Misconfiguration, Supply Chain, Crypto, Injection, Design, Auth, Integrity, Logging, Exception handling)
- OWASP Web Security Testing Guide (WSTG)
- OWASP HTTP Security Headers Cheat Sheet (CSP, HSTS, XFO, COOP/COEP/CORP, Permissions-Policy)
- Session/cookie security, CSRF, CORS, TLS/HTTPS hardening

## Tasks
- [x] 1. Add `category_security` / `category_security_desc` to translations (en + ru)
- [x] 2. Wire `security` into categories page defaults + labels
- [x] 3. Craft 10 professional security prompts (website check / protection)
- [x] 4. Create `scripts/populate_security_prompts.mjs` and seed Supabase
- [x] 5. Append prompts to `scripts/prompts_data.json`
- [x] 6. Commit, push to GitHub, deploy (Vercel)
- [x] 7. Document results in Review section

## 10 prompts delivered
1. Full Website Security Audit (OWASP Top 10:2025)
2. HTTP Security Headers Audit (CSP, HSTS, COOP)
3. TLS / HTTPS & Certificate Hardening Review
4. Authentication & Session Management Audit
5. Broken Access Control & IDOR Testing Plan
6. Injection & XSS Testing Methodology
7. CSRF Protection Verification
8. CORS & API Security Review
9. Security Misconfiguration & Attack Surface Review
10. Website Hardening & Defense-in-Depth Checklist

## Review Section
- Category `security` added to UI (en/ru labels), default category list, category detail labels, About page.
- Seeded Supabase: 10 unique security prompts (duplicates from double-run cleaned).
- Local dataset `scripts/prompts_data.json` now has 92 prompts total (10 security).
- All prompts are defensive/audit-oriented with authorization disclaimers where relevant.
