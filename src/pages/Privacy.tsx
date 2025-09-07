import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  description: 'Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, personal information, privacy rights',
  openGraph: {
    title: 'Privacy Policy | Zion Tech Group',
    description: 'Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information.',
    type: 'website',
  },
};

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;