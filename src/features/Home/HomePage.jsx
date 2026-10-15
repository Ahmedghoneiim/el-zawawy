
import { useEffect, useState } from "react";
import {
  ArrowLeft, BadgeCheck, BookOpen, Bell, Bookmark, Check, Clock, Download, FileText, Flame,
  HandHeart, Heart, Library, Moon, Pause, Play, PlayCircle, Quote, RotateCcw, Search, Sun, Trophy, Volume2,
} from "lucide-react";
import { api } from "../../api/client";
import { useApi } from "../../api/useApi";
import { usePrayerTimes } from "../../api/usePrayerTimes";
import { useRecitations } from "../../api/useRecitations";
import { AudioPlayerProvider, useAudioPlayer } from "../../api/AudioPlayer";

const Wrap = ({ className = "", ...p }) => (
  <div className={`mx-auto w-full max-w-[1600px] px-6 lg:px-10 ${className}`} {...p} />
);

const NAV = ["الرئيسية", "القرآن الكريم", "الأحاديث", "الأذكار", "التفاسير", "خطب ومرئيات"];

const FALLBACK = [
  { key: "fajr", name: "الفجر", time: "04:22" },
  { key: "sunrise", name: "الشروق", time: "05:50" },
  { key: "dhuhr", name: "الظهر", time: "11:58" },
  { key: "asr", name: "العصر", time: "15:24" },
  { key: "maghrib", name: "المغرب", time: "18:07" },
  { key: "isha", name: "العشاء", time: "19:25" },
];

const QUICK = [
  { t: "القرآن الكريم", s: "تلاوة ومصحف", i: BookOpen, bg: "bg-[#F0FDF4]", c: "text-green-600" },
  { t: "الأحاديث النبوية", s: "صحيح ومأثور", i: Library, bg: "bg-[#FFF7ED]", c: "text-orange-600" },
  { t: "تفسير وعلوم القرآن", s: "دروس ومقالات", i: FileText, bg: "bg-[#F0FDF4]", c: "text-green-600" },
  { t: "التنزيلات", s: "للاستماع دون إنترنت", i: Download, bg: "bg-[#EFF6FF]", c: "text-blue-600" },
  { t: "المحفوظات", s: "الصفحات والمقاطع", i: Bookmark, bg: "bg-[#F0FDF4]", c: "text-green-600" },
  { t: "مواقيت الصلاة", s: "حسب موقعك", i: Clock, bg: "bg-[#FFF7ED]", c: "text-orange-600" },
  { t: "شورتس إسلامية", s: "مقاطع قصيرة مؤثرة", i: PlayCircle, bg: "bg-[#FFF1F2]", c: "text-rose-500" },
  { t: "رمضان 2026", s: "تلاوات وختمات", i: Moon, bg: "bg-[#EEF2FF]", c: "text-indigo-600" },
];

// سور الكروت: الكهف، مريم، الملك
const FEATURED = [18, 19, 67];
const IMGS = ["/audio-1.jpg", "/audio-2.jpg", "/audio-3.jpg"];

const TASBIH = [
  { t: "سبحان الله", p: "سبحان الله وبحمده", n: 33 },
  { t: "الحمد لله", p: "الحمد لله", n: 33 },
  { t: "الله أكبر", p: "الله أكبر", n: 34 },
  { t: "لا إله إلا الله", p: "لا إله إلا الله", n: 100 },
];

