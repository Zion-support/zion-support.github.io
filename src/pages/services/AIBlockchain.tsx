import React from 'react';
import { SEO } from '@/components/SEO';

export default function AIBlockchain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AIBlockchain - Zion Technologies"
        description="Professional AIBlockchain services by Zion Technologies"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            AIBlockchain
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional AIBlockchain services delivered with cutting-edge technology and expertise.
          </p>
        </div>
      </div>
    </div>
  );
}
