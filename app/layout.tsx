import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ToastViewport } from "@/components/ui/toast";
import { LANGUAGE, LOCALE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: "/",
    keywords: [
      "Sociala Money",
      "fintech",
      "portefeuille numérique",
      "paiement",
      "transfert d'argent",
      "Afrique",
    ],
  }),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "finance",
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.svg"],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "og:locale": LOCALE,
  },
};

export const viewport: Viewport = {
  themeColor: "#1A73E8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={LANGUAGE} className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <PreviewHostBridge />
        {children}
        <ToastViewport />
      </body>
    </html>
  );
}
