import React from 'react';

const SpaceTechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Space Technology Revolution 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore the future of space technology with revolutionary innovations in propulsion,
            exploration, and space-based infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion</h3>
            <p className="text-purple-100 mb-6 text-center">
              Next-generation propulsion systems for faster and more efficient space travel
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Ion Drive Technology</li>
              <li>• Nuclear Propulsion</li>
              <li>• Antimatter Engines</li>
            </ul>
            <a href="/pages/AdvancedPropulsion2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Propulsion →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Infrastructure</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary space-based infrastructure and habitats
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Orbital Habitats</li>
              <li>• Space Manufacturing</li>
              <li>• Asteroid Mining</li>
            </ul>
            <a href="/pages/SpaceInfrastructure2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Infrastructure →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Deep Space Exploration</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced exploration technologies for deep space missions
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous Rovers</li>
              <li>• Space Telescopes</li>
              <li>• Interstellar Probes</li>
            </ul>
            <a href="/pages/DeepSpaceExploration2026" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore Deep Space →
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Cosmos?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join us in revolutionizing space technology and expanding humanity's reach into the universe.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechRevolution2026;