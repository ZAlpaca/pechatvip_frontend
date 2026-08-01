"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/cart-provider";
import { RelatedProducts } from "@/components/product/product-grid";
import { getPopularProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { MinusIcon, PlusIcon, TrashIcon } from "@/components/icons/ui";

export function CartView() {
  const { items, total, updateQty, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sand text-4xl">
          🛒
        </div>
        <div>
          <h2 className="text-2xl font-extrabold uppercase text-espresso md:text-3xl">
            Ваша корзина пока пуста
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink/70">
            Загляните в каталог — там ждут картины, которые наполнят ваш дом
            уютом и характером.
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

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
      <div className="protected-content flex flex-col gap-4">
        {items.map((item) => (
          <article
            key={`${item.id}-${item.size}`}
            className="flex flex-col gap-4 rounded-2xl border border-beige/60 bg-white p-4 shadow-[0_2px_10px_rgba(52,30,19,0.06)] sm:flex-row sm:items-center"
          >
            <Link
              href={`/product/${item.slug}`}
              className="relative block aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-sand sm:w-24"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
              />
            </Link>
            <div className="flex flex-1 flex-col gap-1.5">
              <Link
                href={`/product/${item.slug}`}
                className="text-base font-bold text-espresso transition hover:text-mocha"
              >
                {item.name}
              </Link>
              <p className="text-sm text-gray">Размер: {item.size} см</p>
              <p className="text-lg font-extrabold text-espresso">
                {formatPrice(item.price)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-full border border-beige bg-white">
                <button
                  type="button"
                  onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                  aria-label="Уменьшить количество"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-sand"
                >
                  <MinusIcon className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center font-extrabold text-espresso">
                  {item.qty}
                </span>
                <button
                  type="button"
                  onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                  aria-label="Увеличить количество"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-sand"
                >
                  <PlusIcon className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="w-24 text-right font-extrabold text-espresso">
                {formatPrice(item.price * item.qty)}
              </p>
              <button
                type="button"
                onClick={() => removeItem(item.id, item.size)}
                aria-label={`Удалить ${item.name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray transition hover:bg-wine/5 hover:text-wine"
              >
                <TrashIcon className="h-4.5 w-4.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <aside className="protected-content h-fit rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8">
        <h2 className="text-xl font-extrabold uppercase text-espresso">
          Ваш заказ
        </h2>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-ink/70">Товары ({items.length})</dt>
            <dd className="font-bold text-espresso">{formatPrice(total)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink/70">Доставка</dt>
            <dd className="font-bold text-espresso">Рассчитывается</dd>
          </div>
        </dl>
        <div className="mt-5 flex justify-between border-t border-beige/60 pt-4">
          <span className="font-extrabold uppercase text-espresso">Итого</span>
          <span className="text-2xl font-extrabold text-espresso">
            {formatPrice(total)}
          </span>
        </div>
        <Link
          href="/checkout"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full gold-gradient px-8 py-4 text-base font-bold text-ink shadow-card transition hover:brightness-105"
        >
          Оформить заказ
        </Link>
        <Link
          href="/catalog"
          className="mt-3 inline-flex w-full items-center justify-center rounded-full border-2 border-ink/80 px-8 py-3.5 text-sm font-bold text-ink transition hover:bg-ink hover:text-cream"
        >
          Продолжить покупки
        </Link>
      </aside>
    </div>
  );
}

export function CartRecommendations() {
  return <RelatedProducts products={getPopularProducts(4)} />;
}
