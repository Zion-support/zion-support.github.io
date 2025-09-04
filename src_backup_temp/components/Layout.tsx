import React from 'react';
import Head from 'next/head';
import { AppHeader } from '../layout/AppHeader';
import { FuturisticFooter } from './FuturisticFooter';

interface LayoutProps {

  children: React.ReactNode;

}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <meta name="theme-color" content="#0ea5e9"  />
        <link rel="icon" href="/favicon.ico"  />
      </Head>
      
      <div className="min-h-screen bg-slate-50">
        <AppHeader />
        <main className="flex-1">
          {children}
        </main>
        <FuturisticFooter />
      </div>
    </>
  );
};

export default Layout;
</LayoutProps>