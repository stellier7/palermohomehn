/**
 * PALERMO HOME — single editable CONFIG
 * Swap name, colors (globals.css), copy, listings (properties.json),
 * images under /public/images, and contact fields here.
 *
 * Placeholders are marked clearly. Do not invent real prices or listings.
 */

export const siteConfig = {
  name: "Palermo Home",
  legalName: "Palermo Home", // [PENDIENTE] razón social si aplica
  heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
  tagline: "Inmobiliaria con portafolio exclusivo de alto nivel en Honduras",
  /** One short supporting sentence under the brand (Spanish). */
  heroSupporting: "Renta y venta de propiedades",
  heroLead:
    "Portafolio selecto para quienes buscan residencias y activos de alto nivel, con asesoría clara y discreta en Honduras.",
  description:
    "Palermo Home — inmobiliaria con portafolio exclusivo de alto nivel en Honduras. Renta y venta de propiedades.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  defaultOgImage: "/images/site/logo-palermo-home.png",
  logo: "/images/site/logo-palermo-home.png",
  logoFull: "/images/site/logo-palermo-home.png",

  contactEmail: "[PENDIENTE] correo@palermohome.hn",
  phone: "+504 8819-5809",
  mobile: "+504 8819-5809",
  whatsapp: {
    display: "+504 8819-5809",
    e164: "50488195809",
    defaultMessage:
      "Hola, vi el sitio de Palermo Home y me gustaría recibir información sobre sus propiedades.",
    ready: true,
  },
  offices: [
    {
      city: "Tegucigalpa",
      address: "[PENDIENTE] Dirección de oficina",
      phone: "+504 8819-5809",
      mapEmbedUrl: "",
      mapLink: "https://maps.google.com/?q=Tegucigalpa,+Honduras",
    },
  ],

  nav: [
    { label: "Propiedades", href: "/properties" },
    { label: "Nosotros", href: "/about" },
    { label: "Servicios", href: "/services" },
    { label: "Contacto", href: "/contact" },
  ],

  homeFeaturedPropertySlugs: [
    "apartamento-venta-torre-cipreses-san-ignacio-p001",
    "bodega-venta-siguatepeque-ca5-p002",
    "terreno-venta-tegucigalpa-demo-p003",
    "apartamento-alquiler-tegucigalpa-demo-p004",
  ],

  services: [
    {
      title: "Venta de propiedades",
      body: "Residencias y activos de alto nivel en Honduras — portafolio exclusivo para compradores e inversionistas.",
    },
    {
      title: "Renta de propiedades",
      body: "Alquileres residenciales de largo plazo. Distinto de AirHome HN (estadías cortas amuebladas).",
    },
    {
      title: "Portafolio exclusivo",
      body: "[PENDIENTE] Cómo seleccionan y presentan las propiedades de alto nivel.",
    },
    {
      title: "Asesoría y corretaje",
      body: "[PENDIENTE] Acompañamiento en visitas, negociación y documentación.",
    },
  ],

  about: {
    eyebrow: "Nosotros",
    headline: "Portafolio exclusivo de alto nivel",
    paragraphs: [
      "Palermo Home es una inmobiliaria enfocada en renta y venta de propiedades de alto nivel en Honduras.",
      "[PENDIENTE] Breve historia del equipo, años de experiencia y por qué confiar — a completar con el dueño.",
    ],
    englishHeadline: "About Palermo Home",
    englishBody:
      "Palermo Home is a Honduras real-estate firm focused on high-level rental and sales. Separate from AirHome HN short-term furnished stays. [PENDING] Team bio.",
    trustPoints: [
      { label: "Enfoque", value: "Renta y venta" },
      { label: "Cobertura", value: "Tegucigalpa · Siguatepeque" },
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
      role: "Inquilino / inversionista",
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

  sisterBrand: {
    enabled: true,
    eyebrow: "También del mismo equipo",
    name: "AirHome HN",
    blurb:
      "Alojamientos amueblados de corta y mediana estadía. Marca aparte de Palermo Home (renta y venta de largo plazo).",
    url: "https://airhomehn.com/",
    cta: "Visitar AirHome HN",
  },

  sourceWebsite: "",
} as const;

export type SiteConfig = typeof siteConfig;
