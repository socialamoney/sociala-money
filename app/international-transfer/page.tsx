import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Transfert international",
  description: "Envoyer vers l'étranger. Les devises, frais et limites seront recalculés côté serveur.",
  path: "/international-transfer",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Transfert international"
      description="Envoyer vers l'étranger. Les devises, frais et limites seront recalculés côté serveur."
    />
  );
}
