<<<<<<< HEAD
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description:
    'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.',
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
=======
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  keywords: ['AI', 'artificial intelligence', 'technology', 'innovation', 'quantum computing', 'autonomous systems', 'business solutions', 'zion tech'],
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
<<<<<<< HEAD
    description:
      'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
=======
    description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
<<<<<<< HEAD
        alt: 'Zion Tech Group',
=======
        alt: 'Zion Tech Group - AI and Technology Solutions',
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
<<<<<<< HEAD
    description:
      'Transform your business with cutting-edge AI and technology solutions.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};
=======
    description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
=======
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
