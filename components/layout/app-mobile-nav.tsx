"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function AppMobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation de l'application"
      className="-mx-4 mb-6 overflow-x-auto border-b border-border px-4 pb-3 md:hidden"
    >
      <ul className="flex min-w-max gap-2">
        {APP_NAV.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "inline-flex min-h-10 items-center rounded-pill px-3 text-sm font-medium whitespace-nowrap",
                  active ? "bg-primary text-primary-foreground" : "bg-background text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
