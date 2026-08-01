"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";
import { useCart } from "@/components/cart/cart-provider";
import { useFavorites } from "@/components/cart/favorites-provider";
import { useCallbackModal } from "@/components/layout/callback-context";
import {
  CartIcon,
  CloseIcon,
  HeartIcon,
  MenuIcon,
  PhoneIcon,
  UserIcon,
} from "@/components/icons/ui";

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const { ids } = useFavorites();
  const { openCallback } = useCallbackModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-cream/90 shadow-[0_4px_24px_rgba(52,30,19,0.08)] backdrop-blur-md"
          : "bg-cream/70 backdrop-blur-sm",
      )}
    >
      {/* верхняя полоса */}
      <div className="brown-gradient hidden text-cream md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-2 text-xs">
          <p>
            {siteConfig.city} · {siteConfig.address} · {siteConfig.hours}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 font-semibold transition hover:text-gold"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-gold"
            >
              {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={openCallback}
              className="rounded-full border border-cream/30 px-3 py-1 font-medium transition hover:border-gold hover:text-gold"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>

      {/* основная полоса */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-2xl font-extrabold uppercase tracking-tight text-espresso transition group-hover:text-coffee md:text-[26px]">
            PECHAT <span className="text-mocha">VIP</span>
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray">
            Интерьерные картины
          </span>
        </Link>

        {/* навигация desktop */}
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-semibold transition-colors",
                isActive(link.href)
                  ? "text-mocha"
                  : "text-espresso hover:text-mocha",
                "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-gold after:transition-all after:duration-300",
                isActive(link.href) ? "after:w-full" : "after:w-0 hover:after:w-full",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* действия */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            onClick={openCallback}
            className="hidden rounded-full p-2.5 text-espresso transition hover:bg-sand lg:flex"
            aria-label="Заказать обратный звонок"
            title="Заказать звонок"
          >
            <PhoneIcon className="h-5 w-5" />
          </button>
          <Link
            href="/favorites"
            className="relative rounded-full p-2.5 text-espresso transition hover:bg-sand"
            aria-label="Избранное"
            title="Избранное"
          >
            <HeartIcon className="h-5 w-5" />
            {ids.length > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-wine px-1 text-[10px] font-bold text-white">
                {ids.length}
              </span>
            ) : null}
          </Link>
          <Link
            href="/cart"
            className="relative rounded-full p-2.5 text-espresso transition hover:bg-sand"
            aria-label="Корзина"
            title="Корзина"
          >
            <CartIcon className="h-5 w-5" />
            {count > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-wine px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            ) : null}
          </Link>
          <Link
            href="/cart"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-coffee md:flex"
          >
            <UserIcon className="h-4 w-4" />
            Войти
          </Link>

          <button
            type="button"
            className="rounded-full p-2.5 text-espresso transition hover:bg-sand xl:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* мобильное меню */}
      {menuOpen ? (
        <div className="fixed inset-0 z-[90] flex flex-col bg-cream">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-xl font-extrabold uppercase text-espresso">
              PECHAT <span className="text-mocha">VIP</span>
            </span>
            <button
              type="button"
              className="rounded-full p-2 text-espresso hover:bg-sand"
              onClick={() => setMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6"
            aria-label="Мобильная навигация"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3.5 text-lg font-bold uppercase tracking-wide transition",
                  isActive(link.href)
                    ? "bg-sand text-mocha"
                    : "text-espresso hover:bg-sand",
                )}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openCallback();
              }}
              className="mt-4 rounded-xl bg-ink px-4 py-3.5 text-center text-lg font-bold uppercase text-cream transition hover:bg-coffee"
            >
              Заказать звонок
            </button>
          </nav>
          <div className="border-t border-beige px-6 py-4 text-sm text-gray">
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p className="mt-1 text-xs">{siteConfig.address}</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
