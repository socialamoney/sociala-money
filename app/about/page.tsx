import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/public-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "Sociala Money est une plateforme fintech web conçue pour gérer un portefeuille numérique et des services financiers, avec une architecture sécurisée et évolutive.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PublicShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm font-medium text-primary">À propos</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Une fintech construite proprement, dès le premier jour.
        </h1>
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
          <p>
            Sociala Money est une application web de services financiers et digitaux. L'objectif
            n'est pas d'empiler des écrans : c'est de poser une base assez solide pour
            ajouter, ensuite, un portefeuille, des paiements, des transferts et des services annexes
            sans refaire l'architecture.
          </p>
          <p>
            Cette première étape livre le produit en tant que fondation : identité, design system,
            routes, SEO, aperçus de partage, PWA, Supabase, tests et CI. Les opérations financières
            ne sont pas encore ouvertes. Aucun solde, aucune transaction et aucune commission ne sont
            présentés comme réels.
          </p>
          <p>
            Le domaine principal prévu est{" "}
            <strong>money.socialaagency.com</strong>. L'interface est mobile-first, claire et
            professionnelle — adaptée à une application qui manipule de l'argent.
          </p>
        </div>
      </article>
    </PublicShell>
  );
}
