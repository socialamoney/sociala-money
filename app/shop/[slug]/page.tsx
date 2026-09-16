import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/public-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { buildMetadata } from "@/lib/seo";
import { getPublicShop } from "@/server/public-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const shop = await getPublicShop(slug);

  if (!shop) {
    return buildMetadata({
      title: "Boutique",
      description: "Cette boutique Sociala Money n'est pas disponible.",
      path: `/shop/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: shop.name,
    description: shop.description ?? `Boutique ${shop.name} sur Sociala Money.`,
    path: `/shop/${slug}`,
    image: shop.ogImageUrl ?? shop.bannerUrl ?? "/og/default.png",
  });
}

export default async function ShopPage({ params }: PageProps) {
  const { slug } = await params;
  const shop = await getPublicShop(slug);

  return (
    <PublicShell>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        {shop ? (
          <EmptyState
            title={shop.name}
            description={
              shop.description ??
              "Le catalogue public de cette boutique s'affichera ici. Aucune vente n'est ouverte pour le moment."
            }
          />
        ) : (
          <EmptyState
            title="Boutique indisponible"
            description={`Aucune boutique publique n'est associée à « ${slug} ». Les données privées du marchand ne sont pas exposées.`}
          />
        )}
      </div>
    </PublicShell>
  );
}
