import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProtectedImage } from "@/components/ui/protected-image";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";

export function BannerSection() {
  return (
    <MotionSection className="bg-cream">
      <div className="relative overflow-hidden">
        <ProtectedImage
          src="/images/banner-abstract.jpg"
          alt="Картина в интерьере — PECHAT VIP"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <Container className="relative z-10 py-20 text-center md:py-28">
          <MotionDiv className="protected-content mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-cream [text-shadow:0_4px_8px_rgba(0,0,0,0.4)] md:text-5xl xl:text-6xl">
              Частичка твоего "я" на стене
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
              Наша коллекция создана для того, чтобы идеально вписаться в ваше
              пространство, дополнив его характер
            </p>
            <ButtonLink
              href="/catalog"
              variant="gold"
              size="lg"
              className="mt-8"
            >
              Подберите картину
            </ButtonLink>
          </MotionDiv>
        </Container>
      </div>
    </MotionSection>
  );
}
