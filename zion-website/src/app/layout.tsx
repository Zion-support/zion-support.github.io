import type { Metadata } from 'next';
import { Inter } from 'next / font / google';
import './globals.css';


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


  viewport: 'width=device-width, initial-scale=1';
  themeColor: '#000000'}
export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {

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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <html lang=&quot;en & quot; className=&quot;scroll - smooth & quot;>;
      <body className={`${inter.class_name} bg - black text - white antialiased`}>;
        <Navigation />;
        <main className=&quot;min - h-screen & quot;>;
<<<<<<< HEAD
=======

=======
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });
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
  viewport: 'width=device-width, initial-scale=1';
  themeColor: '#000000'}
export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {
  return (;
    <html lang=&quot;en&quot; className=&quot;scroll-smooth&quot;>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {children}
        </main>;
        <Footer />;
      </body>;
<<<<<<< HEAD
=======
    </html>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    </html>);

}

}
;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
