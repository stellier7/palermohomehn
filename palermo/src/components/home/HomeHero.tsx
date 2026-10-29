"use client";

import Link from "next/link";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl, isWhatsAppReady } from "@/lib/contact/whatsapp";

type HomeHeroProps = {
  heroImage: string;
};

export function HomeHero({ heroImage }: HomeHeroProps) {
  const whatsappUrl = buildWhatsAppUrl();
  const waReady = isWhatsAppReady();

  return (
    <ParallaxMedia
      src={heroImage}
      alt="[PENDIENTE] Imagen hero de Palermo — fachada o vista icónica"
      priority
      minHeightClass="hero-shell-min"
      imageClassName="hero-bg-image"
    >
      <Container className="hero-panel hero-copy relative w-full">
        <RevealOnScroll>
          <h1 className="type-display-hero max-w-4xl text-pretty text-hero-ink">
            {siteConfig.name}
          </h1>
          <p className="type-meta mt-4 max-w-2xl text-pretty">
            <span className="block font-medium sm:inline">{siteConfig.tagline}</span>
            <span aria-hidden="true" className="hidden sm:inline">
              {" "}
              ·{" "}
            </span>
            <span className="mt-1 block sm:mt-0 sm:inline">
              {siteConfig.heroSupporting}
            </span>
          </p>
        </RevealOnScroll>
        <RevealOnScroll delayMs={100}>
          <p className="prose-editorial mt-5 max-w-2xl sm:mt-6">{siteConfig.heroLead}</p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={180} className="hero-actions w-full max-w-none sm:max-w-[36rem]">
          <div className="hero-catalog-actions">
            <Button
              href="/properties"
              variant="primary"
              className="hero-cta-btn w-full min-w-0 justify-center"
            >
              Ver propiedades
            </Button>
            <Button
              href={whatsappUrl}
              variant="outline"
              className="hero-cta-btn w-full min-w-0 justify-center"
              {...(waReady
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {waReady ? "WhatsApp" : "Contacto"}
            </Button>
          </div>
          <Link
            href="/about"
            className="focus-ring hero-ink-link type-meta inline-flex min-h-11 max-w-full items-center py-2 text-pretty underline underline-offset-4 transition-colors"
          >
            Conocer Palermo
          </Link>
        </RevealOnScroll>
      </Container>
    </ParallaxMedia>
  );
}
