import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CartView, CartRecommendations } from "@/components/cart/cart-view";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Корзина",
  description: `Корзина интернет-магазина ${siteConfig.name}: проверьте выбранные картины и оформите заказ. Доставка по всей России, собственное производство в Краснодаре.`,
  alternates: { canonical: `${siteConfig.url}/cart` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/cart`,
    siteName: siteConfig.name,
    title: "Корзина — PECHAT VIP",
    description: `Корзина интернет-магазина ${siteConfig.name}.`,
    images: ["/images/hero-home.jpg"],
  },
};

export default function CartPage() {
  return (
    <>
      <section className="bg-sand">
        <Container className="pb-10 pt-8 md:pb-14 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Корзина" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Корзина
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-sand pb-16 md:pb-24">
        <Container>
          <CartView />
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <CartRecommendations />
        </Container>
      </section>
    </>
  );
}
