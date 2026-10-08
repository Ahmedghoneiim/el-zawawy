import { siteConfig } from "../../../config/site";
import { Button, Container } from "../../../components/ui";
import { AppPreviewMockup } from "./AppPreviewMockup";
import { StoreBadge } from "./StoreBadge";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#fbfaf6] py-16 sm:py-20 lg:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-lg bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800 ring-1 ring-emerald-100">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
            تطبيق الزواوي للقرآن الكريم
          </h1>
          <p className="mt-6 text-lg leading-9 text-zinc-700 sm:text-xl">
            مصحف واضح، تلاوات مؤثرة، تفسير ميسر، وأذكار يومية في تجربة عربية
            مصممة لتبقى قريبة منك أينما كنت.
          </p>

          <div id="download" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <StoreBadge
              href={siteConfig.downloads.appStore.href}
              label={siteConfig.downloads.appStore.label}
              storeName={siteConfig.downloads.appStore.storeName}
              platform="ios"
            />
            <StoreBadge
              href={siteConfig.downloads.googlePlay.href}
              label={siteConfig.downloads.googlePlay.label}
              storeName={siteConfig.downloads.googlePlay.storeName}
              platform="android"
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as="a" href="#features" size="lg">
              استكشف المميزات
            </Button>
            <Button as="a" href="#features" variant="secondary" size="lg">
              استمع للتلاوات
            </Button>
          </div>
        </div>

        <AppPreviewMockup />
      </Container>
    </section>
  );
}
