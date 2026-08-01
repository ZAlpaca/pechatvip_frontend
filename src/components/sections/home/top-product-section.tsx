import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProtectedImage } from "@/components/ui/protected-image";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function TopProductSection() {
  const product = getProductBySlug("skandi");

  return (
    <MotionSection className="bg-cream py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionDiv>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-beige/60 shadow-card">
              <ProtectedImage
                src="/images/product-scandi.jpg"
                alt="Картина в стиле «Сканди»"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full gold-gradient px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-plaque">
                ТОП ТОВАР
              </span>
            </div>
          </MotionDiv>

          <MotionDiv delay={0.15} className="protected-content">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-mocha">
              ТОП ТОВАР
            </span>
            <p className="text-lg font-bold text-mocha md:text-xl">
              искусство, покорившее многих
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-espresso md:text-5xl">
              Картина в стиле «Сканди»
            </h2>
            {product ? (
              <>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
                  {product.description}
                </p>
                <p className="mt-5 text-3xl font-extrabold text-espresso">
                  от {formatPrice(product.sizes[0]?.price ?? product.price)}
                </p>
              </>
            ) : null}
            <ButtonLink
              href="/product/skandi"
              variant="brown"
              size="lg"
              className="mt-8"
            >
              Перейти к товару
            </ButtonLink>
          </MotionDiv>
        </div>
      </Container>
    </MotionSection>
  );
}
