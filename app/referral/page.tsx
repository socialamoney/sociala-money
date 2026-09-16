import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Parrainage",
  description: "Parrainage et commissions. Aucune commission n'est calculée pour le moment.",
  path: "/referral",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Parrainage"
      description="Parrainage et commissions. Aucune commission n'est calculée pour le moment."
    />
  );
}
