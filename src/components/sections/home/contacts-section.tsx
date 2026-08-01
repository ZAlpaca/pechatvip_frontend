import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AskQuestionForm } from "@/components/ui/ask-question-form";
import { ProtectedImage } from "@/components/ui/protected-image";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";
import { siteConfig } from "@/lib/site";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
} from "@/components/icons/ui";

const contacts = [
  {
    icon: PhoneIcon,
    label: "Телефон",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: MailIcon,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  { icon: PinIcon, label: "Адрес", value: siteConfig.address },
  { icon: ClockIcon, label: "Режим работы", value: siteConfig.hours },
];

export function ContactsSection() {
  return (
    <MotionSection className="bg-sand py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <MotionDiv>
            <SectionHeading
              align="left"
              eyebrow="Связь с нами"
              title="Контакты"
              description="Здесь можно уточнить детали заказа, доставки и оплаты."
            />
            <div className="protected-content flex flex-col gap-4">
              {contacts.map((item) => {
                const inner = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-mocha shadow-card">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray">
                        {item.label}
                      </span>
                      <span className="text-base font-extrabold text-espresso md:text-lg">
                        {item.value}
                      </span>
                    </div>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl border border-beige/60 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift md:p-5"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-beige/60 bg-white p-4 md:p-5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </MotionDiv>

          <MotionDiv delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <ProtectedImage
                src="/images/product-interior-2.jpg"
                alt="Картина в интерьере — задайте вопрос PECHAT VIP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <AskQuestionForm />
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </MotionSection>
  );
}
