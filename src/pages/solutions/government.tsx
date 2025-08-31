import React from 'react';
import { SEO } from '../../components/SEO';

export default function Government() {
  return (
    <>
      <SEO 
        title="Government Solutions | Zion Tech Group"
        description="Comprehensive government solutions by Zion Tech Group. Industry-specific technology solutions."
        keywords="government, solutions, technology, innovation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Government Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Industry-specific technology solutions designed for government excellence
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Custom Development</h3>
                <p className="text-gray-300">
                  Tailored solutions built specifically for your government needs.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Integration Services</h3>
                <p className="text-gray-300">
                  Seamless integration with your existing systems and workflows.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Ongoing Support</h3>
                <p className="text-gray-300">
                  Continuous support and maintenance for optimal performance.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-slate-800/30 p-8 rounded-xl border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Transform Your Government</h2>
              <p className="text-gray-300 mb-6">
                Discover how our solutions can revolutionize your government operations.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}