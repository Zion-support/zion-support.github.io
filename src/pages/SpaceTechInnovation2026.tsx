import React from 'react';
import { Helmet } from 'react-helmet-async';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <Helmet>
        <title>Space Technology Innovation 2026 - Revolutionary Space Solutions</title>
        <meta name="description" content="Explore the latest innovations in space technology and their applications in modern space exploration and research." />
        <meta name="keywords" content="space technology, space innovation, space tech, space solutions, space 2026" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Space Technology Innovation 2026
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto">
              Revolutionary space technology innovations that are transforming space exploration and research
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Space Technology Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the powerful capabilities of our space technology innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion</h3>
            <p className="text-gray-300 mb-6 text-center">
              Next-generation propulsion systems for faster and more efficient space travel
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Ion propulsion systems</li>
              <li>• Nuclear propulsion</li>
              <li>• Antimatter engines</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Satellite Technology</h3>
            <p className="text-gray-300 mb-6 text-center">
              Advanced satellite systems for communication, navigation, and research
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Quantum communication</li>
              <li>• Autonomous navigation</li>
              <li>• Self-repairing systems</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Planetary Exploration</h3>
            <p className="text-gray-300 mb-6 text-center">
              Advanced systems for exploring and colonizing other planets
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Terraforming technology</li>
              <li>• Life support systems</li>
              <li>• Resource extraction</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Explore Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the space technology innovation movement and be part of the future of space exploration
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Explore Space Tech
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

export default SpaceTechInnovation2026;