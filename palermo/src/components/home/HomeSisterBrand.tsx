import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";

export function HomeSisterBrand() {
  const brand = siteConfig.sisterBrand;
  if (!brand.enabled) return null;

  return (
    <Section id="mismo-equipo" className="bg-background !py-10 sm:!py-12">
      <RevealOnScroll className="mx-auto max-w-2xl border-t border-line pt-10 text-center">
        <p className="type-meta-caps text-muted">{brand.eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">{brand.name}</h2>
        <p className="prose-editorial mx-auto mt-4 max-w-lg text-muted">{brand.blurb}</p>
        <div className="mt-6 flex justify-center">
          <Button
            href={brand.url}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            {brand.cta}
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
