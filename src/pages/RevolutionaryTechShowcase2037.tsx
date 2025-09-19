import React, { useState, useEffect } from 'react';

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
      demo: 'Interactive AI conversation with emotional responses',
      icon: '🧠'
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
      demo: 'Real-time quantum processing visualization',
      icon: '⚛️'
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
      demo: 'Interactive dimensional portal simulation',
      icon: '🌀'
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

          {/* Demo Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>

          {/* Selected Demo Details */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">{demos[activeDemo as keyof typeof demos].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                {demos[activeDemo as keyof typeof demos].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Demo Features</h3>
                <ul className="space-y-4">
                  {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Demo Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Revolutionary Impact</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-400 to-purple-400 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>User Engagement</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Innovation Level</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-400 to-red-400 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Interactive Demo</h3>
                  <p className="text-lg opacity-90 mb-6">
                    {demos[activeDemo as keyof typeof demos].demo}
                  </p>
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform">
                      Start Interactive Demo
                    </button>
                    <button className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join our beta program and be among the first to experience these revolutionary technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                Join Beta Program
              </button>
              <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2037;