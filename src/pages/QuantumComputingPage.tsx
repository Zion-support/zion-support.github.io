import React from 'react';
import { Helmet } from 'react-helmet-async';

const QuantumComputingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Computing - Zion Tech Group | Next-Gen Computing</title>
        <meta name="description" content="Next-generation quantum computing capabilities for complex problem solving and optimization. Custom pricing available." />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum <span className="text-cyan-400">Computing</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Next-generation quantum computing capabilities for complex problem solving 
                and optimization to tackle the world's most challenging problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumComputingPage;