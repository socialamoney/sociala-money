# Deployment

## Git

- `main` — production
- `development` — integration
- `feature/...` and `fix/...` — work branches

Never push secrets. Use `.env.local` locally and the host's secret store in production.

## CI

`.github/workflows/ci.yml` runs on pull requests and on `main` / `development`:

install → lint → typecheck → tests → build

Preview and production workflows exist as a structure (`workflow_dispatch`) until Vercel secrets are added.

## Hosting

Recommended: Vercel + Supabase.

1. Create a Supabase project.
2. Apply `supabase/migrations/`.
3. Set env vars (see `.env.example`).
4. Point `NEXT_PUBLIC_SITE_URL` to `https://money.socialaagency.com`.
5. Configure Auth redirect URLs.
6. Deploy the Next.js app.
7. Attach the custom domain.

## Local

```sh
cp .env.example .env.local
npm install
npm run dev
```

The app listens on `0.0.0.0:8080` in this environment.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```
