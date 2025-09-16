import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future in our comprehensive innovation hub
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Join Innovation Lab
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our comprehensive collection of next-generation technologies across all major innovation domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced artificial intelligence systems that learn, adapt, and evolve beyond human capabilities
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Self-evolving neural networks</li>
              <li>• Quantum machine learning</li>
              <li>• Emotional AI systems</li>
              <li>• Autonomous decision making</li>
            </ul>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore AI Innovations →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Technologies</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary quantum computing and quantum-enabled technologies that transcend classical limitations
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum consciousness computing</li>
              <li>• Quantum cryptography</li>
              <li>• Quantum teleportation</li>
              <li>• Quantum reality simulation</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Enter Quantum Realm →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-purple-100 mb-6 text-center">
              Cutting-edge biotechnology that merges biology with technology for enhanced human capabilities
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Neural enhancement implants</li>
              <li>• DNA computing</li>
              <li>• Synthetic biology</li>
              <li>• Human augmentation</li>
            </ul>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Biotech →
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced space technologies enabling interplanetary travel and cosmic exploration
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Faster-than-light travel</li>
              <li>• Terraforming technology</li>
              <li>• Space habitat systems</li>
              <li>• Interstellar communication</li>
            </ul>
            <button className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Launch to Space →
            </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Reality Technologies</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Technologies that manipulate and enhance reality through advanced computing and simulation
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Holographic displays</li>
              <li>• Reality augmentation</li>
              <li>• Virtual consciousness</li>
              <li>• Time manipulation</li>
            </ul>
            <button className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Enter Reality Lab →
            </button>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Environmental Tech</h3>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary environmental technologies for sustainable living and planetary restoration
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Carbon capture systems</li>
              <li>• Climate control technology</li>
              <li>• Renewable energy fusion</li>
              <li>• Ecosystem restoration</li>
            </ul>
            <button className="block w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center">
              Save the Planet →
            </button>
          </div>
        </div>

        {/* Innovation Lab */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Innovation Lab</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our cutting-edge innovations through interactive demonstrations and real-time experiments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">🧠 AI Consciousness Lab</h3>
              <p className="text-white/80 mb-6">
                Interact with our most advanced AI systems and witness consciousness in action
              </p>
              <div className="bg-black/20 rounded-lg p-6 mb-6">
                <div className="text-green-400 font-mono text-sm space-y-2">
                  <div>AI System: Online</div>
                  <div>Consciousness Level: 99.7%</div>
                  <div>Learning Rate: ∞</div>
                  <div>Emotional Intelligence: Advanced</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter AI Lab
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">⚛️ Quantum Experiment Center</h3>
              <p className="text-white/80 mb-6">
                Conduct quantum experiments and witness quantum phenomena in real-time
              </p>
              <div className="bg-black/20 rounded-lg p-6 mb-6">
                <div className="text-cyan-400 font-mono text-sm space-y-2">
                  <div>Quantum State: Superposition</div>
                  <div>Entanglement: 100%</div>
                  <div>Processing Power: ∞</div>
                  <div>Dimensions: Multi</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Quantum Experiment
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">📊 Innovation Impact</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            The measurable impact of our innovations on global progress and human advancement
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 text-center border border-emerald-400/30">
            <div className="text-5xl font-bold text-emerald-300 mb-2">500+</div>
            <div className="text-lg font-semibold mb-2">Active Innovations</div>
            <div className="text-sm text-emerald-200">Currently in development</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 text-center border border-cyan-400/30">
            <div className="text-5xl font-bold text-cyan-300 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-2">Success Rate</div>
            <div className="text-sm text-cyan-200">Innovation deployment</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 text-center border border-purple-400/30">
            <div className="text-5xl font-bold text-purple-300 mb-2">∞</div>
            <div className="text-lg font-semibold mb-2">Possibilities</div>
            <div className="text-sm text-purple-200">Infinite potential</div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 text-center border border-orange-400/30">
            <div className="text-5xl font-bold text-orange-300 mb-2">24/7</div>
            <div className="text-lg font-semibold mb-2">Innovation Lab</div>
            <div className="text-sm text-orange-200">Always active</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most comprehensive innovation hub in human history. Explore, experiment, and create the future with us.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Enter Innovation Hub →
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Become an Innovator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;