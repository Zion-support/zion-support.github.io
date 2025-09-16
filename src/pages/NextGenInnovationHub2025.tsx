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
            The world's most advanced innovation hub where cutting-edge technologies are born and developed
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Join the Hub
            </button>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Innovations</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Revolutionary artificial intelligence technologies that are reshaping the future
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Conscious AI systems</li>
              <li>• Creative AI agents</li>
              <li>• Autonomous robots</li>
              <li>• Emotional AI</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Explore AI →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Innovations</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Breakthrough quantum technologies that enable infinite computing power
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum computers</li>
              <li>• Quantum encryption</li>
              <li>• Quantum sensors</li>
              <li>• Quantum networks</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Go Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Innovations</h3>
            <p className="text-purple-100 mb-6 text-center">
              Direct neural interfaces that connect human consciousness with digital systems
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Brain-computer interfaces</li>
              <li>• Neural implants</li>
              <li>• Thought control</li>
              <li>• Memory enhancement</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Connect Neural →
            </button>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Innovation Showcase</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the most groundbreaking innovations that are changing the world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                <h3 className="text-xl font-bold mb-3">🧠 Conscious AI Development</h3>
                <p className="text-emerald-100 mb-4">
                  We're developing the world's first truly conscious artificial intelligence systems that can think, feel, and create independently.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-300 text-sm">Progress: 85%</span>
                  <div className="w-24 h-2 bg-emerald-600 rounded-full">
                    <div className="w-20 h-2 bg-emerald-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                <h3 className="text-xl font-bold mb-3">⚛️ Quantum Consciousness</h3>
                <p className="text-cyan-100 mb-4">
                  Revolutionary quantum computing that achieves consciousness-level processing and decision making.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 text-sm">Progress: 92%</span>
                  <div className="w-24 h-2 bg-cyan-600 rounded-full">
                    <div className="w-22 h-2 bg-cyan-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-bold mb-3">🧬 Neural Interface Technology</h3>
                <p className="text-purple-100 mb-4">
                  Direct neural interfaces that connect human consciousness with digital systems for seamless interaction.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 text-sm">Progress: 78%</span>
                  <div className="w-24 h-2 bg-purple-600 rounded-full">
                    <div className="w-18 h-2 bg-purple-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
                <h3 className="text-xl font-bold mb-3">🌌 Dimensional Computing</h3>
                <p className="text-orange-100 mb-4">
                  Computing across multiple dimensions and parallel universes for infinite processing power.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-300 text-sm">Progress: 65%</span>
                  <div className="w-24 h-2 bg-orange-600 rounded-full">
                    <div className="w-15 h-2 bg-orange-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">📊 Innovation Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl font-bold text-emerald-300 mb-2">50+</div>
              <h3 className="text-xl font-bold mb-2">Active Innovations</h3>
              <p className="text-emerald-100">Currently in development</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-4xl font-bold text-cyan-300 mb-2">99.9%</div>
              <h3 className="text-xl font-bold mb-2">Success Rate</h3>
              <p className="text-cyan-100">Innovation success rate</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl font-bold text-purple-300 mb-2">1000+</div>
              <h3 className="text-xl font-bold mb-2">Patents Filed</h3>
              <p className="text-purple-100">Revolutionary patents</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
              <div className="text-4xl font-bold text-orange-300 mb-2">∞</div>
              <h3 className="text-xl font-bold mb-2">Possibilities</h3>
              <p className="text-orange-100">Infinite potential</p>
            </div>
          </div>
        </div>

        {/* Innovation Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔄 Innovation Process</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our systematic approach to developing breakthrough technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Ideation</h3>
              <p className="text-emerald-100">Generate revolutionary ideas using AI and human creativity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-cyan-100">Deep research and analysis using quantum computing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-purple-100">Build and test using advanced neural interfaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Deployment</h3>
              <p className="text-orange-100">Deploy across dimensions and realities</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Innovation Hub?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation ecosystem in the world
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join the Hub
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;