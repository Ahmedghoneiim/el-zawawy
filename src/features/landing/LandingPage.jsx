
// import { Navbar } from "./components/Navbar";
// import { HeroSection } from "./components/HeroSection";
// import { FeaturesSection } from "./components/FeaturesSection";
// import { UserJourneySection } from "./components/UserJourneySection";
// import { CrossDeviceSection } from "./components/CrossDeviceSection";
// import { FaqSection } from "./components/FaqSection";
// import { CtaBannerSection } from "./components/CtaBannerSection";
// import { Footer } from "./components/Footer";

// export function LandingPage() {
//   return (
//     <div dir="rtl" className="min-h-screen bg-[#fbfaf6] text-zinc-950 font-body selection:bg-amber-200 selection:text-amber-950">

// {/* import { FeaturesSection } from "./components/FeaturesSection";
// import { Footer } from "./components/Footer";
// import { HeroSection } from "./components/HeroSection";
// import { Navbar } from "./components/Navbar";
// import FeaturesGrid from './components/FeaturesGrid';

// export function LandingPage() {
//   return (
//     <div dir="rtl" className="min-h-screen bg-[#fbfaf6] text-zinc-950">
// >>>>>>> origin/development */}
//       <Navbar />
//       <main>
//         <HeroSection />
//         <FeaturesSection />

//         <UserJourneySection />
//         <CrossDeviceSection />
//         <FaqSection />
//         <CtaBannerSection />

//         <FeaturesGrid/>

//       </main>
//       <Footer />
//     </div>
//   );
// }
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { UserJourneySection } from "./components/UserJourneySection";
import { CrossDeviceSection } from "./components/CrossDeviceSection";
import { FaqSection } from "./components/FaqSection";
import { CtaBannerSection } from "./components/CtaBannerSection";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import AthkarSection from "../landing/components/AthkarSection";
import QuranSection from "../landing/components/QuranSection";

import FeaturesGrid from "../landing/components/FeaturesGrid";
import {PrayerTimesSection} from "../landing/components/PrayerTimesSection";
import {AudioSection}  from "../landing/components/AudioSection";
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
                <PrayerTimesSection/>
                <AudioSection/>
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