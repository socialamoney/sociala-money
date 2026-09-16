/**
 * Generated-style Database types.
 * Expand these as Supabase migrations land. Do not invent runtime data.
 */

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type UserRole = "user" | "admin";
export type ProfileStatus = "active" | "disabled";

export type ProfileRow = {
  id: string;
  display_name: string | null;
  role: UserRole;
  status: ProfileStatus;
  created_at: string;
  updated_at: string;
};

export type AuditLogRow = {
  id: string;
  actor_id: string | null;
  action: string;
  resource_type: string;
  resource_id: string | null;
  ip_address: string | null;
  user_agent: string | null;
  metadata: Json;
  created_at: string;
};

export type IdempotencyKeyRow = {
  id: string;
  user_id: string;
  key: string;
  operation: string;
  request_hash: string;
  response: Json | null;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: {
          id: string;
          display_name?: string | null;
          role?: UserRole;
          status?: ProfileStatus;
        };
        Update: {
          display_name?: string | null;
          role?: UserRole;
          status?: ProfileStatus;
          updated_at?: string;
        };
        Relationships: [];
      };
      audit_logs: {
        Row: AuditLogRow;
        Insert: {
          actor_id?: string | null;
          action: string;
          resource_type: string;
          resource_id?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          metadata?: Json;
        };
        Update: never;
        Relationships: [];
      };
      idempotency_keys: {
        Row: IdempotencyKeyRow;
        Insert: {
          user_id: string;
          key: string;
          operation: string;
          request_hash: string;
          response?: Json | null;
        };
        Update: {
          response?: Json | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      user_role: UserRole;
      profile_status: ProfileStatus;
    };
    CompositeTypes: Record<string, never>;
  };
};
