import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { UserJourneySection } from "./components/UserJourneySection";
import { CrossDeviceSection } from "./components/CrossDeviceSection";
import { FaqSection } from "./components/FaqSection";
import { CtaBannerSection } from "./components/CtaBannerSection";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import AthkarSection from "./components/AthkarSection";
import QuranSection from "./components/QuranSection";
import FeaturesGrid from "./components/FeaturesGrid";
import { PrayerTimesSection } from "./components/PrayerTimesSection";
import { AudioSection } from "./components/AudioSection";

export function LandingPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#fbfaf6] text-zinc-950 font-body selection:bg-amber-200 selection:text-amber-950"
    >
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <Header />
        <QuranSection />
        <AthkarSection />
        <PrayerTimesSection />
        <AudioSection />
        <FeaturesGrid />
        <UserJourneySection />
        <CrossDeviceSection />
        <FaqSection />
        <CtaBannerSection />
      </main>

      <Footer />
    </div>
  );
}
