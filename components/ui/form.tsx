import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Form({ className, ...props }: ComponentProps<"form">) {
  return <form className={cn("flex flex-col gap-5", className)} {...props} />;
}

export function FormField({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}

export function FormMessage({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  if (!children) return null;
  return (
    <p className={cn("text-sm text-danger", className)} role="alert" {...props}>
      {children}
    </p>
  );
}

export function FormHint({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-sm text-muted", className)} {...props} />;
}
