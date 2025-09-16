import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenSpaceTech2028: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white">
      <Helmet>
        <title>Next-Gen Space Tech 2028 - Zion Tech Group</title>
        <meta name="description" content="Explore the most advanced space technology of 2028 that will enable intergalactic travel and space colonization" />
        <meta name="keywords" content="space technology 2028, space travel, space colonization, intergalactic, space exploration" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-black px-8 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            🌌 NEXT-GEN SPACE TECH 2028
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            Intergalactic Future
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary space technologies that will make intergalactic travel and space colonization a reality in 2028
          </p>
        </div>

        {/* Space Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-800 to-cyan-800 p-8 rounded-3xl border border-blue-500 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Warp Drive Technology</h3>
            <p className="text-gray-300">
              Faster-than-light travel using space-time manipulation, enabling journeys to distant galaxies in days.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-8 rounded-3xl border border-purple-500 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4">Space Habitats</h3>
            <p className="text-gray-300">
              Self-sustaining space cities with artificial gravity, atmosphere, and complete life support systems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-800 to-emerald-800 p-8 rounded-3xl border border-green-500 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Terraforming AI</h3>
            <p className="text-gray-300">
              AI systems that can transform any planet into a habitable world for human colonization.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-800 to-orange-800 p-8 rounded-3xl border border-red-500 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Zero-Point Energy</h3>
            <p className="text-gray-300">
              Unlimited clean energy extraction from the quantum vacuum for space propulsion and life support.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-800 to-orange-800 p-8 rounded-3xl border border-yellow-500 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🛸</div>
            <h3 className="text-2xl font-bold mb-4">Antigravity Vehicles</h3>
            <p className="text-gray-300">
              Personal spacecraft that can hover and fly using antigravity technology for easy space travel.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-800 to-purple-800 p-8 rounded-3xl border border-pink-500 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Matter Replication</h3>
            <p className="text-gray-300">
              Technology that can create any material or object from energy, enabling unlimited resources in space.
            </p>
          </div>
        </div>

        {/* Space Missions Timeline */}
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Space Mission Timeline 2028
          </h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">January 2028: Mars Colony Launch</h3>
                <p className="text-gray-300">First permanent human settlement on Mars with 1000 colonists</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <div>
                <h3 className="text-xl font-bold text-purple-400">March 2028: Jupiter Mission</h3>
                <p className="text-gray-300">First manned mission to Jupiter's moons for resource extraction</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <div>
                <h3 className="text-xl font-bold text-green-400">June 2028: Alpha Centauri</h3>
                <p className="text-gray-300">First probe reaches Alpha Centauri using warp drive technology</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400">September 2028: Space Elevator</h3>
                <p className="text-gray-300">First space elevator operational, making space travel as easy as taking an elevator</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
              <div>
                <h3 className="text-xl font-bold text-pink-400">December 2028: Intergalactic Gateway</h3>
                <p className="text-gray-300">First intergalactic travel gateway opens to Andromeda galaxy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Space Technology Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">Revolutionary Propulsion</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Warp drive for faster-than-light travel</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Antimatter engines for maximum efficiency</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Solar sail technology for long-distance missions</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Ion propulsion for precise maneuvering</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-6 text-purple-400">Life Support Systems</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Closed-loop life support with 100% recycling</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Artificial gravity generation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Atmospheric generation and maintenance</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Radiation shielding technology</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-black px-12 py-6 rounded-full text-2xl font-bold inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">
            Join the Space Revolution →
          </div>
          <p className="text-gray-300 mt-6 text-lg">
            Be among the first to explore the infinite cosmos
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2028;