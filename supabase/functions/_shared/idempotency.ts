export function readIdempotencyKey(request: Request): string {
  const key = request.headers.get("Idempotency-Key")?.trim();
  if (!key || key.length < 8 || key.length > 128) {
    throw new Error("VALIDATION_ERROR");
  }
  return key;
}
