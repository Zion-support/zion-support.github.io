import React from 'react';

const SyntheticBiologyRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🧬 SYNTHETIC BIOLOGY REVOLUTION • 2027
          </div>
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Synthetic Biology Revolution 2027
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Revolutionary biotechnology solutions that are redefining life itself through synthetic biology
          </p>
          <div className="flex justify-center space-x-8">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-20 py-8 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-3xl transform hover:scale-105">
              🧬 Begin Bio Journey
            </button>
            <button className="border-2 border-green-400 text-green-400 px-20 py-8 rounded-2xl hover:bg-green-400/10 transition-all duration-300 font-bold text-3xl">
              📞 Bio Consultation
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic DNA</h3>
            <p className="text-green-100 mb-6 text-center">
              Custom-designed genetic sequences for specific applications
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• Custom Gene Design</li>
              <li>• DNA Synthesis</li>
              <li>• Genetic Engineering</li>
            </ul>
            <a href="/pages/SyntheticDNA" className="block w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center">
              Explore DNA Tech →
            </a>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">💊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Bio-Manufacturing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Production of pharmaceuticals and materials using living cells
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Drug Production</li>
              <li>• Bio-Materials</li>
              <li>• Enzyme Engineering</li>
            </ul>
            <a href="/pages/BioManufacturing" className="block w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center">
              Start Manufacturing →
            </a>
          </div>

          <div className="bg-gradient-to-br from-lime-600/30 to-green-600/30 backdrop-blur-sm rounded-2xl p-8 border border-lime-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Bio-Engineering</h3>
            <p className="text-lime-100 mb-6 text-center">
              Engineering biological systems for sustainable solutions
            </p>
            <ul className="text-lime-200 space-y-2 mb-6 text-sm">
              <li>• Environmental Cleanup</li>
              <li>• Carbon Capture</li>
              <li>• Renewable Energy</li>
            </ul>
            <p className="text-purple-100 mb-6 text-center">
              Engineered organisms that clean up pollution, restore ecosystems, and combat climate change
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Pollution-eating bacteria</li>
              <li>• Carbon capture organisms</li>
              <li>• Ocean cleanup systems</li>
              <li>• Ecosystem restoration</li>
            </ul>
            <a href="/pages/EnvironmentalRestoration2027" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Restoration →
            </a>
            <a href="/pages/BioEnergy2027" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Bio-Energy →
            </a>
            <a href="/pages/BioEngineering" className="block w-full bg-white text-lime-600 py-3 rounded-lg hover:bg-lime-50 transition-colors font-semibold text-center">
              Engineer Life →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticBiologyRevolution2027;
