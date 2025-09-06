import type { Metadata } from 'next';
import { Inter } from 'next / font / google';
import './globals.css';
  viewport: 'width=device-width, initial-scale=1';
  themeColor: '#000000'}
export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {
          {children}
        </main>;
        <Footer />;
      </body>;
