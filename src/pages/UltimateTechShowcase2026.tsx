import React, { useState } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence Revolution',
      icon: '🧠',
      description: 'Experience the next generation of AI that thinks, learns, and evolves beyond human capabilities',
      features: [
        'Quantum Neural Networks',
        'Synthetic Consciousness',
        'Self-Evolving Algorithms',
        'Multi-Dimensional Reasoning',
        'Autonomous Innovation'
      ]
    },
    quantum: {
      title: 'Quantum Computing Breakthrough',
      icon: '⚡',
      description: 'Unlock the power of quantum computing with exponential processing capabilities and quantum consciousness',
      features: [
        'Quantum Supremacy',
        'Quantum Consciousness',
        'Exponential Speed',
        'Quantum Cryptography',
        'Molecular Simulation'
      ]
    },
    neural: {
      title: 'Neural Interface Technology',
      icon: '🧬',
      description: 'Connect your mind directly to digital systems with our revolutionary neural interface technology',
      features: [
        'Direct Brain-Computer Interface',
        'Thought-Based Control',
        'Enhanced Cognitive Abilities',
        'Reality Augmentation',
        'Consciousness Transfer'
      ]
    },
    space: {
      title: 'Advanced Space Technology',
      icon: '🚀',
      description: 'Explore the cosmos with our breakthrough space technology and interdimensional travel capabilities',
      features: [
        'Quantum Propulsion',
        'Interdimensional Travel',
        'Instantaneous Space Travel',
        'Multi-Dimensional Exploration',
        'Reality Manipulation'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE SHOWCASE • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the most advanced technological innovations that are revolutionizing every aspect of human existence
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
                Watch Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-90">Choose a technology to explore its capabilities</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-6">Key Features</h4>
              <ul className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6">Revolutionary Impact</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">1000x</div>
                  <div className="text-sm opacity-90">Performance Improvement</div>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm opacity-90">Accuracy Rate</div>
                </div>
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm opacity-90">Continuous Operation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Experience This Technology
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demo</h2>
            <p className="text-xl opacity-90">Experience our technologies in real-time</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">AI Prediction Engine</h3>
              <p className="text-purple-100 mb-6">Watch our AI predict future trends in real-time</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start Prediction
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Quantum Simulation</h3>
              <p className="text-cyan-100 mb-6">Experience quantum computing power firsthand</p>
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Run Simulation
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 text-center">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-4">Neural Interface Test</h3>
              <p className="text-emerald-100 mb-6">Test your neural connection capabilities</p>
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Connect Neural
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-90">See how our technologies are transforming businesses worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-4">Fortune 500 Transformation</h3>
            <p className="text-white/80 mb-4">
              "Our AI implementation increased productivity by 500% and reduced costs by 60% in just 6 months."
            </p>
            <div className="text-sm text-cyan-400">- CEO, Global Tech Corp</div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4">Space Exploration Breakthrough</h3>
            <p className="text-white/80 mb-4">
              "With their quantum propulsion technology, we achieved interstellar travel in record time."
            </p>
            <div className="text-sm text-cyan-400">- Director, Space Research Institute</div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-4">Medical Revolution</h3>
            <p className="text-white/80 mb-4">
              "The neural interface technology has revolutionized patient care and medical diagnostics."
            </p>
            <div className="text-sm text-cyan-400">- Chief Medical Officer, HealthTech</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-cyan-800/50 to-blue-800/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the technological revolution and be part of the future that's being built today
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;