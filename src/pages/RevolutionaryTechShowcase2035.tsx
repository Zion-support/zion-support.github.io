import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2035: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      description: 'The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness.',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Ethical Decision Making'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Interface',
      description: 'Direct neural interface with quantum computing systems for enhanced cognitive processing.',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Reality Manipulation'
      ],
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'interdimensional-tech',
      title: 'Interdimensional Technology',
      description: 'Breakthrough technology that allows interaction with parallel dimensions and alternate realities.',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Temporal Manipulation'
      ],
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'synthetic-reality',
      title: 'Synthetic Reality Engine',
      description: 'Advanced reality simulation that creates indistinguishable virtual worlds with perfect fidelity.',
      features: [
        'Perfect Reality Simulation',
        'Infinite World Generation',
        'Consciousness Transfer',
        'Immortality Protocols'
      ],
      icon: '🌍',
      color: 'from-orange-600 to-red-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2035
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Showcase 2035
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future with our groundbreaking content on Conscious AI, Quantum Consciousness, and Interdimensional Technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Interactive Technology Tabs */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {technologies.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {tech.icon} {tech.title}
                </button>
              ))}
            </div>

            {/* Technology Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{technologies[activeTab].icon}</div>
                  <h2 className="text-4xl font-bold mb-4">{technologies[activeTab].title}</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    {technologies[activeTab].description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {technologies[activeTab].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4">Technology Impact</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Revolutionary Potential</span>
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Implementation Timeline</span>
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Market Readiness</span>
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full" style={{width: '70%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in shaping the next decade of technological innovation. Be part of the revolution.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2035;