import Link from "next/link";
import { Logo } from "@/components/brand/logo";

const FOOTER_LINKS = [
  { href: "/about", label: "À propos" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/help", label: "Aide" },
  { href: "/auth/login", label: "Connexion" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <Logo />
          <p className="text-sm leading-relaxed text-muted">
            Plateforme financière web en construction. Les services d'argent seront activés
            progressivement, après validation serveur, sécurité et conformité.
          </p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-muted hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} Sociala Money. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
