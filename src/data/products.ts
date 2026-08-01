export interface ProductSize {
  label: string; // "30x40"
  price?: number; // price override for this size (optional)
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string; // category slug
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  sizes: ProductSize[];
  images: string[];
  description: string;
  tags: string[];
  badge?: "ХИТ СЕЗОНА" | "ТОП ПРОДАЖ" | "НОВИНКА";
  popular?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  image: string;
  description?: string;
}

export const categories: Category[] = [
  { slug: "porsh", name: "Порш", image: "/images/category-porsh.jpg" },
  { slug: "minimalism", name: "Минимализм", image: "/images/category-minimalism.jpg" },
  { slug: "inspiration", name: "Вдохновение", image: "/images/category-inspiration.jpg" },
  { slug: "balance", name: "Баланс", image: "/images/category-balance.jpg" },
  { slug: "japandi", name: "Джапанди", image: "/images/category-japandi.jpg" },
  { slug: "virtual-warriors", name: "Воины виртуальные", image: "/images/category-warriors.jpg" },
  { slug: "astronauts", name: "Астронавты", image: "/images/category-astronauts.jpg" },
  { slug: "abstraction", name: "Абстракция", image: "/images/category-abstraction.jpg" },
  { slug: "modern", name: "Современные", image: "/images/category-virtual.jpg" },
  { slug: "abstract-flowers", name: "Абстрактные цветы", image: "/images/category-flowers.jpg" },
  { slug: "spring", name: "Весенняя эстетика", image: "/images/category-spring.jpg" },
  { slug: "narrow", name: "Узкие картины", image: "/images/product-narrow.jpg" },
];

