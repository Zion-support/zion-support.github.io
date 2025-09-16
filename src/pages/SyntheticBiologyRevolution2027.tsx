import React from 'react';
import { Helmet } from 'react-helmet-async';

const SyntheticBiologyRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white">
      <Helmet>
        <title>Synthetic Biology Revolution 2027 - Revolutionary Biological Solutions</title>
        <meta name="description" content="Explore the latest breakthroughs in synthetic biology and their applications in modern biotechnology and medicine." />
        <meta name="keywords" content="synthetic biology, biotechnology, bioengineering, synthetic biology 2027, biological solutions" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Synthetic Biology Revolution 2027
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto">
              Revolutionary synthetic biology solutions that are transforming biotechnology and medicine
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Synthetic Biology Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the powerful capabilities of our synthetic biology solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">DNA Engineering</h3>
            <p className="text-gray-300 mb-6 text-center">
              Advanced DNA engineering techniques for creating custom biological systems
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• CRISPR gene editing</li>
              <li>• Synthetic DNA synthesis</li>
              <li>• Genetic circuit design</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biological Manufacturing</h3>
            <p className="text-gray-300 mb-6 text-center">
              Revolutionary biological manufacturing systems for producing complex molecules
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Protein production</li>
              <li>• Drug synthesis</li>
              <li>• Biodegradable materials</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Environmental Solutions</h3>
            <p className="text-gray-300 mb-6 text-center">
              Biological solutions for environmental challenges and sustainability
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Carbon capture</li>
              <li>• Pollution remediation</li>
              <li>• Sustainable agriculture</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Revolutionize Biology?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the synthetic biology revolution and be part of the future of biotechnology
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Explore Biology Tech
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticBiologyRevolution2027;