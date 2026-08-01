import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { TopProductSection } from "@/components/sections/home/top-product-section";
import { HitSection } from "@/components/sections/home/hit-section";
import { TopSalesSection } from "@/components/sections/home/top-sales-section";
import { CategoriesSection } from "@/components/sections/home/categories-section";
import { AdvantagesSection } from "@/components/sections/home/advantages-section";
import { BannerSection } from "@/components/sections/home/banner-section";
import { HowToOrderSection } from "@/components/sections/home/how-to-order-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { ContactsSection } from "@/components/sections/home/contacts-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Интерьерные картины на холсте — искусство, доступное каждому",
  description:
    "Интерьерные картины на холсте от PECHAT VIP в Краснодаре. Собственное производство с 2020 года: 30 000+ проданных картин, 8 000+ положительных отзывов. Галерейная натяжка, размер на выбор, доставка по России.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Интерьерные картины — искусство, доступное каждому",
    description:
      "Интерьерные картины на холсте собственного производства в Краснодаре: 30 000+ проданных картин, 8 000+ положительных отзывов.",
    images: ["/images/hero-home.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TopProductSection />
      <HitSection />
      <TopSalesSection />
      <CategoriesSection />
      <AdvantagesSection />
      <BannerSection />
      <HowToOrderSection />
      <FaqSection />
      <ContactsSection />
    </>
  );
}
