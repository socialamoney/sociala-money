import type { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { EmptyState } from "@/components/ui/empty-state";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Administration",
  description: "Espace d'administration Sociala Money.",
  path: "/admin",
  noIndex: true,
});

export default function AdminPage() {
  return (
    <AppShell title="Administration">
      <div className="flex flex-col gap-4">
        <Alert variant="danger">
          <AlertTitle>Accès restreint</AlertTitle>
          <AlertDescription>
            Les outils d'administration seront protégés côté serveur par un rôle admin. Rien
            n'est opérable ici pour le moment.
          </AlertDescription>
        </Alert>
        <EmptyState
          title="Console d'administration"
          description="Utilisateurs, KYC, opérations sensibles et journaux d'audit seront ajoutés ici. Aucune donnée interne n'est exposée dans cette version."
        />
      </div>
    </AppShell>
  );
}
