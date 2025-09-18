import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions.',
  keywords: ['AI', 'artificial intelligence', 'quantum computing', 'autonomous solutions', 'technology'],
  openGraph: {
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <PerformanceMonitor />
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}