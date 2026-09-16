import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#1A73E8" />
      <path
        fill="#FFFFFF"
        d="M16.1 7.6c-3.7 0-6.2 1.9-6.2 4.7 0 1.9 1.1 3.2 3.6 3.9l2.1.6c1.4.4 1.9.8 1.9 1.6 0 1.1-1.1 1.8-2.8 1.8-1.6 0-2.8-.6-3.5-1.9l-2.5 1.2c1.2 2.4 3.6 3.7 6.1 3.7 4 0 6.5-2.1 6.5-5 0-2.1-1.2-3.4-3.8-4.1l-2.1-.6c-1.3-.3-1.8-.8-1.8-1.5 0-1 1-1.7 2.5-1.7 1.3 0 2.3.5 2.9 1.5l2.4-1.2c-1.1-2-3.2-3-5.3-3z"
      />
    </svg>
  );
}

export function Logo({
  href = "/",
  className,
  wordmark = true,
}: {
  href?: string;
  className?: string;
  wordmark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-2.5 text-foreground", className)}
      aria-label="Sociala Money — accueil"
    >
      <LogoMark />
      {wordmark ? (
        <span className="text-[15px] font-semibold tracking-tight">
          Sociala <span className="text-primary">Money</span>
        </span>
      ) : null}
    </Link>
  );
}
