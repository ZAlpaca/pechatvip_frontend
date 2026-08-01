import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import {
  FavoritesView,
  FavoritesRecommendations,
} from "@/components/cart/favorites-view";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Избранные товары",
  description: `Избранные картины в интернет-магазине ${siteConfig.name}: сохраняйте понравившиеся работы и возвращайтесь к ним в любое время.`,
  alternates: { canonical: `${siteConfig.url}/favorites` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/favorites`,
    siteName: siteConfig.name,
    title: "Избранные товары — PECHAT VIP",
    description: `Избранные картины в интернет-магазине ${siteConfig.name}.`,
    images: ["/images/hero-home.jpg"],
  },
};

export default function FavoritesPage() {
  return (
    <>
      <section className="bg-sand">
        <Container className="pb-10 pt-8 md:pb-14 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Избранное" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Избранные товары
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-sand pb-16 md:pb-24">
        <Container>
          <FavoritesView />
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <FavoritesRecommendations />
        </Container>
      </section>
    </>
  );
}
