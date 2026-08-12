import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "FireAware | Workplace Fire Awareness Training";
const description = "Practical UK workplace fire awareness training with an 80% pass mark and printable completion certificate.";
const image = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
  openGraph: { title, description, images: [{ url: image, width: 1200, height: 630, alt: "FireAware workplace fire awareness course" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
