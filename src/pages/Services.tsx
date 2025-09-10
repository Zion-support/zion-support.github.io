import React from 'react';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI-powered technology services and solutions."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive AI-powered solutions for modern businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
                <p className="text-slate-300">Cutting-edge artificial intelligence services</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Micro SaaS</h3>
                <p className="text-slate-300">Scalable software-as-a-service solutions</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise IT</h3>
                <p className="text-slate-300">Robust enterprise technology services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}