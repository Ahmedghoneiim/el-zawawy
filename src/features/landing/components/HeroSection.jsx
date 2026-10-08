import React from 'react';
import heroImage from '../../../assets/images/Image-left.png';

export const HeroSection = () => {
  return (
    <section className="w-full bg-[#FAF9F6] p-0 relative pb-16 md:pb-20" dir="rtl">
      {/* Container الرئيسي بملء الارتفاع والعرض */}
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between min-h-[580px] md:min-h-[640px]">
        
        {/* العمود الأيمن: النصوص والأزرار */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-right px-6 md:px-12 lg:px-20 py-10 z-10">
          
          {/* الآية القرآنية */}
          <div className="text-[#a09e9a] text-xs font-sans mb-3 flex items-center gap-1">
            <span className="font-serif text-sm">﴿ وَقُل رَّبِّ زِدْنِي عِلْمًا ﴾</span>
            <span className="text-[10px] text-gray-400 mr-1">سورة طه - الآية 114</span>
          </div>

          {/* العناوين */}
          <div className="w-full max-w-[420px]">
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-black text-[#174A3A] leading-[1.1] tracking-tight">
              رحلة إيمانية
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-black text-[#B38C44] leading-[1.1] tracking-tight my-1">
              متكاملة
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#174A3A] leading-[1.15] mb-4">
              في مكان واحد
            </h2>

            {/* النص الوصفي */}
            <p className="text-[#8c8a84] text-xs sm:text-sm leading-relaxed mb-6">
              القرآن، الأحاديث، الأذكار، الأدعية، مواقيت الصلاة والمحتوى الإسلامي في تجربة واحدة بسيطة وموثوقة.
            </p>
          </div>

          {/* أزرار التفاعل */}
          <div className="flex items-center gap-3 mb-6">
            <a 
              href="#start" 
              className="bg-[#174A3A] hover:bg-[#11382c] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 shadow-sm"
            >
              <span>ابدأ رحلتك</span>
              <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a 
              href="#features" 
              className="bg-white hover:bg-gray-50 text-gray-700 text-xs font-medium px-5 py-2.5 rounded-lg border border-gray-200 transition-all flex items-center gap-2 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#174A3A]"></span>
              <span>اكتشف المميزات</span>
            </a>
          </div>

          {/* أزرار المتاجر */}
          <div className="flex items-center gap-2.5 mb-2">
            <a 
              href="#google-play" 
              className="bg-black hover:bg-gray-900 text-white px-3.5 py-1.5 rounded-md flex items-center gap-2.5 text-right transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.12C19.45,12.48 19.45,11.52 18.81,10.88L16.81,8.88L14.75,10.94L16.81,15.12M14.75,13.06L4.69,23.12C4.89,23.18 5.1,23.21 5.31,23.21C5.7,23.21 6.08,23.05 6.36,22.77L14.75,13.06M4.69,0.88L14.75,10.94L6.36,1.23C6.08,0.95 5.7,0.79 5.31,0.79C5.1,0.79 4.89,0.82 4.69,0.88Z" />
              </svg>
              <div className="leading-tight">
                <div className="text-[7px] uppercase tracking-wider text-gray-300">GET IT ON</div>
                <div className="text-xs font-semibold">Google Play</div>
              </div>
            </a>

            <a 
              href="#app-store" 
              className="bg-black hover:bg-gray-900 text-white px-3.5 py-1.5 rounded-md flex items-center gap-2.5 text-right transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="leading-tight">
                <div className="text-[7px] text-gray-300">Download on the</div>
                <div className="text-xs font-semibold">App Store</div>
              </div>
            </a>
          </div>

          <span className="text-[10px] text-gray-400 font-normal">رفيقك اليومي أينما كنت</span>
        </div>

        {/* العمود الأيسر: الصورة بالطول بالكامل */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[100%] overflow-hidden">
          <img 
            src={heroImage} 
            alt="تطبيق الزواوي" 
            className="absolute inset-0 w-full h-full object-cover object-left-top"
          />
        </div>

      </div>

      {/* الشريط السفلي المتداخل بالضبط مثل الصورة (Floating Card over the Hero Image) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3.5 w-[92%] max-w-6xl z-20">
        <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-gray-100/60 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-100 text-right">
            
            {/* الميزة 1 */}
            {/* الميزة 1: على جميع أجهزتك */}
<div className="flex items-center justify-start gap-3.5 p-2 pt-3 md:pt-2" dir="ltr">
  <div className="p-3 bg-[#EEF5F2] text-[#174A3A] rounded-2xl flex-shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  </div>
  <div className="text-right">
    <h4 className="font-bold text-[#174A3A] text-xs md:text-sm">على جميع أجهزتك</h4>
    <p className="text-[10px] text-gray-400 mt-0.5">Android و iOS</p>
  </div>
</div>

{/* الميزة 2: رفيق كل يوم */}
<div className="flex items-center justify-start gap-3.5 p-2 pt-3 md:pt-2" dir="ltr">
  <div className="p-3 bg-[#FAF5EB] text-[#B38C44] rounded-2xl flex-shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
  <div className="text-right">
    <h4 className="font-bold text-[#174A3A] text-xs md:text-sm">رفيق كل يوم</h4>
    <p className="text-[10px] text-gray-400 mt-0.5">تفاصيل صغيرة، وأثر يدوم</p>
  </div>
</div>

{/* الميزة 3: تجربة بسيطة */}
<div className="flex items-center justify-start gap-3.5 p-2 pt-3 md:pt-2" dir="ltr">
  <div className="p-3 bg-[#EEF5F2] text-[#174A3A] rounded-2xl flex-shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <div className="text-right">
    <h4 className="font-bold text-[#174A3A] text-xs md:text-sm">تجربة بسيطة</h4>
    <p className="text-[10px] text-gray-400 mt-0.5">واجهة عربية سهلة وواضحة</p>
  </div>
</div>

{/* الميزة 4: محتوى موثوق */}
<div className="flex items-center justify-start gap-3.5 p-2 pt-3 md:pt-2" dir="ltr">
  <div className="p-3 bg-[#FAF5EB] text-[#B38C44] rounded-2xl flex-shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>
  <div className="text-right">
    <h4 className="font-bold text-[#174A3A] text-xs md:text-sm">محتوى موثوق</h4>
    <p className="text-[10px] text-gray-400 mt-0.5">لطمأنينة القلب ونور المعرفة</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;