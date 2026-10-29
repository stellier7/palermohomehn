import { siteConfig } from "@/content/site/config";

export function isWhatsAppReady(): boolean {
  return Boolean(siteConfig.whatsapp.ready && siteConfig.whatsapp.e164);
}

/** WhatsApp deep link — falls back to /contact when number is still a placeholder. */
export function buildWhatsAppUrl(message?: string): string {
  if (!isWhatsAppReady()) {
    return "/contact";
  }
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.whatsapp.e164}?text=${encoded}`;
}

export function buildPropertyWhatsAppUrl(propertyName: string): string {
  return buildWhatsAppUrl(
    `Hola, me gustaría recibir más información sobre ${propertyName}.`,
  );
}
