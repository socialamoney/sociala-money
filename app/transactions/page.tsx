import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Transactions",
  description: "Historique des mouvements. La liste restera vide tant que le portefeuille n'est pas ouvert.",
  path: "/transactions",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Transactions"
      description="Historique des mouvements. La liste restera vide tant que le portefeuille n'est pas ouvert."
    />
  );
}
