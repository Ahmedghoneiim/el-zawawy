import { siteConfig } from "../../../config/site";
import { Button, Container } from "../../../components/ui";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#fbfaf6]/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-800 text-lg font-bold text-white">
            ز
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-bold text-zinc-950">
              {siteConfig.name}
            </span>
            <span className="block truncate text-xs text-zinc-500">
              {siteConfig.englishName}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل الرئيسي">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-white hover:text-emerald-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          as="a"
          href={siteConfig.downloads.googlePlay.href}
          className="hidden sm:inline-flex"
        >
          تحميل التطبيق
        </Button>
      </Container>
    </header>
  );
}
