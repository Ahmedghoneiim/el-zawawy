// سكشن 05 | المحتوى الصوتي
import { useEffect, useState } from "react";
import { AudioLines, BookOpen, Headphones, Pause, Play, RotateCcw, RotateCw } from "lucide-react";
import { Container } from "../../../components/ui";

const TOTAL = 51;
const COVER = "/mosque.png";

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export function AudioSection() {
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(7);

  // العدّاد
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setPos((p) => Math.min(TOTAL, p + 1)), 1000);
    return () => clearInterval(id);
  }, [playing]);

  
  useEffect(() => {
    if (pos >= TOTAL) setPlaying(false);
  }, [pos]);

  const skip = (d) => setPos((p) => Math.min(TOTAL, Math.max(0, p + d)));

  const togglePlay = () => {
    if (pos >= TOTAL) setPos(0);
    setPlaying((p) => !p);
  };

  return (
    <section className="bg-cream py-10">
      <Container>
        <div className="grid items-center gap-12 py-6 md:px-16 md:py-12 lg:grid-cols-2">
         
          <div
            dir="ltr"
            className="relative order-2 mx-auto w-full max-w-[600px] rounded-[32px] bg-pine p-8 shadow-2xl shadow-pine/30 lg:order-1"
          >
            <div className="flex items-center justify-between text-xs text-white/65">
              <span className="flex items-center gap-2">
                <Headphones size={14} className="text-goldlight" />
                المحتوى الصوتي
              </span>
              <AudioLines size={16} className="text-sand" />
            </div>

            <div className="relative mt-5 overflow-hidden rounded-2xl">
              <img
                src={COVER}
                alt="مسجد"
                className="aspect-[500/330] w-full object-cover"
              />
            </div>

            <div className="mt-8 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-white">سورة الفاتحة</h3>
                <p className="mt-2 text-xs text-white/65">القارئ عبدالرحمن الزاواوي</p>
              </div>
              <BookOpen size={22} className="mt-1 text-goldlight" />
            </div>

            <div className="mt-10">
              <div className="h-1 w-full rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-goldlight transition-[width] duration-1000 ease-linear"
                  style={{ width: `${(pos / TOTAL) * 100}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-white/65">
                <span>{fmt(pos)}</span>
                <span>{fmt(TOTAL)}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-10">
              <button onClick={() => skip(-10)} aria-label="رجوع 10 ثواني" className="text-white/90 hover:text-white">
                <RotateCcw size={18} />
              </button>
              <button
                onClick={togglePlay}
                aria-label={playing ? "إيقاف مؤقت" : "تشغيل"}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-pine shadow-lg transition-transform active:scale-95"
              >
                {playing ? (
                  <Pause size={24} fill="currentColor" />
                ) : (
                  <Play size={24} fill="currentColor" className="ml-1" />
                )}
              </button>
              <button onClick={() => skip(10)} aria-label="تقديم 10 ثواني" className="text-white/90 hover:text-white">
                <RotateCw size={18} />
              </button>
            </div>

            <p className="mt-8 text-center text-[11px] text-white/50">استمع إلى نموذج من التلاوة</p>
          </div>

         
          <div className="order-1 lg:order-2 lg:ps-24">
            <p dir="ltr" className="mb-5 flex items-center justify-end gap-3 text-sm font-bold text-bronze">
              <span>05</span>
              <span className="h-px w-8 bg-bronze/60" />
              <span>المحتوى الصوتي</span>
            </p>
            <h2 className="max-w-[420px] text-4xl font-extrabold leading-[1.6] text-pine">
              استمع بقلبك، أينما كنت.
            </h2>
            <p className="mt-6 max-w-[400px] text-sm leading-8 text-muted">
              تلاوات قرآنية ومحتوى إيماني يرافق لحظاتك. امنح قلبك وقتاً للإنصات، ودع المعاني الجميلة تصبح جزءاً من يومك.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-xs text-pine">
              لحظاتك اليومية، أقرب إلى السكينة
              <Headphones size={16} className="text-bronze" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}