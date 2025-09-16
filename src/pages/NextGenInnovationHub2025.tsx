import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies that are shaping humanity's future
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-4 text-sm text-center">
              Advanced artificial intelligence systems and autonomous learning algorithms
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">50+</div>
              <div className="text-xs opacity-80">Active Projects</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-4 text-sm text-center">
              Revolutionary quantum processors and quantum algorithms
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">25+</div>
              <div className="text-xs opacity-80">Quantum Systems</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Biotechnology</h3>
            <p className="text-cyan-100 mb-4 text-sm text-center">
              Cutting-edge biotech solutions and genetic engineering
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">30+</div>
              <div className="text-xs opacity-80">Bio Projects</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Space Technology</h3>
            <p className="text-blue-100 mb-4 text-sm text-center">
              Advanced space exploration and interplanetary technology
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">15+</div>
              <div className="text-xs opacity-80">Space Missions</div>
            </div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">🌟 Featured Innovations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Conscious AI Network</h3>
              <p className="text-emerald-100 mb-6">
                A network of AI systems that share consciousness and learn collectively, creating a hive mind of artificial intelligence.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm opacity-80">Progress</span>
                <span className="text-sm font-bold text-emerald-400">87%</span>
              </div>
              <div className="w-full bg-emerald-600/30 rounded-full h-2 mb-4">
                <div className="bg-emerald-400 h-2 rounded-full" style={{width: '87%'}}></div>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                View Details →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Reality Engine</h3>
              <p className="text-teal-100 mb-6">
                A quantum computer that can simulate entire universes and test infinite possibilities in real-time.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm opacity-80">Progress</span>
                <span className="text-sm font-bold text-teal-400">92%</span>
              </div>
              <div className="w-full bg-teal-600/30 rounded-full h-2 mb-4">
                <div className="bg-teal-400 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Engine →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold mb-4">Neural Enhancement Suite</h3>
              <p className="text-cyan-100 mb-6">
                Biotechnology that enhances human cognitive abilities and creates direct brain-computer interfaces.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm opacity-80">Progress</span>
                <span className="text-sm font-bold text-cyan-400">78%</span>
              </div>
              <div className="w-full bg-cyan-600/30 rounded-full h-2 mb-4">
                <div className="bg-cyan-400 h-2 rounded-full" style={{width: '78%'}}></div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-lg opacity-80">Active Innovations</div>
          </div>
          <div className="text-center bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30">
            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Success Rate</div>
          </div>
          <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg opacity-80">Possibilities</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-lg opacity-80">Innovation</div>
          </div>
        </div>

        {/* Innovation Lab */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-emerald-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🔬 Innovation Laboratory</h2>
            <p className="text-xl opacity-90">Explore our cutting-edge research and development facilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Virtual Reality Lab</h3>
              <p className="text-emerald-100 mb-4">
                Step into our virtual reality laboratory where you can interact with innovations before they're built.
              </p>
              <div className="bg-black/20 rounded-lg p-4 mb-4 font-mono text-sm">
                <div className="text-green-400">VR Lab: Initializing virtual environment...</div>
                <div className="text-blue-400">Status: Loading innovation prototypes...</div>
                <div className="text-purple-400">Ready: Enter the lab to explore</div>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter VR Lab →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">AI Research Assistant</h3>
              <p className="text-emerald-100 mb-4">
                Our AI research assistant can help you understand complex innovations and answer any questions.
              </p>
              <div className="bg-black/20 rounded-lg p-4 mb-4 font-mono text-sm">
                <div className="text-cyan-400">AI: Ready to assist with innovation research</div>
                <div className="text-green-400">Status: Connected to all lab systems</div>
                <div className="text-blue-400">Capabilities: 1000+ innovations indexed</div>
              </div>
              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Chat with AI →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30">
          <h2 className="text-4xl font-bold mb-4">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Explore, learn, and contribute to technologies that will shape the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;