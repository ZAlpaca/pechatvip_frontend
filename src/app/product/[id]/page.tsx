import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MotionSection } from "@/components/motion/motion-section";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductBuyPanel } from "@/components/product/product-buy-panel";
import { RelatedProducts } from "@/components/product/product-grid";
import { Rating } from "@/components/ui/rating";
import {
  getProductByIdOrSlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { siteConfig } from "@/lib/site";
import { formatPrice } from "@/lib/utils";

const richContent = [
  {
    icon: "🖼",
    title: "Плотный холст",
    text: "Используем фактурный холст премиум-класса с галерейной натяжкой на натуральный деревянный подрамник.",
  },
  {
    icon: "✦",
    title: "Уникальность",
    text: "Каждая картина создаётся индивидуально под заказ: вы получаете уникальное произведение для вашего интерьера.",
  },
  {
    icon: "🎁",
    title: "Праздничная упаковка",
    text: "По запросу аккуратно упакуем картину в подарочную упаковку — идеальный подарок близким.",
  },
  {
    icon: "📦",
    title: "Стандартная упаковка",
    text: "Надёжная многослойная упаковка защищает картину при доставке транспортной компанией в любой город России.",
  },
];

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductByIdOrSlug(id);
  if (!product) return {};
  const url = `${siteConfig.url}/product/${product.id}`;
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url,
      siteName: siteConfig.name,
      title: `${product.name} — ${siteConfig.name}`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductByIdOrSlug(id);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);
  const price = product.sizes[0]?.price ?? product.price;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((i) => `${siteConfig.url}${i}`),
    description: product.description,
    sku: product.id,
    brand: { "@type": "Brand", name: siteConfig.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1000",
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/product/${product.id}`,
      priceCurrency: "RUB",
      price: price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: siteConfig.name },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-cream">
        <Container className="pb-8 pt-8 md:pb-12 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Каталог", href: "/catalog" },
              { label: product.categoryLabel, href: `/catalog?category=${product.category}` },
              { label: product.name },
            ]}
            className="mb-6 md:mb-10"
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
            <ProductGallery product={product} />
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <Rating value={5} size="sm" />
                  <span className="text-sm text-gray">5.0 · 1000 отзывов</span>
                </div>
                <h1 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-espresso md:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-ink/75 md:text-lg">
                  {product.description}
                </p>
              </div>
              <ProductBuyPanel product={product} />
            </div>
          </div>
        </Container>
      </section>

      <MotionSection className="bg-sand py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-14">
            <div className="protected-content rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
              <h2 className="text-2xl font-extrabold uppercase text-espresso">
                Характеристики
              </h2>
              <dl className="mt-6 divide-y divide-beige/50 text-sm md:text-base">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/60">Техника</dt>
                  <dd className="font-bold text-espresso">Печать на холсте</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/60">Материал</dt>
                  <dd className="font-bold text-espresso">
                    Фактурный холст премиум-класса
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/60">Основа</dt>
                  <dd className="font-bold text-espresso">
                    Натуральный деревянный подрамник
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/60">Натяжка</dt>
                  <dd className="font-bold text-espresso">Галерейная</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/60">Размеры</dt>
                  <dd className="font-bold text-espresso">
                    {product.sizes.map((s) => s.label).join(", ")} см
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/60">Гарантия</dt>
                  <dd className="font-bold text-espresso">5 лет</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-ink/60">Категория</dt>
                  <dd className="font-bold text-espresso">
                    {product.categoryLabel}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="protected-content rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
              <h2 className="text-2xl font-extrabold uppercase text-espresso">
                Рич контент
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {richContent.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-2xl bg-sand p-5 transition-colors duration-300 hover:bg-gold-light/40"
                  >
                    <span className="text-2xl" aria-hidden>
                      {b.icon}
                    </span>
                    <h3 className="mt-2 text-base font-extrabold text-espresso">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <div className="protected-content flex flex-col items-start gap-4 rounded-3xl brown-gradient p-8 text-cream md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                {product.categoryLabel}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold uppercase md:text-4xl">
                {product.name}
              </h2>
              <p className="mt-2 text-cream/80">Цена: {formatPrice(price)}</p>
            </div>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-base font-bold text-ink shadow-card transition hover:brightness-105"
            >
              Перейти в каталог
            </Link>
          </div>
        </Container>
      </MotionSection>

      <section className="bg-cream pb-16 md:pb-24">
        <Container>
          <RelatedProducts products={related} />
        </Container>
      </section>
    </>
  );
}
