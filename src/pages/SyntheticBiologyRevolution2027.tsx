import React from 'react';

const SyntheticBiologyRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Synthetic Biology Revolution 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary synthetic biology technologies that will transform medicine, agriculture, and environmental restoration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-bold mb-4">Synthetic DNA</h3>
            <p className="text-gray-300 mb-4">
              Custom-designed DNA sequences that can create entirely new biological functions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-4">Bio-Engineering</h3>
            <p className="text-gray-300 mb-4">
              Engineered organisms that can produce medicines, clean energy, and sustainable materials
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-4">Environmental Restoration</h3>
            <p className="text-gray-300 mb-4">
              Biological solutions for climate change, pollution cleanup, and ecosystem restoration
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-semibold text-lg">
            Explore Synthetic Biology
          </button>
        </div>
      </div>
    </div>
  );
};

export default SyntheticBiologyRevolution2027;