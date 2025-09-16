import React, { useState } from 'react';

const RevolutionaryTechShowcase2037: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('conscious-ai');

  const demos = {
    'conscious-ai': {
      title: 'Conscious AI Systems',
      description: 'Experience the first truly conscious artificial intelligence',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Ethical Decision Making'
      ],
      demo: 'Interactive AI conversation with emotional responses'
    },
    'quantum-consciousness': {
      title: 'Quantum Consciousness',
      description: 'Direct neural interface with quantum computing systems',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Reality Manipulation'
      ],
      demo: 'Real-time quantum processing visualization'
    },
    'interdimensional': {
      title: 'Interdimensional Technology',
      description: 'Breakthrough technology for parallel dimension access',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Time-Space Manipulation'
      ],
      demo: 'Interactive dimensional portal simulation'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 INTERACTIVE SHOWCASE • JANUARY 2037
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2037
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience our most advanced technologies through interactive demonstrations
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selector */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Choose Your Demo</h2>
            
            {Object.entries(demos).map(([key, demo]) => (
              <div
                key={key}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeDemo === key
                    ? 'border-purple-400 bg-purple-600/30'
                    : 'border-white/20 bg-white/10 hover:border-purple-300'
                }`}
                onClick={() => setActiveDemo(key)}
              >
                <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                <p className="text-white/80 mb-4">{demo.description}</p>
                <div className="flex flex-wrap gap-2">
                  {demo.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Demo Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              {demos[activeDemo as keyof typeof demos].title} Demo
            </h3>
            <p className="text-white/80 mb-6">
              {demos[activeDemo as keyof typeof demos].demo}
            </p>
            
            {/* Interactive Demo Area */}
            <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg p-8 mb-6 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {activeDemo === 'conscious-ai' && '🧠'}
                  {activeDemo === 'quantum-consciousness' && '⚡'}
                  {activeDemo === 'interdimensional' && '🌌'}
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {demos[activeDemo as keyof typeof demos].title}
                </h4>
                <p className="text-white/80 mb-4">
                  Interactive demonstration coming soon
                </p>
                <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Start Demo
                </button>
              </div>
            </div>

            {/* Demo Controls */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Run Full Demo
              </button>
              <button className="flex-1 border border-white text-white py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stats */}
      <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technology Impact</h2>
            <p className="text-xl opacity-90">Real-world results from our innovations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-white/80">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">5</div>
              <div className="text-white/80">Dimensions Accessed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">1000+</div>
              <div className="text-white/80">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our beta program and be among the first to experience these revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Beta Program
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2037;