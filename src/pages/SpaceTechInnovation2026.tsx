import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH 2026 • SPACE TECHNOLOGY
          </div>
          <h1 className="text-6xl font-bold mb-6">
            Space Technology Innovation 2026
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Pioneering the next frontier with revolutionary space technologies, 
            interplanetary communication, and advanced space exploration systems
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#missions" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Missions
            </a>
            <a href="#technologies" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors font-semibold text-lg">
              View Technologies
            </a>
          </div>
        </div>

        {/* Mission Overview */}
        <section id="missions" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌌 Revolutionary Space Missions</h2>
            <p className="text-xl text-gray-300">Pioneering missions that are reshaping our understanding of the universe</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🪐</div>
              <h3 className="text-2xl font-bold text-center mb-4">Mars Colonization</h3>
              <p className="text-cyan-100 text-center mb-6">
                Advanced life support systems and terraforming technologies for sustainable human settlement on Mars
              </p>
              <ul className="text-sm text-cyan-200 space-y-2">
                <li>• Atmospheric processing</li>
                <li>• Water extraction systems</li>
                <li>• Radiation shielding</li>
                <li>• Sustainable agriculture</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🌙</div>
              <h3 className="text-2xl font-bold text-center mb-4">Lunar Gateway</h3>
              <p className="text-purple-100 text-center mb-6">
                Permanent lunar base with advanced mining operations and deep space mission staging
              </p>
              <ul className="text-sm text-purple-200 space-y-2">
                <li>• Helium-3 mining</li>
                <li>• Lunar manufacturing</li>
                <li>• Deep space launch pad</li>
                <li>• Research laboratories</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🛸</div>
              <h3 className="text-2xl font-bold text-center mb-4">Interstellar Exploration</h3>
              <p className="text-emerald-100 text-center mb-6">
                Breakthrough propulsion systems enabling exploration of nearby star systems
              </p>
              <ul className="text-sm text-emerald-200 space-y-2">
                <li>• Fusion propulsion</li>
                <li>• Light sail technology</li>
                <li>• Cryogenic hibernation</li>
                <li>• Autonomous navigation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⚡ Cutting-Edge Space Technologies</h2>
            <p className="text-xl text-gray-300">Revolutionary technologies powering the future of space exploration</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quantum Communication Networks</h3>
              <p className="text-gray-300 mb-6">
                Ultra-secure quantum communication systems enabling instant data transmission across vast distances in space.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">Entangled particle communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">Zero-latency data transfer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">Unhackable encryption</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Advanced Propulsion Systems</h3>
              <p className="text-gray-300 mb-6">
                Next-generation propulsion technologies enabling faster, more efficient space travel.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">Nuclear fusion engines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">Antimatter propulsion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">Solar sail technology</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Space Manufacturing</h3>
              <p className="text-gray-300 mb-6">
                Zero-gravity manufacturing facilities producing advanced materials impossible to create on Earth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm">Crystal growth facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm">3D printing in space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm">Advanced alloy production</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">AI-Powered Space Systems</h3>
              <p className="text-gray-300 mb-6">
                Autonomous AI systems managing complex space operations and mission planning.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">Autonomous mission planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">Predictive maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">Real-time decision making</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Space Applications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌍 Earth & Space Applications</h2>
            <p className="text-xl text-gray-300">How space technology is transforming life on Earth and beyond</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold mb-2">Satellite Networks</h3>
              <p className="text-blue-100 text-sm">Global internet coverage, weather monitoring, and Earth observation</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Space Agriculture</h3>
              <p className="text-green-100 text-sm">Advanced farming techniques for sustainable food production in space</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">Space Research</h3>
              <p className="text-purple-100 text-sm">Microgravity research advancing medicine, materials, and physics</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Space Energy</h3>
              <p className="text-orange-100 text-sm">Solar power satellites and space-based renewable energy systems</p>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">🔮 The Future of Space Exploration</h2>
              <p className="text-xl text-gray-300">Envisioning humanity's journey to the stars</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🌌</div>
                <h3 className="text-2xl font-bold mb-4">Interstellar Travel</h3>
                <p className="text-gray-300">
                  Breakthrough propulsion technologies enabling human exploration of nearby star systems within our lifetime.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold mb-4">Space Colonies</h3>
                <p className="text-gray-300">
                  Self-sustaining space habitats supporting thousands of residents with advanced life support systems.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">👽</div>
                <h3 className="text-2xl font-bold mb-4">First Contact</h3>
                <p className="text-gray-300">
                  Advanced detection systems and communication technologies for potential contact with extraterrestrial civilizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">Join the Space Revolution</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Be part of humanity's greatest adventure as we pioneer the next frontier of space exploration 
              and establish our presence among the stars.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg">
                Start Your Journey
              </a>
              <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold text-lg">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;