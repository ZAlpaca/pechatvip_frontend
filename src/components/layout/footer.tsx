import Link from "next/link";
import { siteConfig, marketplaceLinks } from "@/lib/site";
import { BrandIcon } from "@/components/icons/brand-icon";

const footerNav = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/catalog", label: "Магазин" },
  { href: "/categories", label: "Каталог" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/categories", label: "Цены на картины" },
  { href: "/how-to-order", label: "Как заказать" },
];

const stats = [
  "На рынке с 2020 года",
  "Более 30 000 проданных картин",
  "БОЛЕЕ 8000 ОТЗЫВОВ",
  "Собственное производство",
];

export function Footer() {
  return (
    <footer className="protected-content mt-auto">
      {/* статистика */}
      <div className="brown-gradient">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4 md:px-8">
          {stats.map((s) => (
            <div
              key={s}
              className="glass-dark rounded-2xl px-4 py-5 text-center text-sm font-bold uppercase tracking-wide text-cream md:text-base"
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* основной футер */}
      <div className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1.2fr] md:px-8 md:py-16">
          <div>
            <p className="text-3xl font-extrabold uppercase tracking-tight">
              PECHAT <span className="text-gold">VIP</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              {siteConfig.slogan}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {(["vk", "telegram", "ozon", "wb", "yandex-market"] as const).map(
                (k) => (
                  <a
                    key={k}
                    href={
                      k === "vk"
                        ? "https://vk.com"
                        : k === "telegram"
                          ? "https://t.me"
                          : marketplaceLinks.find((m) => m.key === (k === "yandex-market" ? "ym" : k))?.href ?? "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
                    aria-label={k}
                  >
                    <BrandIcon name={k} className="h-6 w-6" />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Навигация
            </p>
            <ul className="space-y-2.5">
              {footerNav.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/75 transition hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Контакты
            </p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li>
                <a href={siteConfig.phoneHref} className="text-lg font-bold text-cream transition hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
              <li>{siteConfig.hours}</li>
            </ul>
            <Link
              href="/contacts"
              className="mt-5 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-ink transition hover:brightness-105"
            >
              Задать вопрос
            </Link>
          </div>
        </div>

        {/* нижняя баннер-полоса */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-6 px-4 py-6 md:justify-between md:px-8">
            <p className="text-xs text-cream/60">
              © {new Date().getFullYear()} {siteConfig.name} · Интерьерные картины на холсте
            </p>
            <div className="flex items-center gap-5">
              {(["ozon", "wb", "yandex-market", "vk", "telegram"] as const).map(
                (k) => (
                  <span
                    key={k}
                    className="text-cream/50 transition hover:text-cream"
                    title={k}
                  >
                    <BrandIcon name={k} className="h-6 w-6" />
                  </span>
                ),
              )}
            </div>
            <p className="text-xs text-cream/60">
              Доставка по России · Собственное производство
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
