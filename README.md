# Sociala Money

Plateforme financière web pour gérer un portefeuille numérique et des services financiers et digitaux.

**Domaine :** [https://money.socialaagency.com](https://money.socialaagency.com)

Cette première version livre les fondations : architecture, design system, routes, SEO, aperçus de partage, PWA, Supabase, tests et CI. Les opérations financières ne sont **pas** encore ouvertes. Aucun solde ni aucune transaction fictive n'est présenté comme réel.

## Stack

- Next.js (App Router)
- React
- TypeScript (strict)
- Tailwind CSS
- Supabase + PostgreSQL
- Supabase Edge Functions
- Zod
- ESLint + Prettier
- GitHub Actions

## Installation

```sh
git clone https://github.com/socialamoney/sociala-money.git
cd sociala-money
npm install
cp .env.example .env.local
```

Renseignez au minimum :

```
NEXT_PUBLIC_SITE_URL=http://localhost:8080
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Sans clés Supabase, le site public et les écrans d'application s'affichent, mais l'authentification reste explicitement désactivée.

## Développement local

```sh
npm run dev
```

## Tests, lint, build

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Les tests end-to-end (`npm run test:e2e`) attendent une instance déjà lancée.

## Supabase

Migrations : `supabase/migrations/`  
Edge Functions : `supabase/functions/`

La clé `service_role` ne doit jamais être exposée au navigateur.

## Déploiement

Vercel + projet Supabase. Voir [docs/deployment.md](docs/deployment.md).

## Architecture

Voir [docs/architecture.md](docs/architecture.md).

Règle : le frontend collecte, le serveur décide.

## Sécurité

Voir [docs/security.md](docs/security.md).

Montants, frais, limites, permissions, webhooks et idempotence sont des responsabilités serveur.

## SEO

Voir [docs/seo.md](docs/seo.md).

Métadonnées Next.js, sitemap, robots, Open Graph, Twitter Cards, manifest PWA et image `/og/default.png`.

## Git

- `main` — production
- `development` — intégration
- `feature/...`, `fix/...` — travail

Ne jamais pousser de secrets.

## Licence

Propriétaire — Sociala Money.
