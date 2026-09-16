export type MoneyAmount = {
  amountMinor: number;
  currency: string;
};

export function parseMoneyAmount(input: unknown): MoneyAmount {
  if (!input || typeof input !== "object") {
    throw new Error("VALIDATION_ERROR");
  }
  const value = input as { amountMinor?: unknown; currency?: unknown };
  if (typeof value.amountMinor !== "number" || !Number.isInteger(value.amountMinor) || value.amountMinor <= 0) {
    throw new Error("VALIDATION_ERROR");
  }
  if (typeof value.currency !== "string" || !/^[A-Z]{3}$/.test(value.currency)) {
    throw new Error("VALIDATION_ERROR");
  }
  return { amountMinor: value.amountMinor, currency: value.currency };
}
