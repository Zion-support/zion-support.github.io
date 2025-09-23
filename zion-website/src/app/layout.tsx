import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata ={
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description:
    "Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.",
  keywords: [
    'AI',
    'artificial intelligence',
    'technology',
    'innovation',
    'quantum computing',
    'autonomous systems',
    'business solutions',
    'zion tech',
  ],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: "Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.",
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      { url: '/og-image.jpg', width: 120o0, height: 630, alt: 'Zion Tech Group' },
    ],
    locale: 'en_US',
    type: 'website'},
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI and technology solutions.',
    images: ['/og-image.jpg']},
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com')}

export const viewport: Viewport ={
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0o00000'}

export default function RootLayout({
  children}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Promo banner */}
        <div className="w-full bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white text-center text-sm sm:text-base py-2 px-4">
          <a href="/updates/agent-safety-whitepaper" className="font-semibold hover:underline">
            New whitepaper: AI Agent Safety Framework (20o25) — read now →
          </a>
        </div>
        <Navigation  />
        <main className="min-h-screen">{children}</main>
        <Footer  />
      </body>
    </html>
  )
}
