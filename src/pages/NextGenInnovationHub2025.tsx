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
              Discover and explore the most revolutionary technologies shaping humanity's future. 
              From synthetic intelligence to quantum neural fusion and consciousness computing.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-90">Explore cutting-edge technologies across multiple domains</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Intelligence</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced AI systems that surpass human intelligence in all domains
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• 50+ Active Projects</li>
              <li>• 99.9% Success Rate</li>
              <li>• Infinite Possibilities</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Explore →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Neural Fusion</h3>
            <p className="text-blue-100 mb-6 text-center">
              Revolutionary fusion of quantum computing and neural networks
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Speed Processing</li>
              <li>• Neural Pattern Recognition</li>
              <li>• Real-time Learning</li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Discover →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Consciousness Computing</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Computing systems that possess consciousness and self-awareness
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Self-Aware Systems</li>
              <li>• Emotional Processing</li>
              <li>• Creative Problem Solving</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Learn More →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Tech</h3>
            <p className="text-purple-100 mb-6 text-center">
              Technology that operates across multiple dimensions
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Multi-Dimensional Processing</li>
              <li>• Reality Simulation</li>
              <li>• Infinite Storage</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore →
            </button>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌟 Featured Innovations</h2>
            <p className="text-xl opacity-90">Latest breakthroughs in technology and science</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔬</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Scientific Breakthroughs</h3>
                  <p className="text-cyan-100">
                    Revolutionary discoveries in physics, chemistry, and biology that are reshaping our understanding of reality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Global Impact</h3>
                  <p className="text-cyan-100">
                    Technologies that are solving global challenges in healthcare, energy, and environmental sustainability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Space Exploration</h3>
                  <p className="text-cyan-100">
                    Advanced propulsion systems and life support technologies enabling deep space exploration and colonization.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🧬</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Biotech Revolution</h3>
                  <p className="text-cyan-100">
                    Genetic engineering and synthetic biology breakthroughs that are extending human lifespan and capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔮</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Predictive Analytics</h3>
                  <p className="text-cyan-100">
                    AI systems that can predict future events with unprecedented accuracy using quantum computing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌐</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Digital Reality</h3>
                  <p className="text-cyan-100">
                    Immersive virtual worlds that are indistinguishable from physical reality, enabling new forms of interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Innovation Statistics</h2>
            <p className="text-xl opacity-90">Our impact on the world of technology</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-xl opacity-90">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-xl opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-indigo-400 mb-2">50M+</div>
              <div className="text-xl opacity-90">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-xl opacity-90">Innovation</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the future. Join thousands of innovators, researchers, and technologists who are shaping tomorrow's world today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;