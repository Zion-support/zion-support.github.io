import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🚀 SPACE TECH INNOVATION • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Space Tech Innovation 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Revolutionary space technologies that are enabling interstellar travel, space colonization, 
              and the exploration of the cosmos through advanced propulsion and life support systems.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Space Tech →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Features Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">🚀 Revolutionary Space Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the groundbreaking space technologies that are making the impossible possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Advanced Propulsion</h3>
              <p className="text-indigo-200 mb-6 text-center">
                Next-generation propulsion systems enabling faster-than-light travel and interstellar exploration
              </p>
              <ul className="text-indigo-300 space-y-2 text-sm">
                <li>• Fusion propulsion engines</li>
                <li>• Antimatter drives</li>
                <li>• Warp field technology</li>
                <li>• Quantum propulsion</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Space Colonization</h3>
              <p className="text-blue-200 mb-6 text-center">
                Self-sustaining space habitats and terraforming technologies for long-term space settlement
              </p>
              <ul className="text-blue-300 space-y-2 text-sm">
                <li>• Modular space stations</li>
                <li>• Terraforming systems</li>
                <li>• Life support systems</li>
                <li>• Resource extraction</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🛰️</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Space Exploration</h3>
              <p className="text-purple-200 mb-6 text-center">
                Autonomous spacecraft and AI-powered exploration systems for deep space missions
              </p>
              <ul className="text-purple-300 space-y-2 text-sm">
                <li>• Autonomous spacecraft</li>
                <li>• AI navigation systems</li>
                <li>• Deep space communication</li>
                <li>• Exoplanet discovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">🔬 Technical Specifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unprecedented space technology capabilities that push the boundaries of exploration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">Propulsion Systems</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Maximum Speed:</span>
                  <span className="text-white font-bold">0.1c (Light Speed)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Fuel Efficiency:</span>
                  <span className="text-white font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Range:</span>
                  <span className="text-white font-bold">Interstellar</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Acceleration:</span>
                  <span className="text-white font-bold">10g</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">Life Support Systems</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Oxygen Generation:</span>
                  <span className="text-white font-bold">100% Self-Sustaining</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Water Recycling:</span>
                  <span className="text-white font-bold">99.9% Efficiency</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Food Production:</span>
                  <span className="text-white font-bold">Hydroponic Systems</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Waste Management:</span>
                  <span className="text-white font-bold">Closed Loop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">🚀 Revolutionary Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform space exploration and colonization with these groundbreaking space technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-bold text-white mb-3">Interstellar Travel</h3>
              <p className="text-indigo-200 text-sm mb-4">
                Enable human travel to other star systems and exoplanets through advanced propulsion
              </p>
              <div className="text-indigo-300 text-xs">
                • Faster-than-light travel • Exoplanet exploration • Interstellar colonies • Deep space missions
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-white mb-3">Space Habitats</h3>
              <p className="text-blue-200 text-sm mb-4">
                Create self-sustaining space colonies and habitats for long-term space settlement
              </p>
              <div className="text-blue-300 text-xs">
                • Orbital stations • Lunar bases • Mars colonies • Asteroid mining
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-white mb-3">Space Research</h3>
              <p className="text-purple-200 text-sm mb-4">
                Conduct advanced scientific research in zero gravity and deep space environments
              </p>
              <div className="text-purple-300 text-xs">
                • Zero gravity research • Space manufacturing • Scientific experiments • Data collection
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Terraforming</h3>
              <p className="text-green-200 text-sm mb-4">
                Transform other planets and moons into habitable environments for human settlement
              </p>
              <div className="text-green-300 text-xs">
                • Atmosphere creation • Water generation • Climate control • Ecosystem development
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
              <div className="text-4xl mb-4">⛏️</div>
              <h3 className="text-xl font-bold text-white mb-3">Asteroid Mining</h3>
              <p className="text-yellow-200 text-sm mb-4">
                Extract valuable resources from asteroids and other celestial bodies
              </p>
              <div className="text-yellow-300 text-xs">
                • Resource extraction • Mining operations • Material processing • Space manufacturing
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-400/30">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Planetary Defense</h3>
              <p className="text-red-200 text-sm mb-4">
                Protect Earth from asteroid impacts and other space-based threats
              </p>
              <div className="text-red-300 text-xs">
                • Asteroid deflection • Threat detection • Defense systems • Early warning
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore the Cosmos?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the space revolution and discover how our advanced technologies can enable 
              interstellar travel, space colonization, and the exploration of the universe.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Space Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;