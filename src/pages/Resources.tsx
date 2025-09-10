import React from 'react';
import SEO from '../components/SEO';

export default function Resources() {
  return (
    <>
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources, guides, and documentation."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Resources</h1>
            <p className="text-xl text-slate-300">Comprehensive resources for your technology journey.</p>
          </div>
        </div>
      </div>
    </>
  );
}