import Link from "next/link";
import { PublicShell } from "@/components/layout/public-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PublicShell>
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-4 py-16">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page introuvable</h1>
        <p className="mt-3 text-muted">
          Cette adresse n'existe pas, ou le contenu n'est plus disponible.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </PublicShell>
  );
}
