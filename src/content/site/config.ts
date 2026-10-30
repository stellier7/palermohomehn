/**
 * PALERMO HOME — single editable CONFIG
 * Swap name, colors (globals.css), copy, listings (properties.json),
 * images under /public/images, and contact fields here.
 *
 * Placeholders are marked clearly. Do not invent real prices or listings.
 */

export const siteConfig = {
  name: "Palermo Home",
  legalName: "Palermo Home",
  heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
  /** From Instagram @palermohomehn */
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

  /** No public email — WhatsApp first. */
  contactEmail: "",
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
      address: "Tegucigalpa, Honduras · atención por cita",
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
    "casa-venta-hacienda-real-cortes-p003",
    "apartamento-alquiler-torre-nivo-las-lomas-p004",
    "consultorio-alquiler-clinica-amueblada-p005",
    "casa-venta-santa-lucia-p006",
  ],

  social: {
    instagram: "https://instagram.com/palermohomehn",
    instagramHandle: "@palermohomehn",
  },

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
      body: "Seleccionamos y presentamos propiedades con criterio: ubicación, acabados y potencial de valor, sin saturar el catálogo.",
    },
    {
      title: "Asesoría y corretaje",
      body: "Acompañamiento en visitas privadas, negociación y documentación, con comunicación directa por WhatsApp.",
    },
  ],

  about: {
    eyebrow: "Nosotros",
    headline: "Portafolio exclusivo de alto nivel",
    portrait: "/images/site/about-portrait.jpg",
    portraitAlt: "Palermo Home",
    paragraphs: [
      "Palermo Home es una inmobiliaria con portafolio exclusivo de alto nivel en Honduras. Renta y venta de propiedades para quienes buscan residencias y activos con criterio.",
      "Trabajamos con un catálogo selecto —apartamentos, casas, espacios comerciales e industriales— y acompañamos cada consulta con atención directa y discreta. Agenda tu visita privada por WhatsApp.",
      "Misma familia detrás de AirHome HN (estadías cortas amuebladas): Palermo Home se enfoca en compraventa y renta de largo plazo.",
    ],
    englishHeadline: "About Palermo Home",
    englishBody:
      "Palermo Home is a Honduras real-estate firm with an exclusive high-level portfolio — rentals and sales. Separate from AirHome HN short-term furnished stays. Private visits by WhatsApp.",
    trustPoints: [
      { label: "Enfoque", value: "Renta y venta" },
      { label: "Cobertura", value: "Tegucigalpa · Siguatepeque · Cortés" },
      { label: "Idiomas", value: "Español · English" },
    ],
  },

  testimonials: [
    {
      quote:
        "Nos acompañaron de punta a punta con la compra. Claros, puntuales y con un ojo fino para lo que realmente valía la pena visitar.",
      author: "Familia M.",
      role: "Compradores · Tegucigalpa",
    },
    {
      quote:
        "Conseguimos un apartamento en renta que encajó perfecto con lo que buscábamos. Respuestas rápidas por WhatsApp y visitas bien organizadas.",
      author: "A. Rivas",
      role: "Inquilino · Tegucigalpa",
    },
  ],

  gallery: [
    {
      src: "/images/properties/torre-nivo/01.jpg",
      alt: "Apartamento Torre Nivo — Las Lomas",
    },
    {
      src: "/images/properties/hacienda-real/02.jpg",
      alt: "Casa Residencial Hacienda Real — Cortés",
    },
    {
      src: "/images/properties/torre-cipreses/01.jpg",
      alt: "Apartamento Torre Cipreses — San Ignacio",
    },
    {
      src: "/images/properties/consultorio-clinica/04.jpg",
      alt: "Consultorio / clínica amueblada — Tegucigalpa",
    },
  ],

  sisterBrand: {
    enabled: true,
    eyebrow: "¿Buscas Airbnb?",
    name: "AirHome HN",
    blurb:
      "Alojamientos amueblados de corta y mediana estadía. Marca aparte de Palermo Home (renta y venta de largo plazo).",
    url: "https://airhomehn.com/",
    cta: "Ver AirHome HN",
  },

  sourceWebsite: "",
} as const;

export type SiteConfig = typeof siteConfig;
