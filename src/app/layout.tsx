import type { Metadata, Viewport } from "next";
import {
  Lato,
  Montserrat,
  Nunito_Sans,
  Open_Sans,
  Source_Serif_4,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CallbackModal } from "@/components/layout/callback-modal";
import { ContentProtection } from "@/components/layout/content-protection";
import { CallbackProvider } from "@/components/layout/callback-context";
import { CartProvider } from "@/components/cart/cart-provider";
import { FavoritesProvider } from "@/components/cart/favorites-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  weight: ["600", "900"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PECHAT VIP — интерьерные картины на холсте | Краснодар",
    template: "%s | PECHAT VIP",
  },
  description: siteConfig.description,
  keywords: [
    "интерьерные картины",
    "картины на холсте",
    "картины в Краснодаре",
    "картина на заказ",
    "постер на холсте",
    "PECHAT VIP",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: "PECHAT VIP",
    title: "PECHAT VIP — интерьерные картины на холсте",
    description: siteConfig.description,
    images: ["/images/hero-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PECHAT VIP — интерьерные картины на холсте",
    description: siteConfig.description,
    images: ["/images/hero-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFBF6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={cn(
        montserrat.variable,
        nunitoSans.variable,
        openSans.variable,
        lato.variable,
        sourceSerif.variable,
        "h-full",
      )}
    >
      <body className="flex min-h-full flex-col">
        <ContentProtection />
        <FavoritesProvider>
          <CartProvider>
            <CallbackProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CallbackModal />
            </CallbackProvider>
          </CartProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
