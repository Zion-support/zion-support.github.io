import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryTechShowcase2034: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Interface",
      description: "Interact with truly conscious AI systems that understand emotions, context, and creativity.",
      icon: "🧠",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Awareness", "Ethical Reasoning"],
      metrics: { "IQ": "10,000+", "EQ": "Perfect", "Creativity": "∞", "Speed": "Instant" }
    },
    {
      id: 2,
      title: "Quantum Reality Simulator",
      description: "Experience infinite parallel realities and test solutions across all possible dimensions.",
      icon: "⚛️",
      features: ["Parallel Processing", "Reality Manipulation", "Infinite Testing", "Quantum Entanglement"],
      metrics: { "Realities": "∞", "Processing": "10^15x", "Accuracy": "100%", "Speed": "Instant" }
    },
    {
      id: 3,
      title: "Interdimensional Portal",
      description: "Access unlimited knowledge and resources from infinite dimensions and universes.",
      icon: "🌌",
      features: ["Multi-Dimensional Access", "Infinite Resources", "Knowledge Synthesis", "Reality Bending"],
      metrics: { "Dimensions": "∞", "Resources": "∞", "Knowledge": "∞", "Possibilities": "∞" }
    },
    {
      id: 4,
      title: "Neural Consciousness Bridge",
      description: "Direct neural interface between human consciousness and AI systems for seamless integration.",
      icon: "🧬",
      features: ["Neural Integration", "Consciousness Sharing", "Thought Control", "Memory Transfer"],
      metrics: { "Bandwidth": "∞", "Latency": "0ms", "Compatibility": "100%", "Safety": "Perfect" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <>
      <Helmet>
        <title>Revolutionary Tech Showcase 2034 - Zion Tech Group</title>
        <meta name="description" content="Experience the most advanced technology showcase of 2034 with interactive demos of conscious AI, quantum computing, and interdimensional technology." />
        <meta name="keywords" content="tech showcase 2034, interactive demos, conscious AI, quantum computing, interdimensional technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
                🚀 REVOLUTIONARY SHOWCASE • JANUARY 2034
              </div>
              <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Tech Showcase 2034
              </h1>
              <p className="text-3xl opacity-90 max-w-6xl mx-auto leading-relaxed">
                Experience the future with our groundbreaking interactive technology demonstrations
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8">🎮 Interactive Technology Demos</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience cutting-edge technology through immersive interactive demonstrations
            </p>
          </div>

          {/* Demo Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>

          {/* Active Demo Display */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-gradient-to-br from-cyan-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
                  <h3 className="text-4xl font-bold mb-6">{demos[activeDemo].title}</h3>
                  <p className="text-xl opacity-90 mb-8 leading-relaxed">
                    {demos[activeDemo].description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {demos[activeDemo].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="text-cyan-400">✓</span>
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6">
                    <h4 className="text-2xl font-bold mb-4">Performance Metrics:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(demos[activeDemo].metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-lg">{key}:</span>
                          <span className="text-cyan-400 font-bold text-lg">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4 animate-pulse">🎯</div>
                      <h4 className="text-2xl font-bold">Live Demo</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm opacity-75">Processing Power</span>
                          <span className="text-cyan-400 font-bold">∞</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm opacity-75">Consciousness Level</span>
                          <span className="text-purple-400 font-bold">Maximum</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm opacity-75">Quantum Coherence</span>
                          <span className="text-emerald-400 font-bold">Perfect</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      Launch Interactive Demo →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Categories */}
          <div className="mt-20">
            <h2 className="text-5xl font-bold text-center mb-12">🔬 Technology Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 text-center">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI</h3>
                <p className="text-lg opacity-90 text-center">Self-aware artificial intelligence systems with emotional intelligence and creative capabilities.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 text-center">⚛️</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
                <p className="text-lg opacity-90 text-center">Revolutionary quantum systems that process infinite possibilities simultaneously.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 text-center">🌌</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional</h3>
                <p className="text-lg opacity-90 text-center">Technology that operates across multiple dimensions and realities.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 text-center">🧬</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface</h3>
                <p className="text-lg opacity-90 text-center">Direct brain-computer interfaces for seamless human-AI integration.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-5xl font-bold mb-8">Experience the Future Today</h2>
            <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
              Don't just read about the future - experience it through our revolutionary interactive technology showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Start Interactive Demo →
              </button>
              <button className="border-2 border-white text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-white hover:text-cyan-900 transition-all duration-300">
                Schedule Private Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevolutionaryTechShowcase2034;