import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Product } from "@/data/products";

export function ProductGrid({
  products,
  columns = 4,
}: {
  products: Product[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  return (
    <div className={cols + " grid grid-cols-1 gap-5 md:gap-7"}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export function RelatedProducts({
  products,
  title = "Вам может понравиться",
  className,
}: {
  products: Product[];
  title?: string;
  className?: string;
}) {
  if (products.length === 0) return null;
  return (
    <section className={className}>
      <SectionHeading title={title} />
      <ProductGrid products={products} />
    </section>
  );
}
