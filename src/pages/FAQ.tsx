import React from 'react';
import SEO from '../components/SEO';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about our AI-powered technology solutions and services."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
          <div className="text-center">
            <p className="text-lg text-gray-400">FAQ content coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;