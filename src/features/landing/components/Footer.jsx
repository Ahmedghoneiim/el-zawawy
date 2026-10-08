import { Container } from "../../../components/ui";

export function Footer() {
  return (
    <footer className="bg-[#fbfaf6] border-t border-amber-100/60 py-10 text-right">
      <Container>
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8">
          
          {/* Right Slogan */}
          <div className="order-2 md:order-1 text-center md:text-right">
            <p className="text-xs sm:text-sm text-zinc-500 font-medium">
              ضع ليكون رفيقاً، لا مجرد تطبيق.
            </p>
          </div>

          {/* Center Navigation Links */}
          <nav aria-label="روابط أسفل الصفحة" className="order-3 md:order-2">
            <ul className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-600">
              <li>
                <a href="#faq" className="hover:text-[#143d24] transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#user-journey" className="hover:text-[#143d24] transition-colors">
                  رحلة المستخدم
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#143d24] transition-colors">
                  مميزات التطبيق
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-[#143d24] transition-colors">
                  الرئيسية
                </a>
              </li>
            </ul>
          </nav>

          {/* Left Brand Logo */}
          <div className="order-1 md:order-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#143d24] flex items-center justify-center text-amber-300 font-bold text-lg shadow-sm">
              ز
            </div>
            <div className="text-right">
              <span className="block text-lg font-black tracking-wider text-[#143d24] font-serif">
                ZAWAWY
              </span>
              <span className="block text-[10px] text-zinc-500 font-medium">
                همك في رحلتك الإيمانية
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer Row */}
        <div className="pt-6 border-t border-zinc-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="text-zinc-500 font-medium">
            القرآن نور، والذكر حياة.
          </p>
          <p>© 2026 زواوي. جميع الحقوق محفوظة.</p>
        </div>
      </Container>
    </footer>
  );
}
