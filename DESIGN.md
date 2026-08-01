# DESIGN.md — PECHAT VIP / интерьерные картины

Design system contract extracted from the Figma file (`b8NprsMndchjKUeaWC9aSs`) and PROJECT_SPEC.md.
All components and pages MUST trace every color, font, radius, and effect back to a token in this file.

## 1. Brand

- **Name**: PECHAT VIP — интерьерные картины (г. Краснодар, с 2020 года)
- **Mood**: светлая тёплая «галерея». Белый/кремовый фон, тёмно-коричневые и золотые акценты.
- **Language**: русский. No lorem ipsum in visible content.

## 2. Colors (Tailwind `@theme` tokens → `text-*`, `bg-*`, `border-*`)

| Token | Hex | Usage |
|---|---|---|
| `--color-ink` | `#341E13` | основной текст (тёмно-коричневый) |
| `--color-espresso` | `#39281E` | заголовки, вторичный тёмный |
| `--color-cream` | `#FFFBF6` | базовый фон |
| `--color-cream-2` | `#FCF8F2` | фон секций |
| `--color-sand` | `#F7F1EA` | фон секций |
| `--color-sand-2` | `#F5EFE8` | фон секций |
| `--color-sand-3` | `#F6F2EC` | фон карточек/плашек |
| `--color-sand-4` | `#F3EDE6` | фон секций |
| `--color-sand-5` | `#F2ECE5` | фон |
| `--color-beige` | `#E4D6C6` | линии, рамки, разделители |
| `--color-beige-2` | `#EEDECC` | акцентные подложки |
| `--color-gold` | `#F1D299` | золотые плашки/кнопки |
| `--color-gold-light` | `#FFEDCC` | градиент золота |
| `--color-mocha` | `#7C5B48` | средне-коричневый (заголовки-акценты) |
| `--color-wine` | `#5D0606` | красный акцент / скидки |
| `--color-red-soft` | `#FF6262` | красный-2 |
| `--color-coffee` | `#6A3D27` | средний коричневый (градиент) |
| `--color-latte` | `#9A5938` | светлый коричневый (градиент) |
| `--color-ink-soft` | `#101010` | почти чёрный |
| `--color-gray` | `#828282` | вторичный текст |
| `--color-gray-2` | `#9C9C9C` | плейсхолдеры |
| `--color-gray-3` | `#DADADA` | рамки |
| `--color-gray-4` | `#E7E7E7` | рамки/разделители |
| `--color-muted` | `#575757` | текст поменьше |

**Gradients** (CSS utilities in globals.css):
- `gold-gradient`: `linear-gradient(90deg, #F1D299 0%, #FFEDCC 51%, #F1D299 100%)`
- `brown-gradient`: `linear-gradient(90deg, #341E13 0%, #6A3D27 53%, #9A5938 84%)`
- `warm-section`: `linear-gradient(90deg, #77563A 0%, #F3EDE9 32%, #77563A 100%)`
- `plaque-gradient`: `linear-gradient(180deg, #FFFCFA 0%, #EBD4AB 100%)`
- `red-gradient`: `linear-gradient(180deg, #F06327 0%, #5D0606 100%)`
- `green-title`: `linear-gradient(0deg, #243427 0%, #6B9A74 82%)` (только «100%»/зелёные акценты)

## 3. Typography (next/font/google, self-hosted)

| Font | CSS var | Usage |
|---|---|---|
| **Montserrat** (300–900) | `--font-montserrat` | Заголовки (H1 800/900, секции 700/800 uppercase), цифры статистики 800 |
| **Nunito Sans** (400–800) | `--font-nunito` | Основные тексты, подзаголовки |
| **Open Sans** (300–800) | `--font-open-sans` | Мелкие тексты, контакты, кнопки, футер |
| **Lato** (400) | `--font-lato` | Дополнительный мелкий текст |
| **Source Serif 4** (900) | `--font-serif` | Акцентный serif (заменяет Source Serif Pro из макета) |

- H1: Montserrat ExtraBold 800, uppercase, 56–100px desktop (Figma: 85–103px), тень `0 4.7px 6.2px rgba(0,0,0,0.43)`.
- Section heading: Montserrat Bold/ExtraBold 800, uppercase (e.g. «КАК СДЕЛАТЬ ЗАКАЗ?»), ~32–55px.
- Body: Nunito Sans / Open Sans 14–22px.
- Stats numbers: Montserrat ExtraBold, крупно.
- Prices: Montserrat SemiBold/Bold.

## 4. Effects

- **Blur плашки**: `backdrop-filter: blur(12px)` + полупрозрачный белый/тёмный фон, радиус 8–26px, мягкая тень.
- **Shadows**: многослойные мягкие: `0 20px 40px rgba(0,0,0,0.15)`; карточки `0 9px 14px rgba(0,0,0,0.2)`; плашки `0 4px 4px rgba(0,0,0,0.25)`.
- **Hero overlay**: linear-gradient 90deg rgba(32,13,2,0→0.29) + textShadow.
- Motion: секции появляются с fade-up (framer-motion, `viewport={{ once: true }}`, transform/opacity only).

## 5. Layout & Spacing

- Container: `max-w-[1440px] mx-auto px-4 md:px-8` (Figma ~1920, контент центрирован).
- H1 hero: крупный, uppercase, белый на фото (или тёмный на кремовом).
- Section vertical padding: `py-16 md:py-24`.
- Grids: категории 3–4 колонки; товары 3–4; отзывы 2–3; этапы 4.

## 6. Header

- Логотип «PECHAT VIP» (Montserrat ExtraBold) + подпись «ИНТЕРЬЕРНЫЕ КАРТИНЫ» (Open Sans, small).
- Nav: Главная, Каталог, Как заказать, Отзывы, О нас, Контакты, Цены на картины.
- Right: «Войти» (user icon), «Избранное» (heart), «Корзина» (bag + count badge).
- Мобильное бургер-меню (full-screen overlay).
- Sticky, полупрозрачный blur на светлом фоне.

## 7. Footer

- Логотип + слоган «Создаём интерьерные картины для уюта вашего дома».
- Навигация / Контакты колонки. Плашки статистики. Соцсети/маркетплейсы (inline SVG: ВК, Telegram, Ozon, Wildberries, Яндекс Маркет).
- Нижний баннер-полоса с иконками («Баннер итог 7/8» стиль).

## 8. Content protection (требование заказчика)

- `user-select: none` на описаниях/текстовых блоках.
- Картинки картин: `onContextMenu` preventDefault, `draggable=false`, `onDragStart` preventDefault.
- Перехват Ctrl+C / Ctrl+U / F12 на клиенте, НЕ блокируя ввод в полях форм (inputs/textareas).

## 9. Contact data (везде одинаковые)

- Тел: 8 962 882 89 03 / +7 962 882 89 03
- Email: pechatvip@gmail.com
- Адрес: г. Краснодар, улица Вишняковой, 2литД
- Режим: пн-пт 10:00–20:00

## 10. Routes

`/`, `/catalog`, `/categories`, `/product/[id]`, `/cart`, `/checkout`, `/how-to-order`, `/reviews`, `/rules`, `/contacts`, `/about`, `/favorites` + модалка «Заказать обратный звонок».
SEO: generateMetadata на всех страницах, canonical, sitemap.xml, robots.txt, JSON-LD Product на карточке товара.

## 11. Stack

Next.js 16 (App Router, TS, src/, @/*), React 19, Tailwind v4 (@theme в globals.css, без tailwind.config), framer-motion, clsx + tailwind-merge (cn).
**Next 16 rules**: `params`/`searchParams` — async (await); no `next lint`; Turbopack default.
