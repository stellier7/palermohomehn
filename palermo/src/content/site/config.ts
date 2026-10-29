/**
 * PALERMO — single editable CONFIG
 * Swap name, colors (globals.css), copy, listings (properties.json),
 * images under /public/images, and contact fields here.
 *
 * Placeholders are marked clearly. Do not invent real prices or contacts.
 */

export const siteConfig = {
  name: "Palermo",
  legalName: "Palermo", // [PENDIENTE] razón social si aplica
  heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
  tagline: "[PENDIENTE] Tagline de Palermo",
  /** One short supporting sentence under the brand (Spanish). */
  heroSupporting: "Bienes raíces con criterio local en Honduras",
  heroLead:
    "Asesoría para comprar o vender propiedades con un proceso claro, discreto y profesional. Contenido de demostración — reemplazar con la propuesta real del cliente.",
  description:
    "Palermo — demo de sitio inmobiliario premium. Contenido placeholder hasta confirmar datos del dueño.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  defaultOgImage: "/images/site/logo-mark.svg",
  logo: "/images/site/logo-mark.svg",
  logoFull: "/images/site/logo-mark.svg",

  /** Contact — placeholders only until the owner supplies Palermo channels. */
  contactEmail: "[PENDIENTE] correo@palermo.hn",
  phone: "[PENDIENTE] +504 XXXX-XXXX",
  mobile: "[PENDIENTE] +504 XXXX-XXXX",
  whatsapp: {
    display: "[PENDIENTE] WhatsApp",
    /** Digits only. Leave empty until real number — CTAs stay visible but labeled. */
    e164: "",
    defaultMessage:
      "Hola, vi el sitio de Palermo y me gustaría recibir información sobre sus propiedades.",
    ready: false,
  },
  offices: [
    {
      city: "Tegucigalpa",
      address: "[PENDIENTE] Dirección de oficina",
      phone: "[PENDIENTE] +504 XXXX-XXXX",
      mapEmbedUrl: "", // optional Google Maps embed URL
      mapLink: "https://maps.google.com/?q=Tegucigalpa,+Honduras",
    },
  ],

  nav: [
    { label: "Propiedades", href: "/properties" },
    { label: "Nosotros", href: "/about" },
    { label: "Servicios", href: "/services" },
    { label: "Contacto", href: "/contact" },
  ],

  /** Homepage featured order — must match slugs in properties.json (+ id suffix). */
  homeFeaturedPropertySlugs: [
    "casa-venta-tegucigalpa-demo-p001",
    "apartamento-venta-tegucigalpa-demo-p002",
    "terreno-venta-tegucigalpa-demo-p003",
    "casa-venta-valle-demo-p004",
  ], // slug = `${json.slug}-${json.id}` from map-altair

  /** Assumed scope until owner confirms — brokerage / sales, not short-term rentals. */
  services: [
    {
      title: "Compraventa residencial",
      body: "[PENDIENTE] Casas y apartamentos — ajustar al alcance real de Palermo.",
    },
    {
      title: "Terrenos y lotes",
      body: "[PENDIENTE] Descripción del servicio de terrenos.",
    },
    {
      title: "Proyectos y desarrollos",
      body: "[PENDIENTE] Si Palermo comercializa proyectos, detallar aquí.",
    },
    {
      title: "Asesoría y corretaje",
      body: "[PENDIENTE] Acompañamiento en visitas, negociación y documentación.",
    },
  ],

  about: {
    eyebrow: "Nosotros",
    headline: "Confianza para decisiones importantes",
    paragraphs: [
      "[PENDIENTE] Breve historia de Palermo: qué hacen, para quién y por qué confiar.",
      "Este bloque es un marcador de posición para el pitch. No inventamos años de experiencia ni logros.",
    ],
    englishHeadline: "About Palermo",
    englishBody:
      "[PENDING] Short English bio for international buyers. Palermo is a real-estate sales brand — separate from AirHome HN short-term rentals.",
    trustPoints: [
      { label: "Enfoque", value: "Compraventa / corretaje" },
      { label: "Cobertura", value: "[PENDIENTE] Zonas" },
      { label: "Idiomas", value: "Español · English" },
    ],
  },

  testimonials: [
    {
      quote: "[PENDIENTE] Testimonio de cliente — solo publicar con permiso.",
      author: "[Nombre]",
      role: "Comprador / vendedor",
    },
    {
      quote: "[PENDIENTE] Segundo testimonio o caso cerrado.",
      author: "[Nombre]",
      role: "Inversionista",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      alt: "[PENDIENTE] Interior — reemplazar con foto real",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      alt: "[PENDIENTE] Detalle arquitectónico",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
      alt: "[PENDIENTE] Espacio exterior / terraza",
    },
    {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d36b3b?auto=format&fit=crop&w=1600&q=80",
      alt: "[PENDIENTE] Ambiente residencial",
    },
  ],

  /** Sister brand — same team, different product. Keep visually secondary. */
  sisterBrand: {
    enabled: true,
    eyebrow: "También del mismo equipo",
    name: "AirHome HN",
    blurb:
      "Alojamientos amueblados de corta y mediana estadía. Marca aparte de Palermo (ventas / corretaje).",
    url: "https://airhomehn.com/",
    cta: "Visitar AirHome HN",
  },

  sourceWebsite: "",
} as const;

export type SiteConfig = typeof siteConfig;
