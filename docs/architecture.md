# Architecture

Sociala Money is a Next.js App Router application. The first milestone is a clean, extensible foundation — not a simulated wallet.

## Layout

```
app/            Routes and pages (App Router)
components/     Reusable UI and layout
server/         Server-only business rules
lib/            Utilities and integrations
types/          Shared TypeScript types
supabase/       Migrations and Edge Functions
public/         Static assets
tests/          Unit, integration, end-to-end
docs/           Project documentation
```

## Rendering

- Server Components by default.
- Client Components only for interactivity (forms, menus, toasts, preview bridge).
- Sensitive work stays in `server/`, Route Handlers, or Supabase Edge Functions.

## Data flow

1. The browser collects input.
2. Zod validates the payload on the server.
3. Permissions, limits, fees and amounts are recomputed server-side.
4. Money-movement operations must be idempotent.
5. Sensitive actions write an audit log.

The frontend never decides whether a financial operation is allowed.

## Auth and database

Supabase Auth + PostgreSQL. Clients:

- Browser: `NEXT_PUBLIC_SUPABASE_ANON_KEY` via `@supabase/ssr`
- Server (user session): cookie-bound client
- Server (admin): `SUPABASE_SERVICE_ROLE_KEY` — never sent to the browser

When env vars are missing, the UI stays honest: forms are disabled, public pages still render, and no fake session is created.

## Future modules

Wallet, deposits, withdrawals, transfers, payment links, KYC, cards, vaults, crypto, airtime, eSIM, virtual numbers, shops, referrals and admin all have routes today. Their business logic will land behind the same server rules.
