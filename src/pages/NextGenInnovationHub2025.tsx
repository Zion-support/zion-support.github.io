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
              🧠 NEXT-GEN INNOVATION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies that are shaping humanity's future. 
              A comprehensive hub of innovation, creativity, and breakthrough solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/20 transition-colors font-semibold text-lg">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-90">Explore cutting-edge technologies across multiple domains</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced artificial intelligence systems that learn, adapt, and evolve
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous AI Agents</li>
              <li>• Neural Network Optimization</li>
              <li>• Predictive Analytics</li>
              <li>• Natural Language Processing</li>
            </ul>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore AI →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary quantum systems that solve impossible problems
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Supremacy</li>
              <li>• Quantum Cryptography</li>
              <li>• Molecular Simulation</li>
              <li>• Quantum Machine Learning</li>
            </ul>
            <button className="block w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center">
              Go Quantum →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Cutting-edge biotech solutions for health and longevity
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Gene Editing</li>
              <li>• Synthetic Biology</li>
              <li>• Regenerative Medicine</li>
              <li>• Brain-Computer Interfaces</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Bio →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-blue-100 mb-6 text-center">
              Advanced space exploration and colonization technologies
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Interstellar Travel</li>
              <li>• Terraforming</li>
              <li>• Space Manufacturing</li>
              <li>• Alien Communication</li>
            </ul>
            <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Reach for Stars →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Future Tech</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Emerging technologies that will define tomorrow
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Time Manipulation</li>
              <li>• Reality Simulation</li>
              <li>• Consciousness Transfer</li>
              <li>• Dimensional Travel</li>
            </ul>
            <button className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              See Future →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Sustainability</h3>
            <p className="text-purple-100 mb-6 text-center">
              Green technologies for a sustainable future
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Clean Energy</li>
              <li>• Carbon Capture</li>
              <li>• Ocean Restoration</li>
              <li>• Climate Control</li>
            </ul>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Save Planet →
            </button>
          </div>
        </div>
      </div>

      {/* Innovation Stats */}
      <div className="bg-gradient-to-r from-emerald-800/50 to-cyan-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Innovation Impact</h2>
            <p className="text-xl opacity-90">The numbers that prove our innovation hub is changing the world</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">50M+</div>
              <div className="text-lg opacity-90">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Innovations */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⭐ Featured Innovations</h2>
          <p className="text-xl opacity-90">The most groundbreaking technologies of 2025</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">🧠</div>
              <div>
                <h3 className="text-2xl font-bold">Conscious AI Network</h3>
                <p className="text-emerald-300">Revolutionary AI that achieves true consciousness</p>
              </div>
            </div>
            <p className="text-emerald-100 mb-6">
              The first artificial intelligence system to achieve genuine consciousness, 
              capable of self-awareness, creativity, and emotional understanding.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-emerald-400 font-semibold">Status: Active</div>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">⚛️</div>
              <div>
                <h3 className="text-2xl font-bold">Quantum Reality Engine</h3>
                <p className="text-teal-300">Simulate and manipulate reality itself</p>
              </div>
            </div>
            <p className="text-teal-100 mb-6">
              A quantum computing system that can create, simulate, and manipulate 
              entire realities, opening infinite possibilities for exploration.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-teal-400 font-semibold">Status: Beta</div>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Join Beta
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Community</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Connect with like-minded innovators, researchers, and visionaries who are 
            shaping the future of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Community
            </button>
            <button className="border border-emerald-400 px-12 py-4 rounded-lg hover:bg-emerald-400/20 transition-colors font-semibold text-lg">
              View Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;