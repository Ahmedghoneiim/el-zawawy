import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import FeaturesGrid from './components/FeaturesGrid';

export function LandingPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fbfaf6] text-zinc-950">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FeaturesGrid/>
      </main>
      <Footer />
    </div>
  );
}
