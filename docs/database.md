# Database

PostgreSQL on Supabase. Migrations live in `supabase/migrations/`.

## Current tables

### `profiles`

One row per Auth user. Created by a trigger on `auth.users`. Clients may read and update their own `display_name` only.

### `audit_logs`

Append-only trail of sensitive actions. No client policies — written with the service role after a permission check.

### `idempotency_keys`

`(user_id, operation, key)` uniqueness for financial operations. No client policies.

## Planned (not created yet)

Do not add these until the matching feature is implemented:

- wallets / balances
- ledger entries
- payment links
- shops / products / orders
- cards, vaults, crypto positions
- KYC records
- referrals / commissions

A ledger should be append-only. Never update a posted movement in place.

## Types

`types/database.ts` mirrors the public schema. Regenerate from Supabase (`supabase gen types`) once the remote project exists.
