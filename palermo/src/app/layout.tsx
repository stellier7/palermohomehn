import type { Metadata, Viewport } from "next";
import { buildSiteMetadata } from "@/lib/seo/metadata";
import "./globals.css";

export const metadata: Metadata = buildSiteMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a2740",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
