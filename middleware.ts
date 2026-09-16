import { NextResponse, type NextRequest } from "next/server";
import { AUTH_PATH_PREFIXES, PROTECTED_PATH_PREFIXES } from "@/lib/constants";
import { updateSession } from "@/lib/supabase/middleware";

function matchesPrefix(pathname: string, prefixes: readonly string[]): boolean {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export async function middleware(request: NextRequest) {
  const { response, user, configured } = await updateSession(request);
  const { pathname } = request.nextUrl;

  if (!configured) {
    return response;
  }

  if (matchesPrefix(pathname, PROTECTED_PATH_PREFIXES) && !user) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (matchesPrefix(pathname, AUTH_PATH_PREFIXES) && user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons/|images/|og/|manifest.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};
