import React from 'react';
import { SEO } from "@/components/SEO";

const MicroSAASSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Innovative micro SAAS platforms designed to solve specific business challenges with scalable solutions."
        keywords="micro SAAS, software as a service, business solutions, scalable platforms"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Micro SAAS Solutions</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Innovative micro SAAS platforms designed to solve specific business challenges with scalable solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Focused Business Solutions</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our micro SAAS solutions are designed to address specific business needs with 
              targeted, scalable platforms that deliver immediate value.
            </p>
            <p className="text-lg text-zion-blue-light">
              From workflow automation to data analytics, we create specialized tools 
              that help businesses operate more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASSolutions;