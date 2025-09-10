import React from 'react';
import SEO from '../components/SEO';

export default function Webinars() {
  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our educational webinars and technology sessions."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Webinars</h1>
            <p className="text-xl text-slate-300">Join our educational webinars.</p>
          </div>
        </div>
      </div>
    </>
  );
}