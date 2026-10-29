import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Nosotros",
  description:
    "Palermo Home — inmobiliaria con portafolio exclusivo de alto nivel en Honduras. Renta y venta.",
  path: "/about",
});

export default function AboutPage() {
  const about = siteConfig.about;

  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full bg-[color:var(--accent)] shadow-[var(--shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--brand-gold)_50%,transparent)] lg:mx-0 lg:max-w-none">
            <Image
              src={about.portrait}
              alt={about.portraitAlt}
              fill
              sizes="(max-width: 1024px) 280px, 360px"
              className="object-cover"
              unoptimized
              priority
            />
          </div>
          <div>
            <p className="type-meta-caps text-accent">{about.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl font-display text-5xl text-accent sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 max-w-2xl font-medium text-accent/90">{siteConfig.tagline}</p>
            <div className="prose-editorial mt-8 max-w-2xl space-y-6">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {about.trustPoints.map((point) => (
            <div key={point.label} className="border-t border-line pt-4">
              <dt className="type-meta-caps text-muted">{point.label}</dt>
              <dd className="mt-2 font-display text-xl text-accent">{point.value}</dd>
            </div>
          ))}
        </dl>
        <p className="type-meta mt-10 max-w-2xl">
          Oficina: {siteConfig.offices[0]?.address ?? "Tegucigalpa"}
        </p>
      </Section>

      <Section className="bg-surface">
        <p className="type-meta-caps text-accent">English</p>
        <h2 className="mt-3 font-display text-3xl text-accent sm:text-4xl">
          {about.englishHeadline}
        </h2>
        <p className="prose-editorial mt-6 max-w-2xl">{about.englishBody}</p>
      </Section>
    </>
  );
}
