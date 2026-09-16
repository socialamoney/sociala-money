export const SITE_NAME = "Sociala Money";
export const SITE_SHORT_NAME = "Sociala";
export const SITE_DOMAIN = "money.socialaagency.com";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? `https://${SITE_DOMAIN}`;

export const SITE_DESCRIPTION =
  "Sociala Money est une plateforme financière web pour gérer un portefeuille numérique, envoyer de l'argent et accéder à des services financiers et digitaux.";

export const SITE_TAGLINE = "Le portefeuille numérique, simplement.";

export const BRAND = {
  primary: "#1A73E8",
  primaryDark: "#1557B0",
  green: "#00C853",
  white: "#FFFFFF",
} as const;

export const LOCALE = "fr_FR";
export const LANGUAGE = "fr";

export const PUBLIC_NAV = [
  { href: "/about", label: "À propos" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/help", label: "Aide" },
] as const;

export const APP_NAV = [
  { href: "/dashboard", label: "Tableau de bord", group: "Compte" },
  { href: "/transactions", label: "Transactions", group: "Compte" },
  { href: "/deposit", label: "Dépôt", group: "Argent" },
  { href: "/withdraw", label: "Retrait", group: "Argent" },
  { href: "/send", label: "Envoi", group: "Argent" },
  { href: "/transfer", label: "Transfert", group: "Argent" },
  { href: "/international-transfer", label: "International", group: "Argent" },
  { href: "/payment-links", label: "Liens de paiement", group: "Paiements" },
  { href: "/cards", label: "Cartes", group: "Services" },
  { href: "/coffres", label: "Coffres", group: "Services" },
  { href: "/crypto", label: "Crypto", group: "Services" },
  { href: "/airtime", label: "Crédit téléphone", group: "Services" },
  { href: "/esim", label: "eSIM", group: "Services" },
  { href: "/virtual-numbers", label: "Numéros virtuels", group: "Services" },
  { href: "/referral", label: "Parrainage", group: "Compte" },
  { href: "/profile", label: "Profil", group: "Compte" },
] as const;

export const PROTECTED_PATH_PREFIXES = [
  "/dashboard",
  "/deposit",
  "/withdraw",
  "/send",
  "/transfer",
  "/international-transfer",
  "/payment-links",
  "/transactions",
  "/cards",
  "/coffres",
  "/crypto",
  "/airtime",
  "/esim",
  "/virtual-numbers",
  "/referral",
  "/profile",
  "/admin",
] as const;

export const AUTH_PATH_PREFIXES = [
  "/auth/login",
  "/auth/register",
  "/auth/verify-email",
  "/auth/forgot-password",
  "/auth/reset-password",
] as const;
