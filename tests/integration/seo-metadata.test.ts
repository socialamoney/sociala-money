import { describe, expect, it } from "vitest";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

describe("SEO metadata", () => {
  it("builds canonical, Open Graph and Twitter fields", () => {
    const metadata = buildMetadata({
      title: "À propos",
      description: "Présentation",
      path: "/about",
    });

    expect(metadata.alternates?.canonical).toBe(absoluteUrl("/about"));
    expect(metadata.openGraph?.url).toBe(absoluteUrl("/about"));
    expect(metadata.openGraph?.locale).toBe("fr_FR");
    const twitter = metadata.twitter as { card?: string; images?: string[] } | undefined;
    expect(twitter?.card).toBe("summary_large_image");
    expect(twitter?.images).toEqual([absoluteUrl("/og/default.png")]);
  });

  it("marks private routes as noindex", () => {
    const metadata = buildMetadata({
      title: "Tableau de bord",
      path: "/dashboard",
      noIndex: true,
    });
    const robots = metadata.robots as { index?: boolean };
    expect(robots.index).toBe(false);
  });
});
