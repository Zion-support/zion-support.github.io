import "./globals.css";
import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export const metadata = {
  title: "Zion Tech Group - AI-Powered Digital Solutions & Quantum Computing",
  description: "Leading provider of AI automation, quantum computing, cybersecurity, and enterprise IT solutions. Transform your business with cutting-edge technology.",
  keywords: "AI, quantum computing, cybersecurity, enterprise IT, automation, Zion Tech Group, digital transformation",
  authors: [{ name: "Zion Tech Group" }],
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Zion Tech Group - AI-Powered Digital Solutions & Quantum Computing",
    description: "Leading provider of AI automation, quantum computing, cybersecurity, and enterprise IT solutions",
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - Leading AI, Quantum Computing & Enterprise Solutions",
    description: "Transform your business with cutting-edge AI, quantum computing, and enterprise technology solutions from Zion Tech Group.",
  },
  alternates: {
    canonical: "https://ziontechgroup.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion OS - Sovereign AI-Powered Digital Economies",
    description: "Launch sovereign AI-powered digital economies with one click",
    images: ["/og-image.svg"],
    creator: "@ziontechgroup",
    site: "@ziontechgroup",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <nav className="border-b border-white/10 sticky top-0 z-50 bg-zinc-900/50 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <a href="/" className="font-semibold">Zion OS</a>
            <a href="/about" className="text-sm opacity-80 hover:opacity-100">About</a>
            <a href="/services" className="text-sm opacity-80 hover:opacity-100">Services</a>
            <a href="/contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
            <a href="/multiverse/launch" className="text-sm opacity-80 hover:opacity-100">Launch</a>
            <a href="/admin/os-deploy" className="text-sm opacity-80 hover:opacity-100">Admin Deploy</a>
            <a href="/admin/instances" className="text-sm opacity-80 hover:opacity-100">Instances</a>
          </div>
        </footer>
      </body>
    </html>
  );
}