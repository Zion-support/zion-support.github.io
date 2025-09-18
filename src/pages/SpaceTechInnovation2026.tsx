import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH 2026 • SPACE TECHNOLOGY
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Space Technology Innovation 2026
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary space technology that will make human colonization of Mars and deep space exploration a reality.
=======
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore the final frontier with our revolutionary space technology solutions that are 
            making interplanetary travel, space colonization, and cosmic exploration a reality.
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Space Tech →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Next-generation propulsion systems that enable faster-than-light travel 
              and efficient interplanetary missions.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Ion drive technology</li>
              <li>• Nuclear propulsion</li>
              <li>• Antimatter engines</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Habitats</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-sustaining space habitats that support human life in the harsh 
              environment of space and other planets.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Life support systems</li>
              <li>• Artificial gravity</li>
              <li>• Closed-loop ecosystems</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Satellite Networks</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Global satellite constellations that provide worldwide internet coverage, 
              Earth observation, and space-based services.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Global internet coverage</li>
              <li>• Real-time Earth monitoring</li>
              <li>• Space-based manufacturing</li>
            </ul>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Revolutionary Space Technologies</h2>
            <p className="text-xl opacity-90">Cutting-edge technologies that are making space exploration accessible</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌌</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Warp Drive Technology</h3>
                  <p className="text-gray-300">Theoretical faster-than-light travel using space-time manipulation for interstellar exploration.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Terraforming Systems</h3>
                  <p className="text-gray-300">Advanced systems for making other planets habitable for human colonization.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Space Solar Power</h3>
                  <p className="text-gray-300">Orbital solar power stations that beam clean energy to Earth and space colonies.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔬</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Space Manufacturing</h3>
                  <p className="text-gray-300">Zero-gravity manufacturing facilities that produce materials impossible to create on Earth.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Autonomous Spacecraft</h3>
                  <p className="text-gray-300">AI-powered spacecraft that can operate independently for long-duration missions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌙</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lunar Base Technology</h3>
                  <p className="text-gray-300">Permanent lunar bases with advanced life support and resource extraction systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Technology Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Propulsion Systems</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Fusion Engine Power</span>
                <span className="text-white font-bold">10 GW</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Mars Transit Time</span>
                <span className="text-white font-bold">30 days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Payload Capacity</span>
                <span className="text-white font-bold">1000 tons</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Fuel Efficiency</span>
                <span className="text-white font-bold">1000x better</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Life Support Systems</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Oxygen Generation</span>
                <span className="text-white font-bold">100% recycled</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Water Recycling</span>
                <span className="text-white font-bold">99.9% efficient</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Food Production</span>
                <span className="text-white font-bold">Hydroponic farms</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Radiation Protection</span>
                <span className="text-white font-bold">99.9% effective</span>
              </div>
            </div>
          </div>
=======
        {/* Mission Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🎯 Mission Capabilities</h2>
            <p className="text-xl opacity-90">Comprehensive space technology solutions for every mission type</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
              <div className="text-4xl mb-4">🪐</div>
              <h3 className="text-lg font-semibold mb-2">Planetary Exploration</h3>
              <p className="text-sm text-gray-300">Robotic missions to explore Mars, Europa, and other celestial bodies.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Space Colonization</h3>
              <p className="text-sm text-gray-300">Establishing permanent human settlements on Mars and the Moon.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Space Mining</h3>
              <p className="text-sm text-gray-300">Extracting valuable resources from asteroids and other space objects.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-lg font-semibold mb-2">Deep Space Observation</h3>
              <p className="text-sm text-gray-300">Advanced telescopes and observatories for studying the universe.</p>
            </div>
          </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 The Future of Space Technology</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              By 2030, we envision a future where space technology has transformed humanity's relationship 
              with the cosmos, enabling sustainable space colonization and interplanetary commerce.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Earth-Space Economy</h3>
              <p className="text-gray-300">A thriving economy spanning Earth and space, with regular commerce between planets.</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">Multi-Planetary Species</h3>
              <p className="text-gray-300">Humanity established as a multi-planetary species with colonies across the solar system.</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Scientific Breakthroughs</h3>
              <p className="text-gray-300">Revolutionary discoveries in physics, biology, and materials science made possible by space research.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Reach for the Stars?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the space revolution and be part of humanity's greatest adventure. 
            Our space technology solutions are making the impossible possible.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Space Mission
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Contact Space Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;