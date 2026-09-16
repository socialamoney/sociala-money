"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ALL_REGISTERED_PATHS } from "@/lib/routes";

const CHANNEL = "grok-preview-bridge";

function isSafePath(path: string): boolean {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
  try {
    return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
  } catch {
    return false;
  }
}

/**
 * Lets the Grok preview chrome drive in-app navigation when the app is embedded.
 * No-ops on the public site, local standalone runs, and production.
 */
export function PreviewHostBridge() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined" || window.parent === window) return;

    function onMessage(event: MessageEvent) {
      const data = event.data as { channel?: string; type?: string; path?: string; delta?: number };
      if (!data || data.channel !== CHANNEL) return;
      if (data.type === "navigate" && typeof data.path === "string" && isSafePath(data.path)) {
        router.push(data.path);
      }
      if (data.type === "history" && (data.delta === -1 || data.delta === 1)) {
        if (data.delta === -1) router.back();
        else router.forward();
      }
      if (data.type === "hello") {
        window.parent.postMessage(
          {
            channel: CHANNEL,
            version: 1,
            type: "ready",
            paths: ALL_REGISTERED_PATHS,
          },
          event.origin,
        );
      }
    }

    window.addEventListener("message", onMessage);
    window.parent.postMessage({ channel: CHANNEL, version: 1, type: "hello" }, "*");
    return () => window.removeEventListener("message", onMessage);
  }, [router]);

  return null;
}
