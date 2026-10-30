"use client";

import { useRouter } from "next/navigation";
import { useId, type FormEvent } from "react";
import { coverageCities } from "@/content/site/coverage";
import { formatPropertyType, PROPERTY_FILTER_TYPES } from "@/lib/properties/specs";

const FILTER_FIELDS = ["q", "city", "type", "listing"] as const;

export function HeroCatalogSearch() {
  const router = useRouter();
  const fieldId = useId();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams();

    for (const key of FILTER_FIELDS) {
      const value = String(data.get(key) ?? "").trim();
      if (value) {
        params.set(key, value);
      }
    }

    const query = params.toString();
    router.push(query ? `/properties?${query}` : "/properties");
  }

  return (
    <form
      role="search"
      action="/properties"
      method="get"
      onSubmit={onSubmit}
      className="hero-search"
      aria-label="Buscar en el portafolio"
    >
      <div className="hero-search-fields">
        <label className="hero-search-field hero-search-query" htmlFor={`${fieldId}-q`}>
          <span className="sr-only">Buscar</span>
          <input
            id={`${fieldId}-q`}
            type="search"
            name="q"
            placeholder="Título, zona o código"
            autoComplete="off"
            className="hero-search-control"
          />
        </label>
        <label className="hero-search-field" htmlFor={`${fieldId}-city`}>
          <span className="sr-only">Ciudad</span>
          <select id={`${fieldId}-city`} name="city" defaultValue="" className="hero-search-control">
            <option value="">Ciudad</option>
            {coverageCities.map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.label}
              </option>
            ))}
          </select>
        </label>
        <label className="hero-search-field" htmlFor={`${fieldId}-type`}>
          <span className="sr-only">Tipo</span>
          <select id={`${fieldId}-type`} name="type" defaultValue="" className="hero-search-control">
            <option value="">Tipo</option>
            {PROPERTY_FILTER_TYPES.map((type) => (
              <option key={type} value={type}>
                {formatPropertyType(type)}
              </option>
            ))}
          </select>
        </label>
        <label className="hero-search-field hero-search-listing" htmlFor={`${fieldId}-listing`}>
          <span className="sr-only">Negocio</span>
          <select
            id={`${fieldId}-listing`}
            name="listing"
            defaultValue=""
            className="hero-search-control"
          >
            <option value="">Venta o renta</option>
            <option value="sale">Venta</option>
            <option value="rent">Alquiler</option>
          </select>
        </label>
      </div>
      <button type="submit" className="hero-search-submit focus-ring">
        Buscar
      </button>
    </form>
  );
}
