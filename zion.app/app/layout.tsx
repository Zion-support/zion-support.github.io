// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group — AI, IT & Micro SAAS Solutions',
    template: '%s | Zion Tech Group',
  },
  description: 'Enterprise AI services, IT solutions, and Micro SAAS platforms. Machine learning, cybersecurity, cloud infrastructure, automation, and more. Based in Middletown, DE.',
  keywords: 'AI services, IT consulting, machine learning, cybersecurity, cloud migration, Micro SAAS, automation, NLP, computer vision, recommendation engine',
  authors: [{ name: 'Kleber Garcia Alcatrão', url: 'https://ziontechgroup.com' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Zion Tech Group — AI, IT & Micro SAAS Solutions',
    description: '170+ real-world AI, IT, and Micro SAAS services. Custom proposals, consulting, and implementation.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, IT & Micro SAAS Solutions',
    description: 'Enterprise AI services, IT solutions, and Micro SAAS platforms.',
  },
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}