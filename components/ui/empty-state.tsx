import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-3 rounded-xl border border-dashed border-border bg-surface px-6 py-10",
        className,
      )}
    >
      {icon ? <div className="text-primary">{icon}</div> : null}
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <p className="max-w-xl text-sm leading-relaxed text-muted">{description}</p>
      {action}
    </div>
  );
}
