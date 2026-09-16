"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { APP_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

const GROUPS = ["Compte", "Argent", "Paiements", "Services"] as const;

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 overflow-y-auto border-r border-border bg-background px-4 py-6 md:block">
      <Logo href="/dashboard" />
      <p className="mt-6 mb-3 px-2 text-xs font-medium tracking-wide text-muted uppercase">
        Application
      </p>
      <nav aria-label="Navigation de l'application" className="flex flex-col gap-5">
        {GROUPS.map((group) => (
          <div key={group}>
            <p className="px-2 pb-1 text-xs font-medium text-muted">{group}</p>
            <ul className="flex flex-col gap-0.5">
              {APP_NAV.filter((item) => item.group === group).map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-2 py-2 text-sm font-medium",
                        active
                          ? "bg-primary/10 text-primary-dark"
                          : "text-foreground hover:bg-surface",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
