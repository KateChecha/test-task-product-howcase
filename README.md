# Product Showcase

Тестовое задание — каталог товаров на Nuxt 4 + TypeScript.

## Стек

- **Nuxt 4** — SSR, file-based routing, автоимпорт компонентов и composables
- **TypeScript** — строгая типизация
- **SCSS** — стилизация, глобальные переменные, clamp для адаптива
- **БЭМ** — именование CSS-классов (`блок__элемент--модификатор`)
- **@nuxt/image** — оптимизация изображений

## Функциональность

- Главная страница с переходом в каталог
- Каталог товаров с пагинацией через кнопку «Показать ещё»
- SSR — первая страница товаров рендерится на сервере
- Обработка ошибок загрузки с кнопкой «Повторить»
- Кнопка «Добавить в избранное» (визуальная, без сохранения)
- Адаптивная вёрстка (мобильная/десктопная версия)
- Навигация в шапке, бургер-меню на мобильных

## Структура проекта

```
app/
├── assets/styles/        # SCSS переменные и глобальные стили
├── components/
│   ├── Cards/            # Карточка товара
│   ├── Forms/            # Навигация в шапке
│   ├── Sections/         # Header, Footer
│   └── UI/               # Text, Button, LogoSite, BurgerIcon
├── composables/          # useDataCatalog, useDataHeaderNav, useDataFooter
├── layouts/              # Layout по умолчанию
└── pages/                # index (главная), catalog (каталог)
types/                    # Глобальные TypeScript типы
nuxt.config.ts            # Конфигурация Nuxt
```

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```
