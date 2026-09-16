export const PUBLIC_ROUTES = ["/", "/about", "/help", "/pricing"] as const;

export const AUTH_ROUTES = [
  "/auth/login",
  "/auth/register",
  "/auth/verify-email",
  "/auth/forgot-password",
  "/auth/reset-password",
] as const;

export const APP_ROUTES = [
  "/dashboard",
  "/deposit",
  "/withdraw",
  "/send",
  "/transfer",
  "/international-transfer",
  "/payment-links",
  "/payment-links/create",
  "/transactions",
  "/cards",
  "/coffres",
  "/crypto",
  "/airtime",
  "/esim",
  "/virtual-numbers",
  "/referral",
  "/profile",
] as const;

export const DYNAMIC_PUBLIC_ROUTES = ["/pay/[slug]", "/shop/[slug]"] as const;

export const ADMIN_ROUTES = ["/admin"] as const;

export const ALL_REGISTERED_PATHS = [
  ...PUBLIC_ROUTES,
  ...AUTH_ROUTES,
  ...APP_ROUTES,
  "/pay/:slug",
  "/shop/:slug",
  ...ADMIN_ROUTES,
] as const;
