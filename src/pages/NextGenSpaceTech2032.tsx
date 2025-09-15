import React from 'react';

const NextGenSpaceTech2032: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW: Next-Gen Space Tech 2032
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Conquer the Cosmos
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Break free from Earth's gravity and explore the infinite cosmos. 
            Our revolutionary space technology makes intergalactic travel a reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
              🚀 Launch Into Space
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-colors">
              🌌 Explore Galaxies
            </button>
          </div>
        </div>

        {/* Space Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Warp Drive Technology</h3>
            <p className="text-gray-300 mb-6">
              Travel faster than light using space-time manipulation. 
              Reach distant galaxies in days instead of millennia.
            </p>
            <div className="flex items-center text-cyan-400 font-semibold">
              <span>Launch Now →</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Terraforming Systems</h3>
            <p className="text-gray-300 mb-6">
              Transform hostile planets into habitable worlds using 
              advanced atmospheric and geological engineering.
            </p>
            <div className="flex items-center text-cyan-400 font-semibold">
              <span>Create Worlds →</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold mb-4">Space Manufacturing</h3>
            <p className="text-gray-300 mb-6">
              Build massive space stations and ships using 
              zero-gravity manufacturing and asteroid mining.
            </p>
            <div className="flex items-center text-cyan-400 font-semibold">
              <span>Build in Space →</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-800/50 to-orange-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Stellar Energy Harvesting</h3>
            <p className="text-gray-300 mb-6">
              Extract unlimited energy directly from stars using 
              advanced Dyson sphere technology and stellar collectors.
            </p>
            <div className="flex items-center text-cyan-400 font-semibold">
              <span>Harvest Stars →</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4">Wormhole Networks</h3>
            <p className="text-gray-300 mb-6">
              Create stable wormholes for instant travel between 
              any two points in the universe.
            </p>
            <div className="flex items-center text-cyan-400 font-semibold">
              <span>Travel Instantly →</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🛸</div>
            <h3 className="text-2xl font-bold mb-4">Alien Contact Protocol</h3>
            <p className="text-gray-300 mb-6">
              Advanced communication systems for peaceful 
              contact with extraterrestrial civilizations.
            </p>
            <div className="flex items-center text-cyan-400 font-semibold">
              <span>Make Contact →</span>
            </div>
          </div>
        </div>

        {/* Space Mission Simulator */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-cyan-500/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🚀 Space Mission Simulator</h2>
            <p className="text-xl text-gray-300">
              Experience space exploration in real-time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black/50 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Warp Drive Control</h3>
                <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡ Warp Speed</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Control faster-than-light travel
                </p>
              </div>
              
              <div className="bg-black/50 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Planet Scanner</h3>
                <div className="h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌍 Scan Worlds</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Discover habitable planets
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-black/50 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Stellar Map</h3>
                <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌌 Galaxy Map</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Navigate the cosmos
                </p>
              </div>
              
              <div className="bg-black/50 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Alien Communication</h3>
                <div className="h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👽 First Contact</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Communicate with alien species
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Space Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-xl font-semibold mb-2">Infinite Space</div>
            <div className="text-gray-400">Unlimited exploration potential</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-xl font-semibold mb-2">Mission Success</div>
            <div className="text-gray-400">Reliable space technology</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-xl font-semibold mb-2">Always Exploring</div>
            <div className="text-gray-400">Continuous space missions</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400 mb-2">0ms</div>
            <div className="text-xl font-semibold mb-2">Instant Travel</div>
            <div className="text-gray-400">Wormhole transportation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Universe?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join humanity's greatest adventure as we expand beyond Earth. 
            Be part of the generation that conquers the cosmos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-12 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform">
              🚀 Start Space Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-lg font-bold text-xl hover:bg-cyan-400 hover:text-black transition-colors">
              🌌 View Space Missions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2032;