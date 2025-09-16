import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Welcome to the most advanced innovation hub in the universe. 
              Discover, explore, and create with cutting-edge technologies that are reshaping reality itself.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Enter Innovation Hub
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
                Explore Labs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Labs Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔬 Innovation Labs</h2>
          <p className="text-xl opacity-90">Explore our cutting-edge research and development facilities</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotech Innovation Lab</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary biotechnology research creating life-changing medical breakthroughs and genetic enhancements
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Genetic Engineering</li>
              <li>• Regenerative Medicine</li>
              <li>• Neural Enhancement</li>
              <li>• Longevity Research</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Enter Biotech Lab →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Lab</h3>
            <p className="text-blue-100 mb-6 text-center">
              Developing the next generation of conscious AI systems with emotional intelligence and creative capabilities
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Emotional AI</li>
              <li>• Creative Intelligence</li>
              <li>• Self-Awareness</li>
              <li>• Consciousness Transfer</li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Enter AI Lab →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Lab</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Pushing the boundaries of quantum computing to achieve impossible computational feats
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum AI</li>
              <li>• Quantum Reality</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Enter Quantum Lab →
            </button>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌟 Latest Innovations</h2>
            <p className="text-xl opacity-90">Discover our most recent breakthrough technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Neural Interface 2.0</h3>
                  <p className="text-cyan-100">
                    Direct brain-computer interface technology that allows seamless communication between human consciousness and AI systems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌐</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Metaverse Integration</h3>
                  <p className="text-blue-100">
                    Complete integration of physical and digital realities, creating immersive experiences beyond imagination.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔮</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Predictive Analytics</h3>
                  <p className="text-indigo-100">
                    AI-powered prediction systems that can forecast future events with unprecedented accuracy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Space Technology</h3>
                  <p className="text-cyan-100">
                    Advanced space exploration technologies enabling intergalactic travel and colonization.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Environmental Solutions</h3>
                  <p className="text-blue-100">
                    Revolutionary technologies for climate restoration and sustainable living.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Energy Revolution</h3>
                  <p className="text-indigo-100">
                    Clean, unlimited energy solutions that will power the future of humanity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📊 Innovation Impact</h2>
          <p className="text-xl opacity-90">See the incredible impact of our innovations</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 text-center">
            <div className="text-5xl font-bold text-cyan-300 mb-2">500+</div>
            <p className="text-cyan-200 text-lg">Active Projects</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 text-center">
            <div className="text-5xl font-bold text-blue-300 mb-2">99.9%</div>
            <p className="text-blue-200 text-lg">Success Rate</p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 text-center">
            <div className="text-5xl font-bold text-indigo-300 mb-2">∞</div>
            <p className="text-indigo-200 text-lg">Possibilities</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center">
            <div className="text-5xl font-bold text-purple-300 mb-2">24/7</div>
            <p className="text-purple-200 text-lg">Innovation</p>
          </div>
        </div>

        {/* Innovation Partners */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🤝 Innovation Partners</h2>
          <p className="text-xl opacity-90">Collaborating with the world's leading organizations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-2">Fortune 500 Companies</h3>
              <p className="text-cyan-100">
                Partnering with the world's largest corporations to implement revolutionary technologies
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-2">Leading Universities</h3>
              <p className="text-blue-100">
                Collaborating with top research institutions to push the boundaries of human knowledge
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-2">Global Organizations</h3>
              <p className="text-indigo-100">
                Working with international organizations to solve global challenges
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the universe. 
            Collaborate with leading scientists, engineers, and visionaries to create the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Join Innovation Hub
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-xl">
              Explore Labs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;