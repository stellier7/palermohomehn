"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { PropertyListingImage } from "@/components/media/PropertyListingImage";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import type { CoverageCityCard } from "@/lib/properties/coverage-media";

type HomeCoverageProps = {
  featured: CoverageCityCard[];
  secondary: CoverageCityCard[];
};

function CoverageCityLink({
  city,
  priority = false,
  tabIndex,
}: {
  city: CoverageCityCard;
  priority?: boolean;
  tabIndex?: number;
}) {
  return (
    <Link
      href={city.href}
      className="coverage-card focus-ring group block"
      aria-label={`Ver propiedades en ${city.label}`}
      tabIndex={tabIndex}
    >
      <span className="coverage-card-media">
        {city.image ? (
          <PropertyListingImage
            src={city.image.src}
            alt={city.image.alt}
            sizes="(max-width: 640px) 70vw, 18rem"
            className="transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
            priority={priority}
          />
        ) : (
          <span className="coverage-card-fallback" aria-hidden />
        )}
        <span className="coverage-card-scrim" aria-hidden />
        <span className="coverage-card-label">{city.label}</span>
      </span>
    </Link>
  );
}

export function HomeCoverage({ featured, secondary }: HomeCoverageProps) {
  const [showAll, setShowAll] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [inView, setInView] = useState(true);
  const panelId = useId();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const cities = showAll ? [...featured, ...secondary] : featured;
  const canExpand = secondary.length > 0;
  const sequence = reduceMotion ? cities : [...cities, ...cities];
  const shouldAnimate = !reduceMotion && inView && cities.length > 1;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node || reduceMotion) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <Section id="cobertura" className="bg-surface/70">
      <RevealOnScroll className="mb-10 max-w-2xl">
        <p className="type-meta-caps text-accent">Cobertura</p>
        <h2 className="type-display-section mt-3 text-accent">Zonas de atención</h2>
        <p className="prose-editorial mt-4">
          Presencia en Tegucigalpa, Siguatepeque, Cortés y Santa Lucía. Explore el portafolio por
          zona.
        </p>
      </RevealOnScroll>

      <div
        ref={viewportRef}
        id={panelId}
        className={`coverage-marquee-viewport ${reduceMotion ? "coverage-marquee-viewport--static" : ""}`}
        role="region"
        aria-label="Zonas de atención"
        aria-roledescription={reduceMotion ? undefined : "carrusel"}
      >
        <ul
          className={`coverage-marquee-track ${shouldAnimate ? "coverage-marquee-track--animate" : ""}`}
          style={
            shouldAnimate
              ? { animationDuration: `${Math.max(32, cities.length * 8)}s` }
              : undefined
          }
        >
          {sequence.map((city, index) => {
            const isDuplicate = !reduceMotion && index >= cities.length;
            return (
              <li
                key={isDuplicate ? `${city.slug}-dup` : city.slug}
                className="coverage-marquee-item"
                aria-hidden={isDuplicate ? true : undefined}
              >
                <CoverageCityLink
                  city={city}
                  priority={!isDuplicate && index < 2}
                  tabIndex={isDuplicate ? -1 : undefined}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        {canExpand ? (
          <button
            type="button"
            className="focus-ring type-meta-caps inline-flex min-h-11 items-center text-accent underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
            aria-expanded={showAll}
            aria-controls={panelId}
            onClick={() => setShowAll((open) => !open)}
          >
            {showAll ? "Ver menos ←" : "Todas las zonas →"}
          </button>
        ) : null}
        <Link
          href="/properties"
          className="focus-ring type-meta-caps inline-flex min-h-11 items-center text-accent/80 underline decoration-accent/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Más en catálogo →
        </Link>
      </div>
    </Section>
  );
}
