import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProtectedImage } from "@/components/ui/protected-image";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";
import { ProductCard } from "@/components/product/product-card";
import { getPopularProducts } from "@/data/products";

export function TopSalesSection() {
  const topProducts = getPopularProducts(3);

  return (
    <MotionSection className="bg-cream py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Фавориты покупателей"
          title="ТОП ПРОДАЖ!"
          description="100% качество — широкий выбор фаворитов"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-4">
          <MotionDiv className="h-full">
            <Link
              href="/catalog?category=narrow"
              className="group relative block h-full min-h-[320px] overflow-hidden rounded-2xl shadow-card"
            >
              <ProtectedImage
                src="/images/product-narrow.jpg"
                alt="Категория «Узкие картины»"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent"
                aria-hidden="true"
              />
              <div className="protected-content absolute inset-x-0 bottom-0 p-5">
                <span className="mb-3 inline-block rounded-full gold-gradient px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-ink shadow-plaque">
                  ТОП ПРОДАЖ
                </span>
                <h3 className="text-xl font-extrabold uppercase leading-tight text-cream md:text-2xl">
                  Узкие картины
                </h3>
                <p className="mt-1 text-sm text-cream/80">
                  Панорамы для вертикальных пространств
                </p>
              </div>
            </Link>
          </MotionDiv>
          {topProducts.map((product, i) => (
            <MotionDiv key={product.id} delay={0.1 + i * 0.08} className="h-full">
              <ProductCard product={product} className="h-full" />
            </MotionDiv>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
