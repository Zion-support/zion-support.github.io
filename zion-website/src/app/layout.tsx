import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
<<<<<<< HEAD
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords: ['AI', 'artificial intelligence', 'technology', 'innovation', 'quantum computing', 'autonomous systems', 'business solutions', 'zion tech'],
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
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group',
      },
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
};

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (
    <html lang=&quot;en & quot; className=&quot;scroll - smooth & quot;>;
      <body className={`${inter.class_name} bg - black text - white antialiased`}>;
        <Navigation />;
        <main className=&quot;min - h-screen & quot;>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  viewport: 'width=device-width, initial-scale=1';
  themeColor: '#000000'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (;
    <html lang=&quot;en&quot; className=&quot;scroll-smooth&quot;>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
<<<<<<< HEAD
        <main className="min-h-screen">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======

  return (
    <html lang="en" className="scroll-smooth">

      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {children}
        </main>;
        <Footer />;
      </body>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </html>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

    </html>);

}
<<<<<<< HEAD

}
;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
<<<<<<< HEAD
;
=======
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    <html lang=&quot;en & quot; className=&quot;scroll - smooth & quot;>;
      <body className={`${inter.class_name} bg - black text - white antialiased`}>;
        <Navigation />;
        <main className=&quot;min - h-screen & quot;>;
          {children}
        </main>;
        <Footer />;
      </body>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
