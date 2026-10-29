# Palermo demo — Phase 1 audit

## A. airhomehn.com

| # | Issue | Fix | Impact |
|---|--------|-----|--------|
| 1 | Hero is a catalog headline + emoji/stat strip, not a brand-led first viewport | Lead with **Palermo** as hero-level brand, one headline, one sentence, one CTA group, full-bleed image — no stats in the first screen | High |
| 2 | Visual system feels utility/catalog (Poppins, red `#C8102E`, cream `#faf9f7`, Airbnb thumbnails) | Distinct premium palette + editorial display type; original photography, not Airbnb CDN cards | High |
| 3 | Page is one long filterable inventory (45 stays) — reads as a booking board, not a trusted firm | Curated 3–6 featured listings with detail pages; separate services/about/trust | High |
| 4 | No `<nav>` landmark; primary path is WhatsApp + Airbnb per card | Persistent header nav + sticky WhatsApp that opens a sales message (not booking dates) | High |
| 5 | Trust is Superhost / ratings / CAI — rental signals that don’t transfer to real-estate sales | Sold/closed highlights, process clarity, team bio, discreet sister-brand note (AirHome) | High |
| 6 | Bilingual copy is dual-span on every line (dense, noisy on mobile) | Spanish default; optional English block or toggle, not interlinear ES+EN | Medium |
| 7 | Zero `aria-*`; skip-link / focus patterns not evident | Skip link, labeled nav, focus rings, lightbox keyboard/escape | Medium |
| 8 | Images hotlinked from Airbnb CDN (`im_w=720`); brand depends on third party | Self-host WebP/AVIF; hero ≥1920px wide | Medium |
| 9 | SEO solid for rentals (meta, OG, FAQ) but wrong intent for Palermo | Palermo titles/descriptions about compraventa / proyectos, not “amueblados / noche” | Medium |
| 10 | Sticky WA is good; contact identity is only `+504 8873-9025` / Instagram — fine for AirHome, must not be copied blindly onto Palermo | Collect Palermo-specific channels; keep AirHome WA only on AirHome | Low–Medium |
| 11 | Speed: ~108KB HTML + many remote JPEGs; first paint tied to CDN | Fewer above-fold images, `priority` on hero, lazy below fold | Medium |

**Reusable cues (not copy):** WhatsApp-first sales culture · Tegucigalpa / Morazán / embassy-area market literacy · bilingual audience · Instagram presence · clear city coverage.

**Do not reuse:** nightly prices, Airbnb CTAs, Superhost framing, rental FAQ, AirHome red/logo, verbatim copy or photos.

---

## B. Altair template → Palermo fit

| # | Issue | Fix | Impact |
|---|--------|-----|--------|
| 1 | Branding: “Bienes Raíces Altair”, purple palette, Altair logos, “Desde 2014…” | Full rebrand: Palermo name/tagline, new CSS tokens, placeholder logo, new copy | High |
| 2 | Catalog is 475 scraped Altair/Wasi listings with real prices | Replace with 3–6 **placeholder** listings; no invented prices — “Consultar precio” | High |
| 3 | Hero CTAs split Venta/Alquiler + catalog stats pills | Single sales-led CTA; remove inventable stats; optional alquiler only if owner confirms | High |
| 4 | About/services mention embassies, Torre Atlas, property management, rentals | Rewrite for Palermo scope (placeholders until owner answers) | High |
| 5 | Contact pulls Altair phone/email/WhatsApp/address from scrape | Placeholder contact fields only — never ship Altair or AirHome numbers as Palermo | High |
| 6 | `homeFeaturedPropertySlugs` + marquee assume huge catalog | Drive featured from CONFIG; drop marquee or feed from placeholders | Medium |
| 7 | Admin/Supabase/scrape scripts are Altair ops tooling | Keep optional for later; demo runs on JSON/CONFIG; update labels | Low |
| 8 | i18n is Spanish UI + English about block only (no full locale switch) | Keep ES default; English about/contact blurb via CONFIG | Low |
| 9 | Purple-led CSS overlaps “AI purple” cliché and differs from AirHome red without feeling *more* premium for Palermo | Forest/slate Mediterranean tokens + Fraunces/Source Sans | Medium |

---

## C. Prioritized build fixes (applied in demo)

1. **High** — Separate brands; placeholder contact; no fake prices/listings  
2. **High** — Premium hero + featured grid + detail routes + sticky WA  
3. **High** — Single CONFIG for re-skin  
4. **Medium** — Gallery, about/trust, services, map/location, testimonials placeholders  
5. **Medium** — Motion + a11y basics  
6. **Low** — Sister-brand AirHome strip (see D)

---

## D. Cross-link AirHome HN?

**Yes — lightly.** Same owner, different product. Confusion risk is high if AirHome appears in the hero or as a nav item.

**How:** Footer or end-of-page strip: “También del mismo equipo” / “Also by the same team” → link to https://airhomehn.com/ with one line: short-term furnished stays ≠ Palermo sales/brokerage. No shared logo lockup, no Airbnb embeds, no rental prices on Palermo.
