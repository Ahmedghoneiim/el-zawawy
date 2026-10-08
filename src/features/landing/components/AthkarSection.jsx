import { useState } from 'react';
import {
  ChevronRight,
  Search,
  Sun,
  Moon,
  RotateCcw,
  Sparkles,
  Heart,
  CheckCircle2,
  HandHeart,
} from 'lucide-react';

export default function AthkarSection() {
  const [activeTab, setActiveTab] = useState('morning');
  const [count, setCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const targetCount = 33;

  const dhikrs = {
    morning: {
      tagline: 'لحظات من الذكر، وسكينة في القلب',
      text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
      footer: 'ذكر قصير، أجر عظيم',
      icon: Sun,
    },
    evening: {
      tagline: 'أمسيات هادئة بذكر الله وطمأنينة',
      text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ',
      footer: 'حفظ ووقاية حتى الصباح',
      icon: Moon,
    },
  };

  const currentDhikr = dhikrs[activeTab];
  const IconComponent = currentDhikr.icon;

  const handleIncrement = () => {
    setCount((previous) =>
      previous < targetCount ? previous + 1 : previous
    );
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCount(0);
  };

  const circumference = 2 * Math.PI * 56;
  const progress = (count / targetCount) * circumference;

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 py-6">
      <style>{`
        @font-face {
          font-family: 'UthmanicHafs';
          src: url('/fonts/UthmanicHafs.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .font-uthmani {
          font-family: 'UthmanicHafs', serif;
          font-weight: 400;
        }
      `}</style>

      <div className="w-full bg-[#FAF9F6] rounded-[32px] p-6 sm:p-12 lg:p-16 border border-[#EAE6DD]">
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14"
          dir="ltr"
        >
          {/* Left column: text content */}
          <div
            className="w-full lg:w-1/2 flex flex-col items-start text-right"
            dir="rtl"
          >
            <div className="flex items-center gap-3 text-[#A78343] font-cairo font-bold text-[13px] leading-[20px] mb-3">
              <span className="tracking-[2px] text-[12px]">02</span>
              <span className="w-8 h-[1px] bg-[#C9A45C]/60" />
              <span>الأذكار والأدعية</span>
            </div>

            <h3 className="font-cairo font-extrabold text-[32px] sm:text-[40px] leading-[1.3] text-[#174A3A] mb-4">
              اطمئنّ قلباً، وابدأ يومك بذكره.
            </h3>

            <p className="font-cairo font-normal text-[15px] leading-[32px] text-[#68736F] mb-6 max-w-[430px]">
              من أذكار الصباح والمساء إلى أدعية الحياة اليومية. مساحة تجمع
              كلمات الذكر، مع عدّاد بسيط يساعدك على المتابعة، دون أن يشتت
              انتباهك.
            </p>

            <div className="space-y-3.5 mb-6">
              {[
                'أذكار الصباح والمساء',
                'أدعية لكل وقت ومناسبة',
                'عداد تفاعلي لتكرار الذكر',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#A78343] shrink-0">
                    <CheckCircle2 className="w-5 h-5 fill-[#F6EEDC] text-[#A78343]" />
                  </div>

                  <span className="font-cairo font-semibold text-[14px] text-[#174A3A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Athkar card */}
          <div
            className="w-full lg:w-1/2 flex justify-center relative"
            dir="rtl"
          >
            <div className="w-full max-w-[460px] bg-white rounded-[26px] border border-[#E2DCCD] shadow-[0px_20px_70px_-35px_rgba(23,74,58,0.22)] overflow-hidden flex flex-col transition-all">
              {/* App bar */}
              <div className="px-5 py-3.5 border-b border-[#174A3A]/10 flex items-center justify-between">
                <button
                  type="button"
                  aria-label="رجوع"
                  className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#174A3A]/5 text-[#174A3A] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-[#174A3A] font-cairo font-bold text-[14px]">
                  <HandHeart className="w-4 h-4 text-[#C9A45C]" />
                  <span>الأذكار والأدعية</span>
                </div>

                <button
                  type="button"
                  aria-label="بحث"
                  className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#174A3A]/5 text-[#174A3A] transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {/* Morning and evening buttons */}
              <div className="px-6 pt-4 pb-2">
                <div className="grid grid-cols-2 gap-2 bg-[#F0F2E9]/50 p-1 rounded-full">
                  <button
                    type="button"
                    onClick={() => handleTabChange('morning')}
                    aria-pressed={activeTab === 'morning'}
                    className={`h-[34px] rounded-full font-cairo font-bold text-[12px] transition-all cursor-pointer ${activeTab === 'morning'
                        ? 'bg-[#174A3A] text-white shadow-xs'
                        : 'text-[#174A3A] hover:bg-black/5'
                      }`}
                  >
                    أذكار الصباح
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTabChange('evening')}
                    aria-pressed={activeTab === 'evening'}
                    className={`h-[34px] rounded-full font-cairo font-bold text-[12px] transition-all cursor-pointer ${activeTab === 'evening'
                        ? 'bg-[#174A3A] text-white shadow-xs'
                        : 'text-[#174A3A] hover:bg-black/5'
                      }`}
                  >
                    أذكار المساء
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-[46px] h-[46px] rounded-full bg-[#F8F2E6] flex items-center justify-center text-[#C9A45C] mb-2.5">
                  <IconComponent className="w-5 h-5 stroke-[2]" />
                </div>

                <span className="font-cairo text-[12px] text-[#68736F] mb-4">
                  {currentDhikr.tagline}
                </span>

                {/* Dhikr text with Uthmanic Hafs font */}
                <p
                  lang="ar"
                  className="font-uthmani text-[22px] sm:text-[25px] leading-[1.9] text-[#174A3A] max-w-[340px] min-h-[88px] flex items-center justify-center mb-5"
                >
                  {currentDhikr.text}
                </p>

                {/* Circular counter */}
                <button
                  type="button"
                  onClick={handleIncrement}
                  aria-label={`زيادة عداد الذكر، ${count} من ${targetCount}`}
                  className="relative w-[124px] h-[124px] rounded-full bg-[#F7FAF8] border-[5px] border-[#E7F1ED] flex flex-col items-center justify-center cursor-pointer select-none group hover:border-[#174A3A]/20 transition-all active:scale-95 shadow-xs"
                >
                  <svg
                    viewBox="0 0 114 114"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none overflow-visible"
                  >
                    <circle
                      cx="57"
                      cy="57"
                      r="56"
                      stroke="#174A3A"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - progress}
                      strokeLinecap="round"
                      className="transition-all duration-200"
                    />
                  </svg>

                  <span className="font-cairo font-semibold text-[36px] leading-[44px] text-[#174A3A] group-hover:scale-105 transition-transform">
                    {count}
                  </span>

                  <span className="font-cairo text-[10px] text-[#68736F] -mt-1">
                    من ٣٣ • اضغط للذكر
                  </span>
                </button>

                {/* Controls */}
                <div className="w-full flex items-center justify-between mt-5 pt-1">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-1.5 font-cairo text-[11px] text-[#68736F] hover:text-[#174A3A] transition-colors cursor-pointer py-1 px-2.5 rounded-md hover:bg-[#F5F2EB]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>بدء من جديد</span>
                  </button>

                  <div className="bg-[#FAF9F6] border border-[#E6E7DF] shadow-xs rounded-[10px] px-3 py-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span className="font-cairo text-[11px] text-[#174A3A] font-semibold">
                      ذكرٌ يسير، وأثرٌ كبير
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-5 py-3 border-t border-[#E6E7DF] flex items-center justify-between">
                <span className="font-cairo text-[12px] text-[#174A3A]">
                  {currentDhikr.footer}
                </span>

                <button
                  type="button"
                  onClick={() => setIsFavorite((previous) => !previous)}
                  aria-label={
                    isFavorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'
                  }
                  aria-pressed={isFavorite}
                  className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 text-[#C9A45C] ${isFavorite ? 'fill-[#C9A45C]' : ''
                      }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}