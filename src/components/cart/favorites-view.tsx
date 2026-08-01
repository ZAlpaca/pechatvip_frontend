"use client";

import Link from "next/link";
import { useFavorites } from "@/components/cart/favorites-provider";
import { ProductGrid } from "@/components/product/product-grid";
import { RelatedProducts } from "@/components/product/product-grid";
import { getProductById, getPopularProducts } from "@/data/products";

export function FavoritesView() {
  const { ids } = useFavorites();
  const items = ids
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sand text-4xl">
          🤍
        </div>
        <div>
          <h2 className="text-2xl font-extrabold uppercase text-espresso md:text-3xl">
            У вас пока нет избранных товаров
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink/70">
            Нажимайте на сердечко у понравившихся картин, чтобы сохранить их здесь.
          </p>
        </div>
        <Link
          href="/catalog"
          className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-base font-bold text-cream shadow-card transition hover:bg-coffee"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return <ProductGrid products={items} />;
}

export function FavoritesRecommendations() {
  return <RelatedProducts products={getPopularProducts(4)} />;
}
