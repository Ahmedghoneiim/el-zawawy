import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "../../../components/ui";

const faqData = [
  {
    id: "faq-1",
    question: "ما الذي يجمعه تطبيق زواوي؟",
    answer:
      "يجمع القرآن الكريم والأذكار والأدعية ومواقيت الصلاة والأحاديث النبوية والمحتوى الصوتي، إلى جانب محتوى رمضان ودعاء ختم المصحف والمحفوظات والتنزيلات.",
  },
  {
    id: "faq-2",
    question: "هل التطبيق متاح على Android و iOS؟",
    answer:
      "نعم، تطبيق زواوي متاح رسمياً مجاناً على متجري Google Play و App Store مع تجربة متكاملة ومتوافقة تماماً على جميع الأجهزة الهواتف والأجهزة اللوحية.",
  },
  {
    id: "faq-3",
    question: "هل يمكنني حفظ المحتوى للرجوع إليه؟",
    answer:
      "نعم، يمكنك بسهولة حفظ الآيات والسور والأذكار في قائمة المحفوظات الخاصة بك، بالإضافة إلى إمكانية تنزيل المحتوى الصوتي للاستماع في أي وقت حتى بدون اتصال بالإنترنت.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState("faq-1");

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#fbfaf6] py-16 sm:py-24 border-t border-amber-100/70">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Section Header (Right in RTL layout) */}
          <div className="lg:col-span-5 text-right">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#b5873e]">
              <span className="w-6 h-[2px] bg-[#b5873e]" />
              <span>بكل وضوح</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#143d24] leading-tight">
              أجوبة تهمُّك
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
              تعرّف أكثر على رفيق رحلتك الإيمانية.
            </p>
          </div>

          {/* FAQ Accordions List (Left in RTL layout) */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-zinc-200/80 pb-5 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between text-right py-2 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#143d24] group-hover:text-[#206f38] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <span className="shrink-0 ms-4 flex items-center justify-center text-[#b5873e] text-xl font-bold transition-transform duration-200">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed ps-1 animate-fadeIn">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
