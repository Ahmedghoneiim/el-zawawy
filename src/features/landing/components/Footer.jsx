import { siteConfig } from "../../../config/site";
import { Container } from "../../../components/ui";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#fbfaf6] py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#hero" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-800 text-lg font-bold text-white">
                ز
              </span>
              <span>
                <span className="block text-lg font-bold text-zinc-950">
                  {siteConfig.name}
                </span>
                <span className="block text-sm text-zinc-500">
                  {siteConfig.englishName}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-md leading-7 text-zinc-600">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-zinc-950">روابط سريعة</h2>
            <ul className="mt-4 space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a className="text-sm text-zinc-600 hover:text-emerald-800" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-zinc-950">تابعنا</h2>
            <ul className="mt-4 space-y-3">
              {siteConfig.socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    className="text-sm text-zinc-600 hover:text-emerald-800"
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.englishName}. جميع الحقوق محفوظة.
        </div>
      </Container>
    </footer>
  );
}
