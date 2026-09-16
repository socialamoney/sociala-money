# SEO and link previews

SEO is configured from day one via the Next.js Metadata API.

## Files

- `app/layout.tsx` — `metadataBase`, icons, manifest, default title
- `lib/seo.ts` — shared builder for title, description, canonical, robots, Open Graph, Twitter
- `app/sitemap.ts` — public URLs only
- `app/robots.ts` — allow public pages, disallow app/auth/admin
- `app/manifest.ts` — PWA
- `public/og/default.png` — default 1200×630 share image

## Public vs private

Indexed: `/`, `/about`, `/help`, `/pricing`, and later public `/pay/[slug]` and `/shop/[slug]` when they represent real resources.

`noIndex` on auth and application routes.

## Payment links and shops

`generateMetadata` on `/pay/[slug]` and `/shop/[slug]` is ready for public fields only:

- title / name
- public description
- public image
- public amount, if the creator chose to show it

Never put balance, KYC, private profile data, internal ids or secrets in metadata.

## Locales

`lang="fr"` on `<html>`, `og:locale=fr_FR`.
