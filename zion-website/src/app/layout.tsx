import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zion Tech Group',
  description: 'Leading AI and Technology Solutions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
