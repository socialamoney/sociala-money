import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Retrait",
  description: "Sortir des fonds vers un compte ou un moyen externe. Aucun retrait n'est exécutable dans cette version.",
  path: "/withdraw",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Retrait"
      description="Sortir des fonds vers un compte ou un moyen externe. Aucun retrait n'est exécutable dans cette version."
    />
  );
}
