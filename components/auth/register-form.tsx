"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthUnavailable } from "@/components/auth/auth-unavailable";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormHint, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isSupabaseConfigured } from "@/lib/env";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { registerSchema } from "@/lib/validation/auth";

export function RegisterForm() {
  const router = useRouter();
  const configured = isSupabaseConfigured();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = new FormData(event.currentTarget);
    const parsed = registerSchema.safeParse({
      email: form.get("email"),
      password: form.get("password"),
      displayName: form.get("displayName"),
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
    const { error: signUpError } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        data: { display_name: parsed.data.displayName },
        emailRedirectTo: `${window.location.origin}/auth/verify-email`,
      },
    });
    setPending(false);
    if (signUpError) {
      setError("Inscription impossible pour le moment.");
      return;
    }
    router.replace("/auth/verify-email");
  }

  if (!configured) {
    return (
      <div className="space-y-4">
        <AuthUnavailable />
        <Button type="button" disabled className="w-full">
          Inscription indisponible
        </Button>
      </div>
    );
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormField>
        <Label htmlFor="displayName">Nom affiché</Label>
        <Input id="displayName" name="displayName" autoComplete="name" required />
      </FormField>
      <FormField>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </FormField>
      <FormField>
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={10}
        />
        <FormHint>Au moins 10 caractères.</FormHint>
      </FormField>
      <FormMessage>{error}</FormMessage>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Création…" : "Créer le compte"}
      </Button>
    </Form>
  );
}
