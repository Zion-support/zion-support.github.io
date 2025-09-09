import React from 'react';
import { SEO } from "@/components/SEO";

const IndustrySolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Industry Solutions - Zion Tech Group"
        description="Specialized technology solutions tailored to specific industries and business verticals."
        keywords="industry solutions, specialized technology, business verticals, customized solutions"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Industry Solutions</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Specialized technology solutions tailored to specific industries and business verticals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Industry-Specific Technology</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our industry solutions are designed to address the unique challenges and requirements 
              of specific business verticals and sectors.
            </p>
            <p className="text-lg text-zion-blue-light">
              From healthcare to finance, manufacturing to retail, we provide customized 
              technology solutions that drive industry-specific outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;