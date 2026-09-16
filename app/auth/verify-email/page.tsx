import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vérifier l'e-mail",
  description: "Vérifiez votre adresse e-mail Sociala Money.",
  path: "/auth/verify-email",
  noIndex: true,
});

export default function VerifyEmailPage() {
  return (
    <AuthCard
      title="Vérifiez votre e-mail"
      description="Si un compte vient d'être créé, un message de confirmation sera envoyé par Supabase une fois le projet configuré."
    >
      <p className="text-sm leading-relaxed text-muted">
        Ouvrez le lien reçu pour activer l'adresse. Cette page n'invente pas de statut de
        vérification.
      </p>
      <Button asChild className="mt-6 w-full">
        <Link href="/auth/login">Retour à la connexion</Link>
      </Button>
    </AuthCard>
  );
}
