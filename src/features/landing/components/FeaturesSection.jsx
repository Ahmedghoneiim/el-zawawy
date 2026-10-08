import React from 'react';

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#FAF9F6] pt-20 pb-16 px-4 md:px-12" dir="rtl">
      
      {/* 1. الهيدر الرئيسي للقسم */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[#B38C44] text-xs font-semibold tracking-wide uppercase mb-2 block">
          مميزات التطبيق
        </span>
        
        {/* العنوان مع الخطين الزخرفيين الجانبيين */}
        <div className="flex items-center justify-center gap-4 my-2">
          <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#B38C44]/40"></div>
          <h2 className="text-3xl md:text-5xl font-black text-[#174A3A] tracking-tight">
            تجربة إيمانية متكاملة
          </h2>
          <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#B38C44]/40"></div>
        </div>

        <p className="text-[#8c8a84] text-xs md:text-sm mt-3">
          كل ما يقربك إلى الله، في تجربة تمنح يومك معنى، وقلبك سكينة.
        </p>
      </div>

      {/* 2. الكارت الكبير (الكلام على اليمين - الكارت على الشمال) */}
      <div className="max-w-6xl mx-auto bg-[#F2F0E8]/70 rounded-[32px] p-6 md:p-12 shadow-xs border border-[#E8E4D8]/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* الجانب الأيمن: النصوص والشرح (الكلام على اليمين) */}
          <div className="lg:col-span-5 flex flex-col items-start text-right">
            
            {/* رقم الميزة ولقبها */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#B38C44] text-xs font-bold">01</span>
              <div className="h-[1px] w-6 bg-[#B38C44]"></div>
              <span className="text-[#B38C44] text-xs font-bold">القرآن الكريم</span>
            </div>

            {/* العنوان الرئيسي للميزة */}
            <h3 className="text-2xl md:text-4xl font-black text-[#174A3A] leading-tight mb-4">
              نورٌ يرافقك، آيةً بعد آية.
            </h3>

            {/* شرح الميزة */}
            <p className="text-[#8c8a84] text-xs md:text-sm leading-relaxed mb-6">
              اقرأ القرآن الكريم في واجهة هادئة، وتأمل آياته، واحفظ موضع قراءتك لتعود وتكمل رحلتك من حيث توقفت.
            </p>

            {/* الوسوم السريعة (Tags) */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="bg-white/80 border border-gray-200/80 text-gray-600 text-[11px] px-3.5 py-1.5 rounded-full">
                قراءة واضحة
              </span>
              <span className="bg-white/80 border border-gray-200/80 text-gray-600 text-[11px] px-3.5 py-1.5 rounded-full">
                حفظ موضع القراءة
              </span>
              <span className="bg-white/80 border border-gray-200/80 text-gray-600 text-[11px] px-3.5 py-1.5 rounded-full">
                تلاوات صوتية
              </span>
            </div>

            {/* رابط الانتقال */}
            <a 
              href="#listen" 
              className="group flex items-center gap-2 text-[#174A3A] font-bold text-xs md:text-sm hover:text-[#11382c] transition-colors"
            >
              <span>استمع إلى آيات تطمئن قلبك</span>
              <svg className="w-4 h-4 rotate-180 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

          </div>

          {/* الجانب الأيسر: شاشة المصحف (الكارت على الشمال) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] bg-white rounded-[24px] p-5 shadow-lg border border-gray-100/80 relative">
              
              {/* شريط الهيدر العلوي للتطبيق */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 text-[#174A3A]">
                <button className="p-1.5 hover:bg-gray-50 rounded-lg text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex items-center gap-2 font-bold text-sm text-[#174A3A]">
                  <svg className="w-4 h-4 text-[#B38C44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>القرآن الكريم</span>
                </div>

                <button className="p-1.5 hover:bg-gray-50 rounded-lg text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* تفاصيل السورة */}
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-3 px-1">
                <span>سورة الفاتحة</span>
                <span>مكية • ٧ آيات</span>
              </div>

              {/* إطار عنوان السورة المزين */}
              <div className="bg-[#FAF7F2] border border-[#E8DFC8] rounded-xl py-2 px-4 text-center mb-6">
                <span className="font-serif text-[#B38C44] text-sm md:text-base font-bold tracking-wider">
                  ❖ سُورَةُ الْفَاتِحَةِ ❖
                </span>
              </div>

              {/* نص القرآن الكريم */}
              <div className="text-center font-serif text-gray-800 leading-[2.4] text-lg md:text-xl space-y-2 py-2 px-1">
                <p className="text-[#174A3A] font-bold text-base md:text-lg mb-3">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p>
                  الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿١﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٢﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٣﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٤﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٥﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٦﴾
                </p>
              </div>

              {/* شريط الإجراءات السفلي للشاشة */}
              <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-100 text-xs text-gray-500">
                <button className="flex items-center gap-1 hover:text-[#174A3A] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>سورة الإخلاص</span>
                </button>

                <div className="w-2 h-2 rounded-full bg-[#B38C44]/40"></div>

                <button className="flex items-center gap-1.5 text-[#174A3A] font-medium hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span>حفظ الموضع</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;