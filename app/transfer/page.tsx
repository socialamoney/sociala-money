import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Transfert",
  description: "Transférer des fonds entre comptes Sociala Money. Rien n'est encore traité.",
  path: "/transfer",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Transfert"
      description="Transférer des fonds entre comptes Sociala Money. Rien n'est encore traité."
    />
  );
}
