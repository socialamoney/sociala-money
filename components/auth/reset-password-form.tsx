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
import { resetPasswordSchema } from "@/lib/validation/auth";

export function ResetPasswordForm() {
  const router = useRouter();
  const configured = isSupabaseConfigured();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = new FormData(event.currentTarget);
    const parsed = resetPasswordSchema.safeParse({ password: form.get("password") });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Mot de passe invalide.");
      return;
    }
    const supabase = createBrowserSupabaseClient();
    if (!supabase) {
      setError("Authentification non configurée.");
      return;
    }
    setPending(true);
    const { error: updateError } = await supabase.auth.updateUser({ password: parsed.data.password });
    setPending(false);
    if (updateError) {
      setError("Impossible de mettre à jour le mot de passe. Le lien est peut-être expiré.");
      return;
    }
    router.replace("/auth/login");
  }

  if (!configured) {
    return <AuthUnavailable />;
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormField>
        <Label htmlFor="password">Nouveau mot de passe</Label>
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
        {pending ? "Enregistrement…" : "Enregistrer"}
      </Button>
    </Form>
  );
}
