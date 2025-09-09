import React from 'react';
import { SEO } from "@/components/SEO";

const DigitalTransformation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Digital Transformation - Zion Tech Group"
        description="Comprehensive digital transformation services to modernize your business processes and operations."
        keywords="digital transformation, modernization, business processes, technology adoption"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Digital Transformation</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Comprehensive digital transformation services to modernize your business processes and operations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Transform Your Business</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our digital transformation services help businesses modernize their operations, 
              improve efficiency, and embrace new technologies.
            </p>
            <p className="text-lg text-zion-blue-light">
              From process automation to cloud migration, we guide organizations through 
              their digital transformation journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformation;