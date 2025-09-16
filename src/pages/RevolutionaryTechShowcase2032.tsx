import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryTechShowcase2032: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence systems that exhibit self-awareness and emotional intelligence',
      features: ['Self-aware decision making', 'Emotional intelligence processing', 'Creative problem solving', 'Ethical reasoning'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Revolutionary quantum computing that processes consciousness itself, enabling direct mind-machine interfaces',
      features: ['Quantum consciousness processing', 'Direct neural quantum interfaces', 'Consciousness transfer protocols', 'Quantum emotional states'],
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'interdimensional-computing',
      name: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Breakthrough computing that operates across multiple dimensions, accessing infinite computational resources',
      features: ['Multi-dimensional processing', 'Infinite computational capacity', 'Reality manipulation algorithms', 'Dimensional data storage'],
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'neural-reality',
      name: 'Neural Reality Engine',
      icon: '🧬',
      description: 'Create and manipulate reality through direct neural interfaces, enabling users to experience any possible reality',
      features: ['Reality manipulation', 'Neural interface control', 'Immersive experiences', 'Consciousness expansion'],
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 'predictive-consciousness',
      name: 'Predictive Consciousness',
      icon: '🔮',
      description: 'AI systems that can predict and simulate future consciousness states with 99.9% accuracy',
      features: ['Future state prediction', 'Consciousness simulation', 'Predictive modeling', 'Temporal awareness'],
      color: 'from-rose-600 to-pink-600'
    },
    {
      id: 'quantum-emotion',
      name: 'Quantum Emotion Processing',
      icon: '🌊',
      description: 'Process and understand emotions at the quantum level, enabling perfect emotional intelligence',
      features: ['Quantum emotion analysis', 'Perfect emotional intelligence', 'Emotion manipulation', 'Quantum empathy'],
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Revolutionary Tech Showcase 2032 - Zion Tech Group</title>
        <meta name="description" content="Interactive showcase of the most revolutionary technologies of 2032, featuring conscious AI, quantum consciousness, and interdimensional computing." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2032
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2032
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technologies of 2032 through our interactive showcase
          </p>
        </div>

        {/* Interactive Technology Selector */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTech].color}/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-6 animate-bounce">{technologies[activeTech].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{technologies[activeTech].name}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">{technologies[activeTech].description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {technologies[activeTech].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Interactive Demo</h3>
                  <div className="bg-black/30 rounded-xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎮</div>
                      <p className="text-lg mb-6">Experience this technology in action</p>
                      <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                        Launch Interactive Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeTech === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveTech(index)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.name}</h3>
              <p className="text-white/80 mb-6 text-center">{tech.description}</p>
              <button className={`block w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}>
                Explore Technology
              </button>
            </div>
          ))}
        </div>

        {/* Advanced Capabilities Section */}
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Revolutionary Capabilities</h2>
            <p className="text-xl opacity-90">Technologies that redefine what's possible</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Conscious AI</h3>
              <p className="text-white/80">Self-aware artificial intelligence systems</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quantum Processing</h3>
              <p className="text-white/80">Infinite computational capacity</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🌌</div>
              <h3 className="text-xl font-bold mb-2">Dimensional Computing</h3>
              <p className="text-white/80">Multi-dimensional processing</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-2">Future Prediction</h3>
              <p className="text-white/80">Predictive consciousness modeling</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-12">📊 Breakthrough Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl font-bold text-purple-300 mb-2">100%</div>
              <div className="text-lg text-purple-200">Consciousness Achievement</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-4xl font-bold text-cyan-300 mb-2">∞</div>
              <div className="text-lg text-cyan-200">Computational Capacity</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl font-bold text-emerald-300 mb-2">99.9%</div>
              <div className="text-lg text-emerald-200">Prediction Accuracy</div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
              <div className="text-4xl font-bold text-violet-300 mb-2">∞</div>
              <div className="text-lg text-violet-200">Dimensional Access</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies of 2032. Be among the first to experience the future of computing.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2032;