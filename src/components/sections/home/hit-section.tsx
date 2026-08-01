import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProtectedImage } from "@/components/ui/protected-image";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function HitSection() {
  const product = getProductBySlug("vdohnovenie");

  return (
    <MotionSection className="bg-sand py-16 md:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl brown-gradient shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <MotionDiv className="protected-content flex flex-col justify-center p-8 md:p-12 xl:p-16">
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full gold-gradient px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-plaque">
                ХИТ СЕЗОНА
              </span>
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-cream md:text-4xl xl:text-5xl">
                Картина «Вдохновение» для уюта в вашем доме
              </h2>
              {product ? (
                <>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
                    {product.description}
                  </p>
                  <p className="mt-5 text-2xl font-extrabold text-gold md:text-3xl">
                    от {formatPrice(product.sizes[0]?.price ?? product.price)}
                  </p>
                </>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href="/product/vdohnovenie"
                  variant="gold"
                  size="lg"
                >
                  Перейти к товару
                </ButtonLink>
                <ButtonLink href="/catalog" variant="white" size="lg">
                  Загрузить ещё
                </ButtonLink>
              </div>
            </MotionDiv>
            <MotionDiv
              delay={0.15}
              className="relative min-h-[280px] lg:min-h-[480px]"
            >
              <ProtectedImage
                src="/images/banner-inspiration.jpg"
                alt="Картина «Вдохновение» в интерьере"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </MotionDiv>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
