# Faction Docs

Одностраничный внутренний справочник на Astro, TypeScript, MDX и Tailwind CSS. Интерфейс работает без React/Vue/Svelte; клиентский JavaScript нужен только для поиска, мобильного меню, копирования команд и кнопки «наверх».

## Запуск

```bash
npm install
npm run dev
```

Production-сборка и локальный просмотр:

```bash
npm run build
npm run preview
```

Проверка типов и Astro-файлов: `npm run check`.

## Деплой на GitHub Pages

В проект уже добавлен workflow `.github/workflows/deploy.yml`. После публикации репозитория в GitHub:

1. Откройте `Settings → Pages`.
2. В разделе `Build and deployment` выберите источник `GitHub Actions`.
3. Отправьте изменения в ветку `main` или `master`.

Workflow сам установит зависимости, проверит проект, соберёт сайт и опубликует его. Для проектного репозитория Astro автоматически использует адрес с base-путём вида `/<имя-репозитория>/`. Для репозитория вида `username.github.io` base-путь останется `/`.

## Где редактировать контент

Разделы лежат в `src/content/sections/`:

- `rules.mdx` — устав;
- `binds.mdx` — бинды и процедуры;
- `reports.mdx` — доклады;
- `autopark.mdx` — автопарк;
- `posts.mdx` — посты;
- `callsigns.mdx` — позывные;
- `faq.mdx` — вопросы и ответы.

Порядок и подписи навигации находятся в `src/data/navigation.ts`. Чтобы добавить новую секцию, создайте MDX-файл, импортируйте его в `src/pages/index.astro` и добавьте пункт в navigation.

## Изображения

Кладите изображения в `public/images/autopark/`, `public/images/posts/` или `public/images/misc/`. Поддерживаются обычные `.png`, `.jpg`, `.jpeg`, `.webp` и анимированные `.gif`. Для машин удобно называть файлы по модели: `patrol-sedan.gif`, `interceptor.jpg` и т. п. Путь в компоненте начинается от корня сайта:

```mdx
<CarCard
  name="Служебный седан"
  image="/images/autopark/patrol-sedan.gif"
  access="Доступ: 1+"
  purpose="Патруль"
  department="Патрульная группа"
/>
```

Пример использования `CarCard` и `PostCard` уже есть в соответствующих MDX-файлах. Для команд используйте `CopyCode`:

```mdx
<CopyCode label="Доклад" code="[Позывной], заступил на смену." />
```

`CarCard` автоматически покажет крупное изображение слева и характеристики справа на широком экране. На телефоне изображение становится верхней частью карточки. Если `image` не указать, используется SVG-заглушка.

## Структура интерфейса

Переиспользуемые UI-компоненты находятся в `src/components/`, общие стили — в `src/styles/global.css`, а главная страница собирает секции в `src/pages/index.astro`.
