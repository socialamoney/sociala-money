import "server-only";

import { getPublicSupabaseConfig } from "@/lib/env";

/**
 * Server-only secrets. Never import this module from a Client Component.
 */
export function getSupabaseServiceRoleKey(): string | null {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || null;
}

export function assertNoServiceRoleOnClient(): void {
  // Documented invariant: service_role must never ship to the browser.
  if (typeof window !== "undefined") {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY must never be read in the browser.");
  }
}

export function getServerSupabaseConfig(): {
  url: string;
  anonKey: string;
  serviceRoleKey: string | null;
} | null {
  const publicConfig = getPublicSupabaseConfig();
  if (!publicConfig) return null;
  return {
    ...publicConfig,
    serviceRoleKey: getSupabaseServiceRoleKey(),
  };
}
