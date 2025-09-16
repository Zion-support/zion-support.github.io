import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Space Tech Innovation 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary space technologies that will enable humanity to explore the cosmos like never before
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
            <div className="text-4xl mb-4">🛸</div>
            <h3 className="text-2xl font-bold mb-4">Antigravity Technology</h3>
            <p className="text-gray-300">
              Revolutionary antigravity systems that eliminate the need for traditional rocket fuel.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-800 to-teal-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4">Wormhole Travel</h3>
            <p className="text-gray-300">
              Stable wormhole technology for instant travel between distant star systems.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg">
            Explore Space Technologies
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;