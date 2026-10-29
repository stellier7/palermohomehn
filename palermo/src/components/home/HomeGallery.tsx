"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";

export function HomeGallery() {
  const images = siteConfig.gallery;
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") {
        setActive((i) => (i === null ? 0 : (i + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, images.length]);

  return (
    <Section id="galeria" className="bg-surface/60">
      <RevealOnScroll className="mb-10 max-w-2xl">
        <p className="type-meta-caps text-accent">Galería</p>
        <h2 className="type-display-section mt-3 text-accent">Ambientes</h2>
        <p className="prose-editorial mt-4">
          Fotos placeholder — reemplazar con el portafolio real de Palermo.
        </p>
      </RevealOnScroll>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {images.map((image, index) => (
          <RevealOnScroll key={image.src} delayMs={index * 60}>
            <button
              type="button"
              className="focus-ring group relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-md)] bg-surface"
              onClick={() => setActive(index)}
              aria-label={`Ampliar imagen ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </button>
          </RevealOnScroll>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(18,24,22,0.92)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada"
          onClick={close}
        >
          <button
            type="button"
            className="focus-ring absolute right-4 top-4 rounded-full bg-background/90 px-4 py-2 text-sm text-foreground"
            onClick={close}
          >
            Cerrar
          </button>
          <div
            className="relative h-[min(80vh,720px)] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </Section>
  );
}
