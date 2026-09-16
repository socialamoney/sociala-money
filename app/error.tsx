"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-4">
      <h1 className="text-2xl font-semibold tracking-tight">Une erreur est survenue</h1>
      <p className="mt-3 text-sm text-muted">
        Le chargement de cette page a échoué. Réessayez. Aucune opération financière n'a été
        exécutée depuis cet écran.
      </p>
      <div className="mt-6">
        <Button type="button" onClick={reset}>
          Réessayer
        </Button>
      </div>
    </div>
  );
}
