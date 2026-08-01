"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/cart-provider";
import { useFavorites } from "@/components/cart/favorites-provider";
import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";
import { CartIcon, HeartIcon } from "@/components/icons/ui";

export function ProductCard({
  product,
  className,
  priority = false,
}: {
  product: Product;
  className?: string;
  priority?: boolean;
}) {
  const { addItem } = useCart();
  const { has, toggle } = useFavorites();
  const fav = has(product.id);
  const price = product.sizes[0]?.price ?? product.price;
  const href = `/product/${product.slug}`;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-beige/60 bg-white shadow-[0_2px_10px_rgba(52,30,19,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-sand">
        <Link href={href} aria-label={product.name}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
        </Link>

        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full gold-gradient px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-ink shadow-plaque">
            {product.badge}
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => toggle(product.id)}
          aria-label={fav ? "Убрать из избранного" : "Добавить в избранное"}
          className={cn(
            "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-plaque backdrop-blur transition-all duration-300 hover:scale-110",
            fav ? "text-wine" : "text-gray hover:text-wine",
          )}
        >
          <HeartIcon className="h-4.5 w-4.5" fill={fav ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="protected-content flex flex-1 flex-col gap-2 p-4 md:p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-mocha">
          {product.categoryLabel}
        </p>
        <h3 className="text-base font-bold leading-snug text-espresso md:text-lg">
          <Link href={href} className="transition-colors hover:text-mocha">
            {product.name}
          </Link>
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {product.sizes.slice(0, 3).map((s) => (
            <span
              key={s.label}
              className="rounded-md border border-beige bg-sand px-2 py-0.5 text-[11px] font-semibold text-ink/70"
            >
              {s.label}
            </span>
          ))}
          {product.sizes.length > 3 ? (
            <span className="rounded-md border border-beige bg-sand px-2 py-0.5 text-[11px] font-semibold text-ink/50">
              +{product.sizes.length - 3}
            </span>
          ) : null}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <div className="flex flex-col">
            {product.oldPrice ? (
              <span className="text-xs text-gray line-through">
                {formatPrice(product.oldPrice)}
              </span>
            ) : null}
            <span className="text-lg font-extrabold text-espresso md:text-xl">
              {formatPrice(price)}
            </span>
          </div>
          <button
            type="button"
            onClick={() =>
              addItem({
                id: product.id,
                slug: product.slug,
                name: product.name,
                price,
                size: product.sizes[0].label,
                image: product.images[0],
              })
            }
            className="flex h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-xs font-bold text-cream transition-all duration-300 hover:bg-coffee"
            aria-label={`Добавить ${product.name} в корзину`}
          >
            <CartIcon className="h-4 w-4" />
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}
