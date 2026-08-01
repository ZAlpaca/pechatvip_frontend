import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionSection } from "@/components/motion/motion-section";
import { orderSteps } from "@/data/content";

export function HowToOrderSection() {
  return (
    <MotionSection className="bg-sand py-16 md:py-24">
      <Container>
        <SectionHeading title="Как сделать заказ?" />
        <div className="relative">
          {/* Волнистая линия-связка этапов (desktop) */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-7 hidden h-10 w-full lg:block"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 50 C 130 10, 250 90, 370 50 S 610 10, 730 50 S 970 90, 1090 50 S 1330 10, 1430 50"
              stroke="#F1D299"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="0.1 16"
            />
          </svg>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
            {orderSteps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex gap-5 lg:flex-col lg:gap-0"
              >
                {i < orderSteps.length - 1 ? (
                  <span
                    className="absolute left-6 top-12 bottom-[-1.5rem] w-0 border-l-2 border-dashed border-gold/80 lg:hidden"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full gold-gradient text-base font-extrabold text-ink shadow-plaque lg:h-14 lg:w-14">
                  {step.num}
                </span>
                <div className="protected-content flex-1 lg:mt-6 lg:rounded-3xl lg:border lg:border-beige/60 lg:bg-white/70 lg:p-6">
                  <h3 className="text-lg font-extrabold uppercase leading-tight text-espresso md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 md:text-base">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
