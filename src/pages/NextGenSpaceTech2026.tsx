import React from 'react';

const NextGenSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN SPACE TECH • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Next-Gen Space Technology 2026
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary space technology powered by AI, quantum computing, and advanced materials, 
            enabling humanity's expansion into the cosmos.
          </p>
        </div>

        {/* Revolutionary Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered Spacecraft</h3>
            <p className="text-purple-100 mb-6 text-center">
              Autonomous spacecraft with AI navigation, self-repair capabilities, and intelligent mission planning
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Autonomous navigation</li>
              <li>• Self-repair systems</li>
              <li>• Intelligent mission planning</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Space Communication</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Instantaneous communication across vast distances using quantum entanglement and AI processing
            </p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Quantum entanglement networks</li>
              <li>• Instantaneous data transfer</li>
              <li>• Secure space communication</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Manufacturing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Zero-gravity manufacturing facilities producing advanced materials and components in space
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Zero-gravity production</li>
              <li>• Advanced material synthesis</li>
              <li>• Orbital assembly stations</li>
            </ul>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌠 Space Technology Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge space technology enabling humanity's expansion into the solar system and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Advanced Propulsion</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Fusion-powered engines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Antimatter propulsion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Solar sail technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Ion drive systems</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Space Habitats</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span>Rotating space stations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span>Mars colony modules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span>Lunar base systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span>Orbital cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">🪐 Interplanetary Missions</h3>
            <p className="text-purple-100 mb-4">
              Advanced missions to explore and colonize planets throughout our solar system with AI-guided spacecraft.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Mars colonization</li>
              <li>• Europa exploration</li>
              <li>• Asteroid mining</li>
              <li>• Gas giant missions</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <h3 className="text-2xl font-bold mb-6 text-indigo-400">🌌 Deep Space Exploration</h3>
            <p className="text-indigo-100 mb-4">
              Pioneering missions to explore the outer reaches of our solar system and beyond using quantum technology.
            </p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Interstellar probes</li>
              <li>• Exoplanet discovery</li>
              <li>• Dark matter research</li>
              <li>• Wormhole exploration</li>
            </ul>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">0.1c</div>
            <div className="text-gray-300">Maximum speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">1000</div>
            <div className="text-gray-300">Years mission duration</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Mission success rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">∞</div>
            <div className="text-gray-300">Discovery potential</div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🌟 The Future of Space Exploration</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
              By 2030, we envision a network of space stations, Mars colonies, and deep space outposts, 
              all connected by quantum communication networks and powered by AI systems.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🏠</div>
                <h3 className="text-xl font-bold mb-2">Space Colonies</h3>
                <p className="text-purple-200">Self-sustaining human settlements across the solar system</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h3 className="text-xl font-bold mb-2">Interplanetary Internet</h3>
                <p className="text-purple-200">Quantum communication network connecting all space assets</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-xl font-bold mb-2">Interstellar Travel</h3>
                <p className="text-purple-200">Human missions to nearby star systems within our lifetime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Join the Space Revolution</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Be part of humanity's greatest adventure as we expand into the cosmos with next-generation space technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
                Explore Space Tech
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
                Join Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2026;