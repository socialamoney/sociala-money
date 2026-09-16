import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/app/module-placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Profil",
  description: "Informations de compte. Le profil réel apparaîtra après configuration de Supabase.",
  path: "/profile",
  noIndex: true,
});

export default function Page() {
  return (
    <ModulePlaceholder
      title="Profil"
      description="Informations de compte. Le profil réel apparaîtra après configuration de Supabase."
    />
  );
}
