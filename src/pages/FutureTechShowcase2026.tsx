import React from 'react';

const FutureTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 FUTURE TECH SHOWCASE 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tomorrow's Technology Today
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technologies that will shape our future and transform the way we live, work, and interact
          </p>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-managing AI systems that learn, adapt, and evolve without human intervention
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Autonomous decision making</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Self-healing capabilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Continuous learning</span>
              </div>
            </div>
            <a href="/pages/SyntheticIntelligence2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Systems →
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary quantum computers solving problems impossible for classical computers
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-200 text-sm">Exponential speed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-200 text-sm">Quantum cryptography</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-200 text-sm">Molecular simulation</span>
              </div>
            </div>
            <a href="/pages/AdvancedQuantumComputing2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Discover Quantum →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces enabling seamless mind-machine communication
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Thought control</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Neural feedback</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Medical applications</span>
              </div>
            </div>
            <a href="/pages/AdvancedNeuralInterface2026" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Mind & Machine →
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced space exploration and colonization technologies
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-orange-200 text-sm">Space habitats</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-orange-200 text-sm">Interplanetary travel</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-orange-200 text-sm">Asteroid mining</span>
              </div>
            </div>
            <a href="/pages/NextGenTechShowcase2025" className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Explore Space →
            </a>
          </div>

          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Metaverse Solutions</h3>
            <p className="text-violet-100 mb-6 text-center">
              Immersive virtual worlds and digital reality experiences
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-violet-200 text-sm">Virtual reality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-violet-200 text-sm">Augmented reality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-violet-200 text-sm">Digital twins</span>
              </div>
            </div>
            <a href="/pages/NextGenTechShowcase2025" className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center">
              Enter Metaverse →
            </a>
          </div>

          <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum-Neural Fusion</h3>
            <p className="text-yellow-100 mb-6 text-center">
              Revolutionary combination of quantum and neural computing
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-200 text-sm">Quantum processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-200 text-sm">Neural networks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-200 text-sm">Fusion acceleration</span>
              </div>
            </div>
            <a href="/pages/QuantumNeuralFusion2026" className="block w-full bg-white text-yellow-600 py-3 rounded-lg hover:bg-yellow-50 transition-colors font-semibold text-center">
              Experience Fusion →
            </a>
          </div>
        </div>

        {/* Technology Impact */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Technology Impact</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              See how our future technologies are transforming industries and creating new opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-lg font-semibold mb-2">AI Models</div>
              <div className="text-gray-300 text-sm">Deployed globally</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Quantum Accuracy</div>
              <div className="text-gray-300 text-sm">In computations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1M+</div>
              <div className="text-lg font-semibold mb-2">Neural Connections</div>
              <div className="text-gray-300 text-sm">Per second</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-lg font-semibold mb-2">Countries</div>
              <div className="text-gray-300 text-sm">Served worldwide</div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-slate-900/50 to-gray-900/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔮 Future Vision</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Our vision for the future of technology and how it will transform our world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Autonomous Future</h3>
                  <p className="text-gray-300">
                    AI systems that work independently, making decisions and solving problems without human intervention
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quantum Revolution</h3>
                  <p className="text-gray-300">
                    Quantum computing solving complex problems that are impossible for classical computers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-2xl">
                  🧬
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mind-Machine Fusion</h3>
                  <p className="text-gray-300">
                    Direct neural interfaces enabling seamless communication between mind and machine
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Space Colonization</h3>
                  <p className="text-gray-300">
                    Advanced space technologies enabling human colonization of other planets
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl">
                  🌐
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Digital Reality</h3>
                  <p className="text-gray-300">
                    Immersive virtual worlds where physical and digital realities merge seamlessly
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-2xl">
                  ⚛️
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quantum-Neural Fusion</h3>
                  <p className="text-gray-300">
                    Revolutionary combination of quantum and neural computing for unprecedented power
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future of technology. Our innovative solutions are transforming industries and creating new possibilities for tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/RevolutionaryTech2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Future Tech
            </a>
            <a href="/pages/NextGenInnovation2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              See Innovations
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechShowcase2026;