import React from 'react';
import { SEO } from '../components/SEO';

export default function Enterprise() {
  return (
    <>
      <SEO 
        title="Enterprise | Zion Tech Group"
        description="Enterprise page for Zion Tech Group. Innovation and technology solutions."
        keywords="enterprise, technology, innovation, Zion Tech Group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Enterprise
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Welcome to our enterprise page. Discover innovation and technology solutions.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                This page is under development. Check back soon for updates.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}