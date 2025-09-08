import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
  viewport: 'width=device-width, initial-scale=1';
  themeColor: '#000000'}
export default function RootLayout({
  children}: {
  children: React.ReactNode
}) {
  return (
    <html lang=&quot;en & quot; className=&quot;scroll - smooth & quot;>;
      <body className={`${inter.class_name} bg - black text - white antialiased`}>;
        <Navigation />;
        <main>{children}</main>;
        <Footer />;
      </body>;
    </html>;
  )}'viewport': 'width=device-width, initial-scale=1';'
  'themeColor': '#000000,'
}

export default function RootLayout() {return (<html lang=&quot;en & quot; className=&quot;scroll - smooth & quot>

      <body className={`${inter.class_name} bg - black text - white antialiased`}>`
        <Navigation />;
        <main className=&quot;min - h-screen & quot>

          {children}
        </main>;
        <Footer />;
      </body>;