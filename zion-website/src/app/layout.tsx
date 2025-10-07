import React from 'react'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import type {Metadata} Viewport } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords: [
    'AI artificial intelligence',
    'technology innovation',
    'quantum computing autonomous systems',
    'business solutions zion tech',
  ]}
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group'}
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI and technology solutions.',
    images: ['/og-image.jpg']}
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com')
  ),
};
export const viewport: Viewport = {width: 'device-width',
  initialScale: 1,
  themeColor: '#000000'}
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Promo banner */}
        <div className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center text-sm sm:text-base py-2 px-4'>
          <a
            href='/updates/agent-safety-whitepaper'
            className='font-semibold hover:underline'
          >
            New whitepaper: AI Agent Safety Framework (2025) — read now →
          </a>
        </div>
        <Navigation />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import React from 'react'' import Footer from '@/components/Footer'' import Navigation from '@/components/Navigation'' import type {Metadata} Viewport } from 'next'' import { Inter } from 'next/font/google'' import type { ReactNode } from 'react'' import './globals.css' ' const inter = Inter({ subsets: ['latin'] }) export const metadata: Metadata = ' title: 'Zion Tech Group - Leading AI and Technology Solutions', description: ' 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.', keywords: [' 'AI artificial intelligence',' 'technology innovation',' 'quantum computing autonomous systems',' 'business solutions zion tech', ],' authors: [{ name: 'Zion Tech Group' }],' creator: 'Zion Tech Group',' publisher: 'Zion Tech Group',' robots: 'index, follow', openGraph: {' title: 'Zion Tech Group - Leading AI and Technology Solutions', description: ' 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',' url: 'https://ziontechgroup.com',' siteName: 'Zion Tech Group', images: [ ' url: '/og-image.jpg', width: 1200, height: 630,' alt: 'Zion Tech Group'} }, ],' locale: 'en_US',' type: 'website', }, twitter: ' card: 'summary_large_image',' title: 'Zion Tech Group - Leading AI and Technology Solutions',' description: 'Transform your business with cutting-edge AI and technology solutions.',' images: ['/og-image.jpg'], },' metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'), } export const viewport: Viewport = ' width: 'device-width', initialScale: 1,' themeColor: '#000000' } export default function RootLayout() { return ( <div> <div></div>' <html lang='en' className='scroll-smooth'> <body className={`${inter.className} bg-black text-white antialiased`}> {/* Promo banner */}' <div></div>' <a></a> New whitepaper: AI Agent Safety Framework (2025) — read now → </a> </div> <Navigation />' <main className='min-h-screen'>{children}</main> <Footer /> </body> </html> </div> </div> ) } '