import React from 'react';
<<<<<<< HEAD
import { Atom, Cpu, Zap, Database } from 'lucide-react';
import SEO from '../../components/SEO';

const QuantumComputing = () => {
  const features = [
    {
      title: "Quantum Processing",
      description: "Harness the power of quantum computing for complex problem solving",
      icon: <Atom className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Quantum Algorithms",
      description: "Advanced quantum algorithms for optimization and machine learning",
      icon: <Cpu className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution",
      icon: <Zap className="h-8 w-8 text-green-400" />
    },
    {
      title: "Quantum Simulation",
      description: "Simulate complex quantum systems for research and development",
      icon: <Database className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing - Zion Tech Group"
        description="Revolutionary quantum computing solutions for the future of technology."
        keywords={["quantum computing", "quantum algorithms", "quantum security", "quantum simulation"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Quantum Computing</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Unlock the potential of quantum computing with our cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Quantum Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Applications</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Financial modeling and optimization</li>
                <li>• Drug discovery and molecular simulation</li>
                <li>• Cryptography and security</li>
                <li>• Machine learning acceleration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Exponential speed improvements</li>
                <li>• Complex problem solving</li>
                <li>• Enhanced security</li>
                <li>• Future-proof technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputing;
=======
import SEO from '../../components/SEO';

export default function QuantumComputing() {
  return (
    <>
      <SEO 
        title="Quantum Computing - Zion Tech Group"
        description="Cutting-edge quantum computing solutions and services."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Quantum Computing</h1>
            <p className="text-xl text-slate-300">Cutting-edge quantum computing solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
