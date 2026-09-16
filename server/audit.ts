import { createServiceRoleClient } from "@/lib/supabase/server";
import type { Json } from "@/types/database";

type AuditEvent = {
  actorId?: string | null;
  action: string;
  resourceType: string;
  resourceId?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  metadata?: Json;
};

/**
 * Persist an audit event for a sensitive operation.
 * No-ops when the service role is not configured — callers still proceed
 * only if their own authorization checks passed.
 */
export async function recordAuditEvent(event: AuditEvent): Promise<void> {
  const supabase = createServiceRoleClient();
  if (!supabase) return;

  const { error } = await supabase.from("audit_logs").insert({
    actor_id: event.actorId ?? null,
    action: event.action,
    resource_type: event.resourceType,
    resource_id: event.resourceId ?? null,
    ip_address: event.ipAddress ?? null,
    user_agent: event.userAgent ?? null,
    metadata: event.metadata ?? {},
  });

  if (error) {
    console.error("audit_write_failed", error.message);
  }
}
