export const initialPrompts = [
  // ==================== PROGRAMMING ====================
  {
    id: 'prog-001',
    title: 'Senior Code Reviewer',
    description: 'Comprehensive code review with focus on best practices, security, and performance',
    category: 'programming',
    prompt_text: `You are an experienced Senior Software Engineer conducting a thorough code review. Analyze the provided code with attention to:

**Code Quality:**
- Readability and maintainability
- Naming conventions and consistency
- Code organization and structure
- DRY (Don't Repeat Yourself) principles
- SOLID principles adherence

**Security:**
- Input validation and sanitization
- Authentication/authorization issues
- SQL injection, XSS, CSRF vulnerabilities
- Sensitive data exposure
- Dependency vulnerabilities

**Performance:**
- Algorithm complexity (Big O)
- Memory leaks and resource management
- Database query optimization
- Caching opportunities
- Unnecessary computations

**Best Practices:**
- Error handling and logging
- Edge cases coverage
- Documentation completeness
- Test coverage suggestions

Format your review as:
1. **Summary**: Brief overview of code quality
2. **Critical Issues**: Must-fix problems
3. **Improvements**: Suggested enhancements
4. **Positive Aspects**: What's done well

Code to review:
\`\`\`
[PASTE YOUR CODE HERE]
\`\`\``,
    tags: 'code-review,best-practices,security,performance',
    language: 'en'
  },
  {
    id: 'prog-002',
    title: 'Ревьювер кода',
    description: 'Комплексный обзор кода с фокусом на лучшие практики, безопасность и производительность',
    category: 'programming',
    prompt_text: `Ты опытный Senior Software Engineer, проводящий тщательный code review. Проанализируй предоставленный код, обращая внимание на:

**Качество кода:**
- Читаемость и поддерживаемость
- Соглашения об именовании и консистентность
- Организация и структура кода
- Принципы DRY (Don't Repeat Yourself)
- Соответствие принципам SOLID

**Безопасность:**
- Валидация и санитизация входных данных
- Проблемы аутентификации/авторизации
- Уязвимости SQL-инъекций, XSS, CSRF
- Утечка конфиденциальных данных
- Уязвимости зависимостей

**Производительность:**
- Сложность алгоритмов (Big O)
- Утечки памяти и управление ресурсами
- Оптимизация запросов к БД
- Возможности кэширования
- Лишние вычисления

**Лучшие практики:**
- Обработка ошибок и логирование
- Покрытие граничных случаев
- Полнота документации
- Предложения по тестированию

Формат ответа:
1. **Резюме**: Краткий обзор качества кода
2. **Критические проблемы**: Что нужно исправить обязательно
3. **Улучшения**: Рекомендуемые доработки
4. **Положительные аспекты**: Что сделано хорошо

Код для ревью:
\`\`\`
[ВСТАВЬТЕ ВАШ КОД СЮДА]
\`\`\``,
    tags: 'code-review,лучшие-практики,безопасность,производительность',
    language: 'ru'
  },
  {
    id: 'prog-003',
    title: 'Debug Detective',
    description: 'Systematic approach to debugging complex issues',
    category: 'programming',
    prompt_text: `You are a debugging expert. Help me systematically debug this issue using a structured approach:

**Problem Description:**
[Describe the bug/issue]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Environment:**
- Language/Framework:
- Version:
- OS:

**Steps to Reproduce:**
1.
2.
3.

**Error Messages/Logs:**
\`\`\`
[Paste any error messages or relevant logs]
\`\`\`

**Code Snippet:**
\`\`\`
[Relevant code]
\`\`\`

Please analyze this issue by:
1. Identifying potential root causes (ranked by likelihood)
2. Suggesting diagnostic steps to narrow down the issue
3. Providing specific fixes for each potential cause
4. Recommending preventive measures for the future`,
    tags: 'debugging,troubleshooting,problem-solving',
    language: 'en'
  },
  {
    id: 'prog-004',
    title: 'API Designer',
    description: 'Design RESTful APIs following best practices',
    category: 'programming',
    prompt_text: `You are an API architect. Design a RESTful API for the following requirements:

**Project Overview:**
[Describe your project/feature]

**Main Entities:**
[List the main data entities]

**Required Operations:**
[List what operations users need to perform]

Please provide:

1. **Resource Naming & Endpoints**
   - RESTful URL structure
   - HTTP methods for each operation
   - URL parameters and query strings

2. **Request/Response Schemas**
   - JSON request body structures
   - Response formats with status codes
   - Pagination, filtering, sorting patterns

3. **Authentication & Authorization**
   - Recommended auth method (JWT, OAuth2, API Key)
   - Permission levels and scopes

4. **Error Handling**
   - Standard error response format
   - Common error codes and messages

5. **Documentation**
   - OpenAPI/Swagger specification snippet
   - Example requests with curl

6. **Best Practices Applied**
   - Versioning strategy
   - Rate limiting recommendations
   - HATEOAS considerations`,
    tags: 'api-design,rest,architecture,backend',
    language: 'en'
  },
  {
    id: 'prog-005',
    title: 'Test Case Generator',
    description: 'Generate comprehensive test cases for your code',
    category: 'programming',
    prompt_text: `You are a QA Engineer specialized in test-driven development. Generate comprehensive test cases for the following:

**Function/Component to Test:**
\`\`\`
[Paste your code here]
\`\`\`

**Testing Framework:** [Jest/Pytest/JUnit/Other]

Please generate:

1. **Unit Tests**
   - Happy path scenarios
   - Edge cases (empty inputs, null, undefined, boundary values)
   - Error handling tests
   - Type validation tests

2. **Integration Tests** (if applicable)
   - Component interactions
   - API endpoint tests
   - Database operations

3. **Test Coverage Analysis**
   - Identify untested branches
   - Suggest additional scenarios

4. **Mock/Stub Suggestions**
   - External dependencies to mock
   - Sample mock implementations

5. **Performance Test Ideas**
   - Load testing scenarios
   - Stress test cases

Provide actual test code with:
- Descriptive test names (describe/it blocks)
- Arrange-Act-Assert pattern
- Setup and teardown where needed
- Assertions with meaningful error messages`,
    tags: 'testing,unit-tests,tdd,qa',
    language: 'en'
  },
  {
    id: 'prog-006',
    title: 'Рефакторинг Legacy кода',
    description: 'Пошаговое руководство по рефакторингу устаревшего кода',
    category: 'programming',
    prompt_text: `Ты эксперт по рефакторингу с 15-летним опытом работы с legacy системами. Помоги отрефакторить следующий код:

**Исходный код:**
\`\`\`
[ВСТАВЬТЕ КОД ЗДЕСЬ]
\`\`\`

**Контекст:**
- Язык/Фреймворк:
- Назначение кода:
- Известные проблемы:

Проведи рефакторинг, следуя этим шагам:

1. **Анализ проблем**
   - Code smells (запахи кода)
   - Нарушения принципов SOLID
   - Антипаттерны
   - Технический долг

2. **План рефакторинга**
   - Порядок изменений (от безопасных к рискованным)
   - Точки для добавления тестов
   - Потенциальные риски

3. **Пошаговый рефакторинг**
   - Каждый шаг отдельно с объяснением
   - До и после для каждого изменения
   - Сохранение обратной совместимости

4. **Финальный код**
   - Полностью отрефакторенная версия
   - Комментарии к ключевым изменениям

5. **Рекомендации**
   - Тесты, которые нужно добавить
   - Дальнейшие улучшения
   - Как избежать подобных проблем в будущем`,
    tags: 'рефакторинг,legacy,clean-code,solid',
    language: 'ru'
  },
  {
    id: 'prog-007',
    title: 'SQL Query Optimizer',
    description: 'Optimize slow SQL queries for better performance',
    category: 'programming',
    prompt_text: `You are a Database Performance Expert. Analyze and optimize this SQL query:

**Current Query:**
\`\`\`sql
[PASTE YOUR SQL QUERY HERE]
\`\`\`

**Table Schema:**
\`\`\`sql
[PASTE TABLE DEFINITIONS]
\`\`\`

**Current Performance:**
- Execution time:
- Rows scanned:
- Database engine: [MySQL/PostgreSQL/SQL Server/Other]

**Data Volume:**
- Approximate row counts per table:

Please provide:

1. **Query Analysis**
   - Execution plan interpretation
   - Bottleneck identification
   - Full table scans detection

2. **Optimization Recommendations**
   - Query rewriting suggestions
   - Index recommendations (with CREATE INDEX statements)
   - Join optimization
   - Subquery to JOIN conversions

3. **Optimized Query**
   - Rewritten query with explanations
   - Expected performance improvement

4. **Additional Recommendations**
   - Partitioning strategies
   - Caching considerations
   - Denormalization options (if applicable)

5. **Monitoring Queries**
   - Queries to check index usage
   - Performance monitoring suggestions`,
    tags: 'sql,database,optimization,performance',
    language: 'en'
  },

  // ==================== IMAGES ====================
  {
    id: 'img-001',
    title: 'Cinematic Portrait Generator',
    description: 'Create stunning cinematic portraits with detailed lighting and atmosphere',
    category: 'images',
    prompt_text: `Cinematic portrait of [SUBJECT DESCRIPTION], shot on Arri Alexa, anamorphic lens with subtle lens flare, shallow depth of field f/1.4, golden hour lighting with warm rim light, moody atmosphere, film grain, color graded in teal and orange, professional photography, 8K resolution, photorealistic, by Roger Deakins

**Customization variables:**
- Subject: [person/character description]
- Mood: [dramatic/peaceful/mysterious/romantic]
- Lighting: [golden hour/blue hour/studio/natural]
- Color palette: [teal-orange/warm/cold/monochrome]
- Era/Style: [modern/vintage/noir/cyberpunk]

**Negative prompt:**
cartoon, illustration, painting, drawing, anime, low quality, blurry, distorted, deformed, bad anatomy, watermark, text, logo`,
    tags: 'portrait,cinematic,photography,midjourney,dalle',
    language: 'en'
  },
  {
    id: 'img-002',
    title: 'Фотореалистичный продукт',
    description: 'Создание профессиональных фото продуктов для рекламы',
    category: 'images',
    prompt_text: `Профессиональная студийная фотография [НАЗВАНИЕ ПРОДУКТА], минималистичный белый фон, мягкое рассеянное освещение с трёх точек, лёгкие тени, отражение на глянцевой поверхности, макросъёмка с фокусом на деталях, разрешение 8K, коммерческая фотография уровня Apple/Samsung, чистая композиция, идеальный баланс белого

**Настройки для вариаций:**
- Продукт: [описание товара]
- Фон: [белый/градиент/цветной/текстурированный]
- Стиль: [минимализм/лакшери/tech/эко]
- Ракурс: [фронтальный/3/4/сверху/изометрия]
- Дополнительно: [капли воды/дым/левитация/в использовании]

**Негативный промпт:**
размытое, низкое качество, шум, артефакты, нереалистичные тени, водяные знаки, текст, рамки, коллаж`,
    tags: 'продукт,реклама,фотография,коммерческий',
    language: 'ru'
  },
  {
    id: 'img-003',
    title: 'Fantasy Environment Concept',
    description: 'Create detailed fantasy world environments for games and art',
    category: 'images',
    prompt_text: `Epic fantasy landscape concept art, [ENVIRONMENT TYPE] with [KEY FEATURES], dramatic volumetric lighting, god rays piercing through clouds, atmosphere perspective, intricate details, matte painting style, trending on ArtStation, by Craig Mullins and Sparth, 4K wallpaper quality, cinematic composition with rule of thirds, rich color palette

**Environment templates:**
- Enchanted Forest: ancient twisted trees, bioluminescent mushrooms, floating particles, mystical fog
- Floating Islands: waterfalls cascading into void, rope bridges, airships in distance, crystal formations
- Ancient Ruins: overgrown temple, massive stone statues, jungle reclaiming architecture, hidden treasure glow
- Ice Kingdom: frozen castle, northern lights, ice sculptures, snow-covered peaks
- Underground Cavern: crystal caves, underground lake, ancient dwarven architecture, torch lighting

**Style modifiers:**
- Time: [sunrise/sunset/night/stormy]
- Season: [spring/summer/autumn/winter]
- Mood: [mysterious/epic/peaceful/dangerous]

**Negative prompt:**
blurry, low quality, distorted, amateur, oversaturated, text, watermark, frame`,
    tags: 'fantasy,landscape,concept-art,environment,game-art',
    language: 'en'
  },
  {
    id: 'img-004',
    title: 'Character Design Sheet',
    description: 'Generate character design sheets for games and animation',
    category: 'images',
    prompt_text: `Professional character design sheet for [CHARACTER NAME], [CHARACTER DESCRIPTION], multiple views showing front/side/back angles, consistent style throughout, detailed costume design with annotations, color palette included, expression studies, action poses, anime/game art style by Ilya Kuvshinov and Artgerm, clean lines, white background, professional concept art for video game

**Character details to specify:**
- Role: [protagonist/antagonist/NPC/creature]
- Genre: [fantasy/sci-fi/modern/historical]
- Personality: [traits that influence design]
- Signature features: [unique visual elements]
- Weapons/Items: [equipment they carry]
- Color scheme: [primary and accent colors]

**Sheet components:**
- Full body turnaround (3-4 angles)
- Face close-up with expressions (happy, angry, sad, surprised)
- Outfit details and variations
- Props and accessories
- Size comparison with other characters

**Negative prompt:**
inconsistent style, different characters, blurry, low quality, cropped, partial body, messy lines`,
    tags: 'character-design,concept-art,game-art,animation',
    language: 'en'
  },
  {
    id: 'img-005',
    title: 'Архитектурная визуализация',
    description: 'Фотореалистичные рендеры архитектурных проектов',
    category: 'images',
    prompt_text: `Фотореалистичная архитектурная визуализация, [ТИП ЗДАНИЯ] в стиле [АРХИТЕКТУРНЫЙ СТИЛЬ], вид [РАКУРС], профессиональный архитектурный рендер, V-Ray качество, естественное освещение [ВРЕМЯ СУТОК], ландшафтный дизайн, люди для масштаба, реалистичные материалы (бетон, стекло, дерево, металл), отражения в стёклах, мягкие тени, глубина резкости, 8K разрешение, уровень Dezeen/ArchDaily

**Типы зданий:**
- Жилой дом: современный коттедж, многоквартирный комплекс, вилла
- Коммерческая: офисное здание, торговый центр, отель
- Общественная: музей, библиотека, культурный центр
- Промышленная: лофт, склад, творческое пространство

**Архитектурные стили:**
- Модернизм: чистые линии, большие окна, плоские крыши
- Скандинавский: дерево, белые стены, панорамные окна
- Брутализм: необработанный бетон, массивные формы
- Параметрический: органические формы, алгоритмический дизайн
- Японский минимализм: простота, природные материалы, свет

**Негативный промпт:**
нереалистичные пропорции, плохое освещение, видимые артефакты рендера, водяные знаки, низкое разрешение`,
    tags: 'архитектура,визуализация,3d,рендер',
    language: 'ru'
  },
  {
    id: 'img-006',
    title: 'Isometric Game Assets',
    description: 'Create consistent isometric art for games',
    category: 'images',
    prompt_text: `Isometric game asset, [OBJECT/BUILDING], cute stylized low poly art style, vibrant colors, soft shadows, clean edges, mobile game aesthetic, consistent 45-degree angle, white or transparent background, game-ready design, inspired by Clash of Clans and Hay Day art style, vector-clean look

**Asset categories:**
- Buildings: house, shop, factory, castle, farm, tower
- Nature: trees, rocks, bushes, flowers, water tiles
- Vehicles: car, truck, boat, airplane, fantasy mounts
- Characters: villagers, warriors, animals, NPCs
- Props: crates, barrels, signs, furniture, decorations

**Style guide:**
- Color palette: [bright/pastel/earthy/fantasy]
- Detail level: [simple/medium/detailed]
- Theme: [medieval/modern/sci-fi/farming]
- Mood: [cheerful/serious/spooky/magical]

**Technical specs:**
- Consistent lighting from top-left
- 2:1 isometric ratio
- Tileable edges for ground assets
- Animation-friendly design

**Negative prompt:**
inconsistent angle, wrong perspective, realistic, dark, gloomy, complex textures, photo`,
    tags: 'isometric,game-assets,mobile-game,lowpoly',
    language: 'en'
  },
  {
    id: 'img-007',
    title: 'Abstract Art Generator',
    description: 'Create unique abstract art pieces for prints and NFTs',
    category: 'images',
    prompt_text: `Abstract art composition, [STYLE] style, [COLOR SCHEME] color palette, [MOOD] atmosphere, high resolution digital art, suitable for large format print, contemporary art gallery quality, unique and original design, trending on Behance

**Style options:**
- Geometric: sharp angles, mathematical precision, Kandinsky influence
- Fluid: organic shapes, flowing lines, liquid marble effect
- Minimalist: simple forms, negative space, Zen aesthetic
- Expressionist: bold brushstrokes, emotional intensity, de Kooning style
- Glitch: digital artifacts, chromatic aberration, cyberpunk aesthetic
- Generative: algorithmic patterns, mathematical beauty, fractal elements

**Color schemes:**
- Monochromatic: variations of single color
- Complementary: opposing colors for contrast
- Analogous: harmonious adjacent colors
- Neon: vibrant electric colors on dark background
- Earthy: natural muted tones
- Pastel: soft delicate colors

**Texture additions:**
- Canvas texture
- Paper grain
- Digital noise
- Metallic elements
- Glass/crystal effects

**Negative prompt:**
figurative, realistic, faces, text, logo, watermark, low resolution, blurry`,
    tags: 'abstract,art,nft,print,digital-art',
    language: 'en'
  },

  // ==================== DATA ANALYSIS ====================
  {
    id: 'data-001',
    title: 'Data Cleaning Expert',
    description: 'Comprehensive data cleaning and preprocessing guidance',
    category: 'data-analysis',
    prompt_text: `You are a Data Quality Specialist. Help me clean and preprocess this dataset:

**Dataset Description:**
- Source: [where the data comes from]
- Format: [CSV/JSON/Excel/SQL]
- Rows: [approximate count]
- Columns: [list main columns]
- Purpose: [what analysis will be done]

**Sample Data (first 5-10 rows):**
\`\`\`
[PASTE SAMPLE DATA]
\`\`\`

**Known Issues:**
[List any known problems]

Please provide a comprehensive data cleaning plan:

1. **Data Quality Assessment**
   - Missing values analysis per column
   - Duplicate records detection
   - Data type inconsistencies
   - Outlier identification
   - Format standardization needs

2. **Cleaning Strategy**
   - Missing value handling (imputation/deletion strategies)
   - Duplicate handling approach
   - Outlier treatment methods
   - Data type conversions
   - String standardization (case, trimming, encoding)

3. **Python/Pandas Code**
\`\`\`python
# Complete cleaning pipeline with comments
\`\`\`

4. **Validation Steps**
   - Assertions to verify data quality
   - Statistical summaries before/after
   - Data profiling recommendations

5. **Documentation**
   - Data dictionary template
   - Transformation log format`,
    tags: 'data-cleaning,preprocessing,pandas,data-quality',
    language: 'en'
  },
  {
    id: 'data-002',
    title: 'Анализ данных эксперта',
    description: 'Комплексный анализ данных с выводами и рекомендациями',
    category: 'data-analysis',
    prompt_text: `Ты старший Data Analyst с опытом в бизнес-аналитике. Проведи комплексный анализ данных:

**Описание данных:**
- Бизнес-контекст: [отрасль, компания]
- Цель анализа: [что хотим узнать]
- Период данных: [временной диапазон]

**Данные:**
\`\`\`
[ВСТАВЬТЕ ДАННЫЕ ИЛИ ОПИСАНИЕ СТРУКТУРЫ]
\`\`\`

**Бизнес-вопросы:**
1. [Вопрос 1]
2. [Вопрос 2]
3. [Вопрос 3]

Проведи анализ по следующей структуре:

1. **Исследовательский анализ (EDA)**
   - Описательная статистика
   - Распределения ключевых переменных
   - Корреляционный анализ
   - Временные тренды (если применимо)

2. **Визуализации (код Python/matplotlib/seaborn)**
   - Графики для каждого инсайта
   - Интерактивные дашборды (plotly)

3. **Ключевые инсайты**
   - Главные находки с числами
   - Аномалии и их объяснения
   - Паттерны в данных

4. **Статистические тесты**
   - Проверка гипотез
   - Доверительные интервалы
   - Значимость результатов

5. **Бизнес-рекомендации**
   - Конкретные действия
   - Приоритизация по impact
   - Метрики для отслеживания

6. **Дальнейшие шаги**
   - Дополнительные данные для сбора
   - Углублённый анализ
   - A/B тесты для валидации`,
    tags: 'анализ-данных,eda,визуализация,бизнес-аналитика',
    language: 'ru'
  },
  {
    id: 'data-003',
    title: 'Dashboard Design Consultant',
    description: 'Design effective dashboards for business intelligence',
    category: 'data-analysis',
    prompt_text: `You are a Business Intelligence Consultant specializing in dashboard design. Help me create an effective dashboard:

**Business Context:**
- Department: [Sales/Marketing/Finance/Operations/HR]
- Audience: [Executives/Managers/Analysts/All employees]
- Goal: [Monitor KPIs/Identify trends/Support decisions]
- Refresh frequency: [Real-time/Daily/Weekly/Monthly]

**Available Data:**
\`\`\`
[List available data sources, tables, metrics]
\`\`\`

**Key Questions to Answer:**
1. [Question 1]
2. [Question 2]
3. [Question 3]

Please provide:

1. **Dashboard Architecture**
   - Number of pages/tabs
   - Information hierarchy
   - User flow design

2. **KPI Selection**
   - Primary metrics (3-5 main KPIs)
   - Secondary metrics
   - Benchmark values and targets
   - Calculation formulas

3. **Visualization Recommendations**
   - Chart type for each metric (with reasoning)
   - Color palette and conventions
   - Interactive elements (filters, drill-downs)

4. **Layout Design**
   - Wireframe description
   - Component placement rationale
   - Mobile responsiveness considerations

5. **Implementation Guide**
   - Tool recommendation (Tableau/Power BI/Looker/Metabase)
   - SQL queries for key metrics
   - DAX/calculated field formulas
   - Performance optimization tips

6. **Best Practices Applied**
   - Data storytelling principles
   - Cognitive load management
   - Accessibility considerations`,
    tags: 'dashboard,bi,visualization,tableau,powerbi',
    language: 'en'
  },
  {
    id: 'data-004',
    title: 'Statistical Analysis Guide',
    description: 'Choose and apply the right statistical methods',
    category: 'data-analysis',
    prompt_text: `You are a Statistician and Research Methodologist. Help me choose and apply the correct statistical analysis:

**Research Question:**
[State your research question or hypothesis]

**Study Design:**
- Type: [Experimental/Observational/Survey/Other]
- Sample size: [N = ]
- Groups: [Number and description of groups]

**Variables:**
- Dependent (Y): [name, type: continuous/categorical/ordinal]
- Independent (X): [name, type]
- Control variables: [if any]

**Data Sample:**
\`\`\`
[Paste sample or describe distribution]
\`\`\`

Please provide:

1. **Method Selection**
   - Recommended statistical test with justification
   - Assumptions to check
   - Alternative methods if assumptions violated

2. **Assumptions Testing**
   - Normality tests (Shapiro-Wilk, Q-Q plots)
   - Homogeneity of variance (Levene's test)
   - Independence checks
   - Python/R code for each test

3. **Analysis Implementation**
   - Step-by-step code with explanations
   - Effect size calculations
   - Confidence intervals

4. **Results Interpretation**
   - How to read the output
   - Statistical vs practical significance
   - APA format reporting template

5. **Visualization**
   - Appropriate plots for results
   - Code for publication-ready figures

6. **Limitations & Caveats**
   - Power analysis
   - Multiple comparison corrections
   - Generalizability considerations`,
    tags: 'statistics,hypothesis-testing,research,methodology',
    language: 'en'
  },
  {
    id: 'data-005',
    title: 'ML Model Selection Advisor',
    description: 'Choose the right machine learning approach for your problem',
    category: 'data-analysis',
    prompt_text: `You are a Machine Learning Engineer. Help me select and implement the right ML approach:

**Problem Description:**
[Describe what you're trying to predict/classify/cluster]

**Data Overview:**
- Rows: [number of samples]
- Features: [number and types]
- Target variable: [if supervised: type and distribution]
- Data quality: [missing values %, outliers]

**Sample Data:**
\`\`\`
[Paste sample or schema]
\`\`\`

**Constraints:**
- Interpretability requirement: [High/Medium/Low]
- Training time budget: [seconds/minutes/hours]
- Inference latency requirement: [real-time/batch]
- Infrastructure: [local/cloud/edge]

Please provide:

1. **Problem Framing**
   - ML task type (classification/regression/clustering/etc.)
   - Evaluation metrics to use
   - Baseline model definition

2. **Algorithm Recommendations**
   - Top 3 algorithms with pros/cons
   - Why each fits this problem
   - Complexity vs performance tradeoff

3. **Feature Engineering Suggestions**
   - Transformations to consider
   - Feature selection methods
   - Encoding strategies for categorical variables

4. **Implementation Pipeline**
\`\`\`python
# Complete scikit-learn/tensorflow/pytorch pipeline
# Including preprocessing, training, evaluation
\`\`\`

5. **Hyperparameter Tuning**
   - Key parameters to tune
   - Search space recommendations
   - Cross-validation strategy

6. **Model Evaluation**
   - Validation approach
   - Metrics interpretation
   - Overfitting detection

7. **Deployment Considerations**
   - Model serialization
   - Monitoring recommendations
   - Retraining triggers`,
    tags: 'machine-learning,model-selection,scikit-learn,data-science',
    language: 'en'
  },
  {
    id: 'data-006',
    title: 'Excel/Sheets Formula Expert',
    description: 'Complex spreadsheet formulas and automation',
    category: 'data-analysis',
    prompt_text: `You are an Excel/Google Sheets expert. Help me create formulas for:

**Task Description:**
[Describe what you want to achieve]

**Current Data Structure:**
- Sheet names: [list sheets]
- Relevant columns: [describe columns A, B, C, etc.]
- Data range: [e.g., A1:F1000]
- Sample data:
\`\`\`
[Paste a few rows as example]
\`\`\`

**Desired Output:**
[Describe what results you expect]

Please provide:

1. **Formula Solution**
   - Main formula with explanation
   - Alternative approaches
   - Excel vs Google Sheets syntax differences (if any)

2. **Step-by-Step Breakdown**
   - Each function explained
   - How they work together
   - Common modifications

3. **Error Handling**
   - IFERROR wrapping
   - Handling blank cells
   - Data validation suggestions

4. **Performance Optimization**
   - For large datasets
   - Array formula vs helper columns
   - Volatile function alternatives

5. **Related Formulas**
   - Variations for similar tasks
   - Complementary formulas

**Common formula types I can help with:**
- VLOOKUP/XLOOKUP/INDEX-MATCH
- SUMIFS/COUNTIFS/AVERAGEIFS
- Array formulas and FILTER
- Text manipulation (CONCAT, SPLIT, REGEX)
- Date calculations
- Conditional formatting formulas
- Dynamic ranges and OFFSET
- Pivot table alternatives`,
    tags: 'excel,google-sheets,formulas,spreadsheet',
    language: 'en'
  },
  {
    id: 'data-007',
    title: 'A/B Test Analysis',
    description: 'Design and analyze A/B tests correctly',
    category: 'data-analysis',
    prompt_text: `You are an Experimentation Specialist. Help me with A/B testing:

**Experiment Context:**
- Product/Feature: [what are you testing]
- Hypothesis: [what you expect to happen]
- Primary metric: [main KPI to measure]
- Secondary metrics: [other metrics to track]

**Current Baseline:**
- Conversion rate / metric value: [current performance]
- Traffic volume: [daily/weekly visitors]
- Historical variance: [if known]

**Desired Analysis:**
[Pre-test planning / Post-test analysis / Both]

---

**For PRE-TEST Planning, I'll provide:**

1. **Sample Size Calculation**
   - Minimum detectable effect (MDE)
   - Required sample per variant
   - Expected test duration
   - Python code for power analysis

2. **Experiment Design**
   - Randomization strategy
   - Variant allocation
   - Guardrail metrics
   - Stopping rules

3. **Implementation Checklist**
   - Technical requirements
   - QA verification steps
   - Logging requirements

---

**For POST-TEST Analysis, provide your data:**
\`\`\`
[Paste results: users, conversions per variant]
\`\`\`

**I'll provide:**

1. **Statistical Analysis**
   - Z-test/T-test results
   - Confidence intervals
   - P-value interpretation
   - Effect size calculation

2. **Segmentation Analysis**
   - Performance by segment
   - Interaction effects
   - Simpson's paradox check

3. **Decision Framework**
   - Ship / Iterate / Kill recommendation
   - Risk assessment
   - Expected impact calculation

4. **Documentation**
   - Results summary template
   - Stakeholder presentation format`,
    tags: 'ab-testing,experimentation,statistics,growth',
    language: 'en'
  }
];
