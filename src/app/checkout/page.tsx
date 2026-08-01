import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CheckoutForm } from "@/components/cart/checkout-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Оформление заказа",
  description: `Оформление заказа в интернет-магазине ${siteConfig.name}: контактные данные, доставка по всей России, удобные способы оплаты. Собственное производство в Краснодаре.`,
  alternates: { canonical: `${siteConfig.url}/checkout` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/checkout`,
    siteName: siteConfig.name,
    title: "Оформление заказа — PECHAT VIP",
    description: `Оформление заказа в интернет-магазине ${siteConfig.name}.`,
    images: ["/images/hero-home.jpg"],
  },
};

export default function CheckoutPage() {
  return (
    <>
      <section className="bg-sand">
        <Container className="pb-10 pt-8 md:pb-14 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Корзина", href: "/cart" },
              { label: "Оформление заказа" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-espresso md:text-5xl xl:text-6xl">
              Оформление заказа
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              Заполните контактные данные, выберите способ доставки и оплаты —
              менеджер свяжется с вами для подтверждения.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-sand pb-16 md:pb-24">
        <Container>
          <CheckoutForm />
        </Container>
      </section>
    </>
  );
}
