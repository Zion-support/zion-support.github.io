import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Advanced AI Systems',
      icon: '🤖',
      description: 'Next-generation artificial intelligence with consciousness and creativity',
      features: [
        'Self-aware AI agents',
        'Creative problem solving',
        'Emotional intelligence',
        'Autonomous decision making',
        'Multi-dimensional thinking'
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Revolutionary quantum processors that solve impossible problems',
      features: [
        'Exponential processing speed',
        'Quantum cryptography',
        'Molecular simulation',
        'Quantum machine learning',
        'Parallel universe computing'
      ]
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧠',
      description: 'Direct brain-computer interfaces for seamless human-AI integration',
      features: [
        'Non-invasive BCI technology',
        'Thought-controlled systems',
        'Neural feedback loops',
        'Consciousness transfer',
        'Mind-machine fusion'
      ]
    },
    reality: {
      title: 'Reality Engineering',
      icon: '🌌',
      description: 'Technology that can manipulate and create new realities',
      features: [
        'Reality simulation engines',
        'Virtual world creation',
        'Augmented reality fusion',
        'Holographic projections',
        'Interdimensional portals'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Ultimate Tech Showcase 2028 | Zion Tech Group</title>
        <meta name="description" content="Experience the ultimate showcase of revolutionary technology in 2028. Interactive demos of AI, quantum computing, neural interfaces, and reality engineering." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE SHOWCASE • JANUARY 2028
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2028
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technological innovations through interactive demonstrations and real-time showcases
          </p>
        </div>

        {/* Interactive Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h2>
                <p className="text-xl opacity-90 mb-6">{technologies[activeTab as keyof typeof technologies].description}</p>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Try Interactive Demo →
                </button>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🎮 Live Interactive Demos</h2>
            <p className="text-xl opacity-90">Experience our technology in real-time through interactive demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-center">AI Consciousness Demo</h3>
              <p className="text-purple-200 mb-6 text-center">Watch AI systems demonstrate self-awareness and creative thinking</p>
              <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
                Start Demo →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-center">Quantum Processing</h3>
              <p className="text-cyan-200 mb-6 text-center">Experience quantum computing solving complex problems in real-time</p>
              <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
                Launch Quantum →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-4 text-center">Neural Interface</h3>
              <p className="text-emerald-200 mb-6 text-center">Control systems with your thoughts using advanced BCI technology</p>
              <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
                Connect Mind →
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Revolutionary Impact Statistics</h2>
            <p className="text-xl opacity-90">See the measurable impact of our revolutionary technology</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Processing Power</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">1000x</div>
              <div className="text-lg opacity-90">Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Availability</div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="text-center bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">🌟 The Future is Here</h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Our revolutionary technology is not just changing the world—it's creating entirely new possibilities for human advancement and exploration.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join the Revolution
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2028;