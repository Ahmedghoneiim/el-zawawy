// سكشن 03 | مواقيت الصلاة
import { Bell, BarChart3, Moon, Sun } from "lucide-react";
import { Container } from "../../../components/ui";

const PRAYERS = [
  { name: "الفجر", time: "04:35", icon: Moon },
  { name: "الشروق", time: "05:58", icon: Sun },
  { name: "الظهر", time: "12:24", icon: Sun },
  { name: "العصر", time: "15:49", icon: Sun },
  { name: "المغرب", time: "18:38", icon: Moon, active: true },
  { name: "العشاء", time: "20:08", icon: Moon },
];

export function PrayerTimesSection() {
  return (
    <section className="bg-cream py-10">
      <Container>
        <div className="grid items-center gap-12 rounded-[40px] bg-sand p-6 md:p-16 lg:grid-cols-2">
         
          <div>
            <p dir="ltr" className="mb-5 flex items-center justify-end gap-3 text-sm font-bold text-bronze">
              <span>03</span>
              <span className="h-px w-8 bg-bronze/60" />
              <span>مواقيت الصلاة</span>
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.6] text-pine">
              لكل صلاة وقت، ولكل وقت سكينة.
            </h2>
            <p className="mt-6 max-w-[400px] text-sm leading-8 text-muted">
              ابقَ قريباً من صلاتك، تعرّف على مواقيت الصلاة في مدينتك، واستعد للصلاة القادمة بنظرة واحدة، في واجهة مرتبة وواضحة.
            </p>

            <span
              dir="ltr"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-black/5 bg-white px-5 py-3 text-xs text-muted shadow-sm"
            >
              <Bell size={16} className="text-bronze" />
              تنبيهات تعينك على الصلاة في وقتها
            </span>
          </div>

          
          <div
            dir="ltr"
            className="relative mx-auto w-full max-w-[550px] overflow-hidden rounded-[32px] bg-pine p-8 shadow-2xl shadow-pine/30"
          >
            <span aria-hidden className="absolute -left-10 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <span aria-hidden className="absolute -left-1 -top-7 h-[183px] w-[183px] rounded-full border border-white/10" />

            <div className="relative flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                <BarChart3 size={16} className="text-goldlight" />
                مواقيت الصلاة
              </span>
              <span className="text-xs text-white/65">الإسكندرية</span>
            </div>

            <div className="relative mt-8 text-center">
              <p className="text-xs text-white/65">الصلاة القادمة</p>
              <h3 className="mt-2 text-[34px] font-extrabold leading-tight text-goldlight">صلاة المغرب</h3>
              <p className="mt-2 text-[34px] font-light tracking-[0.2em] text-goldlight">
                01 : 18 : 58
              </p>
              <p className="mt-3 text-xs text-white/65">نموذج لواجهة مواقيت الصلاة</p>
            </div>

            <ul className="relative mt-10 space-y-1">
              {PRAYERS.map(({ name, time, icon: Icon, active }) => (
                <li
                  key={name}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm ${
                    active ? "bg-goldlight font-bold text-pine" : "text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={16} className={active ? "text-pine" : "text-goldlight"} />
                    {name}
                  </span>
                  <span className={`text-xs ${active ? "" : "text-white/70"}`}>{time}</span>
                </li>
              ))}
            </ul>

            <button className="relative mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 py-3 text-sm text-white hover:bg-white/5">
              <Bell size={14} />
              تفعيل التنبيهات
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}