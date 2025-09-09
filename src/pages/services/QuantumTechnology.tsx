import React from 'react';
import { SEO } from "@/components/SEO";

const QuantumTechnology: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Quantum Technology - Zion Tech Group"
        description="Next-generation quantum technology solutions for advanced computing and secure communications."
        keywords="quantum technology, quantum computing, quantum security, advanced technology"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Quantum Technology</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Next-generation quantum technology solutions for advanced computing and secure communications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Quantum Computing Solutions</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our quantum technology solutions harness the power of quantum mechanics to solve 
              complex problems that are intractable for classical computers.
            </p>
            <p className="text-lg text-zion-blue-light">
              From quantum cryptography to quantum machine learning, we're at the forefront 
              of quantum technology innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumTechnology;