import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const prompts = [
  // --- PROGRAMMING (EN) ---
  {
    title: 'Code Refactoring',
    description: 'Refactor code to improve readability and performance.',
    category: 'programming',
    prompt_text: 'Refactor the following code to improve its readability and performance, while maintaining its original functionality: [INSERT CODE HERE]. Explain the changes you made.',
    tags: ['refactoring', 'optimization', 'clean-code', 'en']
  },
  {
    title: 'Unit Test Generation',
    description: 'Generate unit tests for a specific function.',
    category: 'programming',
    prompt_text: 'Write comprehensive unit tests for the following function using [TEST FRAMEWORK, e.g., Jest, Pytest]: [INSERT CODE HERE]. Include tests for edge cases and potential error conditions.',
    tags: ['testing', 'unit-tests', 'qa', 'en']
  },
  {
    title: 'React Component Generator',
    description: 'Create a functional React component with types.',
    category: 'programming',
    prompt_text: 'Create a React functional component named [ComponentName] using TypeScript. It should accept props: [Props List]. The component should [Functionality Description]. Use Tailwind CSS for styling.',
    tags: ['react', 'typescript', 'frontend', 'en']
  },
  {
    title: 'SQL Query Helper',
    description: 'Compose complex SQL queries.',
    category: 'programming',
    prompt_text: 'I have tables: [Table1(cols)], [Table2(cols)]. Write a SQL query to [Goal, e.g., find top users by spend].',
    tags: ['sql', 'database', 'backend', 'en']
  },
  {
    title: 'Regex Generator',
    description: 'Create regular expressions for text matching.',
    category: 'programming',
    prompt_text: 'Write a regular expression to match [Pattern Description, e.g., email addresses, dates in YYYY-MM-DD format]. Explain how it works.',
    tags: ['regex', 'text-processing', 'en']
  },
  {
    title: 'API Documentation',
    description: 'Generate documentation for API endpoints.',
    category: 'programming',
    prompt_text: 'Generate OpenAPI/Swagger documentation for the following API endpoint: [Method] [URL]. Payload: [JSON]. Response: [JSON].',
    tags: ['api', 'documentation', 'swagger', 'en']
  },
  {
    title: 'Git Commit Message',
    description: 'Write conventional commit messages.',
    category: 'programming',
    prompt_text: 'Write a conventional commit message for the following changes: [Describe changes or paste diff].',
    tags: ['git', 'version-control', 'en']
  },
  {
    title: 'Dockerfile Creator',
    description: 'Create a Dockerfile for an application.',
    category: 'programming',
    prompt_text: 'Create a production-ready Dockerfile for a [Node.js/Python/Go] application. Requirements: [Specifics like multi-stage build, specific version].',
    tags: ['docker', 'devops', 'en']
  },
  {
    title: 'Explain Code',
    description: 'Explain complex code snippets.',
    category: 'programming',
    prompt_text: 'Explain how the following code works step-by-step: [Insert Code].',
    tags: ['learning', 'explanation', 'en']
  },
  {
    title: 'CSS Flexbox/Grid Center',
    description: 'Centering elements with CSS.',
    category: 'programming',
    prompt_text: 'How do I center a div both vertically and horizontally using CSS Flexbox (or Grid)?',
    tags: ['css', 'frontend', 'en']
  },

  // --- DATA ANALYSIS (EN) ---
  {
    title: 'Data Analysis with Python',
    description: 'Analyze a dataset using Python and Pandas.',
    category: 'data-analysis',
    prompt_text: 'I have a dataset with the following columns: [LIST COLUMNS]. Write a Python script using Pandas to load this data, clean it (handling missing values), and perform a basic exploratory data analysis (EDA) including summary statistics and visualizations for the key variables.',
    tags: ['python', 'pandas', 'data-analysis', 'eda', 'en']
  },
  {
    title: 'Excel Formula Expert',
    description: 'Create complex Excel formulas.',
    category: 'data-analysis',
    prompt_text: 'I need an Excel formula to [Task, e.g., sum column A if column B is "Yes" and column C is greater than 100].',
    tags: ['excel', 'spreadsheet', 'en']
  },
  {
    title: 'Visualize Data',
    description: 'Suggest visualizations for data.',
    category: 'data-analysis',
    prompt_text: 'I have data representing [Data Type, e.g., monthly sales over 5 years]. What are the best ways to visualize this to show [Trend/Comparison]? Give Python code using Matplotlib/Seaborn.',
    tags: ['visualization', 'python', 'en']
  },

  // --- WRITING & CONTENT (EN) ---
  {
    title: 'Blog Post Outline',
    description: 'Create an outline for a blog post.',
    category: 'writing',
    prompt_text: 'Create a detailed outline for a blog post about [Topic]. Include an engaging introduction, main points with subheaders, and a conclusion.',
    tags: ['blogging', 'content-creation', 'en']
  },
  {
    title: 'Social Media Caption',
    description: 'Write captions for Instagram/Twitter.',
    category: 'writing',
    prompt_text: 'Write 5 engaging Instagram captions for a photo of [Subject]. Include relevant hashtags.',
    tags: ['social-media', 'marketing', 'en']
  },
  {
    title: 'Email Subject Lines',
    description: 'Catchy email subject lines.',
    category: 'writing',
    prompt_text: 'Generate 10 catchy email subject lines for a newsletter about [Topic]. Aim for high open rates.',
    tags: ['email-marketing', 'copywriting', 'en']
  },
  {
    title: 'Proofreading',
    description: 'Check text for grammar and style.',
    category: 'writing',
    prompt_text: 'Proofread and polish the following text for clarity and professional tone: [Insert Text].',
    tags: ['editing', 'grammar', 'en']
  },
  {
    title: 'Story Generator',
    description: 'Write a short story.',
    category: 'writing',
    prompt_text: 'Write a short story about [Character/Setting] in the genre of [Genre].',
    tags: ['creative-writing', 'storytelling', 'en']
  },

  // --- IMAGES (EN) ---
  {
    title: 'Midjourney Image Prompt',
    description: 'Create a detailed prompt for Midjourney.',
    category: 'images',
    prompt_text: 'Create a detailed prompt for Midjourney to generate an image of [SUBJECT]. The style should be [STYLE, e.g., cyberpunk, oil painting], with [LIGHTING] lighting and a [MOOD] mood. Include details about composition and color palette.',
    tags: ['midjourney', 'image-generation', 'art', 'en']
  },
  {
    title: 'Logo Design Concept',
    description: 'Ideas for logo design.',
    category: 'images',
    prompt_text: 'Describe 3 unique logo concepts for a brand named [Brand Name] that does [Industry]. The vibe should be [Vibe].',
    tags: ['design', 'branding', 'en']
  },
  {
    title: 'Photorealistic Portrait',
    description: 'Prompt for AI portrait generation.',
    category: 'images',
    prompt_text: 'Generate a prompt for a photorealistic portrait of [Person Description], shot on 85mm lens, cinematic lighting, high detail.',
    tags: ['ai-art', 'stable-diffusion', 'en']
  },

  // --- BUSINESS & PRODUCTIVITY (EN) ---
  {
    title: 'SWOT Analysis',
    description: 'Perform a SWOT analysis.',
    category: 'business',
    prompt_text: 'Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for [Company/Product Idea].',
    tags: ['strategy', 'business', 'en']
  },
  {
    title: 'Meeting Agenda',
    description: 'Create a structured meeting agenda.',
    category: 'business',
    prompt_text: 'Create an agenda for a [Duration] meeting about [Topic]. Participants include [Roles].',
    tags: ['productivity', 'management', 'en']
  },
  {
    title: 'Product Description',
    description: 'Write a compelling product description.',
    category: 'business',
    prompt_text: 'Write a persuasive product description for [Product Name]. Key features: [Feature 1, Feature 2]. Target audience: [Audience].',
    tags: ['marketing', 'e-commerce', 'en']
  },

  // --- PROGRAMMING (RU) ---
  {
    title: 'Рефакторинг кода',
    description: 'Улучшение читаемости и производительности кода.',
    category: 'programming',
    prompt_text: 'Проведи рефакторинг следующего кода с целью улучшения его читаемости и производительности, сохраняя при этом исходную функциональность: [ВСТАВИТЬ КОД ЗДЕСЬ]. Объясни внесенные изменения.',
    tags: ['рефакторинг', 'оптимизация', 'чистый-код', 'ru']
  },
  {
    title: 'Генерация юнит-тестов',
    description: 'Создание юнит-тестов для функции.',
    category: 'programming',
    prompt_text: 'Напиши исчерпывающие юнит-тесты для следующей функции, используя [ФРЕЙМВОРК ТЕСТИРОВАНИЯ, например, Jest, Pytest]: [ВСТАВИТЬ КОД ЗДЕСЬ]. Включи тесты для граничных случаев и потенциальных ошибок.',
    tags: ['тестирование', 'юнит-тесты', 'qa', 'ru']
  },
  {
    title: 'Объяснение кода',
    description: 'Объяснение сложного участка кода простыми словами.',
    category: 'programming',
    prompt_text: 'Объясни, что делает этот код, шаг за шагом, простыми словами: [ВСТАВИТЬ КОД].',
    tags: ['обучение', 'объяснение', 'ru']
  },
  {
    title: 'Написание SQL запроса',
    description: 'Помощь в составлении сложного SQL запроса.',
    category: 'programming',
    prompt_text: 'У меня есть две таблицы: [Таблица1] с полями [поля] и [Таблица2] с полями [поля]. Напиши SQL запрос, который [описание задачи, например, выбирает пользователей, которые совершили покупку за последние 30 дней и возвращает их общую сумму покупок].',
    tags: ['sql', 'базы-данных', 'ru']
  },
  {
    title: 'Создание React компонента',
    description: 'Генерация функционального компонента React.',
    category: 'programming',
    prompt_text: 'Создай функциональный компонент React под названием [ИмяКомпонента]. Он должен принимать пропсы: [Список]. Стилизуй с помощью Tailwind CSS.',
    tags: ['react', 'frontend', 'ru']
  },
  {
    title: 'Архитектура приложения',
    description: 'Советы по архитектуре ПО.',
    category: 'programming',
    prompt_text: 'Я проектирую приложение для [Назначение]. Какие архитектурные паттерны лучше использовать для масштабируемости? Технологии: [Стек].',
    tags: ['архитектура', 'system-design', 'ru']
  },
  {
    title: 'Поиск багов',
    description: 'Поиск ошибок в коде.',
    category: 'programming',
    prompt_text: 'Найди ошибку в следующем коде и предложи исправленный вариант: [Код].',
    tags: ['debug', 'отладка', 'ru']
  },
  {
    title: 'Генерация HTML/CSS',
    description: 'Верстка элементов.',
    category: 'programming',
    prompt_text: 'Напиши HTML и CSS код для создания [Элемент, например, адаптивной навигационной панели].',
    tags: ['html', 'css', 'frontend', 'ru']
  },
  {
    title: 'Скрипт на Python',
    description: 'Автоматизация задач на Python.',
    category: 'programming',
    prompt_text: 'Напиши скрипт на Python, который [Задача, например, переименовывает все файлы в папке].',
    tags: ['python', 'автоматизация', 'ru']
  },

  // --- DATA ANALYSIS (RU) ---
  {
    title: 'Анализ данных на Python',
    description: 'Анализ набора данных с использованием Python и Pandas.',
    category: 'data-analysis',
    prompt_text: 'У меня есть набор данных со следующими столбцами: [СПИСОК СТОЛБЦОВ]. Напиши скрипт на Python с использованием Pandas для загрузки этих данных, их очистки (обработка пропущенных значений) и выполнения базового разведочного анализа данных (EDA), включая сводную статистику и визуализации для ключевых переменных.',
    tags: ['python', 'pandas', 'анализ-данных', 'eda', 'ru']
  },
  {
    title: 'Анализ тональности текста',
    description: 'Определение эмоциональной окраски текста.',
    category: 'data-analysis',
    prompt_text: 'Мне нужна помощь в анализе тональности текста на [языке]. Я хочу определить [позитивный / негативный / нейтральный] оттенок текста или более специфическую тональность, например, эмоциональную окраску. Помоги мне проанализировать следующий текст: [ВСТАВИТЬ ТЕКСТ].',
    tags: ['nlp', 'анализ-текста', 'ru']
  },
  {
    title: 'Excel формулы',
    description: 'Помощь с Excel.',
    category: 'data-analysis',
    prompt_text: 'Как в Excel сделать [Задача, например, ВПР между двумя листами]?',
    tags: ['excel', 'таблицы', 'ru']
  },

  // --- WRITING & CONTENT (RU) ---
  {
    title: 'План статьи',
    description: 'Структура для статьи или поста.',
    category: 'writing',
    prompt_text: 'Составь подробный план статьи на тему [Тема]. Включи введение, основные разделы и заключение.',
    tags: ['копирайтинг', 'блог', 'ru']
  },
  {
    title: 'Пост для соцсетей',
    description: 'Написание поста.',
    category: 'writing',
    prompt_text: 'Напиши привлекательный пост для [Соцсеть] о [Событие/Продукт]. Используй эмодзи.',
    tags: ['smm', 'соцсети', 'ru']
  },
  {
    title: 'Редактура текста',
    description: 'Улучшение текста.',
    category: 'writing',
    prompt_text: 'Отредактируй следующий текст, исправь ошибки и сделай его более [Стиль, например, официальным]: [Текст].',
    tags: ['редактура', 'текст', 'ru']
  },
  {
    title: 'Написание E-mail',
    description: 'Деловая переписка.',
    category: 'writing',
    prompt_text: 'Напиши деловое письмо клиенту с предложением [Услуга].',
    tags: ['email', 'бизнес', 'ru']
  },
  {
    title: 'Сценарий видео',
    description: 'Сценарий для YouTube/TikTok.',
    category: 'writing',
    prompt_text: 'Напиши сценарий для короткого видео на тему [Тема].',
    tags: ['сценарий', 'видео', 'ru']
  },

  // --- IMAGES (RU) ---
  {
    title: 'Промпт для Midjourney',
    description: 'Создание детального промпта для Midjourney.',
    category: 'images',
    prompt_text: 'Создай детальный промпт для Midjourney, чтобы сгенерировать изображение [ОБЪЕКТ]. Стиль должен быть [СТИЛЬ, например, киберпанк, масляная живопись], с [ОСВЕЩЕНИЕ] освещением и [НАСТРОЕНИЕ] настроением. Включи детали о композиции и цветовой палитре.',
    tags: ['midjourney', 'генерация-изображений', 'искусство', 'ru']
  },
  {
    title: 'Идея для логотипа',
    description: 'Концепция лого.',
    category: 'images',
    prompt_text: 'Предложи 3 варианта логотипа для компании [Название], которая занимается [Деятельность].',
    tags: ['дизайн', 'логотип', 'ru']
  },

  // --- BUSINESS & IDEAS (RU) ---
  {
    title: 'Подготовка к собеседованию',
    description: 'Помощь в подготовке к собеседованию на работу.',
    category: 'business',
    prompt_text: 'Я собираюсь на собеседование на должность [указать] в компании, специализирующейся на [указать область деятельности]. У меня есть [количество лет] опыта в этой области, а мои основные навыки и компетенции включают [перечислить]. Какие вопросы могут мне задать и как на них лучше ответить?',
    tags: ['карьера', 'собеседование', 'ru']
  },
  {
    title: 'Разработка функционала',
    description: 'Планирование функционала приложения.',
    category: 'business',
    prompt_text: 'Я разрабатываю функционал для приложения, которое помогает с [конкретная проблема или задача] и позволит пользователям [конкретные действия или результаты]. Приложение будет использоваться [целевая аудитория] и мы планируем его запустить на [операционная система или платформа]. Какие ключевые аспекты я должен учесть при разработке этого функционала?',
    tags: ['разработка', 'планирование', 'ru']
  },
  {
    title: 'Брейншторм идей',
    description: 'Генерация идей.',
    category: 'business',
    prompt_text: 'Предложи 10 креативных идей для [Проблема/Задача].',
    tags: ['идеи', 'креатив', 'ru']
  },
  {
    title: 'Анализ конкурентов',
    description: 'Изучение рынка.',
    category: 'business',
    prompt_text: 'Как провести анализ конкурентов для [Ниша]? На какие параметры обращать внимание?',
    tags: ['маркетинг', 'бизнес', 'ru']
  },
  {
    title: 'Генератор промптов (RU)',
    description: 'Использование ChatGPT для создания промптов Midjourney.',
    category: 'images',
    prompt_text: 'Я хочу использовать тебя как генератор промптов для Midjourney. Первая тема, для которой мне нужен промт: [указать тему или контекст]. В своем описании учти все детали и используй наиболее яркие и понятные образы.',
    tags: ['midjourney', 'мета-промпт', 'ru']
  }
];

async function seed() {
  console.log('Seeding prompts to Supabase...');
  
  // Batch insert to avoid payload limits if any, though 50 is small.
  const { data, error } = await supabase
    .from('prompts')
    .insert(prompts)
    .select();

  if (error) {
    console.error('Error inserting prompts:', error);
  } else {
    console.log(`Successfully inserted ${data?.length} prompts.`);
  }
}

seed();
