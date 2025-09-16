import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const SpaceTechRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 text-white">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECH REVOLUTION • JANUARY 2027
          </div>
          <h1 className="text-6xl font-bold mb-6">
            🚀 Space Tech Revolution 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Revolutionary space technologies powered by AI, quantum computing, and advanced propulsion systems
          </p>
        </div>

        {/* Revolutionary Space Technologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Propulsion</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Quantum-powered propulsion systems that enable faster-than-light travel
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Faster-Than-Light Travel</li>
              <li>• Quantum Field Manipulation</li>
              <li>• Zero-Point Energy</li>
              <li>• Interstellar Navigation</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-xs font-semibold">
                PROTOTYPE
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">AI Space Colonies</h3>
            <p className="text-blue-100 mb-6 text-center">
              Fully autonomous space colonies managed by conscious AI systems
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Self-Sustaining Ecosystems</li>
              <li>• AI Life Support Systems</li>
              <li>• Automated Resource Management</li>
              <li>• Conscious Colony Management</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
                CONSTRUCTION
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Neural Space Interface</h3>
            <p className="text-purple-100 mb-6 text-center">
              Direct neural interfaces for controlling spacecraft and space systems
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Thought-Controlled Spacecraft</li>
              <li>• Neural Navigation Systems</li>
              <li>• Telepathic Communication</li>
              <li>• Mind-Machine Space Control</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-semibold">
                TESTING
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Terraforming AI</h3>
            <p className="text-green-100 mb-6 text-center">
              AI systems that can terraform planets for human habitation
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• Atmospheric Engineering</li>
              <li>• Climate Modification</li>
              <li>• Ecosystem Creation</li>
              <li>• Planetary Transformation</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
                RESEARCH
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⭐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Stellar Engineering</h3>
            <p className="text-orange-100 mb-6 text-center">
              Technologies for harnessing and manipulating stellar energy
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Dyson Sphere Construction</li>
              <li>• Stellar Energy Harvesting</li>
              <li>• Star System Management</li>
              <li>• Galactic Energy Grid</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold">
                CONCEPT
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌙</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Lunar Manufacturing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Automated manufacturing facilities on the Moon using local resources
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• In-Situ Resource Utilization</li>
              <li>• 3D Printing Facilities</li>
              <li>• Autonomous Mining</li>
              <li>• Lunar Base Construction</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-teal-500 text-white rounded-full text-xs font-semibold">
                OPERATIONAL
              </span>
            </div>
          </div>
        </div>

        {/* Mission Achievements */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🏆 Mission Achievements</h2>
            <p className="text-xl text-gray-300">Our revolutionary space technology milestones</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">10x</div>
              <div className="text-white font-semibold mb-1">Speed of Light</div>
              <div className="text-gray-400 text-sm">Quantum Propulsion</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-white font-semibold mb-1">Active Colonies</div>
              <div className="text-gray-400 text-sm">AI Space Colonies</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white font-semibold mb-1">Success Rate</div>
              <div className="text-gray-400 text-sm">Neural Control</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">3</div>
              <div className="text-white font-semibold mb-1">Planets</div>
              <div className="text-gray-400 text-sm">Terraforming Progress</div>
            </div>
          </div>
        </div>

        {/* Future Missions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">🚀 Upcoming Missions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-bold text-white mb-4">Interstellar Exploration</h3>
              <p className="text-indigo-100 mb-4">
                First manned mission to Proxima Centauri using quantum propulsion technology.
              </p>
              <div className="text-indigo-400 font-semibold">Launch: 2028</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-4">Mars Colony Expansion</h3>
              <p className="text-blue-100 mb-4">
                Building the first self-sustaining city on Mars with 10,000 inhabitants.
              </p>
              <div className="text-blue-400 font-semibold">Completion: 2030</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Venus Terraforming</h3>
              <p className="text-purple-100 mb-4">
                Beginning atmospheric modification of Venus for future human habitation.
              </p>
              <div className="text-purple-400 font-semibold">Start: 2029</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore the Universe?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join humanity's greatest adventure as we expand into the cosmos with revolutionary space technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              📞 Contact Mission Control
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SpaceTechRevolution2027;