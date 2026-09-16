import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/public-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { buildMetadata } from "@/lib/seo";
import { getPublicPaymentLink } from "@/server/public-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const link = await getPublicPaymentLink(slug);

  if (!link) {
    return buildMetadata({
      title: "Lien de paiement",
      description: "Ce lien de paiement Sociala Money n'est pas disponible.",
      path: `/pay/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: link.title,
    description: link.description ?? `Paiement demandé par ${link.creatorDisplayName ?? "un utilisateur"}.`,
    path: `/pay/${slug}`,
    image: link.imageUrl ?? "/og/default.png",
  });
}

export default async function PayPage({ params }: PageProps) {
  const { slug } = await params;
  const link = await getPublicPaymentLink(slug);

  return (
    <PublicShell>
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
        {link ? (
          <EmptyState
            title={link.title}
            description={
              link.description ??
              "Les informations publiques de ce lien s'afficheront ici. Le paiement n'est pas encore ouvert."
            }
          />
        ) : (
          <EmptyState
            title="Lien de paiement indisponible"
            description={`Aucune information publique n'est associée à « ${slug} ». Les soldes, données KYC et informations privées ne sont jamais exposés sur cette page.`}
          />
        )}
      </div>
    </PublicShell>
  );
}
