import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { MotionSection } from "@/components/motion/motion-section";
import { rules } from "@/data/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Правила магазина",
  description: `Правила интернет-магазина ${siteConfig.name}: предоплата, отказ от заказа, гарантия, производственный брак, повреждения при доставке. Всё, что нужно знать перед покупкой картин.`,
  alternates: { canonical: `${siteConfig.url}/rules` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/rules`,
    siteName: siteConfig.name,
    title: "Правила магазина — PECHAT VIP",
    description: `Правила интернет-магазина ${siteConfig.name}: предоплата, гарантия, возврат.`,
    images: ["/images/hero-home.jpg"],
  },
};

export default function RulesPage() {
  return (
    <>
      <section className="bg-sand">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Правила магазина" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content max-w-4xl">
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Правила нашего магазина
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
              Всё что нужно знать перед покупкой картин!
            </p>
          </div>
        </Container>
      </section>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-5">
            {rules.map((rule) => (
              <article
                key={rule.num}
                className="protected-content flex flex-col gap-4 rounded-3xl border border-beige/60 bg-white p-6 shadow-card sm:flex-row sm:gap-6 md:p-8"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl gold-gradient text-2xl font-extrabold text-ink shadow-plaque">
                  {rule.num}
                </span>
                <div>
                  <h2 className="text-lg font-extrabold uppercase text-espresso md:text-xl">
                    {rule.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75 md:text-base">
                    {rule.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-sand py-16 md:py-24">
        <Container>
          <div className="protected-content flex flex-col items-center gap-6 rounded-3xl brown-gradient px-8 py-12 text-center text-cream md:py-16">
            <h2 className="max-w-3xl text-2xl font-extrabold uppercase leading-snug md:text-4xl">
              Заказывая картины в нашем магазине, вы полностью соглашаетесь с
              данными правилами
            </h2>
            <ButtonLink href="/catalog" variant="gold" size="lg">
              Перейти в каталог
            </ButtonLink>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
