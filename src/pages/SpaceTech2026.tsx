import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const SpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE REVOLUTION • 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Space Technology 2026
          </h1>
          <p className="text-2xl text-indigo-200 max-w-4xl mx-auto mb-8">
            Explore the next frontier with advanced space technology, interplanetary missions, and cosmic infrastructure
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Launch Into Space →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
              🌌 Mission Details
            </button>
          </div>
        </div>

        {/* Revolutionary Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Reusable Rockets</h3>
            <p className="text-indigo-200 text-center">
              Next-generation launch vehicles with full reusability and rapid turnaround capabilities
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Mega Constellations</h3>
            <p className="text-cyan-200 text-center">
              Global internet coverage through advanced satellite networks and space-based infrastructure
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-4 text-center">🌙</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Lunar Bases</h3>
            <p className="text-emerald-200 text-center">
              Permanent human settlements on the Moon with advanced life support and resource utilization
            </p>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🌌 Advanced Space Technologies</h2>
            <p className="text-xl text-purple-200">Revolutionary innovations enabling deep space exploration</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🚀 Nuclear Propulsion</h4>
                <p className="text-gray-300">
                  Advanced nuclear thermal and electric propulsion systems for faster interplanetary travel and reduced mission times.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🛰️ Space Manufacturing</h4>
                <p className="text-gray-300">
                  Zero-gravity manufacturing facilities producing advanced materials and components impossible to create on Earth.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🔬 Space Telescopes</h4>
                <p className="text-gray-300">
                  Next-generation observatories with unprecedented resolution and sensitivity for deep space exploration.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🌍 Space Elevators</h4>
                <p className="text-gray-300">
                  Revolutionary transportation systems using carbon nanotube cables for cost-effective access to space.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">⚡ Solar Power Satellites</h4>
                <p className="text-gray-300">
                  Orbital solar power stations beaming clean energy to Earth with microwave transmission technology.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🤖 Autonomous Rovers</h4>
                <p className="text-gray-300">
                  AI-powered exploration vehicles with advanced navigation and scientific instrumentation for planetary exploration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Applications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🌍 Space Mission Applications</h2>
            <p className="text-xl text-gray-300">Transforming our understanding of the universe</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🪐</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Mars Colonization</h3>
              <p className="text-indigo-200 text-sm text-center">
                Establishing permanent human settlements on Mars with terraforming technology
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🌙</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Lunar Mining</h3>
              <p className="text-cyan-200 text-sm text-center">
                Extracting rare earth elements and water from lunar regolith for space industry
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🔭</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Exoplanet Discovery</h3>
              <p className="text-emerald-200 text-sm text-center">
                Advanced telescopes detecting habitable worlds and signs of extraterrestrial life
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">☄️</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Asteroid Mining</h3>
              <p className="text-orange-200 text-sm text-center">
                Extracting precious metals and resources from near-Earth asteroids
              </p>
            </div>
          </div>
        </div>

        {/* Space Economy */}
        <div className="bg-gradient-to-r from-blue-800/50 to-indigo-800/50 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-blue-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">💰 Space Economy Growth</h2>
            <p className="text-xl text-blue-200">The trillion-dollar space industry of the future</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">$1.2T</div>
              <div className="text-white font-semibold mb-2">Market Value</div>
              <div className="text-indigo-200 text-sm">By 2030</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-white font-semibold mb-2">Jobs Created</div>
              <div className="text-purple-200 text-sm">In space industry</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-white font-semibold mb-2">Satellites</div>
              <div className="text-cyan-200 text-sm">In orbit by 2026</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">10x</div>
              <div className="text-white font-semibold mb-2">Cost Reduction</div>
              <div className="text-emerald-200 text-sm">In launch costs</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Reach for the Stars?</h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
              Join the space revolution and be part of humanity's greatest adventure as we expand beyond Earth and explore the cosmos.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🚀 Launch Your Space Journey
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                📞 Contact Space Experts
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpaceTech2026;