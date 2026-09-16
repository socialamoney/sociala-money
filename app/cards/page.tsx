import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cartes",
  description: "Cartes virtuelles. L'émission n'est pas encore branchée à un prestataire.",
  path: "/cards",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Cartes"
      description="Cartes virtuelles. L'émission n'est pas encore branchée à un prestataire."
    />
  );
}
