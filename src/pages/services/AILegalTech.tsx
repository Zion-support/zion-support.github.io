import React from 'react';
import { SEO } from '@/components/SEO';

export default function AILegalTech() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AILegalTech - Zion Technologies"
        description="Professional AILegalTech services by Zion Technologies"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            AILegalTech
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional AILegalTech services delivered with cutting-edge technology and expertise.
          </p>
        </div>
      </div>
    </div>
  );
}
