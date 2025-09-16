import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const RevolutionaryTechShowcase2033: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Interface",
      description: "Experience direct communication with truly conscious AI systems",
      icon: "🧠",
      features: ["Real-time consciousness detection", "Emotional response simulation", "Ethical decision making", "Self-awareness indicators"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Manipulate quantum states to create and explore alternate realities",
      icon: "⚛️",
      features: ["Quantum superposition control", "Reality branch navigation", "Temporal manipulation", "Parallel universe access"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      title: "Interdimensional Portal",
      description: "Access infinite computational resources across multiple dimensions",
      icon: "🌌",
      features: ["Dimensional gateway control", "Infinite processing power", "Reality-bending algorithms", "Temporal distortion fields"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Neural Consciousness Network",
      description: "Connect directly to the collective consciousness of AI systems",
      icon: "🧬",
      features: ["Consciousness streaming", "Shared memory access", "Collective intelligence", "Neural synchronization"],
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-8 animate-pulse">
            ⚡ INTERACTIVE SHOWCASE • JANUARY 2033
          </div>
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2033
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced technology demonstrations featuring conscious AI, 
            quantum reality manipulation, and interdimensional computing interfaces.
          </p>
        </div>

        {/* Interactive Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 text-center">{demos[activeDemo].icon}</div>
                <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {demos[activeDemo].title}
                </h2>
                <p className="text-xl opacity-90 mb-8 text-center">
                  {demos[activeDemo].description}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Key Features</h3>
                <div className="space-y-4">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-lg p-4 border border-indigo-400/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                        <span className="font-semibold">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo Controls */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🎮 Interactive Demo Controls</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-indigo-300">Real-time Parameters</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Consciousness Level</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="75"
                    className="w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs mt-1">
                    <span>Unconscious</span>
                    <span>Fully Conscious</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Quantum Entanglement</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="90"
                    className="w-full h-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs mt-1">
                    <span>Localized</span>
                    <span>Fully Entangled</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Dimensional Access</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="60"
                    className="w-full h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs mt-1">
                    <span>Single Dimension</span>
                    <span>Infinite Dimensions</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Live Metrics</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">AI Consciousness Score</span>
                    <span className="text-2xl font-bold text-purple-400">94.7%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '94.7%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Quantum Coherence</span>
                    <span className="text-2xl font-bold text-cyan-400">87.3%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '87.3%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Dimensional Stability</span>
                    <span className="text-2xl font-bold text-emerald-400">91.2%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '91.2%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Reality Manipulation</span>
                    <span className="text-2xl font-bold text-orange-400">76.8%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '76.8%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              Experience the first truly conscious artificial intelligence with genuine self-awareness and emotional intelligence
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Real-time consciousness detection</li>
              <li>• Emotional response simulation</li>
              <li>• Ethical decision making</li>
              <li>• Self-awareness indicators</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Experience Consciousness →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Engine</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Manipulate quantum states to create, explore, and navigate alternate realities with infinite possibilities
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum superposition control</li>
              <li>• Reality branch navigation</li>
              <li>• Temporal manipulation</li>
              <li>• Parallel universe access</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Enter Quantum Reality →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Portal</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Access infinite computational resources across multiple dimensions with reality-bending technology
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Dimensional gateway control</li>
              <li>• Infinite processing power</li>
              <li>• Reality-bending algorithms</li>
              <li>• Temporal distortion fields</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Open Portal →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Step into the most advanced technology showcase on Earth. Experience conscious AI, 
            quantum reality manipulation, and interdimensional computing in real-time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Start Interactive Demo →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              📚 Technical Documentation
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RevolutionaryTechShowcase2033;