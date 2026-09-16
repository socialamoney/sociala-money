import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { AppMobileNav } from "@/components/layout/app-mobile-nav";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Badge } from "@/components/ui/badge";

export function AppShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-surface">
      <div className="border-b border-border bg-background md:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <Logo href="/dashboard" />
          <Badge variant="outline">Fondations</Badge>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl">
        <AppSidebar />
        <div className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <AppMobileNav />
          <div className="mb-6 hidden items-center justify-between md:flex">
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            <Link href="/" className="text-sm font-medium text-primary hover:underline">
              Retour au site
            </Link>
          </div>
          <h1 className="mb-6 text-2xl font-semibold tracking-tight md:hidden">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
