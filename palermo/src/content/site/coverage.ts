export type CoverageCity = {
  label: string;
  slug: string;
  matchNames: string[];
  featured: boolean;
};

/** Service areas — expand when the owner confirms coverage. */
export const coverageCities: CoverageCity[] = [
  {
    label: "Tegucigalpa",
    slug: "tegucigalpa",
    matchNames: ["Tegucigalpa"],
    featured: true,
  },
  {
    label: "Siguatepeque",
    slug: "siguatepeque",
    matchNames: ["Siguatepeque"],
    featured: true,
  },
];

export const homeServiceLinks = [
  {
    label: "Propiedades en venta",
    href: "/properties?listing=sale",
  },
  {
    label: "Propiedades en renta",
    href: "/properties?listing=rent",
  },
  {
    label: "Apartamentos",
    href: "/properties?type=apartment",
  },
  {
    label: "Bodegas",
    href: "/properties?type=industrial",
  },
  {
    label: "Ver servicios",
    href: "/services",
  },
  {
    label: "Hablar por WhatsApp",
    href: "/contact",
  },
] as const;

export function findCoverageCityBySlug(slug: string): CoverageCity | undefined {
  const normalized = slug.trim().toLowerCase();
  return coverageCities.find((city) => city.slug === normalized);
}

export function normalizeCityKey(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();
}

export function cityMatchesCoverage(
  propertyCity: string,
  coverage: CoverageCity,
): boolean {
  const key = normalizeCityKey(propertyCity);
  return coverage.matchNames.some((name) => normalizeCityKey(name) === key);
}
