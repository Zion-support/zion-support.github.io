import React from 'react',
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SEO from '@/components/SEO';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import ErrorBoundary from '@/components/ErrorBoundary';
import Analytics from '@/components/Analytics';
import ProgressiveWebApp from '@/components/ProgressiveWebApp';
<<<<<<< HEAD
const inter = Inter({,
  subsets: ['latin'];
  display: 'swap';
  preload: true;
  fallback: ['system-uiarial'],});
export const metadata: Metadata = {,
  title: {,
    default: 'Zion Tech Group - Revolutionary AI & Technology Solutions';
    template: '%s | Zion Tech Group',};
  description: 'Leading provider of cutting-edge AI solutions, quantum computing, autonomous systems, and next-generation technology services for enterprises worldwide.';
  keywords: [,
    'AI solutionsquantum computing';
    'autonomous systemsmachine learning';
    'artificial intelligencetechnology consulting';
    'enterprise AIneural networks';
    'roboticsspace technology',
  ];
  authors: [{ name: 'Zion Tech Group' ,}];
  creator: 'Zion Tech Group';
  publisher: 'Zion Tech Group';
  formatDetection: {,
    email: false;
    address: false;
    telephone: false,};
  metadataBase: new URL('https://ziontechgroup.com');
  alternates: {,
    canonical: '/',};
  openGraph: {,
    type: 'website';
    locale: 'en_US';
    url: 'https://ziontechgroup.com';
    siteName: 'Zion Tech Group';
    title: 'Zion Tech Group - Revolutionary AI & Technology Solutions';
    description: 'Leading provider of cutting-edge AI solutions, quantum computing, autonomous systems, and next-generation technology services for enterprises worldwide.';
    images: [,
      {,
        url: '/og-image.jpg';
        width: 1200;
        height: 630;
        alt: 'Zion Tech Group - Revolutionary AI & Technology Solutions',}
    ],
  };
  twitter: {,
    card: 'summary_large_image';
    site: '@ziontechgroup';
    creator: '@ziontechgroup';
    title: 'Zion Tech Group - Revolutionary AI & Technology Solutions';
    description: 'Leading provider of cutting-edge AI solutions, quantum computing, autonomous systems, and next-generation technology services for enterprises worldwide.';
    images: ['/og-image.jpg'],};
  robots: {,
    index: true;
    follow: true;
    googleBot: {,
      index: true;
      follow: true;
      'max-video-preview': -1;
      'max-image-preview': 'largemax-snippet': -1,
    }
  };
  verification: {,
    google: 'your-google-verification-code';
    yandex: 'your-yandex-verification-code';
    yahoo: 'your-yahoo-verification-code',};
  category: 'technology',};
export default function RootLayout({,
  children,
}: {,
  children: React.ReactNode,}) {,
  return (,
    <html lang="en" className={inter.className}>,
      <head>,
        <link rel="manifest" href="/manifest.json" />,
        <link rel="icon" href="/favicon.ico" />,
        <link rel="apple-touch-icon" href="/icon-192x192.png" />,
        <meta name="theme-color" content="#1a1a2e" />,
        <meta name="msapplication-TileColor" content="#1a1a2e" />,
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />,
=======

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of cutting-edge AI solutions, quantum computing, autonomous systems, and next-generation technology services for enterprises worldwide.',
  keywords: [
    'AI solutions',
    'quantum computing',
    'autonomous systems',
    'machine learning',
    'artificial intelligence',
    'technology consulting',
    'enterprise AI',
    'neural networks',
    'robotics',
    'space technology'
  ],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
    description: 'Leading provider of cutting-edge AI solutions, quantum computing, autonomous systems, and next-generation technology services for enterprises worldwide.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ziontechgroup',
    creator: '@ziontechgroup',
    title: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
    description: 'Leading provider of cutting-edge AI solutions, quantum computing, autonomous systems, and next-generation technology services for enterprises worldwide.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="msapplication-TileColor" content="#1a1a2e" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https: //fonts.googleapis.com" />,
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
        {/* DNS prefetch for performance */,}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />,
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />,
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />,
      </head>,
      <body className="antialiased">,
        <ErrorBoundary>,
          <SEO />,
          <PerformanceMonitor />,
          <Analytics />,
          <ProgressiveWebApp />,
          {children}
        </ErrorBoundary>,
      </body>,
    </html>,
  );
}