import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { MotionSection } from "@/components/motion/motion-section";
import { selfOrderSteps, managerSteps, deliveryMethods } from "@/data/content";
import { siteConfig } from "@/lib/site";
import { TruckIcon, PackageIcon, PinIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "Как заказать",
  description: `Как заказать интерьерные картины в ${siteConfig.name}: самостоятельный заказ на сайте за 5 шагов, заказ с помощью менеджера, способы доставки по всей России.`,
  alternates: { canonical: `${siteConfig.url}/how-to-order` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/how-to-order`,
    siteName: siteConfig.name,
    title: "Как заказать — PECHAT VIP",
    description: `Как заказать интерьерные картины в ${siteConfig.name}: 5 простых шагов, доставка по всей России.`,
    images: ["/images/hero-home.jpg"],
  },
};

const deliveryIcons = [TruckIcon, PackageIcon, PinIcon];

export default function HowToOrderPage() {
  return (
    <>
      <section className="bg-sand">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Как заказать" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content max-w-4xl">
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Как заказать наши картины?
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">
              Вы можете приобрести картины, оформив заказ на сайте, либо связавшись
              с нашим менеджером для личной консультации.
            </p>
          </div>
        </Container>
      </section>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="protected-content rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
              <h2 className="text-xl font-extrabold uppercase text-espresso md:text-2xl">
                Самостоятельный заказ на сайте
              </h2>
              <ol className="mt-6 flex flex-col gap-4">
                {selfOrderSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gold-gradient text-sm font-extrabold text-ink shadow-plaque">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-ink/80 md:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="protected-content rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
              <h2 className="text-xl font-extrabold uppercase text-espresso md:text-2xl">
                С помощью менеджера
              </h2>
              <ol className="mt-6 flex flex-col gap-4">
                {managerSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full brown-gradient text-sm font-extrabold text-cream shadow-plaque">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-ink/80 md:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-sand py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Способы доставки"
            description="Доставляем картины по Краснодару и всей России — выбирайте удобный способ."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
            {deliveryMethods.map((m, i) => {
              const Icon = deliveryIcons[i] ?? TruckIcon;
              return (
                <div
                  key={m.title}
                  className="protected-content flex flex-col gap-4 rounded-3xl border border-beige/60 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-mocha">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="text-lg font-extrabold uppercase text-espresso">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/70 md:text-base">
                    {m.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <div className="protected-content flex flex-col items-center gap-6 rounded-3xl brown-gradient px-8 py-12 text-center text-cream md:py-16">
            <h2 className="text-2xl font-extrabold uppercase md:text-4xl">
              Готовы выбрать картину?
            </h2>
            <p className="max-w-xl text-cream/80">
              Переходите в каталог или напишите менеджеру — поможем подобрать
              размер, стиль и оформим заказ.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href="/catalog" variant="gold" size="lg">
                Перейти в каталог
              </ButtonLink>
              <ButtonLink
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                size="lg"
              >
                Написать менеджеру
              </ButtonLink>
            </div>
            <p className="text-sm text-cream/70">
              Или позвоните:{" "}
              <a href={siteConfig.phoneHref} className="font-bold text-gold transition hover:brightness-110">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
