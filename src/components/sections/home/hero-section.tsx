import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProtectedImage } from "@/components/ui/protected-image";
import { MotionDiv } from "@/components/motion/motion-section";

const heroStats = [
  { strong: "С 2020 года", label: "на рынке" },
  { strong: "30 000+", label: "проданных картин" },
  { strong: "Собственное производство", label: "в Краснодаре" },
  { strong: "8 000+", label: "положительных отзывов" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden">
      <ProtectedImage
        src="/images/hero-home.jpg"
        alt="Интерьерные картины PECHAT VIP в интерьере"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative z-10">
        <Container className="pb-10 pt-28 md:pb-14 md:pt-40">
          <MotionDiv className="protected-content max-w-3xl">
            <p className="mb-4 inline-block rounded-full bg-ink/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-gold backdrop-blur md:text-sm">
              PECHAT VIP · интерьерные картины
            </p>
            <h1 className="text-4xl font-extrabold uppercase leading-[1.08] tracking-tight text-white [text-shadow:0_4.7px_6.2px_rgba(0,0,0,0.43)] md:text-6xl xl:text-7xl">
              интерьерные картины —{" "}
              <span className="text-gold">искусство, доступное каждому</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/90 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] md:text-lg">
              С 2020 года доказываем, что интерьерная картина меняет всё:
              настроение, атмосферу, ощущение дома. За это время мы получили
              больше 8000 положительных отзывов, собрана ответственная команда
              специалистов и найдены лучшие материалы.
            </p>
            <ButtonLink
              href="/catalog"
              variant="gold"
              size="lg"
              className="mt-8"
            >
              Перейти в каталог
            </ButtonLink>
          </MotionDiv>
          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:gap-4 lg:grid-cols-4">
            {heroStats.map((stat, i) => (
              <MotionDiv key={stat.strong} delay={0.15 + i * 0.1}>
                <div className="glass-dark protected-content flex h-full flex-col gap-1 rounded-2xl px-4 py-4 md:px-6 md:py-5">
                  <span className="text-sm font-extrabold leading-snug text-gold md:text-base">
                    {stat.strong}
                  </span>
                  <span className="text-xs leading-snug text-cream/80 md:text-sm">
                    {stat.label}
                  </span>
                </div>
              </MotionDiv>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
