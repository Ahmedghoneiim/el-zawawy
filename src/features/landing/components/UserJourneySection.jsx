import { BookOpen, Headphones, HandHeart, BarChart3, Leaf } from "lucide-react";
import { Container } from "../../../components/ui";

const steps = [
  {
    number: "01",
    title: "اكتشاف",
    description: "اكتشف محتوى يناسب يومك واهتماماتك.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "استماع وقراءة",
    description: "اقرأ أو استمع في لحظات من السكينة.",
    icon: Headphones,
  },
  {
    number: "03",
    title: "تطبيق",
    description: "حوّل ما تعلمته إلى أثر في حياتك.",
    icon: HandHeart,
  },
  {
    number: "04",
    title: "متابعة",
    description: "تابع وردك، واحتف ببطولاتك الصغيرة.",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "استمرار",
    description: "اجعل الخير عادة، والنور رفيقاً.",
    icon: Leaf,
  },
];

export function UserJourneySection() {
  return (
    <section id="user-journey" className="bg-[#fbfaf6] py-16 sm:py-24 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-bold text-[#b5873e] tracking-widest uppercase">
            رحلة المستخدم
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-[#143d24] tracking-normal">
            رحلة بسيطة .. لأثر أعظم
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500">
            خطوة صغيرة اليوم، تصبح عادة جميلة تدوم.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="mt-16 sm:mt-20 relative">
          {/* Desktop connecting line behind circles */}
          <div className="hidden lg:block absolute top-[40px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#eadabe]/40 via-[#d6b785] to-[#eadabe]/40 z-0" />

          {/* Stepper Grid (5 Columns RTL) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle Node Container */}
                  <div className="relative flex items-center justify-center">
                    {/* Circle Icon Badge */}
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#fffefc] to-[#f7f0e3] border-[2px] border-[#e2d0b1] shadow-[0_6px_20px_rgba(183,137,50,0.12)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#c99f57] group-hover:shadow-[0_8px_25px_rgba(183,137,50,0.22)]">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#9b6f28] stroke-[1.75]" />
                    </div>

                    {/* Horizontal Connector Diamond Accent for Desktop (between nodes) */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:flex absolute left-[-50%] top-1/2 -translate-y-1/2 items-center justify-center text-[#c59f5b]">
                        <span className="inline-block w-2 h-2 rotate-45 border border-[#c59f5b] bg-[#fbfaf6]" />
                      </div>
                    )}
                  </div>

                  {/* Step Number Tag */}
                  <span className="mt-4 px-2.5 py-0.5 rounded bg-[#e7d8bd] text-[#7c4f10] text-[11px] sm:text-xs font-black tracking-wider">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-lg sm:text-xl font-bold text-[#143d24]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
