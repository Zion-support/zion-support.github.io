import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Development | AI-Powered Solutions',
  description: 'Professional mobile app development services for iOS and Android platforms with cutting-edge AI integration.',
  keywords: 'mobile development, ios development, android development, mobile apps, ai mobile apps',
  openGraph: {
    title: 'Mobile Development | AI-Powered Solutions',
    description: 'Professional mobile app development services for iOS and Android platforms with cutting-edge AI integration.',
    type: 'website',
  },
};

const MobileDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Mobile Development</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </main>
    </div>
  );
};

export default MobileDevelopment;