import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AuthUnavailable() {
  return (
    <Alert>
      <AlertTitle>Authentification non configurée</AlertTitle>
      <AlertDescription>
        Renseignez NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY pour activer la
        connexion. Aucun compte n'est créé tant que Supabase n'est pas branché.
      </AlertDescription>
    </Alert>
  );
}
