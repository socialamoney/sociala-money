import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { EmptyState } from "@/components/ui/empty-state";

export function ModulePlaceholder({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <AppShell title={title}>
      <div className="flex flex-col gap-4">
        <Alert>
          <AlertTitle>Service en préparation</AlertTitle>
          <AlertDescription>
            Cette page est une fondation de navigation. Aucune opération financière n'est
            active et aucun solde n'est affiché.
          </AlertDescription>
        </Alert>
        <EmptyState icon={icon} title={title} description={description} />
      </div>
    </AppShell>
  );
}
