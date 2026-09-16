import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/public-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Aide",
  description:
    "Centre d'aide Sociala Money : comptes, sécurité, et services à venir. Les opérations financières ne sont pas encore ouvertes.",
  path: "/help",
});

const TOPICS = [
  {
    title: "Compte et connexion",
    text: "L'authentification passera par Supabase. Tant que le projet n'est pas configuré, les formulaires restent visibles mais inactifs.",
  },
  {
    title: "Sécurité",
    text: "Ne communiquez jamais un mot de passe, un code, ou une clé API. Sociala Money ne demandera jamais la clé service_role.",
  },
  {
    title: "Services d'argent",
    text: "Dépôt, retrait, envoi et transfert seront documentés ici avant leur ouverture, avec les limites et les frais officiels.",
  },
  {
    title: "Liens de paiement et boutiques",
    text: "Les pages publiques /pay et /shop n'afficheront que des informations destinées à l'être. Pas de solde, pas de KYC.",
  },
];

export default function HelpPage() {
  return (
    <PublicShell>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-sm font-medium text-primary">Aide</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Questions fréquentes</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Sociala Money n'est pas encore un service financier ouvert. Ces réponses décrivent le
          produit en cours de construction.
        </p>
        <div className="mt-10 grid gap-4">
          {TOPICS.map((topic) => (
            <Card key={topic.title} className="rounded-xl">
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </PublicShell>
  );
}
