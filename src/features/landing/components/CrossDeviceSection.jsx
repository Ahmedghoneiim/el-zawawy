import { Check, Search, Moon, Heart, Headphones, BookOpen, Bookmark, Award } from "lucide-react";
import { Container } from "../../../components/ui";
import { StoreBadge } from "./StoreBadge";
import { siteConfig } from "../../../config/site";

export function CrossDeviceSection() {
  return (
    <section id="cross-device" className="bg-[#fcfbf9] py-16 sm:py-24 border-t border-amber-100/60 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column (Right in RTL layout) */}
          <div className="lg:col-span-6 order-1 lg:order-1 text-right">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#b5873e]">
              <span className="w-6 h-[2px] bg-[#b5873e]" />
              <span>رفيقك على كل جهاز</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#143d24] leading-tight sm:leading-tight">
              تجربة واحدة <br className="hidden sm:block" />
              على جميع أجهزتك
            </h2>

            <div className="mt-5 space-y-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
              <p className="font-semibold text-zinc-800">
                متاح على Android و iOS بنفس التجربة المتكاملة.
              </p>
              <p>
                نفس التفاصيل التي تحبها، أينما أخذتك الحياة.
              </p>
            </div>

            {/* Store Download Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StoreBadge
                href={siteConfig.downloads.googlePlay.href}
                label={siteConfig.downloads.googlePlay.label}
                storeName={siteConfig.downloads.googlePlay.storeName}
                platform="android"
              />
              <StoreBadge
                href={siteConfig.downloads.appStore.href}
                label={siteConfig.downloads.appStore.label}
                storeName={siteConfig.downloads.appStore.storeName}
                platform="ios"
              />
            </div>

            {/* Checkmark Line */}
            <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-amber-100 text-[#b5873e]">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span>عربية بسيطة مصممة لتكون قريبة منك</span>
            </div>
          </div>

          {/* Dual Phone Mockup Column (Left in RTL layout) */}
          <div className="lg:col-span-6 order-2 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[480px]">
              {/* Arch Shaped Warm Cream Backdrop */}
              <div className="bg-gradient-to-b from-[#f3e7d3]/70 via-[#f7f0e3]/50 to-transparent rounded-t-[140px] sm:rounded-t-[180px] p-6 sm:p-8 pt-12 sm:pt-16 border border-[#e8d6ba]/50 shadow-inner relative">
                
                {/* Phones Mockup Container */}
                <div className="relative flex items-center justify-center gap-2 sm:gap-4 min-h-[380px] sm:min-h-[440px]">
                  
                  {/* Android Phone (Left side) */}
                  <div className="w-[190px] sm:w-[220px] rounded-[32px] sm:rounded-[40px] bg-[#0c1c13] p-2.5 sm:p-3 shadow-2xl shadow-emerald-950/30 border-[3px] border-[#20422c] transform -rotate-3 transition-transform hover:rotate-0 duration-500 z-10">
                    <div className="rounded-[24px] sm:rounded-[32px] bg-[#0f301d] overflow-hidden text-white text-xs">
                      
                      {/* Top Bar / Notch */}
                      <div className="px-4 pt-3 pb-2 flex justify-between items-center text-[10px] text-emerald-200/70 border-b border-emerald-800/40">
                        <span>9:41</span>
                        <div className="w-3 h-3 rounded-full bg-emerald-900 border border-emerald-500/40" />
                        <div className="flex gap-1 items-center">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                      </div>

                      {/* Header Greeting */}
                      <div className="p-3 text-right">
                        <p className="text-[13px] font-bold text-white">السلام عليكم</p>
                        <p className="text-[9px] text-emerald-300/80 mt-0.5">ماذا ستتدبر اليوم؟</p>

                        {/* Search Bar */}
                        <div className="mt-2.5 bg-[#17452b] rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-[10px] text-emerald-200/60 border border-emerald-700/50">
                          <Search className="w-3 h-3 text-emerald-400" />
                          <span className="truncate">ابحث في زواوي...</span>
                        </div>

                        {/* Prayer Time Card */}
                        <div className="mt-3 bg-gradient-to-br from-[#1b5033] to-[#123823] rounded-xl p-2.5 border border-emerald-600/30 shadow-md">
                          <div className="flex justify-between items-baseline text-[9px] text-amber-200/90">
                            <span>مواقيت الصلاة</span>
                            <span>الصلاة القادمة</span>
                          </div>
                          <div className="mt-1 flex justify-between items-center">
                            <span className="text-xs font-black text-amber-300">صلاة المغرب</span>
                            <span className="text-[10px] font-mono font-bold text-amber-100 dir-ltr">01:18:58</span>
                          </div>
                          {/* Prayer Icons Row */}
                          <div className="mt-2 pt-2 border-t border-emerald-700/40 grid grid-cols-6 text-center text-[7px] text-emerald-200/70">
                            <span>الفجر</span>
                            <span>الشروق</span>
                            <span>الظهر</span>
                            <span>العصر</span>
                            <span className="text-amber-300 font-bold">المغرب</span>
                            <span>العشاء</span>
                          </div>
                        </div>

                        {/* Apps Grid */}
                        <div className="mt-3 grid grid-cols-2 gap-1.5 text-[9px] text-right">
                          <div className="bg-[#17432b] p-2 rounded-lg border border-emerald-700/40 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                            <span className="truncate text-emerald-100 font-semibold">ميزان الحسنات</span>
                          </div>
                          <div className="bg-[#17432b] p-2 rounded-lg border border-emerald-700/40 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                            <span className="truncate text-emerald-100 font-semibold">الأحاديث</span>
                          </div>
                          <div className="bg-[#17432b] p-2 rounded-lg border border-emerald-700/40 flex items-center gap-1.5">
                            <Heart className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                            <span className="truncate text-emerald-100 font-semibold">الأذكار</span>
                          </div>
                          <div className="bg-[#17432b] p-2 rounded-lg border border-emerald-700/40 flex items-center gap-1.5">
                            <Bookmark className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                            <span className="truncate text-emerald-100 font-semibold">القرآن الكريم</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* iOS Phone (Right side) */}
                  <div className="w-[190px] sm:w-[220px] rounded-[32px] sm:rounded-[40px] bg-[#09180f] p-2.5 sm:p-3 shadow-2xl shadow-emerald-950/40 border-[3px] border-[#1e482f] transform rotate-3 transition-transform hover:rotate-0 duration-500 z-20 -ms-8 sm:-ms-10">
                    <div className="rounded-[24px] sm:rounded-[32px] bg-[#0c2e1b] overflow-hidden text-white text-xs">
                      
                      {/* Dynamic Island Header */}
                      <div className="px-4 pt-2.5 pb-2 flex justify-between items-center text-[10px] text-emerald-200/70 border-b border-emerald-800/40">
                        <span className="font-semibold">9:41</span>
                        <div className="w-10 h-3 bg-black rounded-full mx-auto" />
                        <span>100%</span>
                      </div>

                      {/* Screen Content */}
                      <div className="p-3 text-right">
                        <div className="flex justify-between items-center">
                          <Moon className="w-3.5 h-3.5 text-amber-300" />
                          <div className="text-right">
                            <p className="text-[13px] font-bold text-white">السلام عليكم</p>
                            <p className="text-[9px] text-emerald-300/80">ماذا ستتدبر اليوم؟</p>
                          </div>
                        </div>

                        {/* Search */}
                        <div className="mt-2.5 bg-[#153e28] rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-[10px] text-emerald-200/60 border border-emerald-700/50">
                          <Search className="w-3 h-3 text-emerald-400" />
                          <span className="truncate">ابحث في زواوي...</span>
                        </div>

                        {/* Next Prayer Highlight */}
                        <div className="mt-3 bg-gradient-to-br from-[#184a2f] to-[#0f331f] rounded-xl p-2.5 border border-emerald-600/40 shadow-inner">
                          <div className="text-[9px] text-emerald-300/80 flex justify-between">
                            <span>مواقيت الصلاة</span>
                            <span>الصلاة القادمة</span>
                          </div>
                          <div className="mt-1 text-center py-1 bg-[#123823]/80 rounded-lg">
                            <span className="text-xs font-bold text-amber-300 block">صلاة المغرب</span>
                            <span className="text-sm font-mono font-black text-amber-100 dir-ltr tracking-wider">01:18:58</span>
                          </div>
                        </div>

                        {/* Apps Quick Grid */}
                        <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-[9px]">
                          <div className="bg-[#153e28] p-2 rounded-lg border border-emerald-700/40 text-center">
                            <BookOpen className="w-4 h-4 text-amber-300 mx-auto mb-1" />
                            <span className="text-emerald-100 font-semibold block">ميزان المصحف</span>
                          </div>
                          <div className="bg-[#153e28] p-2 rounded-lg border border-emerald-700/40 text-center">
                            <Headphones className="w-4 h-4 text-amber-300 mx-auto mb-1" />
                            <span className="text-emerald-100 font-semibold block">الصوتيات</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

                {/* Device Labels below */}
                <div className="mt-4 flex justify-between items-center px-8 text-xs font-extrabold text-amber-900/40 tracking-widest uppercase">
                  <span>ANDROID</span>
                  <span>iOS</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
