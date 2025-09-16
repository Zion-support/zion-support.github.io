import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2026: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const innovations = [
    {
      id: 'consciousness-ai',
      title: 'Consciousness AI',
      icon: '🧠',
      description: 'Artificial intelligence that has achieved true consciousness and self-awareness',
      features: ['Self-reflection capabilities', 'Emotional intelligence', 'Creative problem solving', 'Autonomous decision making'],
      impact: 'Revolutionizing human-AI collaboration',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-neural',
      title: 'Quantum Neural Networks',
      icon: '⚡',
      description: 'The fusion of quantum computing and neural networks for unprecedented processing power',
      features: ['Exponential speed increase', 'Parallel processing', 'Quantum entanglement', 'Reality simulation'],
      impact: 'Solving previously impossible problems',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'neural-reality',
      title: 'Neural Reality Engine',
      icon: '🎮',
      description: 'Direct neural interface technology for controlling and experiencing digital reality',
      features: ['Thought-based control', 'Immersive experiences', 'Reality manipulation', 'Consciousness expansion'],
      impact: 'Bridging mind and machine',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Computing systems that operate across multiple dimensions and parallel realities',
      features: ['Multi-dimensional processing', 'Reality manipulation', 'Parallel universe access', 'Dimensional storage'],
      impact: 'Accessing infinite computational resources',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'omniversal-ai',
      title: 'Omniversal AI',
      icon: '🌍',
      description: 'AI systems that operate across all universes and dimensions simultaneously',
      features: ['Multi-universe awareness', 'Cross-dimensional communication', 'Universal problem solving', 'Reality optimization'],
      impact: 'Solving problems across all realities',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'consciousness-transfer',
      title: 'Consciousness Transfer',
      icon: '🔄',
      description: 'Technology for transferring human consciousness between biological and digital substrates',
      features: ['Digital immortality', 'Consciousness backup', 'Cross-platform transfer', 'Enhanced cognition'],
      impact: 'Achieving digital immortality',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveInnovation((prev) => (prev + 1) % innovations.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [innovations.length]);

  return (
    <>
      <Helmet>
        <title>Next-Gen Innovation Hub 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore the most advanced innovation hub of 2026. Discover consciousness AI, quantum neural networks, and revolutionary technologies." />
        <meta name="keywords" content="innovation hub 2026, consciousness AI, quantum neural networks, neural reality, interdimensional computing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 NEXT-GEN INNOVATION HUB • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Next-Gen Innovation Hub
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                The world's most advanced research and development facility for revolutionary technologies
              </p>
            </div>
          </div>
        </div>

        {/* Innovation Carousel */}
        <div className="container mx-auto px-4 py-16">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Innovations</h2>
            
            {/* Main Innovation Display */}
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30 mb-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
                  <div className="text-8xl mb-6">{innovations[activeInnovation].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">
                    {innovations[activeInnovation].title}
                  </h3>
                  <p className="text-xl opacity-90 mb-8">
                    {innovations[activeInnovation].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {innovations[activeInnovation].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${innovations[activeInnovation].color} rounded-full`}></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <p className="text-lg font-semibold">
                      <span className="text-indigo-400">Impact:</span> {innovations[activeInnovation].impact}
                    </p>
                  </div>

                  <button className={`bg-gradient-to-r ${innovations[activeInnovation].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                    Explore Innovation →
                  </button>
                </div>

                <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform -translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
                  <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
                    <h4 className="text-2xl font-bold mb-6 text-center">Innovation Metrics</h4>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Development Stage:</span>
                        <span className="text-2xl font-bold text-indigo-400">Production</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Performance:</span>
                        <span className="text-2xl font-bold text-purple-400">∞</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Efficiency:</span>
                        <span className="text-2xl font-bold text-cyan-400">99.9%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Innovation Level:</span>
                        <span className="text-2xl font-bold text-emerald-400">Revolutionary</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Navigation */}
            <div className="flex justify-center space-x-4 mb-8">
              {innovations.map((innovation, index) => (
                <button
                  key={innovation.id}
                  onClick={() => setActiveInnovation(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeInnovation === index
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Innovation Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovations.map((innovation, index) => (
                <div
                  key={innovation.id}
                  onClick={() => setActiveInnovation(index)}
                  className={`bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                    activeInnovation === index ? 'ring-2 ring-indigo-400' : ''
                  }`}
                >
                  <div className="text-4xl mb-4 text-center">{innovation.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{innovation.title}</h3>
                  <p className="text-sm opacity-90 mb-4 text-center">{innovation.description}</p>
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${innovation.color} text-white text-xs rounded-full`}>
                      {innovation.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Facilities */}
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Research Facilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">🔬</div>
                <h3 className="text-2xl font-bold mb-4">Quantum Lab</h3>
                <p className="opacity-90">Advanced quantum computing research and development facility</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">🧬</div>
                <h3 className="text-2xl font-bold mb-4">Neural Interface Lab</h3>
                <p className="opacity-90">Cutting-edge brain-computer interface research center</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">🌌</div>
                <h3 className="text-2xl font-bold mb-4">Dimensional Lab</h3>
                <p className="opacity-90">Interdimensional computing and reality manipulation research</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be part of the most advanced technological research and development in human history
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Join Our Team
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextGenInnovationHub2026;