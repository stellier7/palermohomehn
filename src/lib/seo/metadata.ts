import type { Metadata } from "next";
import { siteConfig } from "@/content/site/config";
import type { ImageAsset, Property } from "@/lib/properties/types";

const baseUrl = siteConfig.url.replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalized}`;
}

/** Resolve site-relative or already-absolute asset URLs for OG / JSON-LD. */
export function absoluteAssetUrl(src: string): string {
  if (/^https?:\/\//i.test(src)) {
    return src;
  }
  return absoluteUrl(src);
}

type OgImageInput = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type ResolvedOgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

function resolveOgImage(image?: string | OgImageInput): ResolvedOgImage[] {
  if (!image) {
    return [
      {
        url: absoluteAssetUrl(siteConfig.defaultOgImage),
        width: 320,
        height: 320,
        alt: siteConfig.name,
      },
    ];
  }

  if (typeof image === "string") {
    return [{ url: absoluteAssetUrl(image) }];
  }

  return [
    {
      url: absoluteAssetUrl(image.url),
      ...(image.width !== undefined ? { width: image.width } : {}),
      ...(image.height !== undefined ? { height: image.height } : {}),
      ...(image.alt ? { alt: image.alt } : {}),
    },
  ];
}

export function buildSiteMetadata(overrides?: {
  title?: string;
  description?: string;
  path?: string;
  image?: string | OgImageInput;
  noIndex?: boolean;
}): Metadata {
  const title = overrides?.title
    ? `${overrides.title} · ${siteConfig.name}`
    : `${siteConfig.name} · ${siteConfig.tagline}`;
  const description = overrides?.description ?? siteConfig.description;
  const path = overrides?.path ?? "/";
  const images = resolveOgImage(overrides?.image);
  const imageUrls = images.map((entry) => entry.url);
  const shareCard = overrides?.image ? "summary_large_image" : "summary";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: absoluteUrl(path) },
    // Favicon, icon, and apple icon are the Palermo logo via app/ file conventions.
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "es_HN",
      type: "website",
      images,
    },
    twitter: {
      card: shareCard,
      title,
      description,
      images: imageUrls,
    },
    robots: overrides?.noIndex ? { index: false, follow: false } : undefined,
  };
}

function propertyShareImage(property: Property): ImageAsset {
  return property.seo.ogImage ?? property.media.heroImage;
}

export function buildPropertyMetadata(property: Property): Metadata {
  const title =
    property.seo.title ?? property.title ?? property.name;
  const description =
    property.seo.description ??
    property.shortDescription ??
    siteConfig.description;
  const path = property.seo.canonicalPath ?? `/properties/${property.slug}`;
  const image = propertyShareImage(property);

  return buildSiteMetadata({
    title,
    description,
    path,
    image: {
      url: image.src,
      width: image.width,
      height: image.height,
      alt: image.alt || title,
    },
    noIndex: property.seo.noIndex,
  });
}

export function buildPropertyJsonLd(property: Property): Record<string, unknown> {
  const price = property.pricing?.amount;
  const currency =
    property.pricing?.currency ??
    (property.pricing?.display?.includes("HNL") ? "HNL" : "USD");
  const image = propertyShareImage(property);
  const path = property.seo.canonicalPath ?? `/properties/${property.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.name,
    description: property.shortDescription ?? property.description,
    url: absoluteUrl(path),
    image: absoluteAssetUrl(image.src),
    ...(price !== undefined
      ? {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency: currency,
            availability:
              property.status === "available"
                ? "https://schema.org/InStock"
                : "https://schema.org/SoldOut",
          },
        }
      : {}),
    address: property.location.address
      ? {
          "@type": "PostalAddress",
          streetAddress: property.location.address,
          addressLocality: property.location.city,
          addressRegion: property.location.region,
          addressCountry: property.location.country,
        }
      : undefined,
  };
}
