import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Zion Tech Group — AI & Technology Solutions',
  description:
    'Zion Tech Group specializes in AI, autonomous systems, quantum computing, and enterprise solutions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        <Navigation />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  )
}
