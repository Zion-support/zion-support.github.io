import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}