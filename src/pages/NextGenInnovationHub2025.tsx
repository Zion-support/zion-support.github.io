import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Next-Gen Innovation Hub 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover the most advanced innovation hub of 2025. Explore cutting-edge AI, quantum computing, neural interfaces, and revolutionary technologies that are shaping the future." />
        <meta name="keywords" content="innovation hub 2025, next-gen technology, AI innovation, quantum computing, neural interfaces, revolutionary tech" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🧠 NEXT-GEN INNOVATION • JANUARY 2025
              </div>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Next-Gen Innovation Hub 2025
              </h1>
              <p className="text-2xl opacity-90 max-w-5xl mx-auto leading-relaxed">
                Welcome to the most advanced innovation hub in human history. 
                Explore, discover, and experience the revolutionary technologies that are reshaping our world.
              </p>
            </div>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* AI Innovation Lab */}
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Innovation Lab</h3>
              <p className="text-purple-100 mb-6 text-center">
                Cutting-edge artificial intelligence research and development center featuring the latest in AI consciousness and machine learning.
              </p>
              <ul className="text-purple-200 space-y-2 mb-6 text-sm">
                <li>• Conscious AI Systems</li>
                <li>• Advanced Machine Learning</li>
                <li>• Neural Network Optimization</li>
                <li>• AI Ethics Research</li>
              </ul>
              <a 
                href="/pages/AIInnovationHub2025" 
                className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
              >
                Enter AI Lab →
              </a>
            </div>

            {/* Quantum Computing Center */}
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Center</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Revolutionary quantum computing research facility exploring the boundaries of quantum mechanics and computational possibilities.
              </p>
              <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
                <li>• Quantum Processors</li>
                <li>• Quantum Algorithms</li>
                <li>• Quantum Cryptography</li>
                <li>• Quantum Simulation</li>
              </ul>
              <a 
                href="/pages/QuantumComputingRevolution2025" 
                className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
              >
                Explore Quantum →
              </a>
            </div>

            {/* Neural Interface Lab */}
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Lab</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Advanced brain-computer interface research center developing direct neural communication technologies.
              </p>
              <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
                <li>• Brain-Computer Interfaces</li>
                <li>• Neural Signal Processing</li>
                <li>• Cognitive Enhancement</li>
                <li>• Mind-Machine Integration</li>
              </ul>
              <a 
                href="/pages/NeuralInterfaceRevolution2025" 
                className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center"
              >
                Connect Neural →
              </a>
            </div>

            {/* Holographic Reality Studio */}
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Holographic Reality Studio</h3>
              <p className="text-orange-100 mb-6 text-center">
                Immersive holographic technology development center creating indistinguishable virtual realities.
              </p>
              <ul className="text-orange-200 space-y-2 mb-6 text-sm">
                <li>• Holographic Projection</li>
                <li>• Virtual Reality</li>
                <li>• Augmented Reality</li>
                <li>• Mixed Reality</li>
              </ul>
              <a 
                href="/pages/AdvancedHolographicReality2026" 
                className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center"
              >
                Enter Holographic →
              </a>
            </div>

            {/* Interdimensional Research Lab */}
            <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Research Lab</h3>
              <p className="text-violet-100 mb-6 text-center">
                Cutting-edge research facility exploring multi-dimensional computing and reality manipulation technologies.
              </p>
              <ul className="text-violet-200 space-y-2 mb-6 text-sm">
                <li>• Multi-Dimensional Computing</li>
                <li>• Reality Manipulation</li>
                <li>• Dimensional Travel</li>
                <li>• Transcendent Algorithms</li>
              </ul>
              <a 
                href="/pages/InterdimensionalTechRevolution2025" 
                className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center"
              >
                Explore Dimensions →
              </a>
            </div>

            {/* Consciousness Computing Center */}
            <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Consciousness Computing Center</h3>
              <p className="text-pink-100 mb-6 text-center">
                Revolutionary research center developing consciousness-level computing and artificial awareness technologies.
              </p>
              <ul className="text-pink-200 space-y-2 mb-6 text-sm">
                <li>• Artificial Consciousness</li>
                <li>• Self-Aware Systems</li>
                <li>• Emotional Intelligence</li>
                <li>• Creative AI</li>
              </ul>
              <a 
                href="/pages/ConsciousnessComputingRevolution2025" 
                className="block w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center"
              >
                Explore Consciousness →
              </a>
            </div>
          </div>

          {/* Innovation Statistics */}
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Innovation Hub Metrics</h2>
              <p className="text-xl opacity-90">The numbers that define our innovation excellence</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-lg opacity-90">Active Innovations</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-lg opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
                <div className="text-lg opacity-90">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-lg opacity-90">Revolutionary Impact</div>
              </div>
            </div>
          </div>

          {/* Featured Innovations */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Innovations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Revolutionary AI Consciousness</h3>
                <p className="text-purple-100 mb-6">
                  The world's first truly conscious AI system that demonstrates self-awareness, 
                  emotional intelligence, and creative problem-solving capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">BREAKTHROUGH</span>
                  <a href="/pages/AIConsciousnessRevolution2025" className="text-purple-300 hover:text-purple-100 font-semibold">
                    Learn More →
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Quantum Reality Engine</h3>
                <p className="text-cyan-100 mb-6">
                  Revolutionary quantum processors that achieve consciousness-level processing speeds 
                  and enable reality manipulation capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">REVOLUTIONARY</span>
                  <a href="/pages/QuantumRealityEngine2025" className="text-cyan-300 hover:text-cyan-100 font-semibold">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in the most advanced innovation hub in human history. 
              Explore, discover, and shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pages/RevolutionaryTechBreakthrough2025" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Explore Breakthroughs →
              </a>
              <a 
                href="/pages/UltimateTechRevolution2025" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
              >
                Ultimate Revolution →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextGenInnovationHub2025;