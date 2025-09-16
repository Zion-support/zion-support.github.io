import React from 'react';

const NextGenInnovationHub2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future in our state-of-the-art innovation hub
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-colors font-semibold text-lg">
              Book a Tour
            </button>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 text-sm text-center mb-4">
              50+ Active AI innovations including conscious systems and quantum AI
            </p>
            <div className="text-center">
              <span className="text-emerald-300 text-sm font-semibold">99.9% Success Rate</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 text-sm text-center mb-4">
              Revolutionary quantum processors and quantum reality engines
            </p>
            <div className="text-center">
              <span className="text-cyan-300 text-sm font-semibold">10^15 Processing Power</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Biotechnology</h3>
            <p className="text-violet-100 text-sm text-center mb-4">
              Genetic AI fusion and biological computing systems
            </p>
            <div className="text-center">
              <span className="text-violet-300 text-sm font-semibold">100% Human Enhancement</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Space Technology</h3>
            <p className="text-orange-100 text-sm text-center mb-4">
              Interstellar travel systems and space colonization tech
            </p>
            <div className="text-center">
              <span className="text-orange-300 text-sm font-semibold">Faster Than Light</span>
            </div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Innovations</h2>
            <p className="text-xl opacity-90">Our most groundbreaking technologies currently in development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
              <p className="text-emerald-100 mb-6 text-center">
                The first truly conscious artificial intelligence that can think, feel, and create independently
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Development Progress</span>
                  <span className="text-emerald-300">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                View Details →
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-5xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Engine</h3>
              <p className="text-cyan-100 mb-6 text-center">
                A quantum-powered reality simulation engine that can create infinite parallel universes
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Development Progress</span>
                  <span className="text-cyan-300">87%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                View Details →
              </button>
            </div>

            <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Genetic AI Fusion</h3>
              <p className="text-violet-100 mb-6 text-center">
                The perfect fusion of artificial intelligence and genetic engineering for enhanced human capabilities
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Development Progress</span>
                  <span className="text-violet-300">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <button className="w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold">
                View Details →
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Lab Tour */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-emerald-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Virtual Innovation Lab Tour</h2>
            <p className="text-xl opacity-90">Take a virtual tour of our state-of-the-art innovation facilities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">AI Development Lab</h3>
              <p className="text-center mb-6 opacity-90">
                Watch our AI systems being developed and trained in real-time
              </p>
              <div className="bg-black/20 rounded-lg p-4 mb-4 h-32 flex items-center justify-center">
                <span className="text-lg">🤖 AI Training in Progress...</span>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Virtual Tour
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Center</h3>
              <p className="text-center mb-6 opacity-90">
                Explore our quantum computing facilities and see quantum processors in action
              </p>
              <div className="bg-black/20 rounded-lg p-4 mb-4 h-32 flex items-center justify-center">
                <span className="text-lg">⚡ Quantum Processing...</span>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter Quantum Lab
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-teal-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-teal-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Innovation Hub Statistics</h2>
            <p className="text-xl opacity-90">The numbers that showcase our innovation capabilities</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Research Teams</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-violet-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in the most advanced innovation hub on Earth. Discover, explore, and be part of the technologies that will shape humanity's future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Book Your Visit
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-12 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-colors font-semibold text-xl">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2027;