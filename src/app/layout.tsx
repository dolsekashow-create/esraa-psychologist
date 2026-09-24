import type { Metadata, Viewport } from "next";
import { El_Messiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const heading = El_Messiri({
  variable: "--font-heading",
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans_Arabic({
  variable: "--font-body",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
});

const description = `${site.name}، ${site.title}. ${site.tagline}. القلق، والضغوط، والعلاقات، والثقة بالنفس.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title} - جلسات أونلاين`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "أخصائية نفسية",
    "جلسات نفسية أونلاين",
    "دعم نفسي",
    "علاج القلق",
    "استشارة نفسية",
    "أخصائي نفسي مصر",
    "أخصائية نفسية السعودية",
    "أخصائية نفسية الإمارات",
    site.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.title}`,
    description,
  },
  twitter: { card: "summary", title: `${site.name} | ${site.title}`, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#111916" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
