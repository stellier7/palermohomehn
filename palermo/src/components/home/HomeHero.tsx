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
      alt="Residencia de alto nivel — imagen hero de Palermo Home (reemplazar)"
      priority
      minHeightClass="hero-shell-min"
      imageClassName="hero-bg-image"
    >
      <Container className="hero-panel hero-copy relative w-full">
        <RevealOnScroll>
          <h1 className="type-display-hero max-w-4xl text-pretty text-hero-ink">
            {siteConfig.name}
          </h1>
          <p className="type-meta mt-4 max-w-2xl text-pretty font-medium text-hero-ink/85">
            {siteConfig.tagline}
          </p>
          <p className="type-meta mt-2 max-w-2xl text-pretty">
            {siteConfig.heroSupporting}
            <span aria-hidden="true"> · </span>
            Tegucigalpa, Honduras
          </p>
        </RevealOnScroll>
        <RevealOnScroll delayMs={100}>
          <p className="prose-editorial mt-5 max-w-2xl sm:mt-6">{siteConfig.heroLead}</p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={180} className="hero-actions w-full max-w-none sm:max-w-[40rem]">
          <div className="hero-catalog-actions">
            <Button
              href="/properties?listing=sale"
              variant="primary"
              className="hero-cta-btn w-full min-w-0 justify-center"
            >
              En venta
            </Button>
            <Button
              href="/properties?listing=rent"
              variant="outline"
              className="hero-cta-btn w-full min-w-0 justify-center"
            >
              En renta
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Button
              href={whatsappUrl}
              variant="ghost"
              className="hero-cta-btn"
              {...(waReady ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              WhatsApp {siteConfig.whatsapp.display}
            </Button>
            <Link
              href="/about"
              className="focus-ring hero-ink-link type-meta inline-flex min-h-11 items-center py-2 underline underline-offset-4"
            >
              Conocer Palermo Home
            </Link>
          </div>
        </RevealOnScroll>
      </Container>
    </ParallaxMedia>
  );
}
