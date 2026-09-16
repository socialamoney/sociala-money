import type { User } from "@supabase/supabase-js";
import type { ProfileRow, UserRole } from "@/types/database";

export class PermissionError extends Error {
  constructor(message = "FORBIDDEN") {
    super(message);
    this.name = "PermissionError";
  }
}

export function requireUser(user: User | null): User {
  if (!user) {
    throw new PermissionError("UNAUTHENTICATED");
  }
  return user;
}

export function requireRole(profile: ProfileRow | null, role: UserRole): ProfileRow {
  if (!profile || profile.role !== role) {
    throw new PermissionError("FORBIDDEN");
  }
  if (profile.status !== "active") {
    throw new PermissionError("ACCOUNT_DISABLED");
  }
  return profile;
}

export function assertOwner(resourceUserId: string, actorId: string): void {
  if (resourceUserId !== actorId) {
    throw new PermissionError("FORBIDDEN");
  }
}
