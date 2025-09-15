import React from 'react';
import { SEO } from '@/components/SEO';

const HealthcareSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Healthcare Solutions - Zion Tech Group" 
        description="Healthcare technology solutions for improved outcomes and operational efficiency."
      />
      <div className="container-responsive py-16">
        <h1 className="text-4xl font-bold mb-4">Healthcare Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          Transform care delivery with AI diagnostics, predictive analytics, and interoperable health systems.
        </p>
      </div>
    </div>
  );
};

export default HealthcareSolutions;

