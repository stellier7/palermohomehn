# Palermo Home

Sitio demo (pitch) para **Palermo Home**, inmobiliaria — renta y venta en Honduras. Stack Next.js + Tailwind (base Altair).

Palermo Home ≠ AirHome HN (estadías cortas en [airhomehn.com](https://airhomehn.com/)).

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy (Vercel)

La app vive en la **raíz del repo** (no en un subfolder). En Vercel:

1. Importá `stellier7/palermohomehn`
2. **Root Directory:** vacío / `.` (repository root)
3. Framework: Next.js
4. Variable opcional: `NEXT_PUBLIC_SITE_URL` = tu URL de producción

Detalle: `docs/DEPLOY-VERCEL.md`

## Cómo editar (un solo CONFIG)

| Qué | Dónde |
|-----|--------|
| Nombre, tagline, hero, copy, servicios, testimonios, galería, AirHome link | `src/content/site/config.ts` |
| Colores / tipografía | `src/app/globals.css` (`:root`) |
| Listados | `src/data/properties.json` + `homeFeaturedPropertySlugs` en config |
| Logo | `public/images/site/logo-palermo-home.png` |
| WhatsApp | `siteConfig.whatsapp.e164` y `ready: true` |

## Documentos

- `docs/AUDIT.md` — auditoría AirHome + base Altair
- `docs/OWNER-BRIEF-WHATSAPP.md` — cuestionario
- `docs/NEXT-IMPROVEMENTS.md` — mejoras post-pitch
