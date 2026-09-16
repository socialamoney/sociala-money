import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Créer un lien de paiement",
  description: "Formulaire de création d'un lien public. Non opérationnel tant que le backend n'est pas branché.",
  path: "/payment-links/create",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Créer un lien de paiement"
      description="Le formulaire collectera un titre, une description publique, une image optionnelle et un montant s'il doit être visible. Les données privées resteront hors des métadonnées de partage."
    />
  );
}
