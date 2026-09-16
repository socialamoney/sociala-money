import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "eSIM",
  description: "Achat d'eSIM. Service en préparation.",
  path: "/esim",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="eSIM"
      description="Achat d'eSIM. Service en préparation."
    />
  );
}
