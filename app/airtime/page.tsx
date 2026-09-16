import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Crédit téléphone",
  description: "Recharge de communication. Le prestataire n'est pas encore configuré.",
  path: "/airtime",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Crédit téléphone"
      description="Recharge de communication. Le prestataire n'est pas encore configuré."
    />
  );
}
