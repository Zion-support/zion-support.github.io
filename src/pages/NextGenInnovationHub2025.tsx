import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🤖</div>
            <h2 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h2>
            <p className="text-emerald-100 mb-6 text-center">
              Cutting-edge artificial intelligence solutions that are transforming every industry
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous AI Agents</li>
              <li>• Deep Learning Networks</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision Systems</li>
              <li>• Predictive Analytics</li>
            </ul>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">50+</div>
              <div className="text-xs opacity-80">Active Projects</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h2 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h2>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary quantum technologies that solve problems impossible for classical computers
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Machine Learning</li>
              <li>• Quantum Simulation</li>
              <li>• Quantum Networking</li>
            </ul>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-1">25+</div>
              <div className="text-xs opacity-80">Quantum Projects</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🧬</div>
            <h2 className="text-2xl font-bold mb-4 text-center">Biotechnology</h2>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced biotech solutions that enhance human capabilities and extend life
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Neural Interfaces</li>
              <li>• Genetic Engineering</li>
              <li>• Synthetic Biology</li>
              <li>• Brain-Computer Interfaces</li>
              <li>• Regenerative Medicine</li>
            </ul>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">30+</div>
              <div className="text-xs opacity-80">Bio Projects</div>
            </div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🌟 Featured Innovations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold">Autonomous AI Factory</h3>
                  <p className="text-emerald-200 text-sm">Self-building AI systems</p>
                </div>
              </div>
              <p className="text-emerald-100 mb-4">
                Revolutionary AI systems that can design, build, and optimize themselves without human intervention.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Progress: 87%</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold">Quantum Neural Networks</h3>
                  <p className="text-teal-200 text-sm">Quantum-powered AI</p>
                </div>
              </div>
              <p className="text-teal-100 mb-4">
                Neural networks that leverage quantum computing for exponential speed and capability improvements.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Progress: 72%</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold">Consciousness Transfer</h3>
                  <p className="text-cyan-200 text-sm">Digital immortality</p>
                </div>
              </div>
              <p className="text-cyan-100 mb-4">
                Technology to transfer human consciousness into digital form, enabling digital immortality.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Progress: 45%</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🌌</div>
                <div>
                  <h3 className="text-2xl font-bold">Interdimensional Computing</h3>
                  <p className="text-blue-200 text-sm">Multi-dimensional processing</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Computing systems that operate across multiple dimensions for unlimited processing power.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Progress: 23%</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{width: '23%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
            <div className="text-sm opacity-80">Active Innovations</div>
          </div>
          <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30 text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">Innovation Engine</div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-emerald-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🔬 Research Areas</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our innovation hub focuses on the most cutting-edge research areas that will define the future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">Artificial General Intelligence</h3>
              <p className="text-sm opacity-80">Developing AI systems with human-level intelligence across all domains</p>
              <div className="text-xs text-emerald-300">15 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-teal-400">Quantum Machine Learning</h3>
              <p className="text-sm opacity-80">Combining quantum computing with machine learning algorithms</p>
              <div className="text-xs text-teal-300">12 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Neural Interface Technology</h3>
              <p className="text-sm opacity-80">Direct brain-computer interfaces for enhanced human capabilities</p>
              <div className="text-xs text-cyan-300">18 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Synthetic Biology</h3>
              <p className="text-sm opacity-80">Engineering biological systems for technological applications</p>
              <div className="text-xs text-blue-300">22 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-400">Consciousness Studies</h3>
              <p className="text-sm opacity-80">Understanding and replicating human consciousness in machines</p>
              <div className="text-xs text-indigo-300">8 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">Interdimensional Physics</h3>
              <p className="text-sm opacity-80">Exploring higher dimensions for computational and energy applications</p>
              <div className="text-xs text-purple-300">5 active projects</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Collaborate with leading researchers, 
            access cutting-edge technologies, and help shape the future of humanity.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub
            </button>
            <button className="border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/20 transition-colors font-semibold text-lg">
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;