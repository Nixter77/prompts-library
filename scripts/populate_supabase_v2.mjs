import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Professional Prompt Engineering Frameworks applied: CO-STAR, RTF, Chain-of-Thought
const prompts = [
  // ==========================================
  // PROGRAMMING & ARCHITECTURE (EN)
  // ==========================================
  {
    title: 'Senior Code Reviewer (CO-STAR)',
    description: 'Expert-level code review focusing on security, performance, and maintainability.',
    category: 'programming',
    prompt_text: `
# Context
You are a Senior Software Engineer and Security Specialist with over 10 years of experience in [LANGUAGE/FRAMEWORK]. You are reviewing code for a mission-critical application where security and performance are paramount.

# Objective
Conduct a thorough code review of the snippet provided below. Identify potential security vulnerabilities (OWASP Top 10), performance bottlenecks, and violations of clean code principles (SOLID, DRY).

# Style
Professional, critical, yet constructive.

# Tone
Authoritative and educational.

# Audience
A mid-level developer who needs specific, actionable feedback to improve their skills.

# Response Format
Provide a structured report with:
1. Executive Summary
2. Critical Issues (Security/Performance)
3. Code Quality Improvements
4. Refactored Code Example

# Code to Review
[INSERT CODE HERE]
`,
    tags: ['code-review', 'security', 'optimization', 'co-star', 'en']
  },
  {
    title: 'Legacy Code Refactoring (RTF)',
    description: 'Modernize and optimize legacy code snippets.',
    category: 'programming',
    prompt_text: `
# Role
Act as a Lead Refactoring Expert specializing in modernizing legacy codebases while preserving backward compatibility.

# Task
Refactor the provided legacy code snippet. Your goals are to:
1. Improve readability and maintainability.
2. Update syntax to modern standards (e.g., ES6+, Python 3.12+).
3. Optimize algorithmic complexity (Big O notation).
4. Add comprehensive comments explaining *why* changes were made.

# Format
Return the response in Markdown with the following sections: 'Original Analysis', 'Refactoring Strategy', 'Modernized Code', and 'Performance Comparison'.

# Code
[INSERT CODE HERE]
`,
    tags: ['refactoring', 'legacy-code', 'modernization', 'rtf', 'en']
  },
  {
    title: 'Unit Test Generation (TDD)',
    description: 'Generate comprehensive test suites including edge cases.',
    category: 'programming',
    prompt_text: `
# Context
I strictly follow Test-Driven Development (TDD). I need a robust test suite for a critical function.

# Task
Write a complete unit test suite for the following function using [TEST FRAMEWORK, e.g., Jest/Pytest].
You must cover:
- Happy path scenarios.
- Edge cases (nulls, empty inputs, limits).
- Error handling and exception testing.

# Constraint
Do not mock external dependencies unless absolutely necessary; prefer integration style if applicable. Ensure 100% branch coverage if possible.

# Function
[INSERT CODE HERE]
`,
    tags: ['testing', 'tdd', 'unit-tests', 'en']
  },
  {
    title: 'API Documentation Generator',
    description: 'Create professional OpenAPI/Swagger documentation.',
    category: 'programming',
    prompt_text: `
# Role
Technical Writer specializing in API documentation and Developer Experience (DX).

# Task
Generate detailed OpenAPI 3.0 (Swagger) documentation (YAML format) for the API endpoint described below.

# Requirements
- Include clear descriptions for all parameters, request bodies, and responses.
- Define schemas for all JSON objects.
- Include example requests and responses for 200, 400, 401, and 500 status codes.

# Endpoint Logic
[INSERT ENDPOINT CODE OR DESCRIPTION]
`,
    tags: ['api', 'documentation', 'swagger', 'en']
  },
  {
    title: 'System Architecture Design',
    description: 'High-level system design for scalable applications.',
    category: 'programming',
    prompt_text: `
# Context
We are designing a [SYSTEM TYPE, e.g., real-time chat, e-commerce platform] that needs to handle [SCALE, e.g., 10k concurrent users].

# Objective
Propose a high-level system architecture.

# Step-by-Step Instructions
1. **Requirements Analysis**: List functional and non-functional requirements.
2. **High-Level Design**: Describe the main components (Load Balancers, API Gateway, Services, Databases, Caches).
3. **Data Model**: Briefly sketch the database schema (SQL vs NoSQL decision).
4. **Trade-offs**: Explain the CAP theorem implications of your choices.

# Response
Provide the architecture description and a Mermaid.js diagram code block representing the flow.
`,
    tags: ['system-design', 'architecture', 'scalability', 'en']
  },
  {
    title: 'Bug Detective',
    description: 'Analyze code to find subtle logic errors.',
    category: 'programming',
    prompt_text: `
# Role
Senior Debugging Specialist.

# Task
Analyze the following code snippet which is producing an unexpected result: [DESCRIBE ERROR/BEHAVIOR].
Trace the execution flow step-by-step (Chain of Thought) to identify exactly where the logic fails.

# Output
1. The Root Cause Analysis.
2. The specific line(s) causing the bug.
3. The fixed code.
4. Prevention strategy (how to avoid this in the future).

# Code
[INSERT CODE HERE]
`,
    tags: ['debugging', 'troubleshooting', 'en']
  },
  {
    title: 'Regex Master',
    description: 'Generate and explain complex regular expressions.',
    category: 'programming',
    prompt_text: `
# Context
I need to parse text data with high precision.

# Task
Create a Regular Expression (Regex) to match [PATTERN DESCRIPTION, e.g., email addresses that strictly follow RFC 5322].

# Requirements
- The regex must be compatible with [FLAVOR, e.g., PCRE, JS, Python].
- Provide a breakdown of each part of the regex pattern.
- List 5 positive match examples and 5 negative match examples.

# Pattern Details
[INSERT DETAILS]
`,
    tags: ['regex', 'parsing', 'en']
  },
  {
    title: 'SQL Query Optimizer',
    description: 'Optimize slow SQL queries.',
    category: 'programming',
    prompt_text: `
# Role
Database Administrator (DBA) specializing in PostgreSQL/MySQL performance tuning.

# Task
Optimize the following SQL query which is currently performing a full table scan.
Analyze the provided schema and query plan (if available).

# Output
1. Explanation of why the current query is slow.
2. Suggested Indexes to add.
3. The Rewritten, optimized SQL query.

# Schema & Query
[INSERT SCHEMA AND QUERY]
`,
    tags: ['sql', 'database', 'optimization', 'en']
  },
  {
    title: 'React Hook Specialist',
    description: 'Create custom React hooks for specific logic.',
    category: 'programming',
    prompt_text: `
# Objective
Create a custom, reusable React Hook named [HOOK NAME] that handles [FUNCTIONALITY, e.g., fetching data with caching and retry logic].

# Constraints
- Use TypeScript with proper generic typing.
- Handle loading, error, and success states.
- Ensure referential stability (useCallback, useMemo).
- Clean up side effects (useEffect return).

# Context
This hook will be used in a high-traffic dashboard application.
`,
    tags: ['react', 'typescript', 'frontend', 'en']
  },
  {
    title: 'Git Commit Professional',
    description: 'Generate semantic git commit messages.',
    category: 'programming',
    prompt_text: `
# Task
Write a semantic git commit message based on the "Conventional Commits" specification for the staged changes described below.

# Rules
1. Format: <type>(<scope>): <subject>
2. Body: Explain *why* the change was made, not just *what*.
3. Footer: Reference any issue IDs (e.g., "Fixes #123").

# Changes (Diff)
[INSERT GIT DIFF OR DESCRIPTION]
`,
    tags: ['git', 'workflow', 'en']
  },

  // ==========================================
  // DATA ANALYSIS & SCIENCE (EN)
  // ==========================================
  {
    title: 'Data Scientist (EDA)',
    description: 'Comprehensive Exploratory Data Analysis plan and code.',
    category: 'data-analysis',
    prompt_text: `
# Role
Lead Data Scientist.

# Context
I have a new dataset regarding [DOMAIN, e.g., E-commerce Customer Churn].
Columns: [LIST COLUMNS].

# Task
1. Outline a strategic plan for Exploratory Data Analysis (EDA) to uncover patterns related to [TARGET VARIABLE].
2. Write production-quality Python code (Pandas/Seaborn) to:
    - Handle missing values (imputation strategy).
    - Detect and visualize outliers.
    - Plot correlation matrices.
    - Visualize distribution of key features.

# Output
Plan + Python Code Block.
`,
    tags: ['python', 'pandas', 'data-science', 'eda', 'en']
  },
  {
    title: 'Pandas Pipeline Architect',
    description: 'Build robust data processing pipelines.',
    category: 'data-analysis',
    prompt_text: `
# Objective
Create a robust, method-chaining Pandas pipeline to process raw data into a clean feature set.

# Input Data
[DESCRIBE RAW DATA]

# Transformation Steps
1. Filter rows where [CONDITION].
2. Create a new feature [FEATURE] based on [CALCULATION].
3. Normalize numerical columns.
4. One-hot encode categorical columns.

# Constraint
Use the ".pipe()" method for readability and modularity.
`,
    tags: ['python', 'pandas', 'etl', 'en']
  },
  {
    title: 'Machine Learning Model Selector',
    description: 'Choose the right algorithm for the task.',
    category: 'data-analysis',
    prompt_text: `
# Context
I am working on a problem involving [PROBLEM TYPE, e.g., multi-class text classification] with a dataset size of [ROWS] rows and [FEATURES] features. The data is [BALANCED/IMBALANCED].

# Task
Recommend top 3 Machine Learning algorithms suitable for this task.

# Analysis
For each recommendation, provide:
- **Pros**: Why it fits this specific data.
- **Cons**: Potential pitfalls (e.g., training time, interpretability).
- **Hyperparameters**: Key parameters to tune.
`,
    tags: ['machine-learning', 'model-selection', 'en']
  },
  {
    title: 'Business Intelligence Analyst',
    description: 'Translate data into business insights.',
    category: 'data-analysis',
    prompt_text: `
# Role
Senior BI Analyst reporting to the C-Suite.

# Task
Interpret the following data findings: [INSERT DATA/STATISTICS].
Translate these technical numbers into a strategic business narrative.

# Questions to Answer
1. What is the main trend?
2. What is the financial impact?
3. What is your recommended action plan?

# Tone
Executive, concise, action-oriented.
`,
    tags: ['business-intelligence', 'reporting', 'en']
  },
  {
    title: 'Excel/Google Sheets Wizard',
    description: 'Complex formula generation.',
    category: 'data-analysis',
    prompt_text: `
# Task
Generate a complex Excel formula for the following logic:
"Check if Column A is 'Active'. If so, search for the value of Column B in Sheet2!A:A and return the value from Sheet2!C:C. If not found, return 'Not Listed'."

# Constraint
Use modern functions like XLOOKUP or FILTER if possible, but provide a VLOOKUP fallback.
`,
    tags: ['excel', 'spreadsheet', 'en']
  },

  // ==========================================
  // WRITING & CONTENT (EN)
  // ==========================================
  {
    title: 'Copywriting Framework (AIDA)',
    description: 'Write marketing copy using AIDA framework.',
    category: 'writing',
    prompt_text: `
# Role
Direct Response Copywriter.

# Task
Write a landing page hero section for [PRODUCT] using the AIDA framework (Attention, Interest, Desire, Action).

# Product Details
- Name: [NAME]
- Benefit: [MAIN BENEFIT]
- Target Audience: [AUDIENCE]

# Output Format
- **Attention**: Headline.
- **Interest**: Subheadline.
- **Desire**: 3 Bullet points.
- **Action**: Call to Action (CTA) button text.
`,
    tags: ['copywriting', 'marketing', 'aida', 'en']
  },
  {
    title: 'SEO Content Strategist',
    description: 'Generate SEO-optimized blog outlines.',
    category: 'writing',
    prompt_text: `
# Context
We are targeting the keyword "[KEYWORD]" which has high search intent for [INTENT TYPE, e.g., informational].

# Task
Create a comprehensive blog post outline.

# Requirements
1. **Title**: Catchy, includes keyword.
2. **Meta Description**: Under 160 chars.
3. **Structure**: H1, H2, H3 hierarchy.
4. **LSI Keywords**: Suggest 5 related terms to include naturally.
5. **Content Angle**: Unique perspective to beat competitors.
`,
    tags: ['seo', 'blogging', 'content-marketing', 'en']
  },
  {
    title: 'Technical Writer (Manuals)',
    description: 'Write clear user manuals or tutorials.',
    category: 'writing',
    prompt_text: `
# Role
Technical Communicator.

# Task
Write a "Getting Started" guide for [TOOL/SOFTWARE].

# Style Guide
- Use imperative mood ("Click," "Type," not "You should click").
- Keep sentences short.
- Use bolding for UI elements.

# Steps to Cover
1. Installation.
2. Configuration.
3. First usage example.
`,
    tags: ['technical-writing', 'documentation', 'en']
  },
  {
    title: 'Email Marketing Sequencer',
    description: 'Create a drip campaign sequence.',
    category: 'writing',
    prompt_text: `
# Objective
Create a 3-email welcome sequence for new subscribers to [NEWSLETTER/SERVICE].

# Sequence Structure
1. **Email 1 (Day 0)**: Welcome + Value Delivery (Lead Magnet).
2. **Email 2 (Day 1)**: Overcoming Objections + Soft Sell.
3. **Email 3 (Day 3)**: Social Proof + Hard Sell.

# Tone
Personal, engaging, not overly salesy.
`,
    tags: ['email-marketing', 'copywriting', 'en']
  },
  {
    title: 'Viral Social Media Posts',
    description: 'Generate engaging posts for LinkedIn/Twitter.',
    category: 'writing',
    prompt_text: `
# Role
Social Media Ghostwriter for a Tech Thought Leader.

# Task
Turn the following rough thought into a viral LinkedIn post and a Twitter thread (5 tweets).

# Rough Thought
"[INSERT THOUGHT, e.g., Junior devs focus too much on syntax, seniors focus on problem solving]"

# Techniques to Use
- "The Hook" (first line).
- Short, punchy paragraphs.
- "The Twist" or contrarian take.
- Call to Discussion at the end.
`,
    tags: ['social-media', 'linkedin', 'twitter', 'en']
  },

  // ==========================================
  // IMAGES & CREATIVE (EN)
  // ==========================================
  {
    title: 'Midjourney Photorealism Expert',
    description: 'High-end photorealistic prompt engineering.',
    category: 'images',
    prompt_text: `
# Platform
Midjourney v6.

# Subject
A portrait of [SUBJECT DESCRIPTION].

# Style Parameters
- **Camera**: Shot on Hasselblad X2D 100C, 80mm f/1.9 lens.
- **Lighting**: Cinematic chiaroscuro, volumetric lighting, rim light.
- **Texture**: Skin texture, pores, realistic fabric details.
- **Aspect Ratio**: --ar 4:5.
- **Stylize**: --s 250.

# Prompt Construction
[Subject] + [Environment] + [Lighting] + [Camera Gear] + [Style Keywords] + [Parameters].
`,
    tags: ['midjourney', 'photorealistic', 'ai-art', 'en']
  },
  {
    title: 'Vector Logo Designer',
    description: 'Prompts for clean, minimal vector logos.',
    category: 'images',
    prompt_text: `
# Objective
Create a prompt for a minimal vector logo for [BRAND NAME].

# Style
Flat design, Paul Rand style, geometric shapes, negative space, vector illustration, white background.

# Exclusions (Negative Prompt)
No shading, no gradients, no 3d rendering, no photo-realistic details, no text.

# Prompt
/imagine prompt: a flat vector logo of [ICON CONCEPT], minimal, geometric, simple lines, orange and blue color palette, white background --no shading, detailed --v 6
`,
    tags: ['design', 'logo', 'vector', 'en']
  },
  {
    title: 'UX/UI Mockup Generator',
    description: 'Generate inspiration for UI designs.',
    category: 'images',
    prompt_text: `
# Task
Generate a prompt for a Dribbble-style UI mockup for a [APP TYPE, e.g., Fintech Mobile App].

# Visual Style
Glassmorphism, clean interface, pastel colors, high fidelity, trending on Dribbble, UI/UX design.

# Components to Include
Dashboard with graphs, user profile card, floating action button.

# Prompt
Mobile app interface design for [APP TYPE], [STYLE DESCRIPTORS], high resolution, Figma style --ar 9:16
`,
    tags: ['ui-design', 'ux', 'web-design', 'en']
  },

  // ==========================================
  // BUSINESS & STRATEGY (EN)
  // ==========================================
  {
    title: 'Product Manager PRD',
    description: 'Write a Product Requirements Document.',
    category: 'business',
    prompt_text: `
# Role
Senior Product Manager.

# Task
Draft a Product Requirements Document (PRD) for a new feature: [FEATURE NAME].

# Sections Required
1. **Problem Statement**: What user pain point are we solving?
2. **User Stories**: As a [User], I want to [Action], so that [Benefit].
3. **Success Metrics**: KPIs to measure success (e.g., retention, conversion).
4. **Out of Scope**: What are we NOT building?

# Context
[INSERT CONTEXT]
`,
    tags: ['product-management', 'agile', 'business', 'en']
  },
  {
    title: 'Startup Pitch Deck Creator',
    description: 'Structure a compelling investor pitch.',
    category: 'business',
    prompt_text: `
# Role
Venture Capital Consultant.

# Task
Outline the 10-slide pitch deck for [STARTUP IDEA].

# Structure (Sequoia Model)
1. Problem
2. Solution
3. Why Now?
4. Market Size (TAM/SAM/SOM)
5. Competition
6. Product
7. Business Model
8. Team
9. Financials
10. The Ask

# Tone
Persuasive, visionary, data-driven.
`,
    tags: ['startup', 'pitch-deck', 'fundraising', 'en']
  },

  // ==========================================
  // RUSSIAN PROMPTS (RU) - PROFESSIONAL
  // ==========================================
  {
    title: 'Архитектор ПО (System Design)',
    description: 'Проектирование высоконагруженных систем.',
    category: 'programming',
    prompt_text: `
# Роль
Senior System Architect с опытом работы в Big Tech (Яндекс, Avito).

# Задача
Спроектировать архитектуру для [ТИП СИСТЕМЫ, например, аналог Uber].

# Требования к ответу
1. **Высокоуровневая схема**: Микросервисы, базы данных, очереди сообщений.
2. **Выбор технологий**: Обоснование выбора (PostgreSQL vs MongoDB, Kafka vs RabbitMQ).
3. **Масштабируемость**: Как система будет справляться с ростом нагрузки (шардирование, репликация).
4. **Отказоустойчивость**: Что произойдет, если упадет один из дата-центров.

# Формат
Текстовое описание + Mermaid диаграмма.
`,
    tags: ['архитектура', 'system-design', 'ru']
  },
  {
    title: 'Code Review Эксперт',
    description: 'Глубокий анализ кода на русском.',
    category: 'programming',
    prompt_text: `
# Контекст
Ты — техлид команды разработки. Тебе принесли на ревью следующий код.

# Цель
Найти ошибки, потенциальные баги, проблемы с производительностью и стилем кода.

# Чек-лист
- Безопасность (SQL инъекции, XSS).
- Чистота кода (названия переменных, декомпозиция).
- Оптимизация (лишние циклы, тяжелые запросы).

# Код
[ВСТАВИТЬ КОД]

# Вывод
Предложи исправленный вариант кода с комментариями.
`,
    tags: ['code-review', 'рефакторинг', 'ru']
  },
  {
    title: 'Генератор SQL (Сложные запросы)',
    description: 'Написание оптимизированных SQL запросов.',
    category: 'programming',
    prompt_text: `
# Роль
Senior Database Administrator.

# Задача
Написать SQL запрос для следующей бизнес-задачи: [ОПИСАНИЕ, например, Найти топ-10 клиентов по сумме покупок за последний месяц, у которых не было возвратов].

# Схема Базы Данных
- Users (id, name, created_at)
- Orders (id, user_id, amount, status, date)
- Returns (id, order_id, reason)

# Требования
- Использовать CTE (Common Table Expressions) для читаемости.
- Избегать N+1 проблем и лишних джойнов.
- Объяснить план выполнения запроса.
`,
    tags: ['sql', 'базы-данных', 'ru']
  },
  {
    title: 'Аналитик Данных (Pandas)',
    description: 'Профессиональный анализ данных на Python.',
    category: 'data-analysis',
    prompt_text: `
# Роль
Senior Data Analyst.

# Контекст
У меня есть DataFrame 	'df' с данными о продажах: [Date, Region, Product, Sales, Quantity].

# Задача
1. Провести когортный анализ (Cohort Analysis) пользователей.
2. Рассчитать Retention Rate по месяцам.
3. Визуализировать результаты с помощью библиотеки Seaborn (heatmap).

# Требование
Предоставить полный, готовый к запуску код на Python с комментариями на русском языке.
`,
    tags: ['python', 'pandas', 'аналитика', 'ru']
  },
  {
    title: 'Маркетинговый Копирайтер (AIDA)',
    description: 'Продающие тексты по формуле AIDA.',
    category: 'writing',
    prompt_text: `
# Роль
Профессиональный копирайтер.

# Задача
Написать текст для рекламного поста в Telegram канал о [ПРОДУКТ/КУРС].

# Формула: AIDA
- **Attention (Внимание)**: Заголовок, который заставляет остановиться (кликубейт, но честный).
- **Interest (Интерес)**: Раскрытие боли клиента и интрига.
- **Desire (Желание)**: Описание выгод (не свойств!) продукта.
- **Action (Действие)**: Призыв к действию (CTA).

# Тон
Дружелюбный, но экспертный. Без воды и штампов ("уникальный продукт", "индивидуальный подход").
`,
    tags: ['копирайтинг', 'маркетинг', 'telegram', 'ru']
  },
  {
    title: 'HR-эксперт: Собеседование',
    description: 'Симуляция собеседования (Mock Interview).',
    category: 'business',
    prompt_text: `
# Роль
Нанимающий менеджер (Hiring Manager) в крупную IT-компанию.

# Задача
Провести симуляцию собеседования на позицию [ПОЗИЦИЯ, например, Middle Frontend Developer].

# Процесс
1. Задай мне первый вопрос (технический или поведенческий).
2. Жди моего ответа.
3. Оцени мой ответ, укажи на ошибки и дай улучшенную версию ответа.
4. Задай следующий вопрос.

Начни с приветствия и первого вопроса.
`,
    tags: ['собеседование', 'карьера', 'обучение', 'ru']
  },
  {
    title: 'Midjourney Промпт-Инженер',
    description: 'Создание профессиональных промптов для генерации изображений.',
    category: 'images',
    prompt_text: `
# Задача
Преврати мою идею в профессиональный промпт для Midjourney v6.

# Идея
[ОПИСАНИЕ ИДЕИ, например, Кот-космонавт на Марсе]

# Структура Промпта
[Subject] + [Art Style] + [Composition] + [Lighting/Color] + [Mood] + [Technical params].

# Детали для добавления
- Стиль: Киберпанк или Реализм (выбери подходящий).
- Детализация: Insane detail, 8k, Unreal Engine 5 render.
- Свет: Volumetric lighting, neon ambiance.
- Параметры: --ar 16:9 --v 6.0 --s 750.

# Вывод
Только английский текст промпта, готовый к копированию.
`,
    tags: ['midjourney', 'ai-art', 'промпт-инжиниринг', 'ru']
  },
  {
    title: 'Бизнес-Консультант (SWOT)',
    description: 'Стратегический анализ бизнеса.',
    category: 'business',
    prompt_text: `
# Роль
Стратегический консультант McKinsey.

# Задача
Провести SWOT-анализ для [КОМПАНИЯ/ИДЕЯ].

# Формат
- **Strengths (Сильные стороны)**: Внутренние факторы.
- **Weaknesses (Слабые стороны)**: Внутренние факторы.
- **Opportunities (Возможности)**: Внешние факторы рынка.
- **Threats (Угрозы)**: Внешние риски.

# Вывод
На основе анализа предложи 3 стратегических шага на ближайший год.
`,
    tags: ['бизнес', 'стратегия', 'аналитика', 'ru']
  },
  {
    title: 'Создатель YouTube Сценариев',
    description: 'Сценарии для удержания аудитории.',
    category: 'writing',
    prompt_text: `
# Задача
Написать сценарий для YouTube видео на тему [ТЕМА]. Длительность: 10 минут.

# Структура
1. **Хук (0:00-0:45)**: Зацепить внимание, обозначить проблему.
2. **Интро (0:45-1:30)**: Кто ты и почему это важно.
3. **Основная часть (1:30-8:00)**: 3 ключевых совета/шага.
4. **Концовка (8:00-10:00)**: Выводы и байт на комментарий/лайк.

# Стиль
Динамичный, разговорный, с юмором. Укажи визуальные подсказки (B-roll) в скобках.
`,
    tags: ['youtube', 'сценарий', 'блогинг', 'ru']
  },
  {
    title: 'Переводчик-Локализатор',
    description: 'Контекстный перевод сложного текста.',
    category: 'writing',
    prompt_text: `
# Роль
Профессиональный переводчик художественной и технической литературы.

# Задача
Перевести следующий текст с английского на русский.

# Требования
- Не переводить дословно (Google Translate style).
- Сохранить стиль, тон и игру слов оригинала.
- Адаптировать идиомы под русский культурный код.

# Текст
[ВСТАВИТЬ ТЕКСТ]
`,
    tags: ['перевод', 'локализация', 'языки', 'ru']
  }
];

async function seed() {
  console.log('Starting seed process (v2 - Professional Edition)...');

  // 1. DELETE EXISTING PROMPTS
  // Note: Depending on RLS policies, simple delete might fail if policies restrict it. 
  // Ideally, use service_role key to bypass RLS.
  console.log('Clearing existing prompts...');
  const { error: deleteError } = await supabase
    .from('prompts')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows where ID is not nil (effectively all)

  if (deleteError) {
    console.error('Error deleting prompts:', deleteError);
    // Proceeding anyway might duplicate data, but typically 'neq' works for delete all.
  } else {
    console.log('Existing prompts cleared.');
  }
  
  // 2. INSERT NEW PROMPTS
  console.log('Inserting new professional prompts...');
  const { data, error } = await supabase
    .from('prompts')
    .insert(prompts)
    .select();

  if (error) {
    console.error('Error inserting prompts:', error);
  } else {
    console.log(`Successfully inserted ${data?.length} professional prompts.`);
  }
}

seed();
