import React from 'react';

const SyntheticBiologyRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Synthetic Biology Revolution 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary synthetic biology solutions that redefine the boundaries of life and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🧬 Synthetic Life</h3>
            <p className="text-gray-200">
              Revolutionary synthetic biology that creates new forms of life and biological systems.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">⚡ Bio-Engineering</h3>
            <p className="text-gray-200">
              Advanced bio-engineering solutions that combine biology with technology.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🌟 Environmental Restoration</h3>
            <p className="text-gray-200">
              Synthetic biology solutions for environmental restoration and sustainability.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/services"
            className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Synthetic Biology →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SyntheticBiologyRevolution2027;