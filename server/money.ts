import { z } from "zod";
import type { MoneyAmount } from "@/types/money";

/**
 * Server-side money primitives.
 * Financial operations must validate amounts, fees and limits here —
 * never trust a value computed only by the frontend.
 */

export const currencyCodeSchema = z
  .string()
  .trim()
  .length(3)
  .regex(/^[A-Z]{3}$/, "Currency must be a 3-letter ISO code");

export const moneyAmountSchema = z.object({
  amountMinor: z
    .number({ error: "Amount is required" })
    .int("Amount must be an integer number of minor units")
    .positive("Amount must be greater than zero"),
  currency: currencyCodeSchema,
});

export const optionalPublicAmountSchema = moneyAmountSchema.nullable();

export type ParsedMoneyAmount = z.infer<typeof moneyAmountSchema>;

export function parseMoneyAmount(input: unknown): ParsedMoneyAmount {
  return moneyAmountSchema.parse(input);
}

export function isSameMoney(a: MoneyAmount, b: MoneyAmount): boolean {
  return a.currency === b.currency && a.amountMinor === b.amountMinor;
}

/**
 * Fees must be recalculated and compared on the server.
 * A client-submitted fee that does not match the server quote is rejected.
 */
export function assertFeeMatchesQuote(submittedFee: MoneyAmount, quotedFee: MoneyAmount): void {
  if (!isSameMoney(submittedFee, quotedFee)) {
    throw new Error("FEE_MISMATCH");
  }
}

export function assertWithinLimit(amount: MoneyAmount, maxMinor: number): void {
  if (amount.amountMinor > maxMinor) {
    throw new Error("AMOUNT_ABOVE_LIMIT");
  }
}
