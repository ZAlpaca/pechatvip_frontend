import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { AskQuestionForm } from "@/components/ui/ask-question-form";
import { MotionSection } from "@/components/motion/motion-section";
import { siteConfig, marketplaceLinks } from "@/lib/site";
import { BrandIcon, type BrandIconName } from "@/components/icons/brand-icon";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
} from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Контакты интернет-магазина ${siteConfig.name}: телефон ${siteConfig.phone}, e-mail ${siteConfig.email}, адрес ${siteConfig.address}. Режим работы ${siteConfig.hours}. Задайте вопрос — ответим в ближайшее время.`,
  alternates: { canonical: `${siteConfig.url}/contacts` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/contacts`,
    siteName: siteConfig.name,
    title: "Контакты — PECHAT VIP",
    description: `Контакты интернет-магазина ${siteConfig.name}: ${siteConfig.phone}, ${siteConfig.address}.`,
    images: ["/images/hero-home.jpg"],
  },
};

const contactCards = [
  {
    icon: PhoneIcon,
    label: "Телефон",
    value: siteConfig.phone,
    sub: siteConfig.phoneAlt,
    href: siteConfig.phoneHref,
  },
  {
    icon: MailIcon,
    label: "E-mail",
    value: siteConfig.email,
    sub: "Ответим в течение рабочего дня",
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: PinIcon,
    label: "Адрес офиса",
    value: siteConfig.address,
    sub: "Краснодар",
  },
  {
    icon: ClockIcon,
    label: "График работы",
    value: "Понедельник-пятница",
    sub: "с 10:00 до 20:00",
  },
];

const socialKeys: BrandIconName[] = ["vk", "telegram", "ozon", "wb", "yandex-market"];

function socialHref(key: BrandIconName): string {
  if (key === "vk") return "https://vk.com";
  if (key === "telegram") return "https://t.me";
  const marketplace = marketplaceLinks.find((m) => m.key === (key === "yandex-market" ? "ym" : key));
  return marketplace?.href ?? "#";
}

export default function ContactsPage() {
  return (
    <>
      <section className="bg-sand">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Контакты" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Наши контакты
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              Выбирайте любой удобный способ, будем на связи!
            </p>
          </div>
        </Container>
      </section>

      <MotionSection className="bg-sand pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Inner = (
                <>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-mocha">
                    <card.icon className="h-7 w-7" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray">
                      {card.label}
                    </p>
                    <p className="text-lg font-extrabold text-espresso">
                      {card.value}
                    </p>
                    <p className="text-sm text-ink/60">{card.sub}</p>
                  </div>
                </>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className="protected-content flex flex-col gap-4 rounded-3xl border border-beige/60 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="protected-content flex flex-col gap-4 rounded-3xl border border-beige/60 bg-white p-6 shadow-card"
                >
                  {Inner}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-beige/60 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gray">
                Мы в социальных сетях и на маркетплейсах
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Следите за новинками и акциями в наших сообществах
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialKeys.map((key) => (
                <a
                  key={key}
                  href={socialHref(key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-sand p-2.5 text-mocha transition hover:bg-ink hover:text-gold"
                  aria-label={key}
                >
                  <BrandIcon name={key} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="protected-content">
              <SectionHeading
                align="left"
                title="Задайте вопрос"
                description="Здесь можно уточнить детали заказа, доставки и оплаты. Ответим на указанную почту в рабочее время."
              />
              <div className="flex flex-col gap-3 text-sm text-ink/75 md:text-base">
                <a href={siteConfig.phoneHref} className="font-bold text-espresso transition hover:text-mocha">
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-mocha">
                  {siteConfig.email}
                </a>
                <p>{siteConfig.address}</p>
                <p>{siteConfig.hours}</p>
              </div>
            </div>
            <AskQuestionForm />
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
