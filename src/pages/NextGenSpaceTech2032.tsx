import React from 'react';
import { Link } from 'react-router-dom';

const NextGenSpaceTech2032: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              NEXT-GEN SPACE TECH 2032
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Explore the most advanced space technologies that enable humanity to reach the stars and colonize the galaxy
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full text-lg font-semibold">
                🚀 FTL Travel
              </span>
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-full text-lg font-semibold">
                🌌 Wormhole Technology
              </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-full text-lg font-semibold">
                🏠 Space Colonies
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Space Technologies */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Faster-Than-Light Travel</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary propulsion systems that enable spacecraft to travel faster than the speed of light, making interstellar travel practical.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Alcubierre drive technology</li>
              <li>• Quantum tunnel propulsion</li>
              <li>• Interstellar journey in days</li>
              <li>• Galaxy-wide exploration</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Wormhole Technology</h3>
            <p className="text-gray-300 mb-6">
              Artificial wormholes that create shortcuts through space-time, enabling instant travel across vast distances in the universe.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Stable wormhole generation</li>
              <li>• Instantaneous travel</li>
              <li>• Intergalactic transportation</li>
              <li>• Space-time manipulation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">Space Colonies</h3>
            <p className="text-gray-300 mb-6">
              Self-sustaining space habitats that can support millions of humans in complete comfort and safety across the solar system.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• O'Neill cylinder habitats</li>
              <li>• Artificial gravity systems</li>
              <li>• Closed-loop life support</li>
              <li>• Terraforming capabilities</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-800/50 to-orange-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Antimatter Propulsion</h3>
            <p className="text-gray-300 mb-6">
              Ultra-efficient propulsion systems using antimatter as fuel, providing incredible thrust and enabling rapid acceleration.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• 100% matter-antimatter conversion</li>
              <li>• Near-light speed acceleration</li>
              <li>• Massive energy density</li>
              <li>• Interstellar mission capability</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-800/50 to-rose-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Shield Technology</h3>
            <p className="text-gray-300 mb-6">
              Advanced protective systems that shield spacecraft and colonies from cosmic radiation, micrometeorites, and other space hazards.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Magnetic field generation</li>
              <li>• Radiation deflection</li>
              <li>• Impact protection</li>
              <li>• Atmospheric containment</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">Space Manufacturing</h3>
            <p className="text-gray-300 mb-6">
              Zero-gravity manufacturing facilities that produce advanced materials and technologies impossible to create on Earth.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Zero-gravity production</li>
              <li>• Advanced material synthesis</li>
              <li>• Nanotechnology fabrication</li>
              <li>• Self-replicating systems</li>
            </ul>
          </div>
        </div>

        {/* Space Missions */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30 mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
            Revolutionary Space Missions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Alpha Centauri Mission</h3>
              <p className="text-gray-300 mb-4">
                First manned mission to our nearest star system, using FTL technology to reach Alpha Centauri in just 3 days.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• 4.37 light-years distance</li>
                <li>• 12-person crew</li>
                <li>• 2-year mission duration</li>
                <li>• Exoplanet exploration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Mars Terraforming</h3>
              <p className="text-gray-300 mb-4">
                Massive project to transform Mars into a habitable planet with Earth-like atmosphere and liquid water.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Atmospheric generation</li>
                <li>• Polar ice cap melting</li>
                <li>• Soil enhancement</li>
                <li>• Ecosystem introduction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Jupiter Mining</h3>
              <p className="text-gray-300 mb-4">
                Extraction of rare elements and resources from Jupiter's atmosphere using advanced mining technology.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Helium-3 extraction</li>
                <li>• Atmospheric processing</li>
                <li>• Automated mining drones</li>
                <li>• Resource transportation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Dyson Sphere Construction</h3>
              <p className="text-gray-300 mb-4">
                Beginning construction of a Dyson sphere around the Sun to capture all its energy for human civilization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Solar energy capture</li>
                <li>• Massive construction project</li>
                <li>• Unlimited energy supply</li>
                <li>• Advanced materials required</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            Join the Space Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of humanity's greatest adventure as we expand beyond Earth and establish our presence throughout the galaxy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/pages/UltimateTechRevolution2032" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Ultimate Tech →
            </Link>
            <Link 
              to="/pages/RevolutionaryAIBreakthrough2032" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Discover AI Breakthroughs →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2032 Next-Gen Space Tech - Reaching for the Stars
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2032;