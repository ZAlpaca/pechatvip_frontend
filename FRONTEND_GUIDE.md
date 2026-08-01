# FRONTEND_GUIDE.md — конвенции для страниц (PECHAT VIP)

Читай вместе с `DESIGN.md` (токены) и `src/data/*` (контент). Пиши код, который компилируется с первого раза.

## Стек и правила

- Next.js 16 (App Router, `src/`), React 19, TypeScript, Tailwind v4 (`@theme` в `globals.css`).
- **`params`/`searchParams` — async**: `const { slug } = await props.params`.
- Интерактивные компоненты помечать `"use client"` в первой строке. Страницы — server components.
- Импорты только через alias `@/*`. Всегда относительные пути НЕ использовать.
- Никакого Lorem ipsum. Реальный контент из `src/data/` и `PROJECT_SPEC.md`.
- Все тексты на русском.

## Готовые компоненты (не переписывать!)

| Компонент | Путь | Props |
|---|---|---|
| `Container` | `@/components/ui/container` | `className` |
| `Button`, `ButtonLink` | `@/components/ui/button` | `variant: gold\|brown\|dark\|outline\|white\|ghost`, `size: sm\|md\|lg\|xl` |
| `SectionHeading` | `@/components/ui/section-heading` | `eyebrow?`, `title`, `description?`, `align?`, `light?` |
| `Accordion`, `AccordionItem` | `@/components/ui/accordion` | `items: {question, answer}[]` |
| `Rating` | `@/components/ui/rating` | `value?`, `size?` |
| `Field`, `TextArea`, `Label` | `@/components/ui/input` | стандартные input-пропсы |
| `Breadcrumbs` | `@/components/ui/breadcrumbs` | `items: {label, href?}[]` |
| `AskQuestionForm` | `@/components/ui/ask-question-form` | `heading?`, `subheading?`, `className?` — готовая форма «Задайте вопрос» |
| `MotionSection`, `MotionDiv` | `@/components/motion/motion-section` | framer-motion появление секций |
| `ProductCard` | `@/components/product/product-card` | `product`, `priority?` — карточка товара (клиентская) |
| `ProductGrid`, `RelatedProducts` | `@/components/product/product-grid` | `products`, `columns?` / `title?` |
| `BrandIcon` | `@/components/icons/brand-icon` | `name: vk\|telegram\|ozon\|wb\|yandex-market\|call\|email` — ТОЛЬКО в server components |
| UI-иконки | `@/components/icons/ui` | `CartIcon, HeartIcon, StarIcon, PhoneIcon, MailIcon, PinIcon, ClockIcon, ChevronDownIcon, CheckIcon, PlusIcon, MinusIcon, TrashIcon, TruckIcon, CalendarIcon, ChartIcon, FactoryIcon, BadgeCheckIcon, RulerIcon, PackageIcon, SparkleIcon, GiftIcon, EyeIcon, ArrowRightIcon, MenuIcon, CloseIcon, UserIcon` |

## Данные

- `src/lib/site.ts` — `siteConfig` (телефон, email, адрес, часы), `navLinks`, `socialLinks`, `marketplaceLinks`.
- `src/lib/utils.ts` — `cn()`, `formatPrice()`.
- `src/data/products.ts` — `products`, `categories`, `getProductBySlug`, `getProductById`, `getRelatedProducts`, `getProductsByCategory`, `getPopularProducts`. Продукт: `{id, slug, name, category, categoryLabel, price, oldPrice?, sizes[], images[], description, tags, badge?}`.
- `src/data/content.ts` — `faqItems`, `orderSteps`, `selfOrderSteps`, `managerSteps`, `deliveryMethods`, `rules`, `productionSteps`, `qualityBlocks`.

## Картинки

- Реальные файлы в `frontend/public/images/` (скачаны из Figma). Примеры: `hero-home.jpg`, `category-astronauts.jpg`, `product-scandi.jpg`, `banner-inspiration.jpg`, `product-narrow.jpg`, `catalog-editor-1.jpg` и т.д.
- Используй `next/image` (`import Image from "next/image"`). Для картин картин ОБЯЗАТЕЛЬНО:
  ```tsx
  <Image src={...} alt={...} fill sizes="..." className="object-cover" draggable={false} onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
  ```
- Адаптив-изображения: `sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"`.

## Защита контента

- Текстовые описания/контентные блоки: класс `protected-content` (user-select: none).
- Глобальный перехват Ctrl+C/U/F12 уже в `ContentProtection` (в layout) — не дублировать.

## Дизайн-система (кратко; полные токены — DESIGN.md)

- Фоны: `bg-cream` (#FFFBF6), `bg-sand`, `bg-sand-2`…, `bg-beige`. Градиенты: `gold-gradient`, `brown-gradient`, `warm-section-bg`, `plaque-gradient`, `red-gradient`.
- Текст: `text-ink`, `text-espresso`, `text-mocha`, `text-gray`. Заголовки Montserrat extrabold uppercase.
- Плашки: `glass-dark` / `glass-light` (blur), радиусы `rounded-2xl/3xl`, тени `shadow-card` / `shadow-soft` / `shadow-plaque`.
- Кнопки: `Button variant="gold"` (главная), `variant="brown"`, `variant="outline"`.
- Секции: `py-16 md:py-24`, контейнер `Container`, заголовки `SectionHeading`.

## Анимации

- framer-motion: `MotionSection` (секции) и `MotionDiv` (карточки) с `delay` для stagger. Только transform/opacity.
- Аккордеон FAQ: готовый `Accordion`.

## SEO

- Каждая страница: `export const metadata: Metadata = { title, description }` + `alternates: { canonical }` + `openGraph`.
- Карточка товара: `generateMetadata` + JSON-LD `Product` (см. `src/app/product/[slug]/page.tsx` паттерн).
