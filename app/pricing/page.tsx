import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/public-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tarifs",
  description:
    "Les tarifs de Sociala Money seront publiés lorsque les services financiers seront ouverts. Aucun frais n'est facturé à ce stade.",
  path: "/pricing",
});

const ITEMS = [
  {
    title: "Compte",
    text: "La création de compte sera gratuite. Les services d'argent pourront porter des frais distincts, toujours recalculés côté serveur.",
  },
  {
    title: "Mouvements",
    text: "Dépôts, retraits, envois et transferts internationaux : la grille tarifaire n'est pas encore active.",
  },
  {
    title: "Paiements et boutique",
    text: "Les liens de paiement et les boutiques publiques auront des conditions propres, publiées avant ouverture.",
  },
];

export default function PricingPage() {
  return (
    <PublicShell>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <p className="text-sm font-medium text-primary">Tarifs</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Des frais transparents, plus tard.</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Aucun tarif n'est en vigueur aujourd'hui. Cette page existe pour le SEO, le
          parcours public, et pour accueillir la grille officielle le moment venu.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ITEMS.map((item) => (
            <Card key={item.title} className="rounded-xl">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </PublicShell>
  );
}
