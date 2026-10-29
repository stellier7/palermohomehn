# Palermo — demo inmobiliario

Sitio demo (pitch) para **Palermo**, bienes raíces / compraventa. Stack copiado de [altair-real-estate](https://github.com/stellier7/altair-real-estate) (Next.js + Tailwind). El original no se modificó.

Palermo ≠ AirHome HN (rentas cortas en [airhomehn.com](https://airhomehn.com/)).

## Desarrollo

```bash
cd palermo
npm install
npm run dev
```

Abre http://localhost:3000

## Cómo re-skinear (un solo CONFIG)

| Qué | Dónde |
|-----|--------|
| Nombre, tagline, hero, copy, servicios, testimonios, galería, AirHome link | `src/content/site/config.ts` |
| Colores / tipografía tokens | `src/app/globals.css` (`:root`) |
| Listados (3–6 fichas) | `src/data/properties.json` + `homeFeaturedPropertySlugs` en config |
| Logo | `public/images/site/logo-mark.svg` (o PNG + rutas en config) |
| Hero / fotos | URLs en config + `properties.json`, o archivos en `public/images/` |
| WhatsApp | `siteConfig.whatsapp.e164` (solo dígitos) y `ready: true` |

**No inventar** precios, direcciones, testimonios ni teléfonos. Dejar `[PENDIENTE]` hasta que el dueño responda el brief en `docs/OWNER-BRIEF-WHATSAPP.md`.

## Documentos

- `docs/AUDIT.md` — auditoría AirHome + base Altair
- `docs/OWNER-BRIEF-WHATSAPP.md` — cuestionario para pegar en WhatsApp
- `docs/NEXT-IMPROVEMENTS.md` — qué mejorar después del pitch

## Notas técnicas

- Español por defecto (`lang="es"`); bloque English en Nosotros vía config.
- Datos públicos desde JSON (no requiere Supabase). Panel `/admin` opcional.
- Imágenes demo: Unsplash (fácil de sustituir).
