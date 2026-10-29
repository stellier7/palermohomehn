import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";

export function HomeTestimonials() {
  const items = siteConfig.testimonials;

  return (
    <Section id="testimonios" className="bg-background">
      <RevealOnScroll className="mb-12 max-w-2xl">
        <p className="type-meta-caps text-accent">Confianza</p>
        <h2 className="type-display-section mt-3 text-accent">Lo que dicen los clientes</h2>
        <p className="prose-editorial mt-4">
          Experiencias representativas del acompañamiento Palermo Home.
        </p>
      </RevealOnScroll>
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {items.map((item, index) => (
          <RevealOnScroll key={`${item.author}-${index}`} delayMs={index * 80}>
            <blockquote className="border-t border-line pt-6">
              <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                “{item.quote}”
              </p>
              <footer className="mt-6 type-meta">
                <cite className="not-italic font-medium text-accent">{item.author}</cite>
                <span className="mx-2 text-muted" aria-hidden>
                  ·
                </span>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
