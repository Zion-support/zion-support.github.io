import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Zion Tech Group - Leading AI and Technology Solutions',
	description:
		'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="bg-black text-white antialiased">
				<Navigation />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
