import { FeaturesSection } from "./FeaturesSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import Header from "./Header";
import AthkarSection from "./AthkarSection";
import QuranSection from "./QuranSection";


export function LandingPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fbfaf6] text-zinc-950">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <Header />
        <QuranSection />
        <AthkarSection />
      </main>
      <Footer />
    </div>
  );
}
