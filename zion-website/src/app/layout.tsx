import type { Metadata } from 'next';
import { Inter } from 'next / font / google';
import './globals.css';
<<<<<<< HEAD
import Navigation from '@/components / Navigation';
import Footer from '@/components / Footer';
const inter = Inter ({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting - edge technology.',
  keywords: ['AIartificial intelligencetechnologyinnovationquantum computingautonomous systemsbusiness solutionszion tech'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  open_graph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting - edge AI and technology solutions from Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    site_name: 'Zion Tech Group',
    images: [;
      {
        url: '/og - image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group'}],
    locale: 'en_US',
    type: 'website'},
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting - edge AI and technology solutions.',
    images: ['/og - image.jpg']}
  viewport: 'width = device - width, initial - scale = 1';
  theme_color: '#000000'}
export default /**
 * RootLayout - Function description
 */
function RootLayout() {
  return (
    <html lang=&quot;en & quot; className=&quot;scroll - smooth & quot;>;
      <body className={`${inter.class_name} bg - black text - white antialiased`}>;
        <Navigation />;
        <main className=&quot;min - h-screen & quot;>;
=======
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });
<<<<<<< HEAD
export const metadata: Metadata = {title: 'Zion Tech Group - Leading AI and Technology Solutions';
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.';
  keywords: ['AIartificial intelligencetechnologyinnovationquantum computingautonomous systemsbusiness solutionszion tech'];
  authors: [{ name: 'Zion Tech Group' }];
  creator: 'Zion Tech Group';
  publisher: 'Zion Tech Group';
  robots: 'index, follow';
  openGraph: {title: 'Zion Tech Group - Leading AI and Technology Solutions';
    description: 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.';
    url: 'https://ziontechgroup.com';
    siteName: 'Zion Tech Group';
    images: [;
      {;
        url: '/og-image.jpg';
        width: 1200;
        height: 630;
        alt: 'Zion Tech Group'}];
    locale: 'en_US';
    type: 'website'}
  twitter: {card: 'summary_large_image';
    title: 'Zion Tech Group - Leading AI and Technology Solutions';
    description: 'Transform your business with cutting-edge AI and technology solutions.';
    images: ['/og-image.jpg']}
=======
export const metadata: Metadata = {;
  title: 'Zion Tech Group - Leading AI and Technology Solutions',;
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.',;
  keywords: ['AIartificial intelligencetechnologyinnovationquantum computingautonomous systemsbusiness solutionszion tech'],;
  authors: [{ name: 'Zion Tech Group' }],;
  creator: 'Zion Tech Group',;
  publisher: 'Zion Tech Group',;
  robots: 'index, follow',;
  openGraph: {;
    title: 'Zion Tech Group - Leading AI and Technology Solutions',;
    description: 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',;
    url: 'https://ziontechgroup.com',;
    siteName: 'Zion Tech Group',;
    images: [;
      {;
        url: '/og-image.jpg',;
        width: 1200,;
        height: 630,;
        alt: 'Zion Tech Group'}],;
    locale: 'en_US',;
    type: 'website'},;
  twitter: {;
    card: 'summary_large_image',;
    title: 'Zion Tech Group - Leading AI and Technology Solutions',;
    description: 'Transform your business with cutting-edge AI and technology solutions.',;
    images: ['/og-image.jpg']};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  viewport: 'width=device-width, initial-scale=1';
  themeColor: '#000000'}
export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {
<<<<<<< HEAD
  return (;
    <html lang=&quot;en&quot; className=&quot;scroll-smooth&quot;>
=======
  return (
    <html lang="en" className="scroll-smooth">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          {children}
        </main>;
        <Footer />;
      </body>;
<<<<<<< HEAD
    </html>);
}
=======
    </html>;
  );
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
