import React from 'react';
import SEO from '../components/SEO';

export const metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Professional IT services for your business needs.',
  keywords: 'it services, business, technology, support'
};

const ITServices: React.FC = () => {
  return (
    <>
      <SEO title="IT Services" description="IT Services page" url="/services/it-services" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">IT Services</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default ITServices;