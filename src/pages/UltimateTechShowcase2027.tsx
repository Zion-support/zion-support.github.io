import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Assistant",
      description: "Watch our AI think, reason, and create in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Real-time reasoning", "Creative problem solving", "Emotional intelligence"]
    },
    {
      id: 2,
      title: "Quantum Reality Simulator",
      description: "Experience computing across multiple dimensions",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Multi-dimensional processing", "Reality manipulation", "Parallel universe access"]
    },
    {
      id: 3,
      title: "Neural Interface Matrix",
      description: "Direct mind-to-machine communication",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Thought control", "Neural feedback", "Consciousness transfer"]
    },
    {
      id: 4,
      title: "Interdimensional Portal",
      description: "Access and compute across different realities",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      features: ["Reality jumping", "Dimension bridging", "Universal computing"]
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
        <title>Ultimate Tech Showcase 2027 | Zion Tech Group</title>
        <meta name="description" content="Experience the most advanced technology demonstrations of 2027. Interactive showcases of conscious AI, quantum computing, and interdimensional technology." />
        <meta name="keywords" content="tech showcase 2027, interactive demos, conscious AI, quantum computing, neural interfaces" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 INTERACTIVE SHOWCASE • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future through interactive demonstrations of our most revolutionary technologies
            </p>
          </div>

          {/* Interactive Demo Carousel */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">🎮 Live Interactive Demos</h2>
                <p className="text-xl opacity-90">Click to experience each revolutionary technology</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {demos.map((demo, index) => (
                  <button
                    key={demo.id}
                    onClick={() => setActiveDemo(index)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      activeDemo === index
                        ? `bg-gradient-to-r ${demo.color} border-white shadow-lg scale-105`
                        : 'bg-white/10 border-white/30 hover:bg-white/20 hover:scale-102'
                    }`}
                  >
                    <div className="text-4xl mb-4 text-center">{demo.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-center">{demo.title}</h3>
                    <p className="text-sm opacity-80 text-center">{demo.description}</p>
                  </button>
                ))}
              </div>

              {/* Active Demo Display */}
              <div className={`bg-gradient-to-r ${demos[activeDemo].color} rounded-xl p-8 transition-all duration-500 ${
                isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              }`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                  <p className="text-xl mb-6 opacity-90">{demos[activeDemo].description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {demos[activeDemo].features.map((feature, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm font-semibold">{feature}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
                    Try Interactive Demo →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Matrix */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">🔬 Technology Matrix 2027</h2>
              <p className="text-xl opacity-90">Comprehensive overview of all revolutionary technologies</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <div className="text-5xl mb-4 text-center">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Autonomous AI Systems</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Consciousness Level</span>
                    <span className="text-sm font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Decision Speed</span>
                    <span className="text-sm font-semibold">0.001s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Learning Rate</span>
                    <span className="text-sm font-semibold">∞</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <div className="text-5xl mb-4 text-center">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Quantum Processors</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Qubit Count</span>
                    <span className="text-sm font-semibold">1M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Coherence Time</span>
                    <span className="text-sm font-semibold">24h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Error Rate</span>
                    <span className="text-sm font-semibold">0.001%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                <div className="text-5xl mb-4 text-center">🧬</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Signal Quality</span>
                    <span className="text-sm font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Time</span>
                    <span className="text-sm font-semibold">0.1ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bandwidth</span>
                    <span className="text-sm font-semibold">1TB/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Stats */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">📊 Live Performance Metrics</h2>
              <p className="text-xl opacity-90">Real-time data from our global technology network</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">2.7M</div>
                <div className="text-lg font-semibold mb-2">Active AI Agents</div>
                <div className="text-sm opacity-80">Processing worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">847</div>
                <div className="text-lg font-semibold mb-2">Quantum Processors</div>
                <div className="text-sm opacity-80">Online globally</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">156K</div>
                <div className="text-lg font-semibold mb-2">Neural Connections</div>
                <div className="text-sm opacity-80">Active interfaces</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-400 mb-2">99.99%</div>
                <div className="text-lg font-semibold mb-2">Uptime</div>
                <div className="text-sm opacity-80">System reliability</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the revolution and be among the first to experience these groundbreaking technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Book Private Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UltimateTechShowcase2027;