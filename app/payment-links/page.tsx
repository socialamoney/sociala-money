import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Liens de paiement",
  description: "Créer et suivre des liens publics /pay/[slug]. Les métadonnées n'exposeront jamais de données privées.",
  path: "/payment-links",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Liens de paiement"
      description="Créer et suivre des liens publics /pay/[slug]. Les métadonnées n'exposeront jamais de données privées."
    />
  );
}
