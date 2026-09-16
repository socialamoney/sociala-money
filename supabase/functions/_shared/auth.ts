import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export function getUserClient(request: Request) {
  const url = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!url || !anonKey) {
    throw new Error("NOT_CONFIGURED");
  }
  const authHeader = request.headers.get("Authorization") ?? "";
  return createClient(url, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
}

export function getServiceClient() {
  const url = Deno.env.get("SUPABASE_URL");
  const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceRole) {
    throw new Error("NOT_CONFIGURED");
  }
  return createClient(url, serviceRole);
}
