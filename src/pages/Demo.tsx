import React from 'react';
import SEO from '../components/SEO';

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Demo - Zion Tech Group"
        description="Experience our AI-powered technology solutions through interactive demos."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Demo</h1>
          <div className="text-center">
            <p className="text-lg text-gray-400">Interactive demos coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;