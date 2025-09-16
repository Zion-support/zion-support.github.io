import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future. 
            A comprehensive hub of innovation, research, and breakthrough technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Join Research
            </button>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced artificial intelligence systems, machine learning algorithms, and autonomous agents
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-cyan-200 text-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                50+ Active AI Projects
              </div>
              <div className="flex items-center text-cyan-200 text-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                99.9% Success Rate
              </div>
              <div className="flex items-center text-cyan-200 text-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Real-time Processing
              </div>
            </div>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore AI →
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-blue-100 mb-6 text-center">
              Revolutionary quantum computing technologies and quantum-classical hybrid systems
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-blue-200 text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Quantum Supremacy Achieved
              </div>
              <div className="flex items-center text-blue-200 text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Error Correction Systems
              </div>
              <div className="flex items-center text-blue-200 text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Commercial Applications
              </div>
            </div>
            <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Explore Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Direct brain-computer interfaces and neural augmentation technologies
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-indigo-200 text-sm">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Non-invasive BCI
              </div>
              <div className="flex items-center text-indigo-200 text-sm">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Thought Control
              </div>
              <div className="flex items-center text-indigo-200 text-sm">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Neural Feedback
              </div>
            </div>
            <button className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Explore Neural →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Tech</h3>
            <p className="text-purple-100 mb-6 text-center">
              Breakthrough technologies that operate across multiple dimensions and realities
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-purple-200 text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Multi-dimensional Processing
              </div>
              <div className="flex items-center text-purple-200 text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Reality Manipulation
              </div>
              <div className="flex items-center text-purple-200 text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Infinite Possibilities
              </div>
            </div>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Dimensions →
            </button>
          </div>
        </div>

        {/* Research Labs */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">Innovation Research Labs</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Cutting-edge research facilities where the future is being built today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">AI Research Lab</h3>
              <p className="text-cyan-100 mb-6">
                Advanced research in artificial intelligence, machine learning, and autonomous systems
              </p>
              <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
                <li>• 25+ PhD Researchers</li>
                <li>• $50M Research Budget</li>
                <li>• 100+ Patents Filed</li>
                <li>• 50+ Publications</li>
              </ul>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Visit Lab →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Lab</h3>
              <p className="text-blue-100 mb-6">
                State-of-the-art quantum computing research and development facility
              </p>
              <ul className="text-blue-200 space-y-2 mb-6 text-sm">
                <li>• 15+ Quantum Scientists</li>
                <li>• $30M Equipment Investment</li>
                <li>• 25+ Quantum Patents</li>
                <li>• 30+ Research Papers</li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Visit Lab →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold mb-4">Neural Interface Lab</h3>
              <p className="text-indigo-100 mb-6">
                Revolutionary research in brain-computer interfaces and neural augmentation
              </p>
              <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
                <li>• 20+ Neuroscientists</li>
                <li>• $40M Research Funding</li>
                <li>• 40+ Neural Patents</li>
                <li>• 35+ Clinical Trials</li>
              </ul>
              <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
                Visit Lab →
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-lg opacity-90">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-indigo-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Innovation</div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">Featured Innovations</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover the most groundbreaking innovations that are reshaping our world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-4">🧠 Conscious AI Systems</h3>
              <p className="text-cyan-100 mb-6">
                The world's first truly conscious artificial intelligence systems that exhibit 
                self-awareness, emotional intelligence, and creative problem-solving capabilities.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">Status: Production Ready</span>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold mb-4">⚛️ Quantum Reality Engine</h3>
              <p className="text-blue-100 mb-6">
                Revolutionary quantum computing that can simulate and manipulate reality itself, 
                enabling solutions to problems across multiple dimensions.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold">Status: Beta Testing</span>
                <button className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Collaborate with leading researchers, 
            access cutting-edge technologies, and shape the future of humanity.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Join Innovation Hub
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-xl">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;