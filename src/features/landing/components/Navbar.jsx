import React from 'react';
import logoImage from '../../../assets/images/Apdelrahman.png';

export const Navbar = () => {
  return (
    <nav className="w-full bg-[#FAF9F6F2] backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 py-3 px-6 md:px-12">
      <div className=" flex items-center justify-between">
        
        {/* الجزء الأيمن: الشعار واللوجو (مكتوب باللغة العربية مع الصورة) */}
        <div className="flex items-center gap-3">
          {/* الصورة المسماة Apdelrahman.png */}
          <img 
            src={logoImage} 
            alt="عبد الرحمن الزواوي" 
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col text-right">
            <span className="font-bold text-xl tracking-wider text-[#174A3A]">
              ZAWAWY
            </span>
            <span className="text-[11px] text-gray-500 font-medium">
              معك في رحلتك الإيمانية
            </span>
          </div>
        </div>

        {/* الجزء الأوسط: زرار تحميل التطبيق بنفس اللون والمحاذاة */}
        <div>
          <button 
            type="button"
            className="bg-[#174A3A] hover:bg-[#12392d] text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <span>تحميل التطبيق</span>
            {/* أيكونة التحميل */}
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
          </button>
        </div>

        {/* الجزء الأيسر: روابط التنقل الرئيسية */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#on-all-devices" className="hover:text-[#174A3A] transition-colors">
            على جميع أجهزتك
          </a>
          <a href="#user-journey" className="hover:text-[#174A3A] transition-colors">
            رحلة المستخدم
          </a>
          <a href="#features" className="hover:text-[#174A3A] transition-colors">
            مميزات التطبيق
          </a>
          <div className="relative py-1">
            <a href="#hero" className="text-[#174A3A] font-bold">
              الرئيسية
            </a>
            {/* الخط الذهبي تحت كلمة الرئيسية */}
            <span className="absolute bottom-0 right-0 w-full h-[2.5px] bg-[#C6A052] rounded-full"></span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;