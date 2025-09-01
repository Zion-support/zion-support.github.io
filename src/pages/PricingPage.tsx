import React from 'react';
import SEO from "@/components/SEO";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Competitive pricing for our technology services"
        keywords="pricing, costs, services, Zion Tech Group"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">Pricing</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}