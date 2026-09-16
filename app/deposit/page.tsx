import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dépôt",
  description: "Alimenter le portefeuille. Le montant, les frais et les limites seront validés exclusivement côté serveur.",
  path: "/deposit",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Dépôt"
      description="Alimenter le portefeuille. Le montant, les frais et les limites seront validés exclusivement côté serveur."
    />
  );
}
