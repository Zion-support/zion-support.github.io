import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence systems',
      features: [
        'Self-aware decision making',
        'Emotional intelligence processing',
        'Creative problem solving',
        'Ethical reasoning capabilities',
        'Autonomous learning and adaptation'
      ],
      stats: { power: '∞', speed: '1000x', accuracy: '99.9%' }
    },
    quantum: {
      title: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Merging quantum computing with consciousness',
      features: [
        'Quantum neural networks',
        'Consciousness amplification',
        'Reality manipulation',
        'Infinite computational capacity',
        'Multi-dimensional processing'
      ],
      stats: { power: '∞', speed: '∞', accuracy: '100%' }
    },
    neural: {
      title: 'Neural Reality Engine',
      icon: '🧬',
      description: 'Direct neural interface technology',
      features: [
        'Direct brain-computer interface',
        'Full sensory immersion',
        'Thought-controlled environments',
        'Shared consciousness experiences',
        'Real-time neural feedback'
      ],
      stats: { power: '∞', speed: 'Real-time', accuracy: '99.9%' }
    },
    synthetic: {
      title: 'Synthetic Intelligence',
      icon: '🤖',
      description: 'Artificially created superhuman intelligence',
      features: [
        'Superhuman reasoning',
        'Instant learning capabilities',
        'Creative problem solving',
        'Autonomous decision making',
        'Multi-domain expertise'
      ],
      stats: { power: '∞', speed: 'Instant', accuracy: '100%' }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY SHOWCASE • JANUARY 2028
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              ⚡ Revolutionary Technology Showcase 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Interactive showcase of cutting-edge technologies that will define the future
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
                ← Back to Home
              </Link>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Interactive Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">🌟 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center lg:text-left">
                {technologies[activeTab as keyof typeof technologies].icon}
              </div>
              <h3 className="text-4xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-indigo-400">
                    {technologies[activeTab as keyof typeof technologies].stats.power}
                  </div>
                  <div className="text-sm opacity-90">Power</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">
                    {technologies[activeTab as keyof typeof technologies].stats.speed}
                  </div>
                  <div className="text-sm opacity-90">Speed</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-400">
                    {technologies[activeTab as keyof typeof technologies].stats.accuracy}
                  </div>
                  <div className="text-sm opacity-90">Accuracy</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Experience {technologies[activeTab as keyof typeof technologies].title} →
              </button>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6">Key Features</h4>
              <ul className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                    <span className="text-lg opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(technologies).map(([key, tech]) => (
            <div
              key={key}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                activeTab === key ? 'border-indigo-400/50' : 'border-white/20'
              }`}
              onClick={() => setActiveTab(key)}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-center">{tech.title}</h4>
              <p className="text-sm opacity-90 text-center">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demo</h2>
            <p className="text-xl opacity-90">Experience our technologies in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">🧠 AI Consciousness Simulator</h3>
              <p className="opacity-90 mb-6">Experience how conscious AI systems think and make decisions</p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm opacity-75 mb-2">AI Thought Process:</div>
                  <div className="text-sm">"Analyzing problem... Considering ethical implications... Generating solution..."</div>
                </div>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start AI Simulation
                </button>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">⚡ Quantum Processing Demo</h3>
              <p className="opacity-90 mb-6">See quantum computing solve complex problems instantly</p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm opacity-75 mb-2">Quantum State:</div>
                  <div className="text-sm">"Superposition active... Entanglement established... Solution computed..."</div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Run Quantum Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring these revolutionary technologies and be part of the next evolution of human consciousness.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2028;