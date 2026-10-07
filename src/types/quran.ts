export type RevelationType = "meccan" | "medinan";

export type Surah = {
  id: string;
  number: number;
  name: string;
  englishName: string;
  revelationType: RevelationType;
  ayahCount: number;
  slug: string;
  hasBismillah: boolean;
};

export type Ayah = {
  id: string;
  surahNumber: number;
  numberInSurah: number;
  juz: number;
  page: number;
  hizbQuarter: number;
  text: string;
  textUthmani?: string;
  translation?: string;
  tafseer?: string;
};

export type Reciter = {
  id: string;
  name: string;
  arabicName: string;
  style?: string;
  avatarUrl?: string;
  audioBaseUrl: string;
  availableSurahs: number[];
};

export type AudioPlayerStatus = "idle" | "loading" | "playing" | "paused" | "error";

export type AudioPlayerState = {
  status: AudioPlayerStatus;
  reciterId: string | null;
  surahNumber: number | null;
  ayahNumber: number | null;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  isMuted: boolean;
  errorMessage?: string;
};
