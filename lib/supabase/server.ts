import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getPublicSupabaseConfig } from "@/lib/env";
import { getSupabaseServiceRoleKey } from "@/lib/env.server";
import type { Database } from "@/types/database";

export async function createServerSupabaseClient() {
  const config = getPublicSupabaseConfig();
  if (!config) return null;

  const cookieStore = await cookies();

  return createServerClient<Database>(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Called from a Server Component where cookies are read-only.
          // Middleware is responsible for writing refreshed session cookies.
        }
      },
    },
  });
}

/**
 * Admin client. Server-only. Never expose this to the browser.
 * Returns null when the service role key is not configured.
 */
export function createServiceRoleClient() {
  const config = getPublicSupabaseConfig();
  const serviceRoleKey = getSupabaseServiceRoleKey();
  if (!config || !serviceRoleKey) return null;

  return createServerClient<Database>(config.url, serviceRoleKey, {
    cookies: {
      getAll() {
        return [];
      },
      setAll() {
        /* service role does not use user cookies */
      },
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
