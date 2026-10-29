import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl, isWhatsAppReady } from "@/lib/contact/whatsapp";

export function HomeContactCta() {
  const whatsappUrl = buildWhatsAppUrl();
  const waReady = isWhatsAppReady();

  return (
    <Section id="contacto-home" className="bg-surface !pb-8 sm:!pb-10">
      <RevealOnScroll className="max-w-3xl">
        <p className="type-meta-caps text-accent">Contacto</p>
        <h2 className="type-display-section mt-3 text-accent">
          ¿Listo para hablar de una propiedad?
        </h2>
        <p className="prose-editorial mt-5">
          Atención directa para compraventa y asesoría.{" "}
          {waReady
            ? "Escríbanos por WhatsApp."
            : "El número de WhatsApp de Palermo está pendiente — use el formulario de contacto."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={whatsappUrl}
            variant="primary"
            {...(waReady ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {waReady ? "Contactar por WhatsApp" : "Ir a contacto"}
          </Button>
          <Button href={`mailto:${siteConfig.contactEmail}`} variant="outline">
            Email
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
