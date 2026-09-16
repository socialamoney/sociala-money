/**
 * Public-safe shapes for shareable pages.
 * These must never include balances, KYC, secrets, or private profile fields.
 */

export type PublicPaymentLink = {
  slug: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  amountMinor: number | null;
  currency: string | null;
  creatorDisplayName: string | null;
};

export type PublicShop = {
  slug: string;
  name: string;
  description: string | null;
  logoUrl: string | null;
  bannerUrl: string | null;
  ogImageUrl: string | null;
};
