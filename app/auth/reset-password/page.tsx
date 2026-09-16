import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/auth-card";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nouveau mot de passe",
  description: "Définissez un nouveau mot de passe Sociala Money.",
  path: "/auth/reset-password",
  noIndex: true,
});

export default function ResetPasswordPage() {
  return (
    <AuthCard
      title="Nouveau mot de passe"
      description="Choisissez un mot de passe d'au moins 10 caractères. La session de réinitialisation est gérée par Supabase."
    >
      <ResetPasswordForm />
    </AuthCard>
  );
}
