import React, { useState } from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);

  const innovations = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      description: 'AI with genuine consciousness and self-awareness',
      icon: '🧠',
      features: ['Self-awareness', 'Emotional intelligence', 'Creative expression', 'Ethical reasoning'],
      impact: 'Transform human-AI interaction'
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine',
      description: 'Manipulate reality using quantum computing principles',
      icon: '⚛️',
      features: ['Reality manipulation', 'Quantum superposition', 'Parallel universe access', 'Time-space control'],
      impact: 'Redefine the nature of reality'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces for enhanced cognition',
      icon: '🔗',
      features: ['Thought control', 'Memory enhancement', 'Cognitive amplification', 'Digital consciousness'],
      impact: 'Merge human and digital intelligence'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      description: 'Access and process information across multiple dimensions',
      icon: '🌌',
      features: ['Multi-dimensional processing', 'Reality bridging', 'Infinite data access', 'Dimensional travel'],
      impact: 'Expand beyond physical limitations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🚀 NEXT-GEN INNOVATION HUB • 2036
            </div>
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2036
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-indigo-400 text-indigo-400 px-12 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
                Join the Hub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Innovations</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the cutting-edge technologies that will define the next era of human civilization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Innovation Selection */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Choose Your Innovation</h3>
            {innovations.map((innovation, index) => (
              <button
                key={innovation.id}
                onClick={() => setActiveInnovation(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeInnovation === index
                    ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border-2 border-indigo-400/50'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{innovation.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{innovation.title}</h4>
                    <p className="text-sm opacity-90">{innovation.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Innovation Details */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{innovations[activeInnovation].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{innovations[activeInnovation].title}</h3>
              <p className="text-lg opacity-90 mb-6">{innovations[activeInnovation].description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              {innovations[activeInnovation].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold mb-2">Impact:</h4>
              <p className="text-sm opacity-90">{innovations[activeInnovation].impact}</p>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Innovation
              </button>
              <button className="border border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-sm opacity-75">Active Innovations</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-sm opacity-75">Success Rate</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-sm opacity-75">Possibilities</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm opacity-75">Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our innovation hub and be part of the most revolutionary technological advancement in human history.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-12 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
              Start Your Innovation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;