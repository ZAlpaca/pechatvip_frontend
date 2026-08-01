"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const images = product.images.length > 0 ? product.images : [product.images[0]];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-beige/60 bg-sand shadow-card">
        <Image
          key={active}
          src={images[active]}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full gold-gradient px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-ink shadow-plaque">
            {product.badge}
          </span>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Показать фото ${i + 1}`}
              className={cn(
                "relative aspect-square w-20 overflow-hidden rounded-xl border-2 bg-sand transition-all duration-300 md:w-24",
                active === i
                  ? "border-gold shadow-card"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
