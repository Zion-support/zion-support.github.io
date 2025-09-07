import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Zion Tech Group',
  description: 'Terms of Service for Zion Tech Group. Learn about our terms and conditions for using our services.',
  keywords: 'terms of service, terms and conditions, legal terms, service agreement',
  openGraph: {
    title: 'Terms of Service | Zion Tech Group',
    description: 'Terms of Service for Zion Tech Group. Learn about our terms and conditions for using our services.',
    type: 'website',
  },
};

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </main>
    </div>
  );
};

export default Terms;