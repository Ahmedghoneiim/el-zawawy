import FeaturedAudio from "../../components/FeaturedAudio";
import { AudioProvider } from "./audio/AudioContext";
import DailyWird from "../../components/DailyWird";



export function HomePage() {
  return (
    <AudioProvider>
      <FeaturedAudio />
      <DailyWird />
    </AudioProvider>
  );
}

export default HomePage;