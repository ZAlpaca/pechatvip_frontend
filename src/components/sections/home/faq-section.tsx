import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { MotionSection } from "@/components/motion/motion-section";
import { faqItems } from "@/data/content";

export function FaqSection() {
  return (
    <MotionSection className="bg-cream py-16 md:py-24">
      <Container>
        <SectionHeading title="Часто задаваемые вопросы" />
        <div className="mx-auto max-w-4xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </MotionSection>
  );
}
