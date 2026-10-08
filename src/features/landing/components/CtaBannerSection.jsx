import { Download } from "lucide-react";
import { Container } from "../../../components/ui";
import { StoreBadge } from "./StoreBadge";
import { siteConfig } from "../../../config/site";

export function CtaBannerSection() {
  return (
    <section id="cta-banner" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/mosque_bg.jpg"
          alt="Mosque background"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Soft Golden Parchment Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf6]/85 via-[#fbfaf6]/70 to-[#fbfaf6]/90 mix-blend-normal" />
        <div className="absolute inset-0 bg-amber-900/5 mix-blend-overlay" />
      </div>

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Islamic Emblem Calligraphy Badge */}
          <div className="mb-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#ffffff] to-[#f4ead8] p-3 shadow-[0_8px_30px_rgba(20,61,36,0.15)] border-2 border-[#d9ba82] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#143d24] fill-current">
              {/* Calligraphy Emblem representation */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="#b5873e" strokeWidth="1.5" strokeDasharray="3 2" />
              <path d="M50 15 L54 23 L63 23 L56 29 L59 38 L50 32 L41 38 L44 29 L37 23 L46 23 Z" fill="#b5873e" />
              <text x="50" y="58" textAnchor="middle" fontSize="18" fontFamily="Amiri, serif" fontWeight="bold" fill="#143d24">
                الزواوي
              </text>
              <text x="50" y="74" textAnchor="middle" fontSize="9" fontFamily="Cairo, sans-serif" fontWeight="600" fill="#875c1b">
                قرآن وذكر
              </text>
            </svg>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#143d24] tracking-normal leading-tight drop-shadow-sm">
            ابدأ رحلتك الإيمانية اليوم
          </h2>

          {/* Subtitle */}
          <div className="mt-5 space-y-1 text-sm sm:text-base md:text-lg text-zinc-700 font-medium max-w-xl">
            <p>اجعل في يومك مساحة للقرآن والذكر.</p>
            <p className="text-zinc-600">زواوي، تجربة متكاملة ترافقك إلى أثر أعظم.</p>
          </div>

          {/* Primary Pill Button */}
          <div className="mt-8">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#143d24] text-white font-bold text-base shadow-lg shadow-[#143d24]/20 hover:bg-[#1b5030] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>حمل التطبيق</span>
            </a>
          </div>

          {/* Store Download Badges */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
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

        </div>
      </Container>
    </section>
  );
}
