import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Marketplace() {
  return (
    <>
      <SEO
        title="Marketplace | Zion AI - AI Solutions Marketplace"
        description="Browse and discover AI solutions, tools, and services from leading providers in our marketplace."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <GradientHeading
              level="h1"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              AI Marketplace
            </GradientHeading>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover and access cutting-edge AI solutions, tools, and services from leading providers.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300">
                Our AI marketplace is currently under development. Stay tuned for exciting AI solutions and tools!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}