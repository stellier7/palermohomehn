"use client";

import { useRouter } from "next/navigation";
import { useId, type FormEvent } from "react";

export function HeroCatalogSearch() {
  const router = useRouter();
  const fieldId = useId();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = String(new FormData(event.currentTarget).get("q") ?? "").trim();
    router.push(query ? `/properties?q=${encodeURIComponent(query)}` : "/properties");
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
      <label className="hero-search-field" htmlFor={fieldId}>
        <span className="sr-only">Buscar</span>
        <input
          id={fieldId}
          type="search"
          name="q"
          placeholder="Casa, zona, ciudad…"
          autoComplete="off"
          className="hero-search-control"
        />
      </label>
      <button type="submit" className="hero-search-submit focus-ring">
        Buscar
      </button>
    </form>
  );
}
