import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAV } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tableau de bord",
  description: "Espace applicatif Sociala Money.",
  path: "/dashboard",
  noIndex: true,
});

export default function DashboardPage() {
  return (
    <AppShell title="Tableau de bord">
      <div className="flex flex-col gap-4">
        <Alert>
          <AlertTitle>Aucun solde n'est affiché</AlertTitle>
          <AlertDescription>
            Le portefeuille n'est pas encore ouvert. Cette page sert de point d'entrée vers
            les modules, sans données financières fictives.
          </AlertDescription>
        </Alert>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {APP_NAV.filter((item) => item.href !== "/dashboard").map((item) => (
            <Link key={item.href} href={item.href} className="block">
              <Card className="h-full rounded-xl transition-colors hover:border-border-strong">
                <CardHeader>
                  <CardTitle className="text-base">{item.label}</CardTitle>
                  <CardDescription>Module préparé — logique métier à venir.</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
