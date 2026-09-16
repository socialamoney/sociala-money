import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { hashIdempotencyPayload, verifyHmacSha256, webhookEventId } from "@/server/webhooks";

describe("webhook helpers", () => {
  it("accepts a valid HMAC signature", () => {
    const secret = "test-secret";
    const payload = "{\"id\":\"evt_1\"}";
    const signature = createHmac("sha256", secret).update(payload).digest("hex");
    expect(verifyHmacSha256(payload, signature, secret)).toBe(true);
  });

  it("rejects a tampered signature", () => {
    expect(verifyHmacSha256("{}", "00", "secret")).toBe(false);
  });

  it("namespaces provider event ids", () => {
    expect(webhookEventId("paystack", "abc")).toBe("paystack:abc");
  });

  it("hashes payloads stably", () => {
    expect(hashIdempotencyPayload("deposit", "{}")).toBe(hashIdempotencyPayload("deposit", "{}"));
  });
});
