import { createHash, createHmac, timingSafeEqual } from "node:crypto";

/**
 * Webhook helpers. Incoming provider callbacks must:
 * 1. verify a signature
 * 2. be idempotent (same event id processed at most once)
 * 3. never trust payload amounts without a server-side re-check
 */

export function verifyHmacSha256(payload: string, signature: string, secret: string): boolean {
  const digest = createHmac("sha256", secret).update(payload).digest("hex");
  const a = Buffer.from(digest);
  const b = Buffer.from(signature);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function hashIdempotencyPayload(operation: string, payload: string): string {
  return createHash("sha256").update(`${operation}:${payload}`).digest("hex");
}

export function webhookEventId(provider: string, providerEventId: string): string {
  return `${provider}:${providerEventId}`;
}
