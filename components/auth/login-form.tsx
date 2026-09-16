"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthUnavailable } from "@/components/auth/auth-unavailable";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isSupabaseConfigured } from "@/lib/env";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { loginSchema } from "@/lib/validation/auth";

export function LoginForm() {
  const router = useRouter();
  const configured = isSupabaseConfigured();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = new FormData(event.currentTarget);
    const parsed = loginSchema.safeParse({
      email: form.get("email"),
      password: form.get("password"),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Informations invalides.");
      return;
    }
    const supabase = createBrowserSupabaseClient();
    if (!supabase) {
      setError("Authentification non configurée.");
      return;
    }
    setPending(true);
    const { error: signInError } = await supabase.auth.signInWithPassword(parsed.data);
    setPending(false);
    if (signInError) {
      setError("Connexion impossible. Vérifiez l'e-mail et le mot de passe.");
      return;
    }
    router.replace("/dashboard");
    router.refresh();
  }

  if (!configured) {
    return (
      <div className="space-y-4">
        <AuthUnavailable />
        <Button type="button" disabled className="w-full">
          Connexion indisponible
        </Button>
      </div>
    );
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormField>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </FormField>
      <FormField>
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="password">Mot de passe</Label>
          <Link href="/auth/forgot-password" className="text-xs font-medium text-primary hover:underline">
            Mot de passe oublié
          </Link>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </FormField>
      <FormMessage>{error}</FormMessage>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Connexion…" : "Se connecter"}
      </Button>
    </Form>
  );
}
