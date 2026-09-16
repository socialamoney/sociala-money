/**
 * Map internal errors to safe client-facing messages.
 * Never leak SQL, stack traces, or provider payloads to the browser.
 */

const SAFE_MESSAGES: Record<string, string> = {
  UNAUTHENTICATED: "Veuillez vous connecter pour continuer.",
  FORBIDDEN: "Vous n'avez pas l'autorisation d'effectuer cette action.",
  ACCOUNT_DISABLED: "Ce compte n'est pas autorisé à continuer.",
  FEE_MISMATCH: "Les frais soumis ne correspondent pas au tarif serveur.",
  AMOUNT_ABOVE_LIMIT: "Le montant dépasse la limite autorisée.",
  VALIDATION_ERROR: "Les informations envoyées sont invalides.",
  NOT_CONFIGURED: "Ce service n'est pas encore configuré.",
  NOT_IMPLEMENTED: "Cette opération n'est pas encore disponible.",
};

const FALLBACK = "Une erreur est survenue. Réessayez plus tard.";

export function toPublicErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message in SAFE_MESSAGES) {
    return SAFE_MESSAGES[error.message] ?? FALLBACK;
  }
  return FALLBACK;
}
