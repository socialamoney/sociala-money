import "server-only";

import type { PublicPaymentLink, PublicShop } from "@/types/public";

/**
 * Public read models for shareable pages.
 * Only fields intended for Open Graph / public UI may be returned.
 * Return null when the resource is missing — never invent a payment or a shop.
 */
export async function getPublicPaymentLink(_slug: string): Promise<PublicPaymentLink | null> {
  return null;
}

export async function getPublicShop(_slug: string): Promise<PublicShop | null> {
  return null;
}
