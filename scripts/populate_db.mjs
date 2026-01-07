import sqlite3 from 'sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new sqlite3.Database('./database.sqlite');

const prompts = [
    // English Prompts
    {
        title: 'Code Refactoring',
        description: 'Refactor code to improve readability and performance.',
        category: 'programming',
        prompt_text: 'Refactor the following code to improve its readability and performance, while maintaining its original functionality: [INSERT CODE HERE]. Explain the changes you made.',
        tags: 'refactoring, optimization, clean-code',
        language: 'en'
    },
    {
        title: 'Unit Test Generation',
        description: 'Generate unit tests for a specific function.',
        category: 'programming',
        prompt_text: 'Write comprehensive unit tests for the following function using [TEST FRAMEWORK, e.g., Jest, Pytest]: [INSERT CODE HERE]. Include tests for edge cases and potential error conditions.',
        tags: 'testing, unit-tests, qa',
        language: 'en'
    },
     {
        title: 'Data Analysis with Python',
        description: 'Analyze a dataset using Python and Pandas.',
        category: 'data-analysis',
        prompt_text: 'I have a dataset with the following columns: [LIST COLUMNS]. Write a Python script using Pandas to load this data, clean it (handling missing values), and perform a basic exploratory data analysis (EDA) including summary statistics and visualizations for the key variables.',
        tags: 'python, pandas, data-analysis, eda',
        language: 'en'
    },
    {
        title: 'Midjourney Image Prompt',
        description: 'Create a detailed prompt for Midjourney.',
        category: 'images',
        prompt_text: 'Create a detailed prompt for Midjourney to generate an image of [SUBJECT]. The style should be [STYLE, e.g., cyberpunk, oil painting], with [LIGHTING] lighting and a [MOOD] mood. Include details about composition and color palette.',
        tags: 'midjourney, image-generation, art',
        language: 'en'
    },
    // Russian Prompts
    {
        title: 'Рефакторинг кода',
        description: 'Улучшение читаемости и производительности кода.',
        category: 'programming',
        prompt_text: 'Проведи рефакторинг следующего кода с целью улучшения его читаемости и производительности, сохраняя при этом исходную функциональность: [ВСТАВИТЬ КОД ЗДЕСЬ]. Объясни внесенные изменения.',
        tags: 'рефакторинг, оптимизация, чистый-код',
        language: 'ru'
    },
    {
        title: 'Генерация юнит-тестов',
        description: 'Создание юнит-тестов для функции.',
        category: 'programming',
        prompt_text: 'Напиши исчерпывающие юнит-тесты для следующей функции, используя [ФРЕЙМВОРК ТЕСТИРОВАНИЯ, например, Jest, Pytest]: [ВСТАВИТЬ КОД ЗДЕСЬ]. Включи тесты для граничных случаев и потенциальных ошибок.',
        tags: 'тестирование, юнит-тесты, qa',
        language: 'ru'
    },
    {
        title: 'Анализ данных на Python',
        description: 'Анализ набора данных с использованием Python и Pandas.',
        category: 'data-analysis',
        prompt_text: 'У меня есть набор данных со следующими столбцами: [СПИСОК СТОЛБЦОВ]. Напиши скрипт на Python с использованием Pandas для загрузки этих данных, их очистки (обработка пропущенных значений) и выполнения базового разведочного анализа данных (EDA), включая сводную статистику и визуализации для ключевых переменных.',
        tags: 'python, pandas, анализ-данных, eda',
        language: 'ru'
    },
    {
        title: 'Промпт для Midjourney',
        description: 'Создание детального промпта для Midjourney.',
        category: 'images',
        prompt_text: 'Создай детальный промпт для Midjourney, чтобы сгенерировать изображение [ОБЪЕКТ]. Стиль должен быть [СТИЛЬ, например, киберпанк, масляная живопись], с [ОСВЕЩЕНИЕ] освещением и [НАСТРОЕНИЕ] настроением. Включи детали о композиции и цветовой палитре.',
        tags: 'midjourney, генерация-изображений, искусство',
        language: 'ru'
    },
    {
        title: 'Подготовка к собеседованию',
        description: 'Помощь в подготовке к собеседованию на работу.',
        category: 'programming',
        prompt_text: 'Я собираюсь на собеседование на должность [указать] в компании, специализирующейся на [указать область деятельности]. У меня есть [количество лет] опыта в этой области, а мои основные навыки и компетенции включают [перечислить]. Какие вопросы могут мне задать и как на них лучше ответить?',
        tags: 'карьера, собеседование',
        language: 'ru'
    },
     {
        title: 'Разработка функционала',
        description: 'Планирование функционала приложения.',
        category: 'programming',
        prompt_text: 'Я разрабатываю функционал для приложения, которое помогает с [конкретная проблема или задача] и позволит пользователям [конкретные действия или результаты]. Приложение будет использоваться [целевая аудитория] и мы планируем его запустить на [операционная система или платформа]. Какие ключевые аспекты я должен учесть при разработке этого функционала?',
        tags: 'разработка, планирование',
        language: 'ru'
    },
    {
        title: 'Анализ тональности текста',
        description: 'Определение эмоциональной окраски текста.',
        category: 'data-analysis',
        prompt_text: 'Мне нужна помощь в анализе тональности текста на [языке]. Я хочу определить [позитивный / негативный / нейтральный] оттенок текста или более специфическую тональность, например, эмоциональную окраску. Помоги мне проанализировать следующий текст: [ВСТАВИТЬ ТЕКСТ].',
        tags: 'nlp, анализ-текста',
        language: 'ru'
    },
    {
        title: 'Генератор промптов',
        description: 'Использование ChatGPT для создания промптов Midjourney.',
        category: 'images',
        prompt_text: 'Я хочу использовать тебя как генератор промптов для Midjourney. Первая тема, для которой мне нужен промт: [указать тему или контекст]. В своем описании учти все детали и используй наиболее яркие и понятные образы.',
        tags: 'midjourney, мета-промпт',
        language: 'ru'
    },
    {
        title: 'Написание SQL запроса',
        description: 'Помощь в составлении сложного SQL запроса.',
        category: 'data-analysis',
        prompt_text: 'У меня есть две таблицы: [Таблица1] с полями [поля] и [Таблица2] с полями [поля]. Напиши SQL запрос, который [описание задачи, например, выбирает пользователей, которые совершили покупку за последние 30 дней и возвращает их общую сумму покупок].',
        tags: 'sql, базы-данных',
        language: 'ru'
    },
    {
        title: 'Объяснение кода',
        description: 'Объяснение сложного участка кода простыми словами.',
        category: 'programming',
        prompt_text: 'Объясни, что делает этот код, шаг за шагом, простыми словами: [ВСТАВИТЬ КОД].',
        tags: 'обучение, объяснение',
        language: 'ru'
    }
];

db.serialize(() => {
    const stmt = db.prepare('INSERT INTO prompts (id, title, description, category, prompt_text, tags, language) VALUES (?, ?, ?, ?, ?, ?, ?)');

    prompts.forEach((prompt) => {
        stmt.run(uuidv4(), prompt.title, prompt.description, prompt.category, prompt.prompt_text, prompt.tags, prompt.language);
    });

    stmt.finalize();
    console.log('Prompts inserted successfully.');
});

db.close();
