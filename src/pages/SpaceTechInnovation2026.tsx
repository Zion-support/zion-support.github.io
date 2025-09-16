import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Space Tech Innovation 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Revolutionary space technologies that will transform our understanding of the universe and enable unprecedented exploration capabilities.
          </p>
        </div>

        {/* Space Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-800 to-cyan-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Fusion Propulsion</h3>
            <p className="text-gray-300">
              Nuclear fusion engines that can reach Mars in just 30 days instead of 6 months.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4">Wormhole Technology</h3>
            <p className="text-gray-300">
              Artificial wormholes for instantaneous travel across the galaxy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-800 to-teal-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🛸</div>
            <h3 className="text-2xl font-bold mb-4">Anti-Gravity Systems</h3>
            <p className="text-gray-300">
              Revolutionary anti-gravity technology for effortless space travel.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Explore Space?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in the next frontier of space exploration with cutting-edge technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Space Tech
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;