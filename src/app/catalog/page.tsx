import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MotionSection } from "@/components/motion/motion-section";
import { ProductGrid } from "@/components/product/product-grid";
import { categories, getProductsByCategory, products } from "@/data/products";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Каталог интерьерных картин",
  description: `Каталог интерьерных картин на холсте от ${siteConfig.name}. От минимализма и джапанди до абстракции и космоса: галерейная натяжка, размер на выбор, собственное производство в Краснодаре.`,
  alternates: { canonical: `${siteConfig.url}/catalog` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/catalog`,
    siteName: siteConfig.name,
    title: "Каталог интерьерных картин — PECHAT VIP",
    description: `Каталог интерьерных картин на холсте от ${siteConfig.name}: галерейная натяжка, размер на выбор.`,
    images: ["/images/hero-home.jpg"],
  },
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeSlug =
    category && categories.some((c) => c.slug === category) ? category : null;
  const activeCategory = categories.find((c) => c.slug === activeSlug);
  const filtered = activeSlug ? getProductsByCategory(activeSlug) : products;

  const chipClasses = (isActive: boolean) =>
    cn(
      "rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300",
      isActive
        ? "bg-ink text-cream shadow-card"
        : "border border-beige bg-white text-ink hover:border-mocha hover:text-mocha",
    );

  return (
    <>
      <section className="bg-sand">
        <Container className="pb-6 pt-8 md:pb-8 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Каталог" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Каталог
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              Интерьерные картины на холсте собственного производства: от минимализма
              и джапанди до абстракции и космоса. Галерейная натяжка, размер на выбор.
            </p>
          </div>
        </Container>
      </section>

      <MotionSection className="bg-sand pb-16 md:pb-24">
        <Container>
          <div className="protected-content flex flex-wrap gap-2.5">
            <Link href="/catalog" className={chipClasses(!activeSlug)}>
              Все
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalog?category=${cat.slug}`}
                className={chipClasses(cat.slug === activeSlug)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          {filtered.length > 0 ? (
            <ProductGrid products={filtered} />
          ) : (
            <div className="protected-content rounded-2xl border border-beige/60 bg-sand px-6 py-16 text-center">
              <p className="text-lg font-bold text-espresso">
                В категории «{activeCategory?.name}» пока нет картин
              </p>
              <p className="mx-auto mt-2 max-w-md text-ink/70">
                Выберите другую подборку или посмотрите весь каталог.
              </p>
              <Link
                href="/catalog"
                className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors duration-300 hover:bg-coffee"
              >
                Смотреть все картины
              </Link>
            </div>
          )}
        </Container>
      </MotionSection>
    </>
  );
}
