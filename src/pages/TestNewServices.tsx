import React from 'react';
import { ComprehensiveServicesShowcase2026 } from "@/components/ComprehensiveServicesShowcase2026";
import { ComprehensivePricingGuide2026 } from "@/components/ComprehensivePricingGuide2026";

export default function TestNewServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Zion Tech Group - New Services Test
        </h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Comprehensive Services Showcase 2026
          </h2>
          <ComprehensiveServicesShowcase2026 />
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Comprehensive Pricing Guide 2026
          </h2>
          <ComprehensivePricingGuide2026 />
        </div>
      </div>
    </div>
  );
}