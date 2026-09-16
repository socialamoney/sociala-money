import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/login-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Connexion",
  description: "Connectez-vous à Sociala Money.",
  path: "/auth/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <AuthCard
      title="Connexion"
      description="Accédez à votre espace Sociala Money."
      footer={
        <>
          Pas encore de compte ?{" "}
          <Link href="/auth/register" className="font-medium text-primary hover:underline">
            Créer un compte
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}
