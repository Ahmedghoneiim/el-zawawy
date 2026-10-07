import { useState } from 'react';
import {
  ChevronRight,
  Search,
  BookOpen,
  Bookmark,
  Play,
  Pause,
  ArrowLeft,
} from 'lucide-react';

export default function QuranSection() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

      <div className="w-full bg-[#F0F2E9] rounded-[32px] p-6 sm:p-12 lg:p-16 border border-[#E3E7DA]">
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14"
          dir="ltr"
        >
          {/* Left column: Quran card */}
          <div className="w-full lg:w-1/2 flex justify-center" dir="rtl">
            <div className="w-full max-w-[460px] bg-white rounded-[26px] border border-[#E2DCCD] shadow-[0px_20px_70px_-35px_rgba(23,74,58,0.22)] p-4 sm:p-5">
              <div className="bg-[#FCFAF3] rounded-[18px] border border-[#E6DECA] overflow-hidden flex flex-col">
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
                    <BookOpen className="w-4 h-4 text-[#C9A45C]" />
                    <span>القرآن الكريم</span>
                  </div>

                  <button
                    type="button"
                    aria-label="بحث"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#174A3A]/5 text-[#174A3A] transition-colors cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>

                {/* Surah metadata */}
                <div className="px-6 pt-3.5 pb-2 flex items-center justify-between text-[#68736F] font-cairo text-[12px]">
                  <span>سورة الفاتحة</span>
                  <span>مكية • ٧ آيات</span>
                </div>

                {/* Surah title */}
                <div className="px-6 pt-2">
                  <div className="w-full py-2 px-4 rounded-[8px] bg-[#C9A45C]/5 border border-[#C9A45C]/40 flex items-center justify-center gap-3">
                    <span className="text-[#C9A45C] text-sm select-none">
                      ۞
                    </span>

                    <span className="font-uthmani text-[20px] leading-[1.6] text-[#174A3A]">
                      سُورَةُ الفَاتِحَةِ
                    </span>

                    <span className="text-[#C9A45C] text-sm select-none">
                      ۞
                    </span>
                  </div>
                </div>

                {/* Verses */}
                <div className="px-6 sm:px-8 py-5 text-center" lang="ar">
                  <p className="font-uthmani text-[22px] sm:text-[25px] leading-[1.8] text-[#174A3A] mb-4">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ{' '}
                    <span className="text-[#C9A45C] mx-0.5 whitespace-nowrap">
                      ﴿١﴾
                    </span>
                  </p>

                  <div className="font-uthmani text-[20px] sm:text-[23px] leading-[2.1] text-[#253E31] text-center">
                    الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ{' '}
                    <span className="text-[#C9A45C] mx-0.5 whitespace-nowrap">
                      ﴿٢﴾
                    </span>{' '}
                    الرَّحْمَٰنِ الرَّحِيمِ{' '}
                    <span className="text-[#C9A45C] mx-0.5 whitespace-nowrap">
                      ﴿٣﴾
                    </span>{' '}
                    مَالِكِ يَوْمِ الدِّينِ{' '}
                    <span className="text-[#C9A45C] mx-0.5 whitespace-nowrap">
                      ﴿٤﴾
                    </span>{' '}
                    إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ{' '}
                    <span className="text-[#C9A45C] mx-0.5 whitespace-nowrap">
                      ﴿٥﴾
                    </span>{' '}
                    اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ{' '}
                    <span className="text-[#C9A45C] mx-0.5 whitespace-nowrap">
                      ﴿٦﴾
                    </span>{' '}
                    صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ
                    الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ{' '}
                    <span className="text-[#C9A45C] mx-0.5 whitespace-nowrap">
                      ﴿٧﴾
                    </span>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="px-5 py-3 bg-[#FAF7EE] border-t border-[#C9A45C]/20 flex items-center justify-between">
                  <button
                    type="button"
                    className="flex items-center gap-1 font-cairo text-[12px] text-[#174A3A] hover:text-[#C9A45C] transition-colors cursor-pointer"
                  >
                    <span>سورة الإخلاص</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPlaying((previous) => !previous)}
                    aria-label={isPlaying ? 'إيقاف التلاوة مؤقتًا' : 'استماع'}
                    aria-pressed={isPlaying}
                    className="w-7 h-7 rounded-full border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] hover:bg-[#C9A45C] hover:text-white transition-all cursor-pointer"
                    title={isPlaying ? 'إيقاف مؤقت' : 'استماع'}
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsBookmarked((previous) => !previous)}
                    aria-pressed={isBookmarked}
                    className="flex items-center gap-1.5 font-cairo text-[12px] text-[#174A3A] hover:text-[#C9A45C] transition-colors cursor-pointer"
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''
                        }`}
                    />
                    <span>{isBookmarked ? 'تم الحفظ' : 'حفظ الموضع'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: text content */}
          <div
            className="w-full lg:w-1/2 flex flex-col items-start text-right"
            dir="rtl"
          >
            <div className="flex items-center gap-3 text-[#A78343] font-cairo font-bold text-[13px] leading-[20px] mb-3">
              <span className="tracking-[2px] text-[12px]">01</span>
              <span className="w-8 h-[1px] bg-[#C9A45C]/60" />
              <span>القرآن الكريم</span>
            </div>

            <h3 className="font-cairo font-extrabold text-[32px] sm:text-[40px] leading-[1.3] text-[#174A3A] mb-4">
              نورٌ يرافقك، آيةً بعد آية.
            </h3>

            <p className="font-cairo font-normal text-[15px] leading-[32px] text-[#68736F] mb-6 max-w-[430px]">
              اقرأ القرآن الكريم في واجهة هادئة، وتأمل آياته، واحفظ موضع
              قراءتك لتعود وتكمل رحلتك من حيث توقفت.
            </p>

            <div className="flex flex-wrap gap-2 mb-7">
              {['قراءة واضحة', 'حفظ موضع القراءة', 'تلاوات صوتية'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-4 py-1.5 bg-white/70 text-[#174A3A] border border-[#174A3A]/10 rounded-full font-cairo text-[11px] font-semibold"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setIsPlaying((previous) => !previous)}
                aria-pressed={isPlaying}
                className="inline-flex items-center gap-2 text-[#174A3A] hover:text-[#A78343] font-cairo font-bold text-[13px] leading-[16px] group transition-colors cursor-pointer"
              >
                <span>
                  {isPlaying
                    ? 'جاري الاستماع للتلاوة...'
                    : 'استمع إلى آيات تطمئن قلبك'}
                </span>

                {isPlaying ? (
                  <Pause className="w-4 h-4 text-[#A78343]" />
                ) : (
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}