import React from 'react';
import { Link } from 'react-router-dom';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECH REVOLUTION 2026
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Space Technology Innovation 2026
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Pioneering the next frontier of space exploration with cutting-edge technologies, autonomous systems, and revolutionary propulsion methods that are making space more accessible than ever.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#technologies" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Technologies →
            </a>
            <a href="#missions" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg">
              View Missions
            </a>
          </div>
        </div>

        {/* Key Technologies Grid */}
        <div id="technologies" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous Satellites</h3>
            <p className="text-gray-600 mb-6 text-center">
              Self-managing satellite constellations with AI-powered decision-making and autonomous operations.
            </p>
            <ul className="text-indigo-600 space-y-2 mb-6 text-sm">
              <li>• AI-powered navigation</li>
              <li>• Self-healing systems</li>
              <li>• Autonomous maintenance</li>
            </ul>
            <a href="#satellites" className="block w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Learn More →
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Manufacturing</h3>
            <p className="text-gray-600 mb-6 text-center">
              Zero-gravity manufacturing facilities producing advanced materials and components impossible to create on Earth.
            </p>
            <ul className="text-indigo-600 space-y-2 mb-6 text-sm">
              <li>• Crystal growth</li>
              <li>• Advanced alloys</li>
              <li>• Pharmaceutical production</li>
            </ul>
            <a href="#manufacturing" className="block w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore →
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Deep Space Exploration</h3>
            <p className="text-gray-600 mb-6 text-center">
              Revolutionary propulsion systems and life support technologies enabling missions to Mars and beyond.
            </p>
            <ul className="text-indigo-600 space-y-2 mb-6 text-sm">
              <li>• Nuclear propulsion</li>
              <li>• Closed-loop life support</li>
              <li>• Advanced shielding</li>
            </ul>
            <a href="#exploration" className="block w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Discover →
            </a>
          </div>
        </div>

        {/* Revolutionary Technologies Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6">🌟 Next-Generation Space Technologies</h2>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto">
                Experience the future of space exploration with our revolutionary technologies that are making the impossible possible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
                <div className="text-6xl mb-4 text-center">⚡</div>
                <h3 className="text-3xl font-bold mb-4 text-center">Advanced Propulsion</h3>
                <p className="text-indigo-100 mb-6 text-center text-lg">
                  Revolutionary propulsion systems including ion drives, nuclear thermal, and breakthrough antimatter engines.
                </p>
                <ul className="text-indigo-200 space-y-3 mb-6">
                  <li>• Ion propulsion systems</li>
                  <li>• Nuclear thermal rockets</li>
                  <li>• Antimatter containment</li>
                  <li>• Fusion propulsion</li>
                </ul>
                <a href="#propulsion" className="block w-full bg-white text-indigo-600 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-lg">
                  Explore Propulsion →
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <div className="text-6xl mb-4 text-center">🤖</div>
                <h3 className="text-3xl font-bold mb-4 text-center">Space Robotics</h3>
                <p className="text-purple-100 mb-6 text-center text-lg">
                  Autonomous robotic systems for construction, maintenance, and exploration in the harsh environment of space.
                </p>
                <ul className="text-purple-200 space-y-3 mb-6">
                  <li>• Autonomous construction</li>
                  <li>• Self-repairing systems</li>
                  <li>• Swarm intelligence</li>
                  <li>• Human-robot collaboration</li>
                </ul>
                <a href="#robotics" className="block w-full bg-white text-purple-600 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-lg">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Applications */}
        <div id="missions" className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🚀 Mission Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Earth Observation</h3>
              <p className="text-gray-600 mb-6">
                Advanced satellite networks providing real-time monitoring of climate, agriculture, and environmental changes.
              </p>
              <div className="space-y-2 text-sm text-indigo-600">
                <div>• Climate monitoring</div>
                <div>• Agricultural assessment</div>
                <div>• Disaster response</div>
                <div>• Urban planning</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🔭</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Space Telescopes</h3>
              <p className="text-gray-600 mb-6">
                Next-generation space observatories with unprecedented resolution and sensitivity for deep space exploration.
              </p>
              <div className="space-y-2 text-sm text-indigo-600">
                <div>• Exoplanet detection</div>
                <div>• Dark matter research</div>
                <div>• Gravitational waves</div>
                <div>• Cosmic origins</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🏭</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Space Mining</h3>
              <p className="text-gray-600 mb-6">
                Extracting valuable resources from asteroids and other celestial bodies to support Earth's growing needs.
              </p>
              <div className="space-y-2 text-sm text-indigo-600">
                <div>• Rare earth elements</div>
                <div>• Water extraction</div>
                <div>• Fuel production</div>
                <div>• Construction materials</div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">💡 Innovation Showcase</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">NEW</span>
                <span className="text-sm text-gray-500">Breakthrough Technology</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Space Communication</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary quantum communication networks enabling instant, secure data transmission across vast distances in space.
              </p>
              <a href="#quantum-comm" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Learn About Quantum Communication →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">INNOVATION</span>
                <span className="text-sm text-gray-500">Space Technology</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">3D Printing in Space</h3>
              <p className="text-gray-600 mb-4">
                Advanced 3D printing technologies enabling on-demand manufacturing of tools, parts, and structures in zero gravity.
              </p>
              <a href="#3d-printing" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Explore 3D Printing →
              </a>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">🌌 The Future of Space</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Envisioning a future where space is not just a destination, but a new frontier for human civilization and technological advancement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-bold mb-2">Space Colonies</h3>
              <p className="text-sm opacity-80">Self-sustaining habitats on Mars and beyond</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Space Solar</h3>
              <p className="text-sm opacity-80">Clean energy beamed from space to Earth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Space Tourism</h3>
              <p className="text-sm opacity-80">Affordable access to space for everyone</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-xl font-bold mb-2">Space Labs</h3>
              <p className="text-sm opacity-80">Advanced research facilities in microgravity</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Reach for the Stars?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the space technology revolution and be part of humanity's greatest adventure. 
            Discover how our cutting-edge solutions can help you achieve your space ambitions.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Space Journey
            </a>
            <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;