import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";

export function HomeLocation() {
  const office = siteConfig.offices[0];
  if (!office) return null;

  return (
    <Section id="ubicacion" className="bg-surface/70">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
        <RevealOnScroll>
          <p className="type-meta-caps text-accent">Ubicación</p>
          <h2 className="type-display-section mt-3 text-accent">{office.city}</h2>
          <p className="prose-editorial mt-5">{office.address}</p>
          <div className="mt-8">
            <Button
              href={office.mapLink}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Maps
            </Button>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delayMs={100}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border border-line bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface))]">
            {office.mapEmbedUrl ? (
              <iframe
                title={`Mapa — ${office.city}`}
                src={office.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
                <p className="type-meta-caps text-accent">Mapa</p>
                <p className="prose-editorial max-w-sm text-muted">
                  [PENDIENTE] Pegar URL de embed de Google Maps en{" "}
                  <code className="text-sm">siteConfig.offices[0].mapEmbedUrl</code>
                </p>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
