import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Numéros virtuels",
  description: "Numéros virtuels. Service en préparation.",
  path: "/virtual-numbers",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Numéros virtuels"
      description="Numéros virtuels. Service en préparation."
    />
  );
}
