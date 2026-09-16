import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Crypto",
  description: "Services crypto. Aucun actif n'est détenu ou affiché ici.",
  path: "/crypto",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Crypto"
      description="Services crypto. Aucun actif n'est détenu ou affiché ici."
    />
  );
}
