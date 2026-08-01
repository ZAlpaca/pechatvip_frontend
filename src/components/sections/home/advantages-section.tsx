import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionSection, MotionDiv } from "@/components/motion/motion-section";
import {
  CalendarIcon,
  ChartIcon,
  FactoryIcon,
  BadgeCheckIcon,
} from "@/components/icons/ui";

const advantages = [
  {
    icon: CalendarIcon,
    title: "С 2020 года на рынке",
    text: "Работаем с 2020 года — накопили опыт и любовь к своему делу",
  },
  {
    icon: ChartIcon,
    title: "30 000+ проданных картин",
    text: "Более тридцати тысяч картин уже нашли своих владельцев",
  },
  {
    icon: FactoryIcon,
    title: "Собственное производство в Краснодаре",
    text: "Полный цикл: от подрамника до галерейной натяжки",
  },
  {
    icon: BadgeCheckIcon,
    title: "8 000+ положительных отзывов",
    text: "Клиенты рекомендуют нас друзьям и близким",
  },
];

export function AdvantagesSection() {
  return (
    <MotionSection className="bg-cream py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow="Преимущества" title="Почему выбирают нас" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-4">
          {advantages.map((item, i) => (
            <MotionDiv key={item.title} delay={(i % 4) * 0.08} className="h-full">
              <div className="protected-content flex h-full flex-col items-center gap-4 rounded-3xl border border-beige/60 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient text-ink shadow-plaque">
                  <item.icon className="h-7 w-7" />
                </span>
                <h3 className="text-sm font-extrabold uppercase leading-snug text-espresso md:text-base">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  {item.text}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
