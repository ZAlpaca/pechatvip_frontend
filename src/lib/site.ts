export const siteConfig = {
  name: "PECHAT VIP",
  tagline: "ИНТЕРЬЕРНЫЕ КАРТИНЫ",
  slogan: "Создаём интерьерные картины для уюта вашего дома",
  description:
    "Интерьерные картины на холсте в Краснодаре с 2020 года. Собственное производство, более 30 000 проданных картин и 8 000+ положительных отзывов.",
  phone: "8 962 882 89 03",
  phoneHref: "tel:+79628828903",
  phoneAlt: "+7 962 882 89 03",
  email: "pechatvip@gmail.com",
  address: "г. Краснодар, улица Вишняковой, 2литД",
  hours: "Пн–пт 10:00–20:00",
  city: "г. Краснодар",
  url: "https://pechatvip.ru",
  since: 2020,
  stats: [
    { value: "2020", label: "С 2020 года на рынке" },
    { value: "30 000+", label: "проданных картин" },
    { value: "8 000+", label: "положительных отзывов" },
    { value: "5 лет", label: "гарантии на картины" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/how-to-order", label: "Как заказать" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
  { href: "/categories", label: "Цены на картины" },
] as const;

export const socialLinks = [
  { name: "ВКонтакте", href: "https://vk.com", key: "vk" },
  { name: "Telegram", href: "https://t.me", key: "telegram" },
] as const;

export const marketplaceLinks = [
  { name: "Ozon", href: "https://www.ozon.ru", key: "ozon" },
  { name: "Wildberries", href: "https://www.wildberries.ru", key: "wb" },
  { name: "Яндекс Маркет", href: "https://market.yandex.ru", key: "ym" },
] as const;
