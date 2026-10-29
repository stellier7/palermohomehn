import type { Metadata } from "next";
import { WhatsAppContact } from "@/components/contact/WhatsAppContact";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl, isWhatsAppReady } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Contacto",
  description: "Contacto de Palermo Home — WhatsApp y teléfono en Tegucigalpa.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl();
  const waReady = isWhatsAppReady();

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <h1 className="font-display text-5xl sm:text-6xl">Contacto</h1>
          <p className="prose-editorial mt-6 max-w-xl">
            Atención directa por WhatsApp. Oficina en Tegucigalpa, visitas por cita.
          </p>
          <div className="mt-10 space-y-6 text-sm text-muted">
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">WhatsApp / móvil</span>
              {waReady ? (
                <a
                  className="focus-ring text-lg text-foreground"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.whatsapp.display}
                </a>
              ) : (
                <span className="text-lg text-foreground">{siteConfig.whatsapp.display}</span>
              )}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">Teléfono</span>
              <span className="text-lg text-foreground">{siteConfig.phone}</span>
            </p>
            {siteConfig.social?.instagram ? (
              <p>
                <span className="block text-xs uppercase tracking-[0.2em]">Instagram</span>
                <a
                  className="focus-ring text-lg text-foreground"
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.social.instagramHandle}
                </a>
              </p>
            ) : null}
            {siteConfig.offices.map((office) => (
              <p key={office.city}>
                <span className="block text-xs uppercase tracking-[0.2em]">Ubicación</span>
                <span className="text-lg text-foreground">{office.address}</span>
              </p>
            ))}
          </div>
        </div>
        {waReady ? (
          <WhatsAppContact heading="Iniciar conversación" />
        ) : (
          <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-8">
            <h2 className="font-display text-2xl text-accent">WhatsApp pendiente</h2>
            <p className="prose-editorial mt-4">
              Configure <code>siteConfig.whatsapp.e164</code> y{" "}
              <code>whatsapp.ready = true</code> en{" "}
              <code>src/content/site/config.ts</code> cuando tenga el número de Palermo.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
