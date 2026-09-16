# Edge Functions

Place future functions here, one folder per operation:

- `deposits`
- `withdrawals`
- `payments`
- `transfers`
- `webhooks`
- providers / services externes

Shared helpers live in `_shared/`.

Rules:

- Authenticate the caller on the server.
- Recompute amounts, fees and limits. Never trust the client.
- Require an `Idempotency-Key` for money-movement operations.
- Verify webhook signatures and store provider event ids to prevent double processing.
- Return `501` until a function is actually implemented. Do not fake a success.
