import { cn } from "@/lib/utils";

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block size-5 animate-spin rounded-pill border-2 border-border border-t-primary",
        className,
      )}
      aria-hidden="true"
    />
  );
}

export function Loading({ label = "Chargement" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted" role="status" aria-live="polite">
      <Spinner />
      <span>{label}</span>
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Loading label="Chargement de la page" />
    </div>
  );
}
