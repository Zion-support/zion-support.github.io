import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | Zion Tech Group',
  description: 'Get support for your Zion Tech Group services. Find help, documentation, and contact our support team.',
  keywords: 'support, help, documentation, customer service, technical support',
  openGraph: {
    title: 'Support | Zion Tech Group',
    description: 'Get support for your Zion Tech Group services. Find help, documentation, and contact our support team.',
    type: 'website',
  },
};

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Support</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </main>
    </div>
  );
};

export default Support;