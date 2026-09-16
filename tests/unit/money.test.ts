import { describe, expect, it } from "vitest";
import {
  assertFeeMatchesQuote,
  assertWithinLimit,
  moneyAmountSchema,
  parseMoneyAmount,
} from "@/server/money";

describe("moneyAmountSchema", () => {
  it("accepts integer minor units", () => {
    expect(parseMoneyAmount({ amountMinor: 1500, currency: "XAF" })).toEqual({
      amountMinor: 1500,
      currency: "XAF",
    });
  });

  it("rejects floating-point amounts", () => {
    const result = moneyAmountSchema.safeParse({ amountMinor: 10.5, currency: "XAF" });
    expect(result.success).toBe(false);
  });

  it("rejects zero and negative amounts", () => {
    expect(moneyAmountSchema.safeParse({ amountMinor: 0, currency: "XAF" }).success).toBe(false);
    expect(moneyAmountSchema.safeParse({ amountMinor: -1, currency: "XAF" }).success).toBe(false);
  });

  it("rejects lowercase currency codes", () => {
    expect(moneyAmountSchema.safeParse({ amountMinor: 100, currency: "xaf" }).success).toBe(false);
  });
});

describe("fee and limit guards", () => {
  it("rejects a client fee that does not match the server quote", () => {
    expect(() =>
      assertFeeMatchesQuote(
        { amountMinor: 200, currency: "XAF" },
        { amountMinor: 150, currency: "XAF" },
      ),
    ).toThrow("FEE_MISMATCH");
  });

  it("rejects amounts above the server limit", () => {
    expect(() => assertWithinLimit({ amountMinor: 5001, currency: "XAF" }, 5000)).toThrow(
      "AMOUNT_ABOVE_LIMIT",
    );
  });
});
