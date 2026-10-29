# Deploy on Vercel

## Connect the repo

1. [Vercel](https://vercel.com) → **Add New** → **Project** → import **`stellier7/palermohomehn`**.
2. **Production branch:** `main`
3. **Root directory:** leave empty (app is at the repository root)
4. **Framework preset:** Next.js (auto-detected)

If an older project was created when the app lived under `palermo/`, open **Settings → General → Root Directory**, clear it (or set to `.`), save, then **Redeploy**.

## Environment variable

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL, e.g. `https://your-project.vercel.app` |

Redeploy after adding this so sitemap and Open Graph URLs are correct.

## Images / optimization quota

`next.config.ts` sets `images.unoptimized: true` so Vercel does not count Image Optimization transformations (Hobby limit).

## Git submodules

If a deployment fails while cloning submodules:

- Project **Settings** → **Git** → turn off **Include Git Submodules**, then redeploy.

## Open the correct URL

Use the **project** deployment URL from the Vercel dashboard (Deployments → latest → Visit), for example:

`https://palermohomehn-xxxx.vercel.app`

A bare team URL like `https://….vercel.app` with no project hostname is **not** your app. Vercel’s black **“This page doesn’t exist”** / `404 NOT_FOUND` usually means:

1. Wrong URL (team page, not the project deployment), or
2. Root Directory was set to a folder that no longer exists (e.g. `palermo`), or
3. The latest deployment failed — check Build Logs.

## Check a failed deploy

1. **Deployments** → latest row → must be **Ready** (not Error).
2. If **Error**, open **Build Logs**.
3. **Redeploy** the latest `main` commit after fixes.

## Local check before pushing

```bash
npm install
npm run build
npm run start
```

Visit `http://localhost:3000` — the home page should load.
