# Product Showcase

Nuxt 4 проект для демонстрации продуктов.

## Структура проекта

```
├── app/                    # Главная директория приложения (Nuxt 4)
│   ├── app.vue            # Корневой компонент
│   ├── pages/             # Страницы (file-based routing)
│   │   └── index.vue      # Главная страница
│   ├── components/        # Vue компоненты (автоимпорт)
│   ├── composables/       # Композаблы (автоимпорт)
│   ├── layouts/           # Layout компоненты
│   ├── middleware/        # Middleware для роутов
│   ├── plugins/           # Плагины Nuxt
│   ├── utils/             # Утилиты и хелперы
│   └── assets/            # Статические ресурсы (обрабатываются сборщиком)
│       ├── styles/        # SCSS/CSS файлы
│       ├── images/        # Изображения
│       └── fonts/         # Шрифты
├── public/                # Статические файлы (копируются как есть)
├── server/                # Серверная логика (API routes, middleware)
├── stores/                # Состояние приложения (Pinia)
├── types/                 # TypeScript типы
└── nuxt.config.ts         # Конфигурация Nuxt
```

## Начало работы

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build
```
