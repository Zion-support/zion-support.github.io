import React from 'react';

const SyntheticBiologyRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Synthetic Biology Revolution 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest breakthroughs in synthetic biology and genetic engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Genetic Engineering</h3>
            <p className="text-gray-300 mb-6">
              Advanced genetic modification techniques for medical and agricultural applications.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-white mb-4">Bio-Synthesis</h3>
            <p className="text-gray-300 mb-6">
              Creating biological systems that can produce complex molecules and materials.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Explore
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Bio-Computing</h3>
            <p className="text-gray-300 mb-6">
              Using biological systems for computation and data processing.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-300">
              Discover
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Explore Synthetic Biology →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SyntheticBiologyRevolution2027;