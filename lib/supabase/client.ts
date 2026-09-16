"use client";

import { createBrowserClient } from "@supabase/ssr";
import { getPublicSupabaseConfig } from "@/lib/env";
import type { Database } from "@/types/database";

export function createBrowserSupabaseClient() {
  const config = getPublicSupabaseConfig();
  if (!config) return null;
  return createBrowserClient<Database>(config.url, config.anonKey);
}
