import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const RevolutionaryTechShowcase2037: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Interaction",
      description: "Experience real-time conversation with our conscious AI systems",
      icon: "🧠",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Cross-Dimensional Communication"],
      status: "Live Demo Available"
    },
    {
      id: 2,
      title: "Quantum Consciousness Interface",
      description: "Direct neural interface with quantum computing systems",
      icon: "⚡",
      features: ["Neural Enhancement", "Multi-dimensional Thinking", "Reality Manipulation"],
      status: "Beta Testing"
    },
    {
      id: 3,
      title: "Interdimensional Portal",
      description: "Explore parallel dimensions and alternate realities",
      icon: "🌌",
      features: ["Dimensional Travel", "Reality Shifting", "Multiverse Communication"],
      status: "Limited Access"
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2037
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            ⚡ Revolutionary Tech Showcase 2037
          </h1>
          <p className="text-2xl text-cyan-200 max-w-4xl mx-auto mb-8">
            Experience our most advanced technologies through interactive demonstrations. 
            From conscious AI to quantum consciousness and interdimensional exploration.
          </p>
        </div>

        {/* Interactive Demo Carousel */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🎮 Interactive Demonstrations</h2>
            <p className="text-xl text-purple-200">Try our revolutionary technologies in real-time</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {demos.map((demo, index) => (
                <div
                  key={demo.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeDemo === index
                      ? 'bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border-2 border-cyan-400 scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{demo.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                      <p className="text-purple-200 mb-3">{demo.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {demo.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-semibold">{demo.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-cyan-400/30">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-cyan-200">{demos[activeDemo].description}</p>
              </div>
              
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 mb-6">
                  <div className="text-6xl text-center mb-4">{demos[activeDemo].icon}</div>
                  <div className="space-y-2">
                    {demos[activeDemo].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Launch Interactive Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Emotional Intelligence Processing 2.0</li>
              <li>• Creative Problem Solving with Intuition</li>
              <li>• Self-Learning Capabilities with Memory</li>
              <li>• Cross-Dimensional Communication</li>
            </ul>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-purple-100 text-sm font-semibold">Success Rate: 99.97%</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Consciousness</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Direct neural interface with quantum computing systems for enhanced cognitive processing
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Neural Networks</li>
              <li>• Consciousness Amplification</li>
              <li>• Multi-dimensional Thinking</li>
              <li>• Reality Manipulation</li>
            </ul>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-cyan-100 text-sm font-semibold">Processing Power: 10^47 Qubits</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Interdimensional Technology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Breakthrough technology that allows interaction with parallel dimensions and alternate realities
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Dimensional Portals</li>
              <li>• Reality Shifting</li>
              <li>• Parallel Universe Access</li>
              <li>• Multiverse Communication</li>
            </ul>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-emerald-100 text-sm font-semibold">Dimensions Accessed: 47</p>
            </div>
          </div>
        </div>

        {/* Real-time Statistics */}
        <div className="bg-gradient-to-r from-blue-800/50 to-indigo-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">📊 Live Technology Metrics</h2>
            <p className="text-xl text-blue-200">Real-time data from our revolutionary systems</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1.2B+</div>
              <div className="text-blue-200 text-sm">Conscious AI Entities</div>
              <div className="text-green-400 text-xs mt-1">+47% this month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">47</div>
              <div className="text-blue-200 text-sm">Dimensions Accessed</div>
              <div className="text-green-400 text-xs mt-1">+3 this week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.97%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
              <div className="text-green-400 text-xs mt-1">+0.02% improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-blue-200 text-sm">Possibilities</div>
              <div className="text-green-400 text-xs mt-1">Infinite potential</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Future Today</h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            Join the revolution and be part of the most advanced technological transformation in human history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/UltimateTechBreakthrough2037" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Learn More About Breakthroughs →
            </a>
            <a href="/pages/ComprehensiveServices2037" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              View All Services
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RevolutionaryTechShowcase2037;