const sampleAyat = [
  "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
  "الرَّحْمَٰنِ الرَّحِيمِ",
  "مَالِكِ يَوْمِ الدِّينِ",
];

export function AppPreviewMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem]" aria-label="معاينة تطبيق الزواوي">
      <div className="rounded-[2rem] bg-zinc-950 p-3 shadow-2xl shadow-emerald-950/20">
        <div className="overflow-hidden rounded-[1.5rem] bg-[#f8f3e7]">
          <div className="flex items-center justify-between bg-emerald-800 px-5 py-4 text-white">
            <div>
              <p className="text-xs text-emerald-100">الزواوي</p>
              <p className="text-base font-bold">سورة الفاتحة</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-bold">
              ١
            </div>
          </div>

          <div className="space-y-5 px-5 py-6">
            <div className="rounded-lg border border-amber-200 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-amber-900">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>

            <div className="space-y-4">
              {sampleAyat.map((ayah, index) => (
                <p
                  key={ayah}
                  className="rounded-lg bg-white px-4 py-4 text-right text-xl leading-10 text-zinc-900 shadow-sm"
                >
                  {ayah}
                  <span className="ms-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-200 text-xs font-bold text-emerald-800">
                    {index + 2}
                  </span>
                </p>
              ))}
            </div>

            <div className="rounded-lg bg-zinc-950 px-4 py-4 text-white">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span>الشيخ مشاري العفاسي</span>
                <span className="text-amber-200">تشغيل</span>
              </div>
              <div className="h-2 rounded-full bg-white/15">
                <div className="h-full w-2/3 rounded-full bg-amber-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
