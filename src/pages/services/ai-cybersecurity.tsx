import React from 'react';
import SEO from '../../components/SEO';

const AICybersecurity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions for threat detection and prevention."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">AI Cybersecurity</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Protect your business with AI-powered security
          </p>
          <div className="text-center">
            <p className="text-lg text-gray-400">Service details coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICybersecurity;