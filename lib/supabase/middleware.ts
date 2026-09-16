import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getPublicSupabaseConfig } from "@/lib/env";
import type { Database } from "@/types/database";
import type { User } from "@supabase/supabase-js";

export type SessionResult = {
  response: NextResponse;
  user: User | null;
  configured: boolean;
};

export async function updateSession(request: NextRequest): Promise<SessionResult> {
  const config = getPublicSupabaseConfig();
  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  if (!config) {
    return { response, user: null, configured: false };
  }

  const supabase = createServerClient<Database>(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value, options } of cookiesToSet) {
          request.cookies.set(name, value);
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response, user, configured: true };
}
