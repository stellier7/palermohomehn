import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Nosotros",
  description:
    "Palermo — bienes raíces en Honduras. Página nosotros (contenido demo / placeholder).",
  path: "/about",
});

export default function AboutPage() {
  const about = siteConfig.about;

  return (
    <>
      <Section>
        <p className="type-meta-caps text-accent">{about.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl text-accent sm:text-6xl">
          {siteConfig.name}
        </h1>
        <div className="prose-editorial mt-8 max-w-2xl space-y-6">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
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
          Oficina: {siteConfig.offices[0]?.address ?? "[PENDIENTE]"}
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
