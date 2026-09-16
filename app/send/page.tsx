import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Envoi d'argent",
  description: "Envoyer de l'argent à un autre utilisateur. L'opération exigera une autorisation serveur et une clé d'idempotence.",
  path: "/send",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Envoi d'argent"
      description="Envoyer de l'argent à un autre utilisateur. L'opération exigera une autorisation serveur et une clé d'idempotence."
    />
  );
}
