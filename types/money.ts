/** ISO 4217 currency code. */
export type CurrencyCode = string;

/**
 * Monetary amount in integer minor units (centimes, cents).
 * Never use floating-point numbers for money.
 */
export type MoneyAmount = {
  amountMinor: number;
  currency: CurrencyCode;
};
