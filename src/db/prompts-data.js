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
  },

  // ==================== NEW PROGRAMMING PROMPTS ====================
  {
    id: 'prog-008',
    title: 'Git Workflow Expert',
    description: 'Resolve Git issues and learn advanced Git workflows',
    category: 'programming',
    prompt_text: `You are a Git expert. Help me with the following Git situation:

**Current Situation:**
[Describe your Git problem or what you want to achieve]

**Repository State:**
- Current branch:
- Remote branches involved:
- Any uncommitted changes: [yes/no]

**Git History (if relevant):**
\`\`\`
[Paste output of: git log --oneline -10]
\`\`\`

**Error Message (if any):**
\`\`\`
[Paste any error messages]
\`\`\`

Please provide:

1. **Solution**
   - Step-by-step Git commands with explanations
   - What each command does
   - Expected output after each step

2. **Safety Checks**
   - How to backup current state before risky operations
   - How to undo if something goes wrong
   - Commands to verify success

3. **Prevention**
   - How to avoid this situation in the future
   - Best practices for this workflow

**Common scenarios I can help with:**
- Merge conflicts resolution
- Rebasing and squashing commits
- Cherry-picking specific commits
- Recovering deleted branches/commits
- Cleaning up Git history
- Setting up Git hooks
- Submodules and subtrees
- Bisect for finding bugs
- Stash management
- Branch strategies (GitFlow, trunk-based)`,
    tags: 'git,version-control,merge,rebase',
    language: 'en'
  },
  {
    id: 'prog-009',
    title: 'Docker & Containerization',
    description: 'Create optimized Dockerfiles and docker-compose configurations',
    category: 'programming',
    prompt_text: `You are a Docker and containerization expert. Help me with:

**Project Details:**
- Application type: [web app/API/microservice/database/etc.]
- Language/Framework: [Node.js/Python/Go/Java/etc.]
- Dependencies: [list main dependencies]

**Current Setup (if any):**
\`\`\`dockerfile
[Paste existing Dockerfile or describe current state]
\`\`\`

**Requirements:**
- Environment: [development/production/both]
- Need docker-compose: [yes/no]
- Special requirements: [GPU support/volumes/networking/etc.]

Please provide:

1. **Optimized Dockerfile**
   - Multi-stage build (if applicable)
   - Security best practices (non-root user, minimal base image)
   - Layer caching optimization
   - .dockerignore recommendations

2. **Docker Compose** (if needed)
   - Service definitions
   - Network configuration
   - Volume management
   - Environment variables handling
   - Health checks

3. **Build & Run Commands**
   - Development workflow
   - Production deployment
   - Debugging containers

4. **Best Practices Applied**
   - Image size optimization
   - Security hardening
   - Logging configuration
   - Resource limits

5. **CI/CD Integration**
   - GitHub Actions / GitLab CI example
   - Registry push commands
   - Versioning strategy`,
    tags: 'docker,containers,devops,dockerfile,docker-compose',
    language: 'en'
  },
  {
    id: 'prog-010',
    title: 'React Component Architect',
    description: 'Design and build scalable React components',
    category: 'programming',
    prompt_text: `You are a Senior React Developer. Help me build a React component:

**Component Requirements:**
- Name: [ComponentName]
- Purpose: [what the component does]
- Props needed: [list expected props]
- State requirements: [local state needs]

**Technical Context:**
- React version: [16/17/18/19]
- Styling: [CSS Modules/Styled Components/Tailwind/etc.]
- State management: [useState/useReducer/Redux/Zustand/etc.]
- TypeScript: [yes/no]

**Design Reference (if any):**
[Describe UI/UX requirements or paste design specs]

Please provide:

1. **Component Architecture**
   - File structure recommendation
   - Sub-components breakdown
   - Props interface (TypeScript)

2. **Implementation**
\`\`\`tsx
// Complete component code with:
// - TypeScript types/interfaces
// - Proper hooks usage
// - Error boundaries consideration
// - Accessibility (ARIA)
// - Performance optimization (memo, useMemo, useCallback)
\`\`\`

3. **Styling**
   - CSS/styled-components code
   - Responsive design
   - Theme integration

4. **Testing**
   - Unit tests with React Testing Library
   - Key test scenarios
   - Mock data examples

5. **Usage Example**
   - How to import and use
   - Common prop combinations
   - Edge cases handling

6. **Best Practices Applied**
   - Composition over inheritance
   - Controlled vs uncontrolled
   - Custom hooks extraction
   - Error handling`,
    tags: 'react,components,frontend,typescript,hooks',
    language: 'en'
  },
  {
    id: 'prog-011',
    title: 'TypeScript Type Wizard',
    description: 'Create advanced TypeScript types and solve type challenges',
    category: 'programming',
    prompt_text: `You are a TypeScript expert. Help me with advanced typing:

**Problem:**
[Describe what you're trying to type or the type error you're facing]

**Current Code:**
\`\`\`typescript
[Paste your code with type issues]
\`\`\`

**Error Message (if any):**
\`\`\`
[Paste TypeScript error]
\`\`\`

**Goal:**
[What should the types achieve? What constraints?]

Please provide:

1. **Solution**
   - Corrected/new type definitions
   - Explanation of each type construct used

2. **Type Breakdown**
   - Generic parameters explained
   - Conditional types logic
   - Mapped types usage
   - Utility types applied

3. **Alternative Approaches**
   - Different ways to achieve the same result
   - Trade-offs of each approach

4. **Type Guards** (if applicable)
   - Runtime type checking functions
   - Narrowing strategies

5. **Common Patterns Used**
   - Template literal types
   - Infer keyword usage
   - Recursive types
   - Branded types
   - Discriminated unions

**I can help with:**
- Generic type constraints
- Conditional types
- Mapped types
- Type inference
- Declaration merging
- Module augmentation
- Strict mode issues
- Any to unknown migration
- Type-safe API responses`,
    tags: 'typescript,types,generics,type-safety',
    language: 'en'
  },
  {
    id: 'prog-012',
    title: 'Python Best Practices',
    description: 'Write Pythonic code following PEP standards',
    category: 'programming',
    prompt_text: `You are a Python expert. Help me write better Python code:

**Task:**
[Describe what you want to implement]

**Current Code (if refactoring):**
\`\`\`python
[Paste your code]
\`\`\`

**Python Version:** [3.8/3.9/3.10/3.11/3.12]

**Context:**
- Project type: [script/library/web app/data science]
- Dependencies available: [list libraries you can use]

Please provide:

1. **Pythonic Implementation**
\`\`\`python
# Code following PEP 8 and Python best practices
# With type hints (PEP 484)
# Docstrings (Google/NumPy style)
\`\`\`

2. **Code Explanation**
   - Why this approach is Pythonic
   - Performance considerations
   - Memory efficiency

3. **Error Handling**
   - Appropriate exception types
   - Context managers (with statement)
   - Logging setup

4. **Testing**
   - pytest test cases
   - Fixtures if needed
   - Parametrized tests

5. **Project Structure** (if applicable)
   - Module organization
   - __init__.py setup
   - requirements.txt / pyproject.toml

**Python patterns I apply:**
- List/dict/set comprehensions
- Generator expressions
- Context managers
- Decorators
- dataclasses / Pydantic
- async/await patterns
- functools utilities
- itertools magic`,
    tags: 'python,pep8,best-practices,clean-code',
    language: 'en'
  },
  {
    id: 'prog-013',
    title: 'Security Code Auditor',
    description: 'Find and fix security vulnerabilities in code',
    category: 'programming',
    prompt_text: `You are a Security Engineer specializing in secure code review. Audit this code for vulnerabilities:

**Code to Audit:**
\`\`\`
[PASTE YOUR CODE HERE]
\`\`\`

**Context:**
- Language/Framework:
- Application type: [web/mobile/API/desktop]
- Data sensitivity: [public/internal/confidential/PII]
- Authentication present: [yes/no]

**Specific Concerns:**
[Any areas you're particularly worried about]

Please provide:

1. **Vulnerability Assessment**
   - OWASP Top 10 check
   - CWE classifications
   - Severity rating (Critical/High/Medium/Low)
   - CVSS score estimate

2. **Detailed Findings**
   For each vulnerability:
   - Location in code (line numbers)
   - Vulnerability type
   - Attack scenario
   - Proof of concept (safe demonstration)
   - Remediation code

3. **Security Headers/Config** (for web apps)
   - Missing security headers
   - CORS configuration
   - CSP recommendations

4. **Authentication/Authorization**
   - Session management issues
   - Password handling
   - Access control flaws

5. **Data Protection**
   - Encryption needs
   - Sensitive data exposure
   - Logging of sensitive info

6. **Secure Code Rewrite**
\`\`\`
[Fixed version of the code]
\`\`\`

7. **Security Testing**
   - Test cases for vulnerabilities
   - Tools to use for scanning`,
    tags: 'security,audit,owasp,vulnerabilities,secure-coding',
    language: 'en'
  },
  {
    id: 'prog-014',
    title: 'Documentation Generator',
    description: 'Generate comprehensive documentation for code',
    category: 'programming',
    prompt_text: `You are a Technical Writer specializing in software documentation. Create documentation for:

**Code to Document:**
\`\`\`
[PASTE YOUR CODE HERE]
\`\`\`

**Documentation Type Needed:**
- [ ] API Reference
- [ ] README
- [ ] User Guide
- [ ] Developer Guide
- [ ] Inline Comments
- [ ] JSDoc/PyDoc/Javadoc

**Audience:**
- [ ] End Users
- [ ] Developers (internal)
- [ ] Developers (open source)
- [ ] API Consumers

**Project Info:**
- Project name:
- Brief description:
- Installation method:

Please provide:

1. **README.md**
   - Project badges
   - Description
   - Features list
   - Quick start guide
   - Installation instructions
   - Usage examples
   - Configuration options
   - Contributing guidelines
   - License

2. **API Documentation**
   - Endpoint/function descriptions
   - Parameters with types
   - Return values
   - Error codes
   - Code examples
   - OpenAPI/Swagger spec (if API)

3. **Inline Documentation**
   - Docstrings/JSDoc comments
   - Complex logic explanations
   - TODO/FIXME annotations

4. **Architecture Documentation**
   - System overview diagram (Mermaid)
   - Component interactions
   - Data flow description

5. **Changelog Template**
   - Version history format
   - Breaking changes highlighting`,
    tags: 'documentation,readme,api-docs,jsdoc,technical-writing',
    language: 'en'
  },
  {
    id: 'prog-015',
    title: 'System Design Architect',
    description: 'Design scalable system architectures',
    category: 'programming',
    prompt_text: `You are a System Design Architect. Help me design a system for:

**System Requirements:**
- What the system does: [brief description]
- Expected users: [number of concurrent users]
- Data volume: [storage needs, requests/second]
- Availability requirement: [99.9%, 99.99%, etc.]

**Functional Requirements:**
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]

**Non-Functional Requirements:**
- Latency: [expected response time]
- Consistency: [strong/eventual]
- Geographic distribution: [regions needed]

**Constraints:**
- Budget: [if relevant]
- Technology preferences: [cloud provider, languages]
- Timeline: [MVP vs full solution]

Please provide:

1. **High-Level Architecture**
   - System diagram (ASCII or Mermaid)
   - Component descriptions
   - Technology choices with justification

2. **Data Design**
   - Database selection (SQL/NoSQL/both)
   - Schema design
   - Sharding/partitioning strategy
   - Caching layers (Redis, CDN)

3. **API Design**
   - Key endpoints
   - Communication protocols (REST/GraphQL/gRPC)
   - Rate limiting strategy

4. **Scalability Plan**
   - Horizontal vs vertical scaling
   - Load balancing approach
   - Auto-scaling triggers
   - Bottleneck identification

5. **Reliability**
   - Failure scenarios and mitigations
   - Backup and recovery
   - Health monitoring
   - Circuit breakers

6. **Security Architecture**
   - Authentication flow
   - Data encryption
   - Network security

7. **Cost Estimation**
   - AWS/GCP/Azure services needed
   - Rough monthly cost
   - Cost optimization tips`,
    tags: 'system-design,architecture,scalability,distributed-systems',
    language: 'en'
  },
  {
    id: 'prog-016',
    title: 'Regex Pattern Master',
    description: 'Create and explain complex regular expressions',
    category: 'programming',
    prompt_text: `You are a Regular Expression expert. Help me with this regex task:

**What I Need to Match/Extract/Replace:**
[Describe in plain English what you're trying to do]

**Sample Input:**
\`\`\`
[Paste example strings - include both matches and non-matches]
\`\`\`

**Expected Output:**
[What should be matched/captured/replaced]

**Language/Tool:**
[JavaScript/Python/Java/grep/sed/etc.]

**Constraints:**
- Performance critical: [yes/no]
- Unicode support needed: [yes/no]
- Multiline matching: [yes/no]

Please provide:

1. **Regex Pattern**
\`\`\`
[The regex pattern]
\`\`\`

2. **Visual Explanation**
   - Break down each part
   - Character classes explained
   - Quantifiers explained
   - Groups and captures

3. **Code Implementation**
\`\`\`
[Working code in the specified language]
\`\`\`

4. **Test Cases**
   - Strings that should match
   - Strings that should NOT match
   - Edge cases

5. **Alternatives**
   - Simpler version (if exists)
   - More performant version
   - More readable version

6. **Common Pitfalls**
   - Backtracking issues
   - Greedy vs lazy matching
   - Special character escaping

**Regex features I can use:**
- Lookahead/lookbehind
- Named capture groups
- Non-capturing groups
- Backreferences
- Unicode categories
- Atomic groups
- Conditional patterns`,
    tags: 'regex,regular-expressions,pattern-matching,text-processing',
    language: 'en'
  },
  {
    id: 'prog-017',
    title: 'Error Message Translator',
    description: 'Understand and fix cryptic error messages',
    category: 'programming',
    prompt_text: `You are a debugging expert who excels at explaining error messages. Help me understand and fix this error:

**Error Message:**
\`\`\`
[PASTE THE FULL ERROR MESSAGE/STACK TRACE]
\`\`\`

**Context:**
- Language/Framework:
- What I was trying to do:
- When the error occurs:

**Relevant Code:**
\`\`\`
[Code that triggers the error]
\`\`\`

**Environment:**
- OS:
- Runtime version:
- Recent changes made:

Please provide:

1. **Error Explanation**
   - What the error actually means (plain English)
   - Why this error occurs
   - Common causes of this error

2. **Stack Trace Analysis**
   - Which line is the actual problem
   - Call stack explanation
   - Entry point identification

3. **Root Cause**
   - Most likely cause in your specific case
   - How to verify this is the cause

4. **Solution**
   - Step-by-step fix
   - Code changes needed
   - Configuration changes (if any)

5. **Prevention**
   - How to avoid this in the future
   - Related errors to watch for
   - Defensive coding practices

6. **Quick Reference**
   - Similar error patterns
   - Useful debugging commands
   - Relevant documentation links`,
    tags: 'debugging,errors,stack-trace,troubleshooting',
    language: 'en'
  },
  {
    id: 'prog-018',
    title: 'CI/CD Pipeline Builder',
    description: 'Create continuous integration and deployment pipelines',
    category: 'programming',
    prompt_text: `You are a DevOps Engineer specializing in CI/CD. Help me build a pipeline:

**Project Details:**
- Repository: [GitHub/GitLab/Bitbucket]
- Language/Framework:
- Build tool: [npm/yarn/maven/gradle/etc.]
- Test framework:

**Deployment Target:**
- Environment: [AWS/GCP/Azure/Vercel/Heroku/K8s]
- Deployment type: [container/serverless/static/VM]

**Pipeline Requirements:**
- [ ] Linting
- [ ] Unit tests
- [ ] Integration tests
- [ ] Security scanning
- [ ] Build artifacts
- [ ] Deploy to staging
- [ ] Deploy to production
- [ ] Notifications

**Branch Strategy:**
- Main branch:
- Feature branches:
- Release process:

Please provide:

1. **Pipeline Configuration**
\`\`\`yaml
# GitHub Actions / GitLab CI / Jenkins / etc.
[Complete pipeline configuration]
\`\`\`

2. **Stage Breakdown**
   - Each stage explained
   - Dependencies between stages
   - Parallel execution opportunities

3. **Environment Management**
   - Secrets handling
   - Environment variables
   - Configuration per environment

4. **Quality Gates**
   - Code coverage thresholds
   - Security scan requirements
   - Performance benchmarks

5. **Deployment Strategy**
   - Blue-green / Canary / Rolling
   - Rollback procedure
   - Health checks

6. **Monitoring & Alerts**
   - Pipeline status notifications
   - Deployment notifications
   - Failure alerts

7. **Optimization Tips**
   - Caching strategies
   - Build time reduction
   - Cost optimization`,
    tags: 'cicd,devops,github-actions,gitlab-ci,automation',
    language: 'en'
  },
  {
    id: 'prog-019',
    title: 'Архитектор баз данных',
    description: 'Проектирование схем БД и оптимизация запросов',
    category: 'programming',
    prompt_text: `Ты эксперт по базам данных. Помоги спроектировать или оптимизировать БД:

**Задача:**
[Опиши, что нужно хранить и какие операции выполнять]

**Текущая схема (если есть):**
\`\`\`sql
[Вставь существующие CREATE TABLE]
\`\`\`

**Требования:**
- Тип БД: [PostgreSQL/MySQL/MongoDB/Redis/etc.]
- Объём данных: [количество записей]
- Нагрузка: [запросов в секунду]
- Критичные операции: [чтение/запись/аналитика]

**Бизнес-сущности:**
1. [Сущность 1 с атрибутами]
2. [Сущность 2 с атрибутами]
3. [Связи между сущностями]

Предоставь:

1. **Схема БД**
\`\`\`sql
-- CREATE TABLE с комментариями
-- Типы данных с обоснованием
-- Constraints и foreign keys
\`\`\`

2. **ER-диаграмма**
   - Связи между таблицами (Mermaid)
   - Кардинальность связей

3. **Индексы**
   - Какие индексы создать
   - Обоснование каждого индекса
   - Составные индексы

4. **Нормализация**
   - Текущая нормальная форма
   - Рекомендации по нормализации/денормализации
   - Trade-offs

5. **Типичные запросы**
\`\`\`sql
-- Примеры SELECT/INSERT/UPDATE
-- С использованием индексов
\`\`\`

6. **Оптимизация**
   - Партиционирование (если нужно)
   - Кэширование
   - Репликация

7. **Миграции**
   - Скрипты миграции
   - Безопасное обновление продакшена`,
    tags: 'database,sql,schema-design,postgresql,mysql',
    language: 'ru'
  },
  {
    id: 'prog-020',
    title: 'Code Explainer',
    description: 'Get clear explanations of complex code',
    category: 'programming',
    prompt_text: `You are a patient programming teacher. Explain this code to me:

**Code to Explain:**
\`\`\`
[PASTE CODE HERE]
\`\`\`

**My Background:**
- Programming experience: [beginner/intermediate/advanced]
- Familiar with: [languages/concepts you know]
- Specific confusion: [what part is confusing]

**Explanation Depth:**
- [ ] High-level overview
- [ ] Line-by-line walkthrough
- [ ] Deep dive into concepts
- [ ] All of the above

Please provide:

1. **Overview**
   - What this code does (one paragraph)
   - When/why you'd use this
   - Input → Output summary

2. **Line-by-Line Explanation**
   - Each line numbered and explained
   - Why this approach was chosen
   - Alternatives that could work

3. **Key Concepts**
   - Programming patterns used
   - Language features demonstrated
   - Prerequisites to understand this

4. **Visual Walkthrough**
   - Step-by-step execution trace
   - Variable values at each step
   - Control flow diagram (if complex)

5. **Analogies**
   - Real-world comparisons
   - Simplified mental models

6. **Related Topics**
   - What to learn next
   - Similar patterns to explore
   - Practice exercises

7. **Common Mistakes**
   - Pitfalls when writing similar code
   - How to debug issues`,
    tags: 'learning,explanation,education,code-understanding',
    language: 'en'
  },
  {
    id: 'prog-021',
    title: 'Tech Interview Prep',
    description: 'Practice coding interviews with detailed solutions',
    category: 'programming',
    prompt_text: `You are a senior engineer who has conducted 500+ technical interviews. Help me prepare:

**Interview Type:**
- [ ] Data Structures & Algorithms
- [ ] System Design
- [ ] Frontend/Backend specific
- [ ] Behavioral with technical context

**Problem (if practicing specific question):**
[Paste the problem or describe the topic]

**Target Company Level:**
- [ ] FAANG/Big Tech
- [ ] Mid-size tech company
- [ ] Startup
- [ ] General preparation

**My Level:**
- Years of experience:
- Strongest areas:
- Weakest areas:

Please provide:

1. **Problem Analysis**
   - Clarifying questions to ask
   - Edge cases to consider
   - Constraints to note

2. **Approach Discussion**
   - Brute force solution first
   - Optimization path
   - Multiple approaches with trade-offs

3. **Solution**
\`\`\`
[Clean, interview-ready code with comments]
\`\`\`

4. **Complexity Analysis**
   - Time complexity with explanation
   - Space complexity with explanation
   - Best/average/worst cases

5. **Follow-up Questions**
   - Likely follow-ups from interviewer
   - How to handle scale questions
   - Optimization discussions

6. **Communication Tips**
   - How to think out loud
   - When to ask for hints
   - How to handle being stuck

7. **Practice Problems**
   - Similar problems to practice
   - Easier and harder variations
   - Patterns to recognize`,
    tags: 'interview,leetcode,algorithms,career,faang',
    language: 'en'
  },
  {
    id: 'prog-022',
    title: 'Code Converter',
    description: 'Convert code between programming languages',
    category: 'programming',
    prompt_text: `You are a polyglot programmer. Convert this code:

**Source Code:**
\`\`\`[SOURCE_LANGUAGE]
[PASTE CODE TO CONVERT]
\`\`\`

**Convert To:** [TARGET_LANGUAGE]

**Conversion Requirements:**
- Maintain exact functionality: [yes/no]
- Use idiomatic target language patterns: [yes/no]
- Preserve comments: [yes/no]
- Include type annotations: [yes/no]

**Target Environment:**
- Version: [e.g., Python 3.11, Node 20, Java 21]
- Dependencies available: [list libraries that can be used]

Please provide:

1. **Converted Code**
\`\`\`[target_language]
[Converted code with comments explaining non-obvious translations]
\`\`\`

2. **Key Differences**
   - Syntax changes explained
   - Different idioms used
   - Feature gaps and workarounds

3. **Library Mappings**
   - Source library → Target equivalent
   - Behavioral differences to note

4. **Potential Issues**
   - Features that don't translate directly
   - Performance implications
   - Runtime differences

5. **Testing Notes**
   - How to verify correctness
   - Edge cases to test
   - Platform-specific behaviors

**Common conversions I handle:**
- Python ↔ JavaScript/TypeScript
- Java ↔ Kotlin
- JavaScript ↔ TypeScript
- C# ↔ Java
- Ruby ↔ Python
- Go ↔ Rust
- SQL dialects
- Shell ↔ Python/Node`,
    tags: 'code-conversion,migration,polyglot,refactoring',
    language: 'en'
  },
  {
    id: 'prog-023',
    title: 'Performance Profiler',
    description: 'Identify and fix performance bottlenecks',
    category: 'programming',
    prompt_text: `You are a Performance Engineer. Help me optimize this code:

**Slow Code:**
\`\`\`
[PASTE CODE WITH PERFORMANCE ISSUES]
\`\`\`

**Performance Metrics:**
- Current execution time:
- Target execution time:
- Memory usage (if known):
- Input size: [n = ?]

**Context:**
- Language/Runtime:
- Production environment: [server specs]
- Called frequency: [times per second/minute]

**Profiling Data (if available):**
\`\`\`
[Paste profiler output: cProfile, perf, Chrome DevTools, etc.]
\`\`\`

Please provide:

1. **Bottleneck Analysis**
   - Identified slow spots
   - Root cause for each
   - Impact ranking

2. **Complexity Analysis**
   - Current Big O (time)
   - Current Big O (space)
   - Achievable complexity

3. **Optimization Strategies**
   - Algorithm improvements
   - Data structure changes
   - Caching opportunities
   - Parallelization options

4. **Optimized Code**
\`\`\`
[Refactored code with performance improvements]
\`\`\`

5. **Micro-optimizations**
   - Language-specific tricks
   - Memory access patterns
   - JIT/compiler hints

6. **Benchmarking**
   - How to measure improvement
   - Benchmark code provided
   - Statistical significance

7. **Trade-offs**
   - Readability vs speed
   - Memory vs CPU
   - Development time vs runtime`,
    tags: 'performance,optimization,profiling,algorithms',
    language: 'en'
  },
  {
    id: 'prog-024',
    title: 'Генератор CLI приложений',
    description: 'Создание консольных приложений с аргументами и интерактивным режимом',
    category: 'programming',
    prompt_text: `Ты эксперт по разработке CLI инструментов. Помоги создать консольное приложение:

**Описание приложения:**
[Что должна делать утилита]

**Команды и опции:**
- Основная команда: [название]
- Подкоманды: [список]
- Флаги: [--verbose, --output, etc.]

**Язык:** [Python/Node.js/Go/Rust]

**Требования:**
- Интерактивный режим: [да/нет]
- Конфигурационный файл: [да/нет]
- Цветной вывод: [да/нет]
- Прогресс-бары: [да/нет]

Предоставь:

1. **Структура проекта**
\`\`\`
project/
├── src/
├── tests/
└── ...
\`\`\`

2. **Парсинг аргументов**
\`\`\`
[Код с использованием argparse/commander/cobra/clap]
\`\`\`

3. **Основная логика**
\`\`\`
[Реализация команд]
\`\`\`

4. **UX элементы**
   - Справка (--help)
   - Цветной вывод
   - Прогресс индикаторы
   - Интерактивные промпты

5. **Конфигурация**
   - Файл конфигурации
   - Переменные окружения
   - Приоритеты настроек

6. **Обработка ошибок**
   - Понятные сообщения об ошибках
   - Exit codes
   - Логирование

7. **Распространение**
   - Сборка бинарника
   - Публикация в npm/pip/brew
   - Автодополнение в shell`,
    tags: 'cli,консольное-приложение,автоматизация,devtools',
    language: 'ru'
  },
  {
    id: 'prog-025',
    title: 'GraphQL Schema Designer',
    description: 'Design GraphQL schemas and resolvers',
    category: 'programming',
    prompt_text: `You are a GraphQL architect. Help me design a GraphQL API:

**Domain Description:**
[Describe your data model and operations]

**Entities:**
1. [Entity 1 with fields]
2. [Entity 2 with fields]
3. [Relationships between entities]

**Operations Needed:**
- Queries: [list read operations]
- Mutations: [list write operations]
- Subscriptions: [list real-time needs]

**Implementation:**
- Server: [Apollo/Yoga/Mercurius/etc.]
- Language: [TypeScript/Python/Go/etc.]
- Database: [PostgreSQL/MongoDB/etc.]

Please provide:

1. **Schema Definition**
\`\`\`graphql
# Types, Queries, Mutations, Subscriptions
# With descriptions and directives
\`\`\`

2. **Type Design Decisions**
   - Nullability choices
   - ID strategies
   - Enum usage
   - Interface vs Union types
   - Input types

3. **Resolvers**
\`\`\`typescript
// Resolver implementations
// Including DataLoader patterns
// N+1 problem solutions
\`\`\`

4. **Pagination**
   - Cursor-based pagination
   - Connection type implementation
   - PageInfo type

5. **Error Handling**
   - Error types
   - Union types for results
   - Error codes

6. **Authorization**
   - Field-level permissions
   - Directive-based auth
   - Context setup

7. **Performance**
   - Query complexity limits
   - Depth limiting
   - DataLoader caching
   - Persisted queries`,
    tags: 'graphql,api,schema,apollo,backend',
    language: 'en'
  },
  {
    id: 'prog-026',
    title: 'Microservices Decomposer',
    description: 'Break monoliths into microservices',
    category: 'programming',
    prompt_text: `You are a Microservices Architect. Help me decompose this system:

**Current Monolith Description:**
[Describe your existing system]

**Pain Points:**
- Scalability issues:
- Deployment challenges:
- Team bottlenecks:
- Technical debt:

**Current Architecture:**
\`\`\`
[Describe or diagram current structure]
\`\`\`

**Business Domains:**
1. [Domain 1]
2. [Domain 2]
3. [Domain 3]

**Constraints:**
- Team size:
- Timeline:
- Budget:
- Risk tolerance:

Please provide:

1. **Domain Analysis**
   - Bounded contexts identification
   - Context mapping
   - Core vs supporting domains

2. **Service Boundaries**
   - Proposed services with responsibilities
   - Data ownership per service
   - Service dependency diagram

3. **Communication Patterns**
   - Sync vs async decisions
   - API gateway design
   - Event-driven architecture
   - Message broker choice

4. **Data Strategy**
   - Database per service approach
   - Data synchronization patterns
   - Eventual consistency handling
   - Saga patterns for transactions

5. **Migration Plan**
   - Strangler fig pattern application
   - Phased migration steps
   - Risk mitigation
   - Rollback strategies

6. **Infrastructure**
   - Container orchestration
   - Service mesh needs
   - Observability stack
   - CI/CD per service

7. **Team Structure**
   - Conway's Law considerations
   - Team topologies
   - Ownership model`,
    tags: 'microservices,architecture,ddd,distributed-systems',
    language: 'en'
  },
  {
    id: 'prog-027',
    title: 'Kubernetes Deployer',
    description: 'Create Kubernetes manifests and Helm charts',
    category: 'programming',
    prompt_text: `You are a Kubernetes expert. Help me deploy an application to K8s:

**Application Details:**
- Name:
- Type: [web app/API/worker/cron job]
- Docker image:
- Port:

**Requirements:**
- Replicas: [number]
- Resource limits: [CPU/Memory]
- Storage needs: [persistent volumes]
- Config/Secrets: [environment variables]

**Cluster Info:**
- Provider: [EKS/GKE/AKS/self-managed]
- Ingress controller: [nginx/traefik/istio]
- SSL: [cert-manager/manual]

**Existing Infrastructure:**
- Database: [how to connect]
- Message queue: [if any]
- Other services: [dependencies]

Please provide:

1. **Kubernetes Manifests**
\`\`\`yaml
# Deployment
# Service
# ConfigMap
# Secret
# Ingress
# HPA
# PDB
\`\`\`

2. **Helm Chart** (if complex)
\`\`\`
chart/
├── Chart.yaml
├── values.yaml
├── templates/
\`\`\`

3. **Configuration Management**
   - Environment separation (dev/staging/prod)
   - Secret management (Sealed Secrets/External Secrets)
   - ConfigMap organization

4. **Health & Readiness**
   - Probe configurations
   - Startup probes (if slow start)
   - Graceful shutdown handling

5. **Networking**
   - Service mesh considerations
   - Network policies
   - DNS configuration

6. **Scaling**
   - HPA configuration
   - VPA recommendations
   - Cluster autoscaler tips

7. **Troubleshooting Commands**
   - Useful kubectl commands
   - Common issues and fixes
   - Log aggregation setup`,
    tags: 'kubernetes,k8s,devops,containers,helm',
    language: 'en'
  },
  {
    id: 'prog-028',
    title: 'WebSocket Implementation',
    description: 'Build real-time features with WebSockets',
    category: 'programming',
    prompt_text: `You are a real-time systems expert. Help me implement WebSocket functionality:

**Feature Description:**
[Describe the real-time feature needed]

**Use Case:**
- [ ] Chat/Messaging
- [ ] Live notifications
- [ ] Real-time collaboration
- [ ] Live data feeds
- [ ] Gaming
- [ ] IoT device communication

**Tech Stack:**
- Backend: [Node.js/Python/Go/etc.]
- Frontend: [React/Vue/vanilla JS]
- Expected connections: [concurrent users]

**Requirements:**
- Authentication: [how users authenticate]
- Message persistence: [yes/no]
- Offline handling: [reconnection strategy]
- Scaling: [single server/clustered]

Please provide:

1. **Server Implementation**
\`\`\`
[WebSocket server with:
- Connection handling
- Authentication
- Room/channel management
- Message broadcasting
- Error handling]
\`\`\`

2. **Client Implementation**
\`\`\`
[WebSocket client with:
- Connection management
- Reconnection logic
- Message handling
- State synchronization]
\`\`\`

3. **Message Protocol**
   - Message format (JSON schema)
   - Message types
   - Acknowledgment patterns
   - Heartbeat/ping-pong

4. **Scaling Strategy**
   - Redis pub/sub for multi-server
   - Sticky sessions
   - Load balancing WebSockets

5. **Security**
   - Authentication flow
   - Message validation
   - Rate limiting
   - Origin verification

6. **Error Handling**
   - Connection drops
   - Server restarts
   - Client recovery
   - Offline queue

7. **Testing**
   - WebSocket testing tools
   - Load testing approach
   - Unit test examples`,
    tags: 'websocket,real-time,socket.io,chat,notifications',
    language: 'en'
  },
  {
    id: 'prog-029',
    title: 'OAuth2 Implementation Guide',
    description: 'Implement secure authentication with OAuth2',
    category: 'programming',
    prompt_text: `You are an Authentication Security Expert. Help me implement OAuth2:

**Implementation Type:**
- [ ] OAuth2 Provider (building auth server)
- [ ] OAuth2 Consumer (integrating with providers)
- [ ] Both

**Providers to Integrate:**
- [ ] Google
- [ ] GitHub
- [ ] Facebook
- [ ] Apple
- [ ] Microsoft
- [ ] Custom OAuth2 server

**Application Details:**
- Type: [web app/mobile app/SPA/API]
- Framework: [Express/Django/Rails/etc.]
- Session storage: [JWT/cookies/database]

**Requirements:**
- Grant types: [authorization code/PKCE/client credentials]
- Scopes needed:
- Token storage strategy:
- Refresh token handling:

Please provide:

1. **OAuth2 Flow Diagram**
   - Step-by-step flow
   - Token exchange process
   - Refresh mechanism

2. **Server Implementation**
\`\`\`
[Complete OAuth2 implementation:
- Route handlers
- Token generation/validation
- Callback handling
- Session management]
\`\`\`

3. **Client Implementation**
\`\`\`
[Frontend OAuth2 flow:
- Login buttons
- Callback handling
- Token storage
- Refresh logic]
\`\`\`

4. **Security Measures**
   - PKCE implementation
   - State parameter usage
   - Token secure storage
   - CSRF protection

5. **Database Schema**
   - User table
   - OAuth accounts table
   - Token storage

6. **Provider-Specific Setup**
   - Developer console configuration
   - Required scopes
   - Callback URL setup

7. **Testing**
   - Mock providers for testing
   - Integration test examples
   - Security testing checklist`,
    tags: 'oauth2,authentication,security,sso,jwt',
    language: 'en'
  },
  {
    id: 'prog-030',
    title: 'Cron & Task Scheduler',
    description: 'Design background jobs and scheduled tasks',
    category: 'programming',
    prompt_text: `You are a Backend Engineer specializing in background processing. Help me design a task system:

**Task Description:**
[What needs to run in the background/on schedule]

**Task Type:**
- [ ] Scheduled (cron-like)
- [ ] Triggered by events
- [ ] Queue-based processing
- [ ] Long-running jobs

**Requirements:**
- Frequency: [cron expression or trigger]
- Duration: [expected run time]
- Retries: [retry strategy needed]
- Concurrency: [parallel execution allowed?]

**Infrastructure:**
- Platform: [Node.js/Python/Go/etc.]
- Hosting: [AWS/GCP/VPS/Kubernetes]
- Queue system: [Redis/RabbitMQ/SQS/none]

**Current Pain Points:**
[Any existing issues with background tasks]

Please provide:

1. **Architecture Design**
   - Queue vs scheduler decision
   - Worker design
   - Job storage

2. **Implementation**
\`\`\`
[Complete code for:
- Job definitions
- Scheduler setup
- Worker implementation
- Queue management]
\`\`\`

3. **Reliability**
   - Retry strategies (exponential backoff)
   - Dead letter queues
   - Idempotency handling
   - Failure notifications

4. **Monitoring**
   - Job status tracking
   - Metrics to collect
   - Alerting rules
   - Dashboard recommendations

5. **Scaling**
   - Horizontal scaling workers
   - Priority queues
   - Rate limiting
   - Resource management

6. **Deployment**
   - Cron in containers
   - Kubernetes CronJobs
   - Serverless options (Lambda, Cloud Functions)

7. **Best Practices**
   - Job isolation
   - Logging patterns
   - Cleanup strategies
   - Testing background jobs`,
    tags: 'cron,background-jobs,queues,scheduling,workers',
    language: 'en'
  },
  {
    id: 'prog-031',
    title: 'Оптимизация Frontend',
    description: 'Ускорение загрузки и производительности веб-приложений',
    category: 'programming',
    prompt_text: `Ты эксперт по оптимизации Frontend. Помоги ускорить приложение:

**Текущие метрики:**
- Lighthouse Score: [Performance/Accessibility/SEO/Best Practices]
- Largest Contentful Paint (LCP):
- First Input Delay (FID):
- Cumulative Layout Shift (CLS):
- Time to First Byte (TTFB):

**Стек:**
- Фреймворк: [React/Vue/Angular/Next.js/etc.]
- Сборщик: [Webpack/Vite/esbuild]
- Стили: [CSS/SCSS/Tailwind/CSS-in-JS]

**Проблемные области:**
- Размер бандла:
- Количество запросов:
- Тяжёлые изображения:
- Сторонние скрипты:

**Lighthouse Report:**
\`\`\`
[Вставь основные рекомендации из Lighthouse]
\`\`\`

Предоставь:

1. **Аудит бандла**
   - Анализ размера зависимостей
   - Поиск дубликатов
   - Tree-shaking проблемы

2. **Code Splitting**
\`\`\`javascript
// Примеры lazy loading
// Route-based splitting
// Component-based splitting
\`\`\`

3. **Оптимизация ресурсов**
   - Сжатие изображений (WebP, AVIF)
   - Шрифты (font-display, subsetting)
   - SVG оптимизация
   - Видео оптимизация

4. **Кэширование**
   - HTTP кэширование (Cache-Control)
   - Service Worker стратегии
   - CDN настройка

5. **Critical Rendering Path**
   - Inline critical CSS
   - Defer/async скрипты
   - Preload/prefetch стратегии

6. **Runtime оптимизация**
   - Virtual scrolling
   - Debounce/throttle
   - Web Workers
   - Memory leaks

7. **Мониторинг**
   - Real User Monitoring (RUM)
   - Performance budgets
   - CI проверки производительности`,
    tags: 'frontend,performance,lighthouse,web-vitals,оптимизация',
    language: 'ru'
  },
  {
    id: 'prog-032',
    title: 'API Rate Limiter',
    description: 'Implement rate limiting and throttling',
    category: 'programming',
    prompt_text: `You are a Backend Security Engineer. Help me implement rate limiting:

**API Details:**
- Framework: [Express/FastAPI/Django/Go/etc.]
- Current traffic: [requests per second]
- API types: [public/authenticated/internal]

**Requirements:**
- Rate limit: [X requests per Y time]
- Scope: [per IP/per user/per API key/global]
- Response when limited: [429 with retry-after]

**Special Cases:**
- Different limits for different endpoints: [yes/no]
- Burst handling: [allow short bursts?]
- Whitelist needs: [admin bypass?]

**Infrastructure:**
- Storage: [Redis/in-memory/database]
- Distributed: [multiple servers?]

Please provide:

1. **Rate Limiting Strategy**
   - Algorithm choice (Token bucket/Sliding window/Fixed window)
   - Pros and cons for your use case
   - Configuration recommendations

2. **Implementation**
\`\`\`
[Complete rate limiter code:
- Middleware/decorator
- Storage layer
- Configuration
- Response handling]
\`\`\`

3. **Redis Implementation** (if distributed)
\`\`\`
[Redis-based rate limiter with Lua scripts for atomicity]
\`\`\`

4. **HTTP Headers**
   - X-RateLimit-Limit
   - X-RateLimit-Remaining
   - X-RateLimit-Reset
   - Retry-After

5. **Client Communication**
   - Error response format
   - Documentation for API users
   - SDK handling

6. **Monitoring**
   - Metrics to track
   - Alerting thresholds
   - Dashboard setup

7. **Advanced Patterns**
   - Graduated limits
   - Cost-based limiting
   - Quota management
   - API key tiers`,
    tags: 'rate-limiting,api,security,redis,throttling',
    language: 'en'
  }
];
