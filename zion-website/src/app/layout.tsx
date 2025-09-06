import type { Metadata } from 'next';
import { Inter } from 'next / font / google';
import './globals.css';
  return (
    <html lang=&quot;en & quot; className=&quot;scroll - smooth & quot;>;
      <body className={`${inter.class_name} bg - black text - white antialiased`}>;
        <Navigation />;
        <main className=&quot;min - h-screen & quot;>;
          {children}
        </main>;
        <Footer />;
      </body>;
}