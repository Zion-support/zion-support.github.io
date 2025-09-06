import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Pricing: React.FC = () => {
  return (
    <>
      <SEO title="Pricing" description="Pricing page" url="/pricing" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Pricing</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;