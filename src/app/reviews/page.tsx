import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ReviewsView } from "@/components/reviews/reviews-view";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Отзывы",
  description: `Отзывы покупателей интернет-магазина ${siteConfig.name}: рейтинг 5.0, более 1000 отзывов о качестве картин, доставке и сервисе. Собственное производство в Краснодаре.`,
  alternates: { canonical: `${siteConfig.url}/reviews` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/reviews`,
    siteName: siteConfig.name,
    title: "Отзывы — PECHAT VIP",
    description: `Отзывы покупателей ${siteConfig.name}: рейтинг 5.0, более 1000 отзывов.`,
    images: ["/images/hero-home.jpg"],
  },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-sand">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Отзывы" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Отзывы
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              Реальные отзывы наших покупателей о качестве картин, доставке и
              сервисе.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-sand pb-16 md:pb-24">
        <Container>
          <ReviewsView />
        </Container>
      </section>
    </>
  );
}
