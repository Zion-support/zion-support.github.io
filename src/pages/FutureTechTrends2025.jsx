import React from 'react';

const FutureTechTrends2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Future Tech Trends 2025</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the latest innovations and breakthrough technologies in future tech trends 2025
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI Revolution</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence systems that will transform industries
            </p>
            <a href="/pages/AIRevolution2025" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Breakthrough quantum technologies for unprecedented computational power
            </p>
            <a href="/pages/QuantumComputingBreakthrough" className="text-purple-400 hover:text-purple-300 font-semibold">
              Explore →
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces for enhanced human capabilities
            </p>
            <a href="/pages/NeuralInterfaceFuture" className="text-green-400 hover:text-green-300 font-semibold">
              Discover →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2025;