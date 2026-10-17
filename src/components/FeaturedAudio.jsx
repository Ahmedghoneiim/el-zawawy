import { ArrowLeft, Download, Heart, Pause, Play } from "lucide-react";
import { useState } from "react";
import { useAudio } from "../features/Home/audio/AudioContext";
import { useFeaturedAudio } from "../features/Home/hooks/useFeaturedAudio";
import Waveform from "./ui/Waveform";

const fmt = (s) =>
  s ? `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.round(s % 60)).padStart(2, "0")}` : null;

function AudioCard({ item, reciterName }) {
  const { current, playing, progress, toggle } = useAudio();
  const [liked, setLiked] = useState(false);
  const active = current?.id === item.id;
  const isPlaying = active && playing;
  const duration = fmt(item.durationSeconds);

  return (
    <article className="overflow-hidden rounded-3xl bg-wird-card p-2 shadow-soft">
      <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-wird-green to-wird-gold-dark">
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-wird-gold-dark">
          {item.tag}
        </span>
        {duration && (
          <span className="absolute bottom-3 left-3 rounded-md bg-black/50 px-2 py-0.5 font-mono text-[11px] text-white">
            {duration} دقيقة
          </span>
        )}
      </div>

      <div className="px-3 pb-3 pt-4">
        <h3 className="line-clamp-2 min-h-[3.2rem] font-display text-lg font-bold leading-snug text-wird-green">
          {item.title}
        </h3>
        <p className="mt-1 text-[11px] text-muted">{reciterName}</p>

        <div className="my-4">
          <Waveform seed={item.id} progress={active ? progress : 0} />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => toggle(item)}
            className="flex items-center gap-2 rounded-full bg-wird-green px-4 py-2 text-xs font-bold text-white transition hover:opacity-90"
          >
            {isPlaying ? (
              <Pause size={12} fill="currentColor" />
            ) : (
              <Play size={12} fill="currentColor" className="rotate-180" />
            )}
            {isPlaying ? "إيقاف مؤقت" : "استمع الآن"}
          </button>

          <div className="flex items-center gap-3 text-muted">
            <a
              href={item.audioUrl}
              download
              target="_blank"
              rel="noreferrer"
              aria-label="تحميل"
              className="hover:text-wird-green"
            >
              <Download size={16} />
            </a>
            <button onClick={() => setLiked((v) => !v)} aria-label="إعجاب" className="hover:text-wird-green">
              <Heart size={16} className={liked ? "fill-wird-gold text-wird-gold" : ""} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedAudio() {
  const { items, reciterName, loading, error } = useFeaturedAudio();

  return (
    <section dir="rtl" lang="ar" className="bg-wird-mist px-4 pb-6 pt-12 font-body md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-bold text-wird-gold-dark">
              <span className="h-2 w-2 rounded-full bg-wird-gold" />
              مكتبة الصوتيات المختارة
            </p>
            <h2 className="font-display text-2xl font-extrabold text-wird-green md:text-3xl">
              تلاوات ودروس الشيخ عبدالرحمن الزاواوي
            </h2>
            <p className="mt-1 text-xs text-muted">تسجيلات استوديو بجودة نقية بصوت رخيم وتدبر عميق</p>
          </div>
          <a href="/audio" className="flex items-center gap-1 text-xs font-bold text-wird-green hover:underline">
            <ArrowLeft size={14} />
            تصفح كافة الصوتيات
          </a>
        </header>

        {error ? (
          <p className="rounded-2xl bg-wird-card p-6 text-center text-sm text-wird-green">
            تعذّر تحميل الصوتيات، حاول مرة أخرى بعد قليل.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {loading
              ? Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="h-80 animate-pulse rounded-3xl bg-wird-card" />
                ))
              : items.map((item) => <AudioCard key={item.id} item={item} reciterName={reciterName} />)}
          </div>
        )}
      </div>
    </section>
  );
}