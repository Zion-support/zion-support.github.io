import React from 'react';
import { Link } from 'react-router-dom';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2026
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Welcome to the future of innovation. Our cutting-edge hub brings together the brightest minds, 
              most advanced technologies, and revolutionary ideas to create tomorrow's solutions today.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/pages/RevolutionaryTechInsights2026" 
                className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Explore Innovations →
              </Link>
              <Link 
                to="/pages/AdvancedAISolutions2026" 
                className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300 font-semibold text-lg"
              >
                AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Innovation Categories</h2>
          <p className="text-xl text-gray-300">Explore our comprehensive range of next-generation technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & Machine Learning */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence systems, neural networks, and machine learning algorithms 
              that power intelligent automation and decision-making.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-pink-400">• Autonomous AI Agents</div>
              <div className="text-pink-400">• Neural Network Optimization</div>
              <div className="text-pink-400">• Predictive Analytics</div>
              <div className="text-pink-400">• Natural Language Processing</div>
            </div>
            <Link 
              to="/pages/AdvancedAISolutions2026" 
              className="text-pink-400 hover:text-pink-300 font-semibold"
            >
              Explore AI Solutions →
            </Link>
          </div>

          {/* Quantum Computing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing solutions that harness quantum mechanics 
              to solve complex problems exponentially faster than classical computers.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-cyan-400">• Quantum Algorithms</div>
              <div className="text-cyan-400">• Quantum Cryptography</div>
              <div className="text-cyan-400">• Quantum Machine Learning</div>
              <div className="text-cyan-400">• Quantum Simulation</div>
            </div>
            <Link 
              to="/pages/QuantumComputingRevolution2026" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Discover Quantum →
            </Link>
          </div>

          {/* Biotechnology */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Biotechnology</h3>
            <p className="text-gray-300 mb-6">
              Cutting-edge biotechnology solutions that combine AI with genetic engineering 
              to create personalized medical treatments and enhanced human capabilities.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-green-400">• Gene Editing</div>
              <div className="text-green-400">• Personalized Medicine</div>
              <div className="text-green-400">• Synthetic Biology</div>
              <div className="text-green-400">• Bio-Interfaces</div>
            </div>
            <Link 
              to="/pages/BiotechRevolution2026" 
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Explore Biotech →
            </Link>
          </div>

          {/* Blockchain & Web3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⛓️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Blockchain & Web3</h3>
            <p className="text-gray-300 mb-6">
              Next-generation blockchain technologies and Web3 solutions that enable 
              decentralized applications, smart contracts, and digital ownership.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-yellow-400">• Smart Contracts</div>
              <div className="text-yellow-400">• DeFi Protocols</div>
              <div className="text-yellow-400">• NFT Marketplaces</div>
              <div className="text-yellow-400">• DAO Governance</div>
            </div>
            <Link 
              to="/pages/BlockchainRevolution2026" 
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Enter Web3 →
            </Link>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6">
              Advanced cybersecurity solutions powered by AI and quantum encryption 
              to protect against emerging threats and ensure data integrity.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-red-400">• Quantum Encryption</div>
              <div className="text-red-400">• AI Threat Detection</div>
              <div className="text-red-400">• Zero-Trust Architecture</div>
              <div className="text-red-400">• Behavioral Analytics</div>
            </div>
            <Link 
              to="/pages/CybersecurityFortress2026" 
              className="text-red-400 hover:text-red-300 font-semibold"
            >
              Secure Your Data →
            </Link>
          </div>

          {/* Space Technology */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary space technologies enabling interplanetary communication, 
              asteroid mining, and the establishment of sustainable space colonies.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-purple-400">• Satellite Networks</div>
              <div className="text-purple-400">• Space Mining</div>
              <div className="text-purple-400">• Interplanetary Internet</div>
              <div className="text-purple-400">• Space Habitats</div>
            </div>
            <Link 
              to="/pages/SpaceTechRevolution2026" 
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Reach for the Stars →
            </Link>
          </div>
        </div>
      </div>

      {/* Innovation Process */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Innovation Process</h2>
          <p className="text-xl text-gray-300">How we turn ideas into revolutionary solutions</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Research</h3>
            <p className="text-gray-300">Deep dive into emerging technologies and market needs</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Prototype</h3>
            <p className="text-gray-300">Build and test innovative solutions rapidly</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Validate</h3>
            <p className="text-gray-300">Test with real users and refine based on feedback</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
            <p className="text-gray-300">Deploy and scale solutions for maximum impact</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the Innovation Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with us to access cutting-edge technologies, expert guidance, and innovative solutions 
            that will transform your business and shape the future.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
            >
              Start Your Innovation Journey
            </Link>
            <Link 
              to="/pages/RevolutionaryTechInsights2026" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold text-lg"
            >
              Explore Our Insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;