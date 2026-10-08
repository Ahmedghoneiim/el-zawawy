import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { UserJourneySection } from "./components/UserJourneySection";
import { CrossDeviceSection } from "./components/CrossDeviceSection";
import { FaqSection } from "./components/FaqSection";
import { CtaBannerSection } from "./components/CtaBannerSection";
import { Footer } from "./components/Footer";

export function LandingPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fbfaf6] text-zinc-950 font-body selection:bg-amber-200 selection:text-amber-950">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UserJourneySection />
        <CrossDeviceSection />
        <FaqSection />
        <CtaBannerSection />
      </main>
      <Footer />
    </div>
  );
}
