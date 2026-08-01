import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";
import { ProtectedImage } from "@/components/ui/protected-image";
import {
  categories,
  getProductsByCategory,
  type Category,
} from "@/data/products";
import { siteConfig } from "@/lib/site";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Категории и подборки",
  description: `Категории и подборки интерьерных картин от ${siteConfig.name}: от минимализма и джапанди до абстракции и космоса. Картина на холсте, галерейная натяжка, размер на выбор.`,
  alternates: { canonical: `${siteConfig.url}/categories` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/categories`,
    siteName: siteConfig.name,
    title: "Категории и подборки — PECHAT VIP",
    description: `Категории и подборки интерьерных картин от ${siteConfig.name}: картина на холсте, галерейная натяжка, размер на выбор.`,
    images: ["/images/hero-home.jpg"],
  },
};

/** Минимальная цена картины в категории (по умолчанию 3 000 ₽). */
function getCategoryMinPrice(slug: string): number {
  const items = getProductsByCategory(slug);
  if (items.length === 0) return 3000;
  return Math.min(...items.map((p) => p.price));
}

function CategoryCard({
  category,
  minPrice,
  delay,
}: {
  category: Category;
  minPrice: number;
  delay: number;
}) {
  return (
    <MotionDiv delay={delay} className="h-full">
      <Link
        href={`/catalog?category=${category.slug}`}
        className="group block h-full overflow-hidden rounded-2xl border border-beige/60 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <div className="relative aspect-square overflow-hidden bg-sand">
          <ProtectedImage
            src={category.image}
            alt={`Категория «${category.name}»`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="protected-content flex flex-col gap-1.5 p-5">
          <h2 className="text-base font-extrabold leading-snug text-espresso md:text-lg">
            Категория «{category.name}»
          </h2>
          <p className="text-sm leading-relaxed text-ink/70">
            Картина на холсте, галерейная натяжка, размер
          </p>
          <p className="mt-1 text-xl font-extrabold text-espresso">
            от {formatPrice(minPrice)}
          </p>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default function CategoriesPage() {
  return (
    <>
      <section className="bg-sand">
        <Container className="pb-10 pt-8 md:pb-14 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Категории" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Категории и подборки
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              Подберите картину под настроение и стиль интерьера — от минимализма
              и джапанди до абстракции и космоса.
            </p>
          </div>
        </Container>
      </section>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((cat, i) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                minPrice={getCategoryMinPrice(cat.slug)}
                delay={(i % 4) * 0.08}
              />
            ))}
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
