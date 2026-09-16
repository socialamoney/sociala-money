import { describe, expect, it } from "vitest";
import { PermissionError, assertOwner, requireRole, requireUser } from "@/server/permissions";
import type { ProfileRow } from "@/types/database";
import type { User } from "@supabase/supabase-js";

const user = { id: "user-1" } as User;

const profile: ProfileRow = {
  id: "user-1",
  display_name: "Ada",
  role: "user",
  status: "active",
  created_at: "2026-01-01T00:00:00.000Z",
  updated_at: "2026-01-01T00:00:00.000Z",
};

describe("permissions", () => {
  it("requireUser rejects anonymous callers", () => {
    expect(() => requireUser(null)).toThrow(PermissionError);
  });

  it("requireRole rejects a non-admin", () => {
    expect(() => requireRole(profile, "admin")).toThrow(PermissionError);
  });

  it("assertOwner rejects another user", () => {
    expect(() => assertOwner("user-2", user.id)).toThrow("FORBIDDEN");
  });
});
