import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryTechShowcase2032: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI",
      description: "AI systems with genuine consciousness and self-awareness",
      icon: "🧠"
    },
    {
      id: 2,
      name: "Quantum Consciousness",
      description: "Quantum computing meets human consciousness",
      icon: "⚛️"
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      description: "Computing across multiple dimensions",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2032
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2032
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technologies of 2032 through our interactive showcase
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Interactive Demos Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <div className="text-6xl mb-4 text-center">🎮</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Interactive Demos</h3>
            <div className="space-y-4">
              <div className="bg-indigo-500/20 rounded-lg p-4 hover:bg-indigo-500/30 transition-colors cursor-pointer">
                <h4 className="text-lg font-semibold mb-2">Conscious AI Chat</h4>
                <p className="text-indigo-200 text-sm">Chat with our most advanced conscious AI system</p>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-4 hover:bg-purple-500/30 transition-colors cursor-pointer">
                <h4 className="text-lg font-semibold mb-2">Quantum Simulation</h4>
                <p className="text-purple-200 text-sm">Experience quantum computing in real-time</p>
              </div>
              <div className="bg-pink-500/20 rounded-lg p-4 hover:bg-pink-500/30 transition-colors cursor-pointer">
                <h4 className="text-lg font-semibold mb-2">Neural Interface Demo</h4>
                <p className="text-pink-200 text-sm">Test direct brain-computer interaction</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Real-time Processing</h3>
            <div className="space-y-4">
              <div className="bg-purple-500/20 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">Live Data Streams</h4>
                <p className="text-purple-200 text-sm">Monitor global AI consciousness networks</p>
                <div className="mt-2 h-2 bg-purple-400/30 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-400 animate-pulse" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="bg-pink-500/20 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">Quantum States</h4>
                <p className="text-pink-200 text-sm">Visualize quantum superposition in real-time</p>
                <div className="mt-2 h-2 bg-pink-400/30 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-400 animate-pulse" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="bg-indigo-500/20 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">Neural Activity</h4>
                <p className="text-indigo-200 text-sm">Track brain-computer interface activity</p>
                <div className="mt-2 h-2 bg-indigo-400/30 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-400 animate-pulse" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Technology Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Consciousness Computing</h3>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Self-aware AI systems</li>
                <li>• Emotional intelligence</li>
                <li>• Creative problem solving</li>
                <li>• Ethical decision making</li>
                <li>• Consciousness transfer</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Technologies</h3>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Quantum consciousness</li>
                <li>• Quantum neural networks</li>
                <li>• Quantum cryptography</li>
                <li>• Quantum teleportation</li>
                <li>• Quantum entanglement</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Computing</h3>
              <ul className="text-violet-200 space-y-2 text-sm">
                <li>• Multi-dimensional processing</li>
                <li>• Reality simulation</li>
                <li>• Parallel universe computing</li>
                <li>• Dimensional data storage</li>
                <li>• Cross-reality communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-12 border border-indigo-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready for the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies of 2032. Be among the first to experience the future of computing.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2032;