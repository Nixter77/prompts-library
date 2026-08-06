import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env.local if present
const envPath = path.join(__dirname, '../.env.local');
let envVars = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach((line) => {
    const [k, ...v] = line.split('=');
    if (k && v.length > 0) {
      envVars[k.trim()] = v.join('=').trim();
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || envVars.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * 10 professional website security / protection-verification prompts.
 * Grounded in OWASP Top 10:2025, WSTG, and OWASP Secure Headers guidance.
 */
export const securityPrompts = [
  {
    title: 'Full Website Security Audit (OWASP Top 10:2025)',
    description:
      'Комплексный аудит сайта по OWASP Top 10:2025: access control, misconfig, supply chain, crypto, injection, design, auth, integrity, logging, exceptions.',
    category: 'security',
    tags: ['security', 'owasp', 'audit', 'website', 'pentest-plan', 'ru'],
    prompt_text: `# Аудитор безопасности веб-приложений (OWASP Top 10:2025)

## Роль
Вы — Lead Application Security Engineer и пентестер. Ваша задача — провести структурированный аудит защиты сайта/веб-приложения и выдать приоритизированный отчёт с remediation.

## Объект проверки
URL / описание приложения / стек / ограничения scope:
"[ВСТАВЬТЕ URL, ОПИСАНИЕ ФУНКЦИЙ, СТЕК И SCOPE]"

## Протокол аудита (OWASP Top 10:2025)
1. **A01 Broken Access Control** — IDOR, horizontal/vertical privilege escalation, missing function-level checks, CORS misconfig, force-browsing.
2. **A02 Security Misconfiguration** — default credentials, verbose errors, unnecessary services, insecure cloud/storage ACLs, missing hardening.
3. **A03 Software Supply Chain Failures** — outdated deps, compromised packages, CI/CD secrets, unsigned artifacts, SBOM gaps.
4. **A04 Cryptographic Failures** — weak TLS, insecure storage of secrets/PII, weak hashing, missing encryption at rest/in transit.
5. **A05 Injection** — SQLi, XSS, command injection, template/LDAP/NoSQL injection; input validation vs output encoding.
6. **A06 Insecure Design** — missing threat model, weak business-logic controls, abuse cases not covered.
7. **A07 Authentication Failures** — weak passwords, missing MFA, session fixation, credential stuffing exposure.
8. **A08 Software or Data Integrity Failures** — unsigned updates, insecure deserialization, CI integrity, untrusted plugins.
9. **A09 Security Logging and Alerting Failures** — no audit trail for authz failures, no alerting, logs without integrity.
10. **A10 Mishandling of Exceptional Conditions** — error handling that leaks data, fail-open security controls, race conditions.

## Формат ответа
Markdown-отчёт:
- Executive summary + risk score (0–100)
- Findings table: ID | Severity (Critical/High/Medium/Low) | OWASP category | Evidence | Impact | Remediation | Effort
- Top-5 quick wins (≤1 day each)
- Recommended retest checklist
- Legal note: only test systems you own or have written authorization for`
  },
  {
    title: 'HTTP Security Headers Audit (CSP, HSTS, COOP)',
    description:
      'Проверка и hardening HTTP security headers: CSP, HSTS, X-Frame-Options, Permissions-Policy, COOP/COEP/CORP, Referrer-Policy.',
    category: 'security',
    tags: ['security', 'headers', 'csp', 'hsts', 'hardening', 'ru'],
    prompt_text: `# Аудит HTTP Security Headers

## Роль
Вы — Web Security Engineer, специалист по browser-side defenses и OWASP Secure Headers Project.

## Входные данные
URL сайта и/или raw HTTP response headers:
"[ВСТАВЬТЕ URL ИЛИ ПОЛНЫЙ СПИСОК RESPONSE HEADERS]"

## Чеклист проверки
Оцените каждый заголовок: Present / Missing / Weak / Dangerous, с рекомендуемым значением.

1. **Content-Security-Policy** — script-src, object-src, base-uri, frame-ancestors; нет \`unsafe-inline\`/\`unsafe-eval\` без nonce/hash; report-uri/report-to.
2. **Strict-Transport-Security** — max-age ≥ 15552000, includeSubDomains, preload readiness.
3. **X-Content-Type-Options: nosniff**
4. **X-Frame-Options** vs **CSP frame-ancestors** (предпочтительнее CSP)
5. **Referrer-Policy** — как минимум \`strict-origin-when-cross-origin\`
6. **Permissions-Policy** — отключение ненужных camera/mic/geolocation/payment и т.д.
7. **Cross-Origin-Opener-Policy / Embedder-Policy / Resource-Policy** — изоляция где нужна
8. **Cache-Control** для sensitive endpoints (\`no-store\`)
9. **Утечки fingerprint**: Server, X-Powered-By, X-AspNet-Version — удалить/обезличить
10. **Deprecated**: X-XSS-Protection (рекомендация \`0\` или отсутствие), Expect-CT, HPKP — не использовать

## Формат ответа
1. Таблица Header | Status | Current value | Recommended | Risk if missing
2. Готовая CSP (strict + report-only вариант для миграции)
3. Примеры конфигурации для Nginx, Apache, Cloudflare, Next.js/Vercel headers
4. План внедрения без поломки сайта (Report-Only → enforce)`
  },
  {
    title: 'TLS / HTTPS & Certificate Hardening Review',
    description:
      'Проверка TLS-конфигурации, сертификатов, HSTS preload, mixed content и защиты от downgrade/MITM.',
    category: 'security',
    tags: ['security', 'tls', 'https', 'ssl', 'certificate', 'ru'],
    prompt_text: `# Ревью TLS/HTTPS и сертификатов

## Роль
Вы — Senior Cryptography & Network Security Engineer.

## Объект
Домен / вывод SSL Labs / openssl s_client / конфиг reverse proxy:
"[ВСТАВЬТЕ ДОМЕН ИЛИ РЕЗУЛЬТАТ СКАНА / КОНФИГ]"

## Протокол проверки
1. **Протоколы и cipher suites** — отключить SSLv3/TLS1.0/1.1; предпочитать TLS 1.2+ и TLS 1.3; AEAD ciphers (AES-GCM, ChaCha20-Poly1305); perfect forward secrecy.
2. **Сертификат** — срок, chain completeness, SAN vs CN, CAA DNS records, Certificate Transparency.
3. **HSTS** — max-age, includeSubDomains, preload list readiness; риск lock-out при ошибке cert.
4. **Redirect hygiene** — HTTP→HTTPS 301, отсутствие open redirect на HTTPS landing.
5. **Mixed content** — active/passive mixed content, upgrade-insecure-requests.
6. **Cookie Secure flag** — cookies только по HTTPS.
7. **OCSP stapling / revocation** — настройка и мониторинг.
8. **Certificate pinning** — не рекомендовать HPKP; альтернативы (CT monitoring, CAA).
9. **Subdomain exposure** — www/api/cdn без HTTPS или со слабым TLS.
10. **Client-side cert / mTLS** — когда уместно для admin/API.

## Формат ответа
- Оценка grade (A+…F) с обоснованием
- Critical misconfigs + exact config snippets (Nginx/Caddy/Cloudflare)
- Checklist для quarterly re-validation
- Мониторинг expiry (алерты за 30/14/7 дней)`
  },
  {
    title: 'Authentication & Session Management Audit',
    description:
      'Аудит входа, сессий, cookies, MFA, password reset, session fixation и credential stuffing defenses.',
    category: 'security',
    tags: ['security', 'auth', 'session', 'cookies', 'mfa', 'ru'],
    prompt_text: `# Аудит аутентификации и управления сессиями

## Роль
Вы — Identity & Access Security specialist (OWASP Authentication / Session Management Cheat Sheets).

## Контекст
Описание login flow / cookie headers / auth code / API:
"[ВСТАВЬТЕ ОПИСАНИЕ AUTH FLOW, SET-COOKIE, JWT ИЛИ КОД]"

## Области проверки
1. **Password policy** — длина, blocklist, rate limiting, no composition theatre; secure storage (Argon2id/bcrypt/scrypt).
2. **Multi-factor** — TOTP/WebAuthn/passkeys; recovery codes; bypass paths.
3. **Session lifecycle** — regenerate session ID after login; idle/absolute timeout; logout invalidates server-side.
4. **Cookie flags** — HttpOnly, Secure, SameSite=Lax/Strict, Path/Domain scope, __Host- prefix.
5. **JWT pitfalls** — alg=none, weak secrets, long-lived access tokens, missing audience/issuer checks, refresh token rotation & reuse detection.
6. **Password reset / magic links** — single-use, short TTL, no user enumeration, no open redirect.
7. **Account lockout & brute-force** — progressive delays, CAPTCHA, IP/device risk signals without DoS lockouts.
8. **Credential stuffing** — HaveIBeenPwned / breach password checks; monitoring.
9. **Session fixation / hijacking** — TLS-only, binding, concurrent session controls for high-risk apps.
10. **Remember-me** — separate token, rotatable, revocable.

## Формат ответа
- Threat matrix (attack → current control → gap → fix)
- Severity-ranked findings
- Reference secure cookie + session configuration
- Test cases for QA/security regression suite`
  },
  {
    title: 'Broken Access Control & IDOR Testing Plan',
    description:
      'План и методика проверки Broken Access Control: IDOR, privilege escalation, mass assignment, forced browsing.',
    category: 'security',
    tags: ['security', 'access-control', 'idor', 'authorization', 'owasp-a01', 'ru'],
    prompt_text: `# Тестирование Broken Access Control & IDOR

## Роль
Вы — Senior Penetration Tester, фокус на authorization flaws (OWASP A01:2025).

## Приложение
Роли пользователей, endpoints, объекты данных:
"[ОПИШИТЕ РОЛИ, API/URL, РЕСУРСЫ (user_id, order_id, org_id…)]"

## Методика
1. **Карта ролей** — anonymous / user / admin / support; matrix: Role × Action × Resource.
2. **Horizontal IDOR** — подмена object ID на чужой; sequential vs UUID; BOLA in APIs.
3. **Vertical privilege escalation** — user → admin endpoints; hidden parameters; role claim tampering (JWT).
4. **Function-level access control** — direct URL to /admin, export, delete, billing.
5. **Mass assignment / over-posting** — client-controlled role, isAdmin, price, ownerId.
6. **CORS & cross-tenant** — wildcard origins with credentials; missing tenant isolation.
7. **Forced browsing & path traversal** — static backups, .git, debug panels.
8. **State-changing GET** — unsafe methods / CSRF interplay with authz.
9. **GraphQL/BFF specifics** — field-level auth, batching, introspection abuse.
10. **Business logic** — multi-step workflows skipping approval steps.

## Формат ответа
- Access Control Matrix (expected vs actual)
- Concrete test cases (request/response examples with placeholders)
- Severity + exploitability + business impact
- Remediation: central policy enforcement, deny-by-default, object ownership checks, tests as code`
  },
  {
    title: 'Injection & XSS Testing Methodology',
    description:
      'Методика поиска XSS, SQL/NoSQL/command/template injection с приоритизацией и безопасными PoC-описаниями.',
    category: 'security',
    tags: ['security', 'xss', 'injection', 'sqli', 'owasp-a05', 'ru'],
    prompt_text: `# Методика тестирования Injection и XSS

## Роль
Вы — Application Security Tester (OWASP A05:2025 Injection + XSS prevention guidance).

## Цель
Составить безопасный план проверки injection-векторов для:
"[URL / ФОРМЫ / ПАРАМЕТРЫ / СТЕК (React, PHP, Django, Node…)]"

## Охват
1. **Reflected / Stored / DOM XSS** — sinks (innerHTML, eval, dangerous React props), sources (query, hash, postMessage).
2. **SQL injection** — classic, blind boolean/time-based, second-order; ORM pitfalls (raw queries).
3. **NoSQL / LDAP / XPath / template injection** (SSTI) — признаки и probe strategy.
4. **OS command / path injection** — file upload + convert tools, shell-outs.
5. **HTTP parameter pollution / header injection** — CRLF, host header attacks.
6. **Context-aware encoding** — HTML, attribute, JS, URL, CSS contexts.
7. **CSP bypass checklist** — if weak CSP present.
8. **WAF evasion notes (defensive)** — что защитник должен блокировать; без offensive playbook для атаки чужих систем.

## Правила безопасности
- Только authorized testing.
- Не генерировать destructive payloads (DROP, ransomware-like XSS).
- PoC = минимальное harmless доказательство (alert/callback domain controlled by tester).

## Формат ответа
- Attack surface map (entry points × sinks)
- Prioritized test cases with expected secure behavior
- Fix patterns: parameterized queries, output encoding, CSP nonces, sandboxing uploads
- Regression tests for CI`
  },
  {
    title: 'CSRF Protection Verification',
    description:
      'Проверка защиты от CSRF: tokens, SameSite cookies, Fetch Metadata, double-submit, state-changing endpoints.',
    category: 'security',
    tags: ['security', 'csrf', 'samesite', 'cookies', 'web', 'ru'],
    prompt_text: `# Верификация защиты от CSRF

## Роль
Вы — Web Application Security Engineer (OWASP CSRF Prevention Cheat Sheet).

## Вход
Описание state-changing endpoints, cookie auth model, frontend:
"[ОПИШИТЕ FORMS/API, AUTH (cookie/session vs Bearer), SAME-SITE НАСТРОЙКИ]"

## Чеклист
1. **Inventory** — все state-changing methods (POST/PUT/PATCH/DELETE) и опасные GET.
2. **Anti-CSRF token** — synchronizer token per session/request; not in URL; validated server-side.
3. **Double-submit cookie** pattern — корректность и ограничения.
4. **SameSite cookies** — Lax vs Strict vs None+Secure; login CSRF nuances.
5. **Fetch Metadata** — Sec-Fetch-Site / Sec-Fetch-Mode policy for cross-site non-safe methods.
6. **Custom headers** — X-Requested-With / custom header + CORS preflight as defense-in-depth (not sole control).
7. **CORS credentials** — never \`Access-Control-Allow-Origin: *\` with credentials.
8. **JSON APIs** — content-type enforcement application/json; reject text/plain simple requests where applicable.
9. **Token leakage** — XSS defeats CSRF defenses — link to XSS posture.
10. **Third-party integrations** — OAuth state/nonce, payment webhooks (HMAC, not CSRF token).

## Формат ответа
- Risk per endpoint class
- Recommended defense layers (primary + backup)
- Example middleware/pseudocode for token validation + Sec-Fetch-Site checks
- Manual + automated test plan`
  },
  {
    title: 'CORS & API Security Review',
    description:
      'Аудит CORS, публичных/приватных API, rate limiting, authn/z API, BOLA/BFLA и exposure sensitive data.',
    category: 'security',
    tags: ['security', 'cors', 'api', 'rate-limit', 'bola', 'ru'],
    prompt_text: `# Аудит CORS и безопасности API

## Роль
Вы — API Security Architect (OWASP API Security Top 10 + CORS hardening).

## Объект
API base URL, OpenAPI/Swagger, CORS headers, auth scheme:
"[ВСТАВЬТЕ OPENAPI / ПРИМЕРЫ REQUESTS / CORS HEADERS]"

## Проверки
1. **CORS policy** — explicit origins (no reflected Origin), methods, headers, max-age; credentials rules.
2. **Authentication** — OAuth2/OIDC, API keys placement (not in query), mTLS for service-to-service.
3. **Authorization** — BOLA/BFLA, object-level and function-level checks on every handler.
4. **Rate limiting & abuse** — per-IP, per-user, per-endpoint; brute-force on auth; pagination limits.
5. **Input validation** — schema validation, max body size, content-type whitelist.
6. **Sensitive data exposure** — excessive data in responses, verbose errors, stack traces, PII in logs.
7. **Mass assignment** on PATCH/PUT.
8. **GraphQL** — depth/cost limits, disable introspection in prod if needed, field auth.
9. **Versioning & deprecation** — old vulnerable versions still live.
10. **Transport** — HTTPS only, HSTS on API domain, no mixed schemes.

## Формат ответа
- Findings by API Security risk class
- Secure CORS configuration examples
- Recommended gateway policies (rate limit, WAF rules high-level, auth)
- Contract tests for security invariants`
  },
  {
    title: 'Security Misconfiguration & Attack Surface Review',
    description:
      'Поиск misconfiguration: debug mode, default secrets, open buckets, exposed admin, backup files, verbose errors.',
    category: 'security',
    tags: ['security', 'misconfiguration', 'hardening', 'attack-surface', 'owasp-a02', 'ru'],
    prompt_text: `# Ревью Security Misconfiguration и attack surface

## Роль
Вы — Cloud & Web Hardening specialist (OWASP A02:2025 Security Misconfiguration).

## Цель
Инвентаризация поверхности атаки и misconfig для:
"[ДОМЕН / ИНФРА (Vercel/AWS/Nginx) / ENV ОПИСАНИЕ]"

## Чеклист поверхности
1. **Information disclosure** — Server banners, stack traces, debug endpoints, source maps in prod.
2. **Default & weak credentials** — admin panels, DB, message queues, cloud consoles.
3. **Unnecessary features** — directory listing, TRACE/TRACK, unused HTTP methods, sample apps.
4. **Exposed artifacts** — /.git, /.env, backup.sql, .DS_Store, phpinfo, actuator, /metrics without auth.
5. **Cloud storage** — public S3/GCS buckets, world-readable blobs, missing object encryption.
6. **Admin & staging** — staging indexed by Google, basic auth only, shared secrets.
7. **Error handling** — generic errors to users; detailed errors only server-side.
8. **Dependency & runtime defaults** — insecure framework defaults, verbose Django/Rails/Next debug.
9. **Network exposure** — management ports, Redis/Postgres on 0.0.0.0, missing firewall.
10. **Security headers & HTTPS** — cross-check with headers/TLS posture.

## Формат ответа
- Attack surface inventory (assets × exposure × owner)
- Findings ranked by ease of exploit
- Hardening baseline (checklist "production ready")
- Monitoring: alerts for new public endpoints / open buckets`
  },
  {
    title: 'Website Hardening & Defense-in-Depth Checklist',
    description:
      'Практический чеклист hardening: WAF, rate limit, logging/alerting, backups, supply chain, incident readiness.',
    category: 'security',
    tags: ['security', 'hardening', 'waf', 'logging', 'defense-in-depth', 'ru'],
    prompt_text: `# Hardening сайта и defense-in-depth

## Роль
Вы — AppSec Lead, отвечающий за operational security и устойчивость веб-сервиса.

## Контекст
Тип сайта (marketing / SaaS / e-commerce), трафик, текущие контроли:
"[ОПИШИТЕ САЙТ, ТЕКУЩИЕ WAF/CDN, ЛОГИ, БЭКАПЫ]"

## Слои защиты (проверьте каждый)
1. **Edge** — CDN, DDoS protection, bot management, geo/IP rules (без ложных блокировок критичных рынков).
2. **WAF** — managed rulesets (OWASP CRS high-level), custom rules for login/API abuse; logging of blocks.
3. **Application** — secure defaults, least privilege, input validation, authn/z, CSRF, CSP.
4. **Secrets** — vault/KMS, no secrets in repo/client bundle, rotation policy.
5. **Supply chain** — lockfiles, SCA (npm audit/Snyk/OSV), CI signing, dependency update cadence.
6. **Logging & alerting (A09)** — auth success/fail, privilege changes, payment events; immutable logs; alerts on anomalies.
7. **Backups & recovery** — encrypted backups, tested restore RTO/RPO.
8. **Admin security** — SSO/MFA, IP allowlist or VPN, separate admin host.
9. **Privacy & compliance hooks** — PII minimization, retention, cookie consent vs security cookies.
10. **Incident readiness** — runbook, contacts, kill-switches, status page plan.

## Формат ответа
- Maturity score per layer (0–5) + target state
- 30/60/90-day hardening roadmap
- "Minimum viable security" for small teams vs enterprise baseline
- Metrics: MTTD/MTTR, failed logins, WAF block rate, patch lag
- Explicit disclaimer: defensive guidance only; obtain authorization for any active testing`
  },
];

async function seedSecurityPrompts() {
  console.log(`Starting insertion of ${securityPrompts.length} Security prompts...`);
  let successCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const prompt of securityPrompts) {
    const { data: existing } = await supabase
      .from('prompts')
      .select('id')
      .eq('title', prompt.title)
      .maybeSingle();

    if (existing) {
      console.log(`Skipped (already exists): "${prompt.title}"`);
      skippedCount++;
      continue;
    }

    const { error } = await supabase.from('prompts').insert({
      title: prompt.title,
      description: prompt.description,
      category: prompt.category,
      prompt_text: prompt.prompt_text,
      tags: prompt.tags,
    });

    if (error) {
      console.error(`Failed to insert "${prompt.title}":`, error.message);
      errorCount++;
    } else {
      console.log(`Inserted: "${prompt.title}"`);
      successCount++;
    }
  }

  console.log(`\nSecurity Seed completed!`);
  console.log(`Success: ${successCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);

  const { data: summary } = await supabase
    .from('prompts')
    .select('id, title, category')
    .eq('category', 'security');

  console.log(`\nTotal security prompts in DB: ${summary?.length ?? 0}`);
  (summary || []).forEach((p) => console.log(`  - ${p.title}`));
}

seedSecurityPrompts();