const to12h = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return `${String(h % 12 || 12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${h < 12 ? "ص" : "م"}`;
};
const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/* ---------- الهيدر ---------- */
function HomeHeader({ prayer }) {
  const d = new Date();
  const weekday = new Intl.DateTimeFormat("ar-EG", { weekday: "long" }).format(d);
  const hijri = new Intl.DateTimeFormat("ar-SA-u-ca-islamic-umalqura", { day: "numeric", month: "long", year: "numeric" }).format(d);
  const next = prayer?.next;
  return (
    <header className="bg-white">
      <Wrap className="flex flex-wrap items-center gap-5 py-6 lg:flex-nowrap">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="h-14 w-14 object-contain" />
          <p className="text-xs font-bold leading-5 text-[#174A3A]">الشيخ<br />عبدالرحمن<br />الزواوي</p>
        </div>
        <nav className="hidden flex-1 items-center gap-1 lg:flex">
          {NAV.map((x, i) => (
            <a key={x} href="#" className={`rounded-full px-5 py-2.5 text-sm font-bold ${i === 0 ? "bg-[#174A3A] text-white shadow-md" : "text-[#174A3A]/70 hover:bg-[#F2F7F4]"}`}>{x}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3 rounded-full bg-[#F2F7F4] px-4 py-2">
          <Sun size={16} className="text-[#C69234]" />
          <p className="text-[10px] font-bold leading-4 text-[#174A3A]">{weekday}<br />{hijri}</p>
          <p className="text-[10px] font-bold leading-4 text-[#174A3A]">{next?.name ?? "العصر"}:<br />{next ? to12h(next.iso.slice(11, 16)) : "03:24 م"}</p>
        </div>
        <label className="flex min-w-[260px] items-center gap-2 rounded-full bg-[#F2F7F4] px-4 py-3">
          <Search size={14} className="text-[#174A3A]/60" />
          <input className="w-full bg-transparent text-xs outline-none placeholder:text-[#174A3A]/50" placeholder="ابحث عن سورة، آية، حديث، أو فتوى..." />
        </label>
        {[Bell, Bookmark].map((I, k) => (
          <button key={k} aria-label="أيقونة" className="grid h-10 w-10 place-items-center rounded-full bg-[#F2F7F4] text-[#174A3A]"><I size={16} /></button>
        ))}
      </Wrap>
    </header>
  );
}

function HeroPlayer() {
  const { tracks, reciter } = useRecitations();
  const p = useAudioPlayer();
  const t = p.track ?? tracks?.find((x) => x.id === 18); // الكهف
  const active = p.track?.id === t?.id;
  const dur = active ? p.dur : t?.duration ?? 0;
  return (
    <div className="absolute bottom-8 left-[6%] hidden w-[46%] items-center gap-4 rounded-2xl border border-white/10 bg-[#00000033] px-4 py-3 text-white backdrop-blur-md lg:flex">
      <button onClick={() => p.toggle(t)} disabled={!t} aria-label={active && p.playing ? "إيقاف" : "تشغيل"} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#174A3A] disabled:opacity-50">
        {active && p.playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
      </button>
      <div className="flex h-6 items-center gap-1" aria-hidden>{Array.from({ length: 6 }, (_, k) => <span key={k} className="w-1 rounded bg-[#C69234]" style={{ height: 8 + ((k * 5) % 14) }} />)}</div>
      <div className="min-w-0 flex-1 text-[11px]">
        <p className="truncate font-bold">{t?.title ?? "جارٍ التحميل…"}</p>
        <p className="text-white/60">{mmss(active ? p.pos : 0)} / {mmss(dur)} · {reciter}</p>
      </div>
      <span className="rounded bg-[#FFFFFF1A] px-2 py-1 text-[9px]">HQ 320kbps</span>
      <Volume2 size={14} className="text-white/70" />
    </div>
  );
}

/* ---------- الهيرو ---------- */
function Hero({ prayer }) {
  const rows = prayer?.rows ?? FALLBACK;
  const nextKey = prayer?.next?.key ?? "asr";
  return (
    <section className="relative min-h-[610px] overflow-hidden bg-[#174A3A]">
      <img src="/hero-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-left" />
      <span aria-hidden className="absolute inset-0 bg-[#00000033]" />
      <span aria-hidden className="absolute inset-0 bg-gradient-to-l from-[#174A3A] from-35% via-[#174A3A]/80 via-55% to-transparent to-90%" />
      <Wrap className="relative flex min-h-[610px] flex-col justify-center gap-10 py-16 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full shrink-0 lg:w-[460px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C6923440] bg-[#C6923433] px-4 py-1.5 text-[11px] font-bold text-[#FFDEA4]">
            تلاوات الشيخ عبدالرحمن الزواوي <BookOpen size={12} />
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.2] text-white md:text-7xl">أنصت بقلبك،<br />وعش مع<br />القرآن.</h1>
          <p className="mt-6 max-w-md text-sm leading-8 text-white/80">تلاوات وتدبر ومحتوى إيماني من تراث الشيخ عبدالرحمن الزواوي بجودة استثنائية وبصوت نقي يلامس القلوب.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#audio" className="inline-flex items-center gap-2 rounded-xl bg-[#C69234] px-6 py-3 text-sm font-bold text-[#174A3A]"><Play size={14} fill="currentColor" />استمع للتلاوات</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-[#FFFFFF1A] px-6 py-3 text-sm font-bold text-white">تصفح المصحف<BookOpen size={14} /></a>
          </div>
        </div>
        <div className="w-full max-w-[280px] rounded-2xl border border-white/10 bg-[#FFFFFF1A] p-4 text-white backdrop-blur-md">
          <div className="mb-3 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1 font-bold"><Clock size={12} className="text-[#FFDEA4]" />مواقيت الصلاة</span>
            <span className="text-white/60">الإسكندرية</span>
          </div>
          <ul className="space-y-1.5 text-xs">
            {rows.map((r) => (
              <li key={r.key} className={`flex items-center justify-between rounded-lg px-3 py-2 ${r.key === nextKey ? "border border-[#C69234] bg-[#C6923440] font-bold text-[#FFDEA4]" : "text-white/90"}`}>
                <span>{r.name}{r.key === nextKey && <span className="mr-1 text-[9px]"> (القادمة) ●</span>}</span>
                <span>{to12h(r.time)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
      <HeroPlayer />
    </section>
  );
}

const CardHead = ({ icon: I, title, sub, img }) => (
  <div className="flex items-start justify-between gap-3">
    <div>
      <h3 className="flex items-center gap-2 text-lg font-extrabold text-[#174A3A]"><I size={18} className="text-[#C69234]" />{title}</h3>
      <p className="mt-1 text-[11px] text-[#174A3A]/60">{sub}</p>
    </div>
    <img src={img} alt="" className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
  </div>
);

function DailyCards() {
  const [hadith, setHadith] = useState({ textArabic: "إنما الأعمال بالنيّات، وإنما لكل امرئ ما نوى", source: "رواه أمير المؤمنين عمر بن الخطاب رضي الله عنه" });
  useEffect(() => { api("/v1/hadiths/random").then(setHadith).catch((e) => console.error("API error:", e)); }, []);

  const adhkar = useApi("/v1/adhkar");
  const surahs = useApi("/v1/quran/surahs");
  const morning = adhkar.data?.find((c) => c.nameArabic?.includes("الصباح"));
  const fatiha = surahs.data?.[0];

  return (
    <Wrap className="grid gap-8 pt-24 md:grid-cols-3">
      <article className="flex min-h-[365px] flex-col rounded-3xl border border-[#E6EFE9] bg-white p-7 shadow-sm">
        <CardHead icon={BookOpen} title="المصحف الشريف" sub="متابعة الورد اليومي من صفحة القراءة" img="/card-quran.jpg" />
        <div className="mt-8">
          <div className="flex justify-between text-xs font-bold text-[#174A3A]">
            <span>سورة {fatiha?.nameArabic?.replace(/^سورة\s*/, "") ?? "الفاتحة"} — الآية 1</span>
            <span className="text-[10px] font-normal text-[#174A3A]/60">{fatiha ? `${fatiha.ayahCount} آيات` : ""}</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-[#E6EFE9]"><div className="h-full w-[18%] rounded-full bg-[#C69234]" /></div>
        </div>
        <a href="#" className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-[#174A3A] py-3.5 text-xs font-bold text-white">متابعة القراءة<ArrowLeft size={14} /></a>
      </article>
      <article className="flex min-h-[365px] flex-col rounded-3xl border border-[#E6EFE9] bg-white p-7 shadow-sm">
        <CardHead icon={HandHeart} title="الأذكار والأدعية" sub="حصن المسلم وأذكار مأثورة" img="/card-adhkar.jpg" />
        <div className="mt-8 flex items-center justify-between rounded-2xl bg-[#F2F7F4] p-4">
          <div><p className="text-[10px] font-bold text-[#C69234]">الورد المستحق:</p><p className="text-sm font-extrabold text-[#174A3A]">{morning?.nameArabic ?? "أذكار الصباح"}</p></div>
          <span className="flex items-center gap-1 rounded-full bg-[#E6EFE9] px-3 py-1 text-[10px] font-bold text-[#174A3A]"><Check size={10} />{morning ? `${morning.items.length} أذكار` : "…"}</span>
        </div>
        <a href="#" className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-[#E6EFE9] py-3.5 text-xs font-bold text-[#174A3A]">اذكر الآن<ArrowLeft size={14} /></a>
      </article>
      <article className="flex min-h-[365px] flex-col rounded-3xl border border-[#C6923433] bg-[#F7EDE0] p-7 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-extrabold text-[#174A3A]"><Quote size={18} className="text-[#C69234]" />حديث اليوم</h3>
          <span className="rounded-full border border-[#C6923440] bg-[#C6923433] px-3 py-1 text-[10px] font-bold text-[#C69234]">صحيح البخاري ومسلم</span>
        </div>
        <p className="my-auto py-6 text-center text-xl font-extrabold leading-9 text-[#174A3A]">«{hadith.textArabic}»</p>
        <p className="mb-4 text-center text-[10px] text-[#174A3A]/60">{hadith.source}</p>
        <a href="#" className="flex items-center justify-center gap-2 rounded-xl border border-[#C6923433] bg-white py-3.5 text-xs font-bold text-[#174A3A]">شرح وتدبر الحديث<ArrowLeft size={14} /></a>
      </article>
    </Wrap>
  );
}

/* ---------- بوابات الوصول السريع ---------- */
function QuickAccess() {
  return (
    <Wrap className="pt-14">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-extrabold text-[#174A3A]">بوابات الوصول السريع</h2>
        <p className="text-[11px] text-[#174A3A]/60">كل ما يحتاجه المسلم في منصة واحدة</p>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 xl:grid-cols-8">
        {QUICK.map(({ t, s, i: Icon, bg, c }) => (
          <a key={t} href="#" className="rounded-2xl border border-white bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5">
            <span className={`mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl ${bg} ${c}`}><Icon size={20} /></span>
            <p className="text-xs font-extrabold text-[#174A3A]">{t}</p>
            <p className="mt-1 text-[10px] text-[#174A3A]/60">{s}</p>
          </a>
        ))}
      </div>
    </Wrap>
  );
}

/* ---------- مكتبة الصوتيات  ---------- */
function AudioLibrary() {
  const { tracks, reciter } = useRecitations();
  const p = useAudioPlayer();
  const items = FEATURED.map((id) => tracks?.find((t) => t.id === id) ?? { id, title: "جارٍ التحميل…", loading: true });
  return (
    <Wrap id="audio" className="pt-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="mb-1 flex items-center gap-2 text-[11px] font-bold text-[#C69234]"><span className="h-1.5 w-1.5 rounded-full bg-[#C69234]" />مكتبة الصوتيات المختارة</p>
          <h2 className="text-3xl font-extrabold text-[#174A3A]">تلاوات ودروس الشيخ عبدالرحمن الزواوي</h2>
          <p className="mt-1 text-xs text-[#174A3A]/60">تسجيلات استوديو نقية بصوت رخيم وتدبر عميق</p>
        </div>
        <a href="#" className="flex items-center gap-1 text-xs font-bold text-[#174A3A]"><ArrowLeft size={14} />تصفح كافة الصوتيات</a>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((t, i) => {
          const active = p.track?.id === t.id;
          const frac = active && p.dur ? p.pos / p.dur : 0;
          const secs = active && p.dur ? p.dur : t.duration;
          return (
            <article key={t.id} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative">
                <img src={IMGS[i]} alt="" className="h-[280px] w-full object-cover" />
                <span className="absolute right-4 top-4 rounded-full bg-[#FFDEA4] px-3 py-1 text-[10px] font-extrabold text-[#174A3A]">تلاوة مرتلة</span>
                <span className="absolute bottom-4 left-4 rounded-md bg-[#00000033] px-2 py-1 text-[10px] text-white">دقيقة: {secs ? mmss(secs) : "—"}</span>
              </div>
              <div className="p-6">
                <h3 className="min-h-[56px] text-lg font-extrabold leading-7 text-[#174A3A]">{t.title}</h3>
                <p className="mt-1 text-[10px] text-[#174A3A]/60">{reciter}</p>
                <div className="my-5 flex h-7 items-center gap-1.5 rounded-xl bg-[#F2F7F4] px-3" aria-hidden>
                  {Array.from({ length: 26 }, (_, k) => (
                    <span key={k} className={`w-1 rounded ${k < Math.round(frac * 26) ? "bg-[#174A3A]" : "bg-[#174A3A]/15"}`} style={{ height: 6 + ((k * 7) % 14) }} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <button onClick={() => p.toggle(t)} disabled={t.loading} className="flex items-center gap-2 rounded-lg bg-[#174A3A] px-5 py-2.5 text-xs font-bold text-white disabled:opacity-50">
                    {active && p.playing ? <>إيقاف<Pause size={10} fill="currentColor" /></> : <>استمع الآن<Play size={10} fill="currentColor" /></>}
                  </button>
                  <span className="flex gap-4 text-[#174A3A]/60">
                    {t.audioUrl && <a href={t.audioUrl} target="_blank" rel="noreferrer" aria-label="تنزيل"><Download size={15} /></a>}
                    <Heart size={15} />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrap>
  );
}

/* ---------- الورد والمسبحة  ---------- */
function DailyWird() {
  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(28);
  const cur = TASBIH[idx];
  return (
    <Wrap className="py-16">
      <div className="rounded-[28px] bg-white p-6 shadow-sm md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E6EFE9] pb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-[#174A3A]">وردك اليومي والمسبحة التفاعلية</h2>
            <p className="mt-1 text-xs text-[#174A3A]/60">عمّر أوقاتك بذكر الله وحافظ على دوام صلتك بالقرآن الكريم</p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-[#C6923440] bg-[#C6923433] px-4 py-1.5 text-[11px] font-bold text-[#C69234]"><BadgeCheck size={14} />بإشراف الشيخ عبدالرحمن الزواوي</span>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.55fr]">
          <div className="rounded-3xl bg-[#F2F7F4] p-6 text-center">
            <span className="rounded-full bg-[#C6923433] px-3 py-1 text-[10px] font-bold text-[#C69234]">الذكر الحالي</span>
            <p className="mt-4 text-base font-extrabold text-[#174A3A]">«{cur.p}»</p>
            <button onClick={() => setCount((c) => Math.min(cur.n, c + 1))} aria-label="تسبيح" className="mx-auto my-6 grid h-44 w-44 place-items-center rounded-full border-[5px] border-[#C6923440] bg-white shadow-inner transition active:scale-95">
              <span><span className="block text-5xl font-extrabold text-[#174A3A]">{count}</span><span className="block text-[10px] text-[#174A3A]/60">من أصل {cur.n}</span><span className="mt-1 block text-[10px] font-bold text-[#C69234]">اضغط للتسبيح</span></span>
            </button>
            <div className="flex justify-center gap-3">
              <button onClick={() => setCount(0)} className="flex items-center gap-1 rounded-lg border border-[#E6EFE9] bg-white px-4 py-2.5 text-xs font-bold text-[#174A3A]"><RotateCcw size={12} />إعادة التصفير</button>
              <button onClick={() => { setIdx((i) => (i + 1) % TASBIH.length); setCount(0); }} className="flex items-center gap-1 rounded-lg bg-[#174A3A] px-4 py-2.5 text-xs font-bold text-white"><ArrowLeft size={12} />الذكر التالي</button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between rounded-2xl bg-[#F2F7F4] p-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#C6923433] text-[#C69234]"><Flame size={20} /></span>
                <div><p className="font-extrabold text-[#174A3A]">7 أيام متتالية من الالتزام</p><p className="text-[11px] text-[#174A3A]/60">ما شاء الله، واصل وردك اليومي دون انقطاع لتنال البركة</p></div>
              </div>
              <Trophy size={16} className="text-[#C69234]" />
            </div>
            {[["أذكار الصباح", "منجز 25 / 18 (%72)", 72, "bg-[#C69234]"], ["أذكار المساء", "تبدأ بعد صلاة العصر", 12, "bg-[#174A3A]"], ["أذكار النوم", "منجز 12 / 0", 0, "bg-[#174A3A]"]].map(([t, v, p, c]) => (
              <div key={t}>
                <div className="mb-1.5 flex justify-between text-xs font-bold text-[#174A3A]"><span>{t}</span><span className="text-[10px] font-normal text-[#174A3A]/60">{v}</span></div>
                <div className="h-2 rounded-full bg-[#E6EFE9]"><div className={`h-full rounded-full ${c}`} style={{ width: `${p}%` }} /></div>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {TASBIH.map((x) => <div key={x.t} className="rounded-xl bg-[#F2F7F4] p-3 text-center"><p className="text-[10px] text-[#174A3A]/60">{x.t}</p><p className="text-lg font-extrabold text-[#C69234]">{x.n}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

export function HomePage() {
  const prayer = usePrayerTimes();
  return (
    <AudioPlayerProvider>
      <div dir="rtl" className="min-h-screen bg-[#FDFBF7] font-body">
        <HomeHeader prayer={prayer} />
        <Hero prayer={prayer} />
        <DailyCards />
        <div className="mt-16 bg-[#E6EFE9] pb-4 pt-2">
          <QuickAccess />
          <AudioLibrary />
          <DailyWird />
        </div>
      </div>
    </AudioPlayerProvider>
  );
}