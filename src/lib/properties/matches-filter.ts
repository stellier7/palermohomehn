import {
  cityMatchesCoverage,
  findCoverageCityBySlug,
  normalizeCityKey,
} from "@/content/site/coverage";
import { formatPropertyType } from "./specs";
import type { Property, PropertyFilter } from "./types";

function propertySearchText(property: Property): string {
  const listingAliases: string[] = [];
  if (property.tags?.includes("alquiler")) {
    listingAliases.push("alquiler", "renta");
  }
  if (property.tags?.includes("venta")) {
    listingAliases.push("venta");
  }

  return normalizeCityKey(
    [
      property.id,
      property.slug,
      property.name,
      property.title,
      property.shortDescription,
      property.location.label,
      property.location.city,
      property.location.region,
      property.location.address,
      property.tags?.join(" "),
      property.features?.join(" "),
      formatPropertyType(property.propertyType),
      property.propertyType,
      listingAliases.join(" "),
    ]
      .filter(Boolean)
      .join(" "),
  );
}

function queryMatchesProperty(property: Property, query: string): boolean {
  const normalized = normalizeCityKey(query);
  if (!normalized) {
    return true;
  }
  const haystack = propertySearchText(property);
  return normalized.split(/\s+/).every((token) => haystack.includes(token));
}

export function matchesPropertyFilter(
  property: Property,
  filters: PropertyFilter,
): boolean {
  if (filters.type && property.propertyType !== filters.type) {
    return false;
  }
  if (filters.status && property.status !== filters.status) {
    return false;
  }
  if (filters.listing) {
    const tag = filters.listing === "sale" ? "venta" : "alquiler";
    if (!property.tags?.includes(tag)) {
      return false;
    }
  }
  if (filters.city) {
    const propertyCity = property.location.city;
    if (!propertyCity) {
      return false;
    }
    const coverage = findCoverageCityBySlug(filters.city);
    if (coverage) {
      if (!cityMatchesCoverage(propertyCity, coverage)) {
        return false;
      }
    } else {
      const q = filters.city.toLowerCase().trim();
      if (!propertyCity.toLowerCase().includes(q)) {
        return false;
      }
    }
  }
  if (filters.query && !queryMatchesProperty(property, filters.query)) {
    return false;
  }
  return true;
}
