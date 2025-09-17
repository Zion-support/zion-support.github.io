import React from 'react';

const SpaceTechRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE REVOLUTION • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Space Technology Revolution 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced space technology breakthrough in human history. 
            Discover how we're making space accessible and colonizing the cosmos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🚀 Reusable Rockets
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🌍 Mars Colonization
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              ⭐ Interstellar Travel
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🛰️ Space Mining
            </span>
          </div>
        </div>

        {/* Space Technology Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Revolutionary propulsion systems enabling rapid interplanetary travel
            </p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Nuclear thermal propulsion</li>
              <li>• Ion drive technology</li>
              <li>• Fusion-powered engines</li>
              <li>• Warp drive research</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Mars Colonization</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Complete infrastructure for sustainable human settlement on Mars
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Terraforming technology</li>
              <li>• Atmospheric processors</li>
              <li>• Underground habitats</li>
              <li>• Food production systems</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Mining</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Extracting valuable resources from asteroids and celestial bodies
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Asteroid mining robots</li>
              <li>• Rare earth extraction</li>
              <li>• Water ice harvesting</li>
              <li>• Precious metal recovery</li>
            </ul>
          </div>
        </div>

        {/* Space Missions */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Space Missions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌕</div>
              <h3 className="text-xl font-bold mb-3">Lunar Base Alpha</h3>
              <p className="text-sm opacity-90">First permanent human settlement on the Moon with 1000+ residents</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔴</div>
              <h3 className="text-xl font-bold mb-3">Mars City One</h3>
              <p className="text-sm opacity-90">Self-sustaining city on Mars with advanced life support systems</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🪐</div>
              <h3 className="text-xl font-bold mb-3">Jupiter Exploration</h3>
              <p className="text-sm opacity-90">Manned mission to Jupiter's moons to search for extraterrestrial life</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">Alpha Centauri</h3>
              <p className="text-sm opacity-90">First interstellar probe to our nearest star system</p>
            </div>
          </div>
        </div>

        {/* Space Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-indigo-400 mb-2">1000+</div>
            <div className="text-lg opacity-90">Active Satellites</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">50</div>
            <div className="text-lg opacity-90">Space Colonies</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1M+</div>
            <div className="text-lg opacity-90">Space Residents</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>

        {/* Space Infrastructure */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Space Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Transportation Systems</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">🚀</span>
                  <span>Reusable rocket fleet (100+ launches/day)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">🛸</span>
                  <span>Space elevators for cargo transport</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">✈️</span>
                  <span>Hypersonic space planes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">🛰️</span>
                  <span>Orbital transfer vehicles</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Life Support Systems</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">🌱</span>
                  <span>Closed-loop agriculture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">💨</span>
                  <span>Atmospheric processors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">💧</span>
                  <span>Water recycling systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">⚡</span>
                  <span>Solar power arrays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">The Future of Space</h2>
          <div className="text-center">
            <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
              By 2030, we envision a future where space travel is as common as air travel today. 
              With our revolutionary technology, humanity will become a multi-planetary species, 
              expanding our civilization across the solar system and beyond.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-3">Earth 2.0</h3>
                <p className="opacity-90">Terraformed Mars as humanity's second home</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🛸</div>
                <h3 className="text-2xl font-bold mb-3">Interstellar Travel</h3>
                <p className="opacity-90">Journey to other star systems within our lifetime</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">👽</div>
                <h3 className="text-2xl font-bold mb-3">First Contact</h3>
                <p className="opacity-90">Discovery of intelligent extraterrestrial life</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Space?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the space revolution and be part of humanity's greatest adventure
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Book Your Space Flight
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
              Join Mars Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechRevolution2025;