"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/cart-provider";
import { useFavorites } from "@/components/cart/favorites-provider";
import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";
import { CartIcon, HeartIcon, MinusIcon, PlusIcon } from "@/components/icons/ui";

export function ProductBuyPanel({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const { has, toggle } = useFavorites();
  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const size = product.sizes[sizeIdx] ?? product.sizes[0];
  const price = size.price ?? product.price;
  const fav = has(product.id);

  const addToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price,
      size: size.label,
      image: product.images[0],
    }, qty);
  };

  const buyNow = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price,
      size: size.label,
      image: product.images[0],
    }, qty);
    router.push("/checkout");
  };

  return (
    <div className="protected-content flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold uppercase tracking-wider text-mocha">
          {product.categoryLabel}
        </span>
        <button
          type="button"
          onClick={() => toggle(product.id)}
          aria-label={fav ? "Убрать из избранного" : "Добавить в избранное"}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
            fav
              ? "border-wine/30 bg-wine/5 text-wine"
              : "border-beige bg-white text-gray hover:border-wine/40 hover:text-wine",
          )}
        >
          <HeartIcon className="h-5 w-5" fill={fav ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex items-end gap-4">
        <div>
          <span className="text-3xl font-extrabold text-espresso md:text-4xl">
            {formatPrice(price)}
          </span>
          {product.oldPrice ? (
            <span className="ml-3 text-lg text-gray line-through">
              {formatPrice(product.oldPrice)}
            </span>
          ) : null}
        </div>
        <span className="pb-1 text-sm text-gray">
          за размер {size.label} см
        </span>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-espresso">
          Размер (см)
        </p>
        <div className="flex flex-wrap gap-2.5">
          {product.sizes.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setSizeIdx(i)}
              aria-pressed={sizeIdx === i}
              className={cn(
                "min-w-16 rounded-xl border-2 px-4 py-2.5 text-sm font-bold transition-all duration-300",
                sizeIdx === i
                  ? "border-ink bg-ink text-cream shadow-card"
                  : "border-beige bg-white text-ink hover:border-mocha hover:text-mocha",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-beige bg-white">
          <button
            type="button"
            onClick={() => setQty((v) => Math.max(1, v - 1))}
            aria-label="Уменьшить количество"
            className="flex h-12 w-12 items-center justify-center rounded-full text-ink transition hover:bg-sand disabled:opacity-40"
            disabled={qty <= 1}
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-lg font-extrabold text-espresso">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((v) => v + 1)}
            aria-label="Увеличить количество"
            className="flex h-12 w-12 items-center justify-center rounded-full text-ink transition hover:bg-sand"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-gray">
          Итого: <span className="font-bold text-espresso">{formatPrice(price * qty)}</span>
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={addToCart}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-bold text-cream shadow-card transition-all duration-300 hover:bg-coffee"
        >
          <CartIcon className="h-5 w-5" />
          В корзину
        </button>
        <button
          type="button"
          onClick={buyNow}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gold-gradient px-8 py-4 text-base font-bold text-ink shadow-card transition-all duration-300 hover:brightness-105"
        >
          Купить в 1 клик
        </button>
      </div>

      <ul className="grid grid-cols-1 gap-2.5 text-sm text-ink/75 sm:grid-cols-2">
        <li className="flex items-center gap-2">
          <span className="text-gold">✓</span> Галерейная натяжка холста
        </li>
        <li className="flex items-center gap-2">
          <span className="text-gold">✓</span> Доставка по всей России
        </li>
        <li className="flex items-center gap-2">
          <span className="text-gold">✓</span> Гарантия 5 лет
        </li>
        <li className="flex items-center gap-2">
          <span className="text-gold">✓</span> Собственное производство
        </li>
      </ul>
    </div>
  );
}
