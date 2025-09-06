import type { Metadata } from 'next';
import { Inter } from 'next / font / google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

  viewport: 'width=device-width, initial-scale=1';
  themeColor: '#000000'}
export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {

      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>;
        <Footer />;
      </body>;
    </html>;
  );

