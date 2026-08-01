import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProtectedImage } from "@/components/ui/protected-image";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";
import { categories } from "@/data/products";

export function CategoriesSection() {
  return (
    <MotionSection className="bg-sand py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Категории картин"
          description="Подберите картину под настроение и стиль интерьера"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
          {categories.map((cat, i) => (
            <MotionDiv key={cat.slug} delay={(i % 4) * 0.06} className="h-full">
              <Link
                href={`/catalog?category=${cat.slug}`}
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-beige/60 shadow-card"
              >
                <ProtectedImage
                  src={cat.image}
                  alt={`Категория «${cat.name}»`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="protected-content absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <h3 className="text-sm font-extrabold uppercase leading-tight text-cream md:text-base xl:text-lg">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
