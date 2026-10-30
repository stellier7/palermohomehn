import Link from "next/link";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { homeServiceLinks } from "@/content/site/coverage";

export function HomeServicesLinks() {
  return (
    <Section id="servicios-home" className="home-services bg-background">
      <div className="home-services-grid grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
        <RevealOnScroll className="home-services-copy">
          <p className="home-services-kicker">Oferta</p>
          <h2 className="type-display-section mt-3 text-accent">Servicios</h2>
          <p className="prose-editorial mt-5">
            Filtre el catálogo por tipo de operación o consulte asesoría directa.
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="home-services-actions" delayMs={100}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {homeServiceLinks.map((item, index) => {
              const direct = item.href === "/contact";
              return (
                <li key={item.href + item.label} className={direct ? "sm:col-span-2" : undefined}>
                  <Link
                    href={item.href}
                    className={`service-filter-link focus-ring${direct ? " service-filter-link--solid" : ""}`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
