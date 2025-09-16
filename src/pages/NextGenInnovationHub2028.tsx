import React from 'react';

const NextGenInnovationHub2028: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION • JANUARY 2028
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The world's most advanced innovation hub where cutting-edge technologies are born and perfected
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
                Join the Hub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the diverse range of revolutionary technologies being developed in our innovation hub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced artificial intelligence and machine learning systems that push the boundaries of what's possible
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Deep Learning Networks</li>
              <li>• Neural Architecture Search</li>
              <li>• Reinforcement Learning</li>
              <li>• Transfer Learning</li>
            </ul>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore AI →
            </button>
          </div>

          {/* Quantum Computing */}
          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary quantum computing technologies that solve problems impossible for classical computers
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Error Correction</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Simulation</li>
            </ul>
            <button className="block w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center">
              Enter Quantum →
            </button>
          </div>

          {/* Neural Interfaces */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Direct brain-computer interfaces that enable seamless communication between mind and machine
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Brain-Computer Interfaces</li>
              <li>• Neural Signal Processing</li>
              <li>• Cognitive Enhancement</li>
              <li>• Thought Control</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Connect Mind →
            </button>
          </div>

          {/* Biotechnology */}
          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧪</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-green-100 mb-6 text-center">
              Cutting-edge biotechnology solutions that merge biology with technology for revolutionary applications
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• Synthetic Biology</li>
              <li>• Gene Editing</li>
              <li>• Bio-Engineering</li>
              <li>• Medical AI</li>
            </ul>
            <button className="block w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center">
              Explore Bio →
            </button>
          </div>

          {/* Space Technology */}
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Advanced space technologies that enable exploration and colonization of the cosmos
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Space Exploration</li>
              <li>• Satellite Technology</li>
              <li>• Space Manufacturing</li>
              <li>• Interplanetary Travel</li>
            </ul>
            <button className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Reach for Stars →
            </button>
          </div>

          {/* Virtual Reality */}
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🥽</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Virtual Reality</h3>
            <p className="text-violet-100 mb-6 text-center">
              Immersive virtual reality experiences that blur the line between digital and physical worlds
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Immersive VR</li>
              <li>• Haptic Feedback</li>
              <li>• Virtual Worlds</li>
              <li>• Mixed Reality</li>
            </ul>
            <button className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center">
              Enter Virtual World →
            </button>
          </div>
        </div>

        {/* Innovation Labs */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-emerald-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Innovation Labs</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              State-of-the-art laboratories where the future is being built today
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">🧠 AI Research Lab</h3>
              <p className="text-white/80 mb-6">
                Our AI research lab is developing the next generation of artificial intelligence systems with unprecedented capabilities.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Research Progress</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Visit Lab
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">⚡ Quantum Lab</h3>
              <p className="text-white/80 mb-6">
                The quantum computing lab is pushing the boundaries of what's possible with quantum technology.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Quantum Breakthroughs</span>
                  <span>87%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Innovation Statistics</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our innovation hub by the numbers
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-lg text-emerald-200">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-lg text-cyan-200">Research Scientists</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">50+</div>
              <div className="text-lg text-teal-200">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-lg text-green-200">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our innovation hub and be part of creating the technologies that will shape tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join the Hub
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2028;