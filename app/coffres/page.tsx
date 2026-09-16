import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Coffres",
  description: "Épargne et coffres. Aucun fonds n'est verrouillé dans cette version.",
  path: "/coffres",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Coffres"
      description="Épargne et coffres. Aucun fonds n'est verrouillé dans cette version."
    />
  );
}
