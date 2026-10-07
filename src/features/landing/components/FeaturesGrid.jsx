import React, { useState } from 'react';
import { 
  BookOpen, 
  Moon, 
  Sun, 
  Bookmark, 
  Check, 
  ChevronLeft, 
  HeartHandshake 
} from 'lucide-react';

export default function FeaturesGrid() {
  const [activeTab, setActiveTab] = useState('المحفوظات');

  return (
    <>
      {/* استدعاء الخطوط العربية لضمان المطابقة 100% */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap');
        .font-quran {
          font-family: 'Amiri', serif;
        }
        .font-ui {
          font-family: 'Cairo', sans-serif;
        }
      `}</style>

      <div className="w-full bg-[#fbf9f4] p-4 sm:p-8 md:p-12 font-ui min-h-screen flex items-center justify-center" dir="rtl">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

          {/* 1. كارت الأحاديث النبوية (أعلى اليمين - العرض أكبر) - 04 */}
          <div className="md:col-span-7 bg-[#f7f3ea] rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden min-h-[420px] shadow-sm">
            {/* أيقونة الكتاب التوضيحية */}
            <div className="absolute top-10 left-8 text-[#b09667] opacity-60 pointer-events-none">
              <BookOpen size={32} strokeWidth={1.2} />
            </div>

            <div>
              {/* الهيدر */}
              <div className="flex items-center gap-3 text-[#b09667] text-sm font-bold mb-6">
                <span>الأحاديث النبوية</span>
                <span className="w-8 h-[1px] bg-[#d9cbb0]"></span>
                <span className="text-[#a59168]">04</span>
              </div>

              {/* العنوان والوصف */}
              <h2 className="text-3xl font-extrabold text-[#173a2f] mb-3 tracking-tight">
                هديٌ لحياتك، ومعنى ليومك.
              </h2>
              <p className="text-[#6d7a73] text-sm font-semibold mb-6">
                اقرأ من السنة النبوية، وتعلّم من جوامع الكلم.
              </p>
            </div>

            {/* الكارت الداخلي - الحديث */}
            <div className="bg-[#fffdfa] rounded-2xl p-6 relative shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#ede5d8]">
              <div className="flex justify-between items-center text-xs text-[#a3aca7] mb-4">
                <span className="font-semibold flex items-center gap-1">
                  من هدي النبي ﷺ
                </span>
                <Sun size={15} className="text-[#b09667]" />
              </div>

              <p className="text-2xl font-quran font-bold text-[#173a2f] text-center my-6 leading-relaxed">
                «أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ»
              </p>

              <div className="flex justify-between items-center text-[12px] text-[#717c76] pt-3">
                <span className="font-semibold text-[#8c9690]">متفق عليه</span>
                <button className="flex items-center gap-1.5 hover:text-[#173a2f] transition font-semibold text-[#6d7a73]">
                  <span>حفظ الحديث</span>
                  <Bookmark size={14} className="text-[#6d7a73]" />
                </button>
              </div>
            </div>
          </div>


          {/* 2. كارت رمضان (أعلى اليسار - العرض أصغر) - 06 */}
          <div className="md:col-span-5 bg-[#ebf0ec] rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden min-h-[420px] shadow-sm">
            {/* هلال الخلفية */}
            <div className="absolute top-2 left-2 text-[#dce5de] pointer-events-none opacity-80">
              <Moon size={140} strokeWidth={0.8} />
            </div>

            <div className="relative z-10">
              {/* الهيدر */}
              <div className="flex items-center gap-3 text-[#b09667] text-sm font-bold mb-6">
                <span>رمضان</span>
                <span className="w-8 h-[1px] bg-[#d9cbb0]"></span>
                <span className="text-[#a59168]">06</span>
              </div>

              {/* العنوان والوصف */}
              <h2 className="text-3xl font-extrabold text-[#173a2f] mb-3 tracking-tight">
                شهر الخير، أقرب إليك.
              </h2>
              <p className="text-[#6d7a73] text-sm font-semibold">
                تلاوة وذكر ودعاء، لأيام تفيض بالبركة.
              </p>
            </div>

            {/* الكارت الداخلي - رفيقك في رمضان */}
            <div className="bg-[#f2f6f3] rounded-2xl p-5 relative z-10 border border-[#e1e9e3]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-[#173a2f]">رفيقك في رمضان</span>
                <Moon size={16} className="text-[#b09667]" />
              </div>

              <div className="space-y-2.5">
                <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#ebf2ed] text-[#173a2f] flex items-center justify-center text-[11px] font-bold">1</span>
                    <span className="text-xs font-bold text-[#43524a]">وردك من القرآن</span>
                  </div>
                  <Check size={14} className="text-[#b09667]" />
                </div>

                <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#ebf2ed] text-[#173a2f] flex items-center justify-center text-[11px] font-bold">2</span>
                    <span className="text-xs font-bold text-[#43524a]">أذكارك اليومية</span>
                  </div>
                  <Check size={14} className="text-[#b09667]" />
                </div>

                <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#ebf2ed] text-[#173a2f] flex items-center justify-center text-[11px] font-bold">3</span>
                    <span className="text-xs font-bold text-[#43524a]">دعاء عند الإفطار</span>
                  </div>
                  <Check size={14} className="text-[#b09667]" />
                </div>
              </div>
            </div>
          </div>


          {/* 3. كارت دعاء ختم المصحف (أسفل اليمين - العرض أصغر) - 07 */}
          <div className="md:col-span-5 bg-[#f7f3ea] rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] shadow-sm">
            <div>
              {/* الهيدر */}
              <div className="flex items-center gap-3 text-[#b09667] text-sm font-bold mb-6">
                <span>دعاء ختم المصحف</span>
                <span className="w-8 h-[1px] bg-[#d9cbb0]"></span>
                <span className="text-[#a59168]">07</span>
              </div>

              {/* العنوان والوصف */}
              <h2 className="text-3xl font-extrabold text-[#173a2f] mb-3 tracking-tight">
                خاتمة مباركة، وبداية جديدة.
              </h2>
              <p className="text-[#6d7a73] text-sm font-semibold mb-6">
                دعاء يرافق لحظة إتمام تلاوتك، في عرض هادئ يليق بها.
              </p>
            </div>

            {/* الكارت الداخلي - الدعاء */}
            <div className="bg-[#f3edd1]/30 border border-[#eae0cd] rounded-2xl p-6 text-center flex flex-col items-center justify-center min-h-[150px]">
              <div className="text-[#b09667] mb-3">
                <HeartHandshake size={28} strokeWidth={1.3} />
              </div>

              <p className="text-2xl font-quran font-bold text-[#173a2f] leading-relaxed">
                اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قُلُوبِنَا، وَنُورَ صُدُورِنَا
              </p>
            </div>
          </div>


          {/* 4. كارت المحفوظات والتنزيلات (أسفل اليسار - العرض أكبر) - 08 */}
          <div className="md:col-span-7 bg-[#ebf0ec] rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] shadow-sm">
            <div>
              {/* الهيدر */}
              <div className="flex items-center gap-3 text-[#b09667] text-sm font-bold mb-6">
                <span>المحفوظات والتنزيلات</span>
                <span className="w-8 h-[1px] bg-[#d9cbb0]"></span>
                <span className="text-[#a59168]">08</span>
              </div>

              {/* العنوان والوصف */}
              <h2 className="text-3xl font-extrabold text-[#173a2f] mb-3 tracking-tight">
                ما تحبّه، دائماً بالقرب منك.
              </h2>
              <p className="text-[#6d7a73] text-sm font-semibold mb-6">
                ارجع إلى محتواك المفضّل، واحتفظ بتلاواتك للاستماع إليها لاحقاً.
              </p>
            </div>

            {/* الكارت الداخلي - التبويبات */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              {/* التبويبات */}
              <div className="flex border-b border-[#f0f3f1] text-xs font-bold">
                <button 
                  onClick={() => setActiveTab('المحفوظات')}
                  className={`flex-1 py-3.5 text-center transition relative ${
                    activeTab === 'المحفوظات' 
                      ? 'text-[#173a2f]' 
                      : 'text-[#a0aaa4] hover:text-[#173a2f]'
                  }`}
                >
                  المحفوظات
                  {activeTab === 'المحفوظات' && (
                    <span className="absolute bottom-0 right-1/4 left-1/4 h-[2px] bg-[#b09667]"></span>
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab('التنزيلات')}
                  className={`flex-1 py-3.5 text-center transition relative ${
                    activeTab === 'التنزيلات' 
                      ? 'text-[#173a2f]' 
                      : 'text-[#a0aaa4] hover:text-[#173a2f]'
                  }`}
                >
                  التنزيلات
                  {activeTab === 'التنزيلات' && (
                    <span className="absolute bottom-0 right-1/4 left-1/4 h-[2px] bg-[#b09667]"></span>
                  )}
                </button>
              </div>

              {/* العناصر */}
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8fbf9] transition">
                  <ChevronLeft size={16} className="text-[#abb5af]" />
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#2a3c35]">سورة الفاتحة</span>
                    <div className="p-2 bg-[#e4eee6] text-[#173a2f] rounded-lg">
                      <BookOpen size={15} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8fbf9] transition">
                  <ChevronLeft size={16} className="text-[#abb5af]" />
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#2a3c35]">أذكار الصباح</span>
                    <div className="p-2 bg-[#e4eee6] text-[#173a2f] rounded-lg">
                      <Bookmark size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}