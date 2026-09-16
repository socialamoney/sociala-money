# Security

Sociala Money is a financial product. Treat every money-movement request as hostile until the server proves otherwise.

## Rules

- Secrets never ship to the browser. `SUPABASE_SERVICE_ROLE_KEY` is server-only.
- Amounts, fees and limits are validated with Zod on the server (`server/money.ts`).
- Permissions are checked on the server (`server/permissions.ts`).
- RLS is enabled on `profiles`, `audit_logs` and `idempotency_keys`.
- Webhooks must verify HMAC signatures and be idempotent (`server/webhooks.ts`).
- Sensitive operations record an audit event (`server/audit.ts`).
- Client-facing errors never include SQL, stack traces or provider payloads.
- Auth routes and app routes are gated in `middleware.ts` once Supabase is configured.

## Headers

`next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy`. Production hosting should add a strict Content-Security-Policy after the first deploy.

`X-Frame-Options` is intentionally omitted so the app can be previewed in an embed. Add `Content-Security-Policy: frame-ancestors` on the production domain.

## Rate limiting

`server/rate-limit.ts` is an in-memory starting point. Replace it with Redis (or equivalent) before exposing public money APIs.

## Checklist before opening a financial feature

1. Server-side schema for the request.
2. Recomputed fee and limit.
3. Idempotency key required.
4. RLS / permission check.
5. Audit log.
6. Tests in `tests/`.
7. Webhook signature verification if a provider is involved.
