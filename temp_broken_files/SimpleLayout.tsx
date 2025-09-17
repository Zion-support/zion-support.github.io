<<<<<<< HEAD:temp_broken_files/SimpleLayout.tsx
import React from 'react';
import Head from 'next/head';
interface SimpleLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
};



export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      {children}
    </>
  );
=======
import React from "react";

const function SimpleLayout({ title, description, children }: SimpleLayoutProps) { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function SimpleLayout({ title, description, children }: SimpleLayoutProps) {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/SimpleLayout.tsx
