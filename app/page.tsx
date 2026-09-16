import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Lock,
  Send,
  ShieldCheck,
  Smartphone,
  Store,
  Wallet,
} from "lucide-react";
import { PublicShell } from "@/components/layout/public-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const PILLARS = [
  {
    icon: Wallet,
    title: "Portefeuille numérique",
    text: "Une base pour consulter un solde, l'historique et les mouvements — lorsque le service sera ouvert.",
  },
  {
    icon: Send,
    title: "Paiements et transferts",
    text: "Dépôts, retraits, envois et transferts internationaux conçus pour être validés côté serveur.",
  },
  {
    icon: Store,
    title: "Liens et boutiques",
    text: "Des pages publiques shareables, avec des aperçus de liens professionnels, sans exposer de données privées.",
  },
  {
    icon: Smartphone,
    title: "Services digitaux",
    text: "Cartes, coffres, crypto, crédit téléphone, eSIM et numéros virtuels — à activer progressivement.",
  },
];

export default function HomePage() {
  return (
    <PublicShell>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <Badge variant="primary">Plateforme en construction</Badge>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Un portefeuille numérique pensé pour durer.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Sociala Money pose les fondations d'une application financière web moderne :
              identité claire, architecture sécurisée, parcours mobile-first. Les opérations
              d'argent seront ajoutées progressivement — jamais simulées.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/auth/register">
                  Créer un compte
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/about">En savoir plus</Link>
              </Button>
            </div>
          </div>
          <Card className="rounded-xl p-0">
            <CardHeader className="p-6 pb-3">
              <CardTitle>Ce que cette version contient</CardTitle>
              <CardDescription>
                Une base exploitable, pas un démonstrateur financier.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 p-6 pt-0">
              {[
                "Architecture Next.js, TypeScript strict, Supabase",
                "Parcours public, authentification et application",
                "SEO, aperçus de partage, PWA",
                "Règles de sécurité : montants, frais et droits côté serveur",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-surface px-4 py-3">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Produit</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Une plateforme, plusieurs services</h2>
          <p className="mt-3 text-muted">
            Les modules existent déjà comme routes. Leur logique métier sera branchée ensuite, avec
            validation, audit et idempotence.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PILLARS.map((item) => (
            <Card key={item.title} className="rounded-xl">
              <CardHeader>
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <CardTitle className="mt-3">{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <Landmark className="size-5 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">Sécurité d'abord</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Les secrets restent côté serveur. La clé service_role Supabase n'est jamais envoyée
              au navigateur. Un montant, des frais ou une limite calculés uniquement dans
              l'interface ne suffisent pas à autoriser une opération.
            </p>
          </div>
          <div>
            <Lock className="size-5 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">Partage sans fuite</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Les pages publiques <code className="rounded bg-background px-1.5 py-0.5 text-xs">/pay</code>{" "}
              et <code className="rounded bg-background px-1.5 py-0.5 text-xs">/shop</code> sont
              préparées pour des métadonnées dynamiques. Solde, KYC et données internes n'y
              figureront jamais.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Card className="rounded-xl bg-primary px-6 py-10 text-primary-foreground sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Prêt pour la suite</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/90">
            Créez un compte lorsque Supabase sera configuré, ou parcourez le site et l'espace
            applicatif pour voir la structure des parcours.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary" asChild>
              <Link href="/auth/register">Créer un compte</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-dark hover:text-primary-foreground"
              asChild
            >
              <Link href="/dashboard">Voir l'espace applicatif</Link>
            </Button>
          </div>
        </Card>
      </section>
    </PublicShell>
  );
}
