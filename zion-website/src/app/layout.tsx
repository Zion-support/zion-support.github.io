import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
<<<<<<< HEAD
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
	authors: [{ name: 'Zion Tech Group' }],
	creator: 'Zion Tech Group',
	publisher: 'Zion Tech Group',
	robots: 'index, follow',
	openGraph: {
		title: 'Zion Tech Group - Leading AI and Technology Solutions',
		description: 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
		url: 'https://ziontechgroup.com',
		siteName: 'Zion Tech Group',
		images: [
			{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Zion Tech Group' },
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Zion Tech Group - Leading AI and Technology Solutions',
		description: 'Transform your business with cutting-edge AI and technology solutions.',
		images: ['/og-image.jpg'],
	},
	viewport: 'width=device-width, initial-scale=1',
	themeColor: '#000000',
=======
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description:
    'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
<<<<<<< HEAD
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
>>>>>>> origin/feature/updates-content
=======
>>>>>>> origin/feat/case-studies-content
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
<<<<<<< HEAD
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.className} bg-black text-white antialiased`}>
				<Navigation />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	)
=======
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
<<<<<<< HEAD
        <main className="min-h-screen">{children}</main>
=======
        <main className="min-h-screen pt-16">{children}</main>
>>>>>>> origin/feat/case-studies-content
        <Footer />
      </body>
    </html>
  )
>>>>>>> origin/feature/updates-content
}
