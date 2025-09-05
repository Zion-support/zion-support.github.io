import type {_Metadata} from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const _inter = Inter({_subsets: ['latin']})

<<<<<<< HEAD
export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords: ['AIartificial intelligencetechnologyinnovationquantum computingautonomous systemsbusiness solutionszion tech'],
  authors: [{ name: 'Zion Tech Group' }],
=======
export const metadata: Metadata = {_title: 'Zion Tech Group - Leading AI and Technology Solutions', _description: 'Zion Tech Group is a leading technology company specializing in AI, _autonomous systems, _quantum computing, _and innovative business solutions. Transform your business with cutting-edge technology.', _keywords: ['AI', _'artificial intelligence', _'technology', _'innovation', _'quantum computing', _'autonomous systems', _'business solutions', _'zion tech'], _authors: [{ name: 'Zion Tech Group'}],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {_title: 'Zion Tech Group - Leading AI and Technology Solutions', _description: 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.', _url: 'https://ziontechgroup.com', _siteName: 'Zion Tech Group', _images: [
      {
        url: '/og-image.jpg', _width: 1200, _height: 630, _alt: 'Zion Tech Group'}],
    locale: 'en_US',
    type: 'website'},
  twitter: {_card: 'summary_large_image', _title: 'Zion Tech Group - Leading AI and Technology Solutions', _description: 'Transform your business with cutting-edge AI and technology solutions.', _images: ['/og-image.jpg']},
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000'}

<<<<<<< HEAD
export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {
  return (
    <html lang=&quot;en&quot; className=&quot;scroll-smooth&quot;>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        <main className=&quot;min-h-screen&quot;>
          {children}
=======
export default function RootLayout(_{_children}: {_children: React.ReactNode}) {_return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {_children}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </main>
        <Footer />
      </body>
    </html>
  )
}
