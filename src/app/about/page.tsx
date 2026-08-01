import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { Rating } from "@/components/ui/rating";
import { AskQuestionForm } from "@/components/ui/ask-question-form";
import { ProtectedImage } from "@/components/ui/protected-image";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";
import { faqItems, productionSteps, qualityBlocks } from "@/data/content";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "О компании",
  description: `О компании ${siteConfig.name}: собственная студия интерьерных картин в Краснодаре с 2020 года. Оборудование Epson, экологичные чернила, холсты премиум-класса, более 30 000 проданных картин.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    title: "О компании — PECHAT VIP",
    description: `О компании ${siteConfig.name}: собственное производство интерьерных картин в Краснодаре с 2020 года.`,
    images: ["/images/hero-home.jpg"],
  },
};

export default function AboutPage() {
  const clientReviews = reviews.slice(0, 4);

  return (
    <>
      <section className="bg-sand">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "О нас" },
            ]}
            className="mb-6 md:mb-8"
          />
          <div className="protected-content">
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-espresso md:text-5xl xl:text-6xl">
              О нашей компании
            </h1>
            <p className="mt-4 text-xl font-bold uppercase text-mocha md:text-2xl">
              Мы — команда, которая заботится о вашем комфорте и уюте
            </p>
          </div>
        </Container>
      </section>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="protected-content">
              <SectionHeading
                align="left"
                eyebrow="Наша студия"
                title="Галерея картин"
              />
              <div className="-mt-4 flex flex-col gap-4 text-base leading-relaxed text-ink/75 md:text-lg">
                <p>
                  Наша студия «Галерея картин» работает на рынке с 2020 года. За
                  это время мы внедрили ряд нововведений и продолжаем строго
                  соблюдать требования ГОСТ. Наша компания является ориентиром
                  для многих брендов.
                </p>
                <p>
                  Мы отслеживаем актуальные тренды и задаём новые стандарты.
                  Накопленный опыт и строгий контроль качества позволяют нам
                  гарантировать безупречный результат в каждом проекте.
                </p>
                <p className="font-bold text-espresso">
                  Выбирая нас, вы выбираете надёжность, качество и современный
                  подход.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-beige/60 shadow-card">
              <ProtectedImage
                src="/images/product-card-main.jpg"
                alt="Производство интерьерных картин PECHAT VIP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-sand py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Качество"
            title="Наш принцип — качество на первом месте"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
            {qualityBlocks.map((block) => (
              <div
                key={block.title}
                className="protected-content rounded-3xl border border-beige/60 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient text-xl font-extrabold text-ink shadow-plaque">
                  ✓
                </span>
                <h3 className="mt-5 text-lg font-extrabold uppercase text-espresso">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 md:text-base">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Отзывы"
            title="Отзывы наших клиентов"
            description="Более 1000 проверенных отзывов с рейтингом 5.0"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
            {clientReviews.map((review) => (
              <article
                key={review.id}
                className="protected-content flex flex-col gap-4 rounded-3xl border border-beige/60 bg-white p-6 shadow-card md:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full gold-gradient text-base font-extrabold text-ink shadow-plaque">
                      {review.author.charAt(0)}
                    </span>
                    <div>
                      <p className="font-extrabold text-espresso">
                        {review.author}
                      </p>
                      <p className="text-xs text-gray">{review.date}</p>
                    </div>
                  </div>
                  <Rating value={review.rating} size="sm" />
                </div>
                <p className="text-sm leading-relaxed text-ink/80">
                  {review.comment}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-sand py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Производство"
            title="Этапы разработки картины"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-7">
            {productionSteps.map((step, i) => (
              <MotionDiv key={step.num} delay={(i % 4) * 0.08} className="h-full">
                <div className="protected-content flex h-full flex-col gap-4 rounded-3xl border border-beige/60 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl brown-gradient text-lg font-extrabold text-cream shadow-plaque">
                    {step.num}
                  </span>
                  <h3 className="text-base font-extrabold uppercase text-espresso">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/70">
                    {step.text}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-cream py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                align="left"
                title="Часто задаваемые вопросы"
              />
              <Accordion items={faqItems} />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Связь"
                title="Задайте свой вопрос"
                description={`Не нашли ответ? Позвоните нам: ${siteConfig.phone} — или напишите через форму, и мы ответим в рабочее время.`}
              />
              <AskQuestionForm heading="Ваш вопрос" />
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
