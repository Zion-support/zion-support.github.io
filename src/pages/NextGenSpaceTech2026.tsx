import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Next-Gen Space Technology 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore revolutionary space technologies that are making interplanetary travel and space colonization a reality" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN SPACE TECH • 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Next-Generation Space Technology 2026
          </h1>
          <p className="text-2xl text-cyan-200 max-w-4xl mx-auto">
            Revolutionary space technologies that are making interplanetary travel, space colonization, 
            and cosmic exploration accessible to humanity
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Interplanetary Travel Systems */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-6 text-center">🚀</div>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Interplanetary Travel Systems</h2>
            <p className="text-cyan-100 mb-6 text-lg">
              Advanced propulsion systems enabling rapid travel between planets, 
              making Mars colonization and deep space exploration a reality.
            </p>
            <ul className="text-cyan-200 space-y-3 mb-6">
              <li>• Nuclear thermal propulsion engines</li>
              <li>• Ion drive technology</li>
              <li>• Solar sail systems</li>
              <li>• Mars transit in 30 days</li>
              <li>• Reusable spacecraft technology</li>
            </ul>
            <div className="text-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Explore Space Travel →
              </button>
            </div>
          </div>

          {/* Space Habitats & Colonies */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-6 text-center">🏠</div>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Space Habitats & Colonies</h2>
            <p className="text-purple-100 mb-6 text-lg">
              Self-sustaining space habitats with advanced life support systems, 
              enabling long-term human presence in space.
            </p>
            <ul className="text-purple-200 space-y-3 mb-6">
              <li>• Modular space station designs</li>
              <li>• Advanced life support systems</li>
              <li>• Artificial gravity technology</li>
              <li>• Closed-loop ecosystems</li>
              <li>• 3D printing in zero gravity</li>
            </ul>
            <div className="text-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Discover Habitats →
              </button>
            </div>
          </div>

          {/* Asteroid Mining Technology */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-6 text-center">⛏️</div>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Asteroid Mining Technology</h2>
            <p className="text-emerald-100 mb-6 text-lg">
              Revolutionary mining systems for extracting precious metals and resources 
              from asteroids, fueling Earth's economy and space expansion.
            </p>
            <ul className="text-emerald-200 space-y-3 mb-6">
              <li>• Autonomous mining robots</li>
              <li>• In-situ resource utilization</li>
              <li>• Precious metal extraction</li>
              <li>• Water ice harvesting</li>
              <li>• Space manufacturing</li>
            </ul>
            <div className="text-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Explore Mining →
              </button>
            </div>
          </div>

          {/* Space-Based Solar Power */}
          <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
            <div className="text-6xl mb-6 text-center">☀️</div>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Space-Based Solar Power</h2>
            <p className="text-yellow-100 mb-6 text-lg">
              Massive solar arrays in space providing unlimited clean energy to Earth, 
              solving the global energy crisis and climate change.
            </p>
            <ul className="text-yellow-200 space-y-3 mb-6">
              <li>• Orbital solar power stations</li>
              <li>• Wireless power transmission</li>
              <li>• 24/7 solar energy collection</li>
              <li>• Zero atmospheric interference</li>
              <li>• Unlimited energy capacity</li>
            </ul>
            <div className="text-center">
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition-colors font-semibold">
                Discover Solar Power →
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Technologies Section */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Advanced Space Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold text-white mb-2">Satellite Constellations</h3>
              <p className="text-cyan-200">Global internet coverage from space</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-white mb-2">Space Telescopes</h3>
              <p className="text-purple-200">Deep space observation and discovery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Terraforming</h3>
              <p className="text-emerald-200">Planetary environment modification</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Space Suits</h3>
              <p className="text-yellow-200">Advanced life support systems</p>
            </div>
          </div>
        </div>

        {/* Mission Timeline */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Mission Timeline 2026</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
              <div className="text-white">
                <strong>Q1 2026:</strong> First successful Mars landing with human crew
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <div className="text-white">
                <strong>Q2 2026:</strong> Space-based solar power station deployment
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
              <div className="text-white">
                <strong>Q3 2026:</strong> First asteroid mining operation launch
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <div className="text-white">
                <strong>Q4 2026:</strong> Permanent space habitat establishment
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Space Revolution</h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            Be part of humanity's greatest adventure as we expand into the cosmos and establish our presence among the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Space Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Explore Missions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2026;