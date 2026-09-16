import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { RegisterForm } from "@/components/auth/register-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Créer un compte",
  description: "Créez un compte Sociala Money.",
  path: "/auth/register",
  noIndex: true,
});

export default function RegisterPage() {
  return (
    <AuthCard
      title="Créer un compte"
      description="Un e-mail et un mot de passe suffisent pour commencer."
      footer={
        <>
          Déjà inscrit ?{" "}
          <Link href="/auth/login" className="font-medium text-primary hover:underline">
            Connexion
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthCard>
  );
}
