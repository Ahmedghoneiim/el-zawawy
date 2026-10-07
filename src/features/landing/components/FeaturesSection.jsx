import { landingFeatures } from "../../../config/site";
import { Card, Container } from "../../../components/ui";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-emerald-700">مميزات التطبيق</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-zinc-950 sm:text-4xl">
            كل ما تحتاجه لتلاوة يومية هادئة ومنظمة
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            صممنا تجربة الزواوي لتجمع الأساسيات التي يحتاجها المسلم في تطبيق واحد:
            قراءة، استماع، فهم، وذكر.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {landingFeatures.map((feature) => (
            <Card key={feature.title} className="flex min-h-[16rem] flex-col">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-xl font-bold text-emerald-800">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-950">{feature.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