const defaultSizes: ProductSize[] = [
  { label: "30x40" },
  { label: "40x50" },
  { label: "50x70" },
  { label: "70x100" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "vdohnovenie",
    name: "Картина «Вдохновение»",
    category: "inspiration",
    categoryLabel: "Вдохновение",
    price: 3900,
    oldPrice: 4800,
    sizes: defaultSizes,
    images: ["/images/banner-inspiration.jpg", "/images/category-inspiration.jpg"],
    description:
      "Картина «Вдохновение» для уюта в вашем доме. Тёплая палитра и лёгкие фактурные мазки создают атмосферу спокойствия и творческой энергии. Холст, галерейная натяжка, готовность к размещению в интерьере.",
    tags: ["интерьерная", "уют", "тёплая палитра"],
    badge: "ХИТ СЕЗОНА",
    popular: true,
  },
  {
    id: "2",
    slug: "skandi",
    name: "Картина в стиле «Сканди»",
    category: "modern",
    categoryLabel: "Современные",
    price: 4200,
    sizes: defaultSizes,
    images: ["/images/product-scandi.jpg", "/images/product-scandi-2.jpg"],
    description:
      "Минималистичная картина в скандинавском стиле. Природные оттенки и сдержанная композиция идеально впишутся в светлый интерьер.",
    tags: ["сканди", "минимализм", "природа"],
    badge: "ТОП ПРОДАЖ",
    popular: true,
  },
  {
    id: "3",
    slug: "astronauty",
    name: "Картина «Астронавты»",
    category: "astronauts",
    categoryLabel: "Астронавты",
    price: 4800,
    sizes: defaultSizes,
    images: ["/images/category-astronauts.jpg", "/images/product-top.jpg"],
    description:
      "Картина с космическим сюжетом для тех, кто мечтает о звёздах. Глубокие синие и золотые акценты добавят загадочности в интерьер.",
    tags: ["космос", "астронавт", "тёмный интерьер"],
    badge: "НОВИНКА",
  },
  {
    id: "4",
    slug: "abstrakciya",
    name: "Картина «Абстракция»",
    category: "abstraction",
    categoryLabel: "Абстракция",
    price: 3600,
    oldPrice: 4500,
    sizes: defaultSizes,
    images: ["/images/category-abstraction.jpg", "/images/product-abstract-3.jpg"],
    description:
      "Яркая абстрактная композиция, которая станет акцентным пятном в гостиной или спальне. Выразительные линии и насыщенные цвета.",
    tags: ["абстракция", "акцент", "яркая"],
    popular: true,
  },
  {
    id: "5",
    slug: "sovremennye",
    name: "Картина «Современные»",
    category: "modern",
    categoryLabel: "Современные",
    price: 4100,
    sizes: defaultSizes,
    images: ["/images/product-modern-2.jpg", "/images/category-virtual.jpg"],
    description:
      "Современная картина с архитектурными мотивами. Графичность линий и сдержанная палитра подойдут для минималистичных пространств.",
    tags: ["современная", "графика", "архитектура"],
  },
  {
    id: "6",
    slug: "vesennyaya-estetika",
    name: "Картина «Весенняя эстетика»",
    category: "spring",
    categoryLabel: "Весенняя эстетика",
    price: 3800,
    sizes: defaultSizes,
    images: ["/images/category-spring.jpg", "/images/product-spring-2.jpg"],
    description:
      "Нежная картина в весенних тонах: цветы, воздушность и свет. Создаёт ощущение свежести и обновления в любом помещении.",
    tags: ["цветы", "весна", "нежная"],
    badge: "ХИТ СЕЗОНА",
  },
  {
    id: "7",
    slug: "minimalizm",
    name: "Картина «Минимализм»",
    category: "minimalism",
    categoryLabel: "Минимализм",
    price: 3400,
    sizes: defaultSizes,
    images: ["/images/category-minimalism.jpg", "/images/product-editor.jpg"],
    description:
      "Лаконичная картина в духе минимализма: чистые формы, много воздуха, нейтральные оттенки. Идеальна для современного интерьера.",
    tags: ["минимализм", "нейтральная", "лаконичная"],
  },
  {
    id: "8",
    slug: "balans",
    name: "Картина «Баланс»",
    category: "balance",
    categoryLabel: "Баланс",
    price: 3700,
    sizes: defaultSizes,
    images: ["/images/category-balance.jpg", "/images/product-interior-2.jpg"],
    description:
      "Картина «Баланс» объединяет геометрию и гармонию. Уравновешенная композиция успокаивает и настраивает на отдых.",
    tags: ["геометрия", "баланс", "спокойствие"],
  },
  {
    id: "9",
    slug: "dzhapandi",
    name: "Картина «Джапанди»",
    category: "japandi",
    categoryLabel: "Джапанди",
    price: 4300,
    sizes: defaultSizes,
    images: ["/images/category-japandi.jpg", "/images/product-narrow.jpg"],
    description:
      "Стиль джапанди — это союз японской эстетики и скандинавского уюта. Натуральные материалы и природные тона создают атмосферу гармонии.",
    tags: ["джапанди", "натуральное", "уют"],
    badge: "ТОП ПРОДАЖ",
  },
  {
    id: "10",
    slug: "porsh",
    name: "Картина «Порш»",
    category: "porsh",
    categoryLabel: "Порш",
    price: 5200,
    sizes: defaultSizes,
    images: ["/images/category-porsh.jpg", "/images/category-balance.jpg"],
    description:
      "Динамичная картина с мотивами легендарного автомобиля. Станет отличным подарком для ценителей скорости и стиля.",
    tags: ["авто", "порш", "подарок"],
    badge: "НОВИНКА",
  },
  {
    id: "11",
    slug: "abstraktnye-cvety",
    name: "Картина «Абстрактные цветы»",
    category: "abstract-flowers",
    categoryLabel: "Абстрактные цветы",
    price: 3600,
    sizes: defaultSizes,
    images: ["/images/category-flowers.jpg", "/images/product-abstract2.jpg"],
    description:
      "Крупные абстрактные цветы в мягких пастельных тонах. Романтичное и нежное украшение для спальни или гостиной.",
    tags: ["цветы", "пастель", "романтика"],
  },
  {
    id: "12",
    slug: "uzkie-kartiny",
    name: "Узкая картина «Панорама»",
    category: "narrow",
    categoryLabel: "Узкие картины",
    price: 3000,
    sizes: [
      { label: "30x60" },
      { label: "40x80" },
      { label: "50x100" },
    ],
    images: ["/images/product-narrow.jpg", "/images/category-virtual.jpg"],
    description:
      "Узкая картина-панорама идеальна для вертикальных пространств: простенков, ниш, зон над диваном.",
    tags: ["панорама", "узкая", "вертикальная"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Поиск товара по id ИЛИ slug — страница /product/[id] принимает оба варианта. */
export function getProductByIdOrSlug(value: string): Product | undefined {
  return (
    products.find((p) => p.id === value) ?? products.find((p) => p.slug === value)
  );
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.id !== product.id,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getPopularProducts(count = 4): Product[] {
  const popular = products.filter((p) => p.popular);
  const rest = products.filter((p) => !p.popular);
  return [...popular, ...rest].slice(0, count);
}
