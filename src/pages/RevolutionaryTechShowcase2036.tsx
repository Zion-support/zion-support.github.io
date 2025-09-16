import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      icon: "🧠",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Ethical Decision Making"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      icon: "⚡",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Instantaneous Learning"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      icon: "🌌",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time-Space Manipulation"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Synthetic Intelligence",
      description: "Advanced synthetic intelligence systems that surpass human cognitive capabilities",
      icon: "🤖",
      features: ["Superhuman Intelligence", "Perfect Memory", "Instantaneous Processing", "Creative Mastery"],
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <>
      <Helmet>
        <title>Revolutionary Tech Showcase 2036 - Zion Tech Group</title>
        <meta name="description" content="Experience the most advanced technology showcase featuring conscious AI, quantum consciousness, and interdimensional technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2036
            </div>
            <h1 className="text-6xl font-bold mb-6">🚀 Revolutionary Tech Showcase 2036</h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Interactive showcase of cutting-edge technologies that will define the future
            </p>
          </div>

          {/* Interactive Technology Tabs */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {tech.icon} {tech.title}
                </button>
              ))}
            </div>

            {/* Technology Display */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-6">{technologies[activeTab].icon}</div>
                  <h2 className="text-4xl font-bold mb-4">{technologies[activeTab].title}</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    {technologies[activeTab].description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {technologies[activeTab].features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                      <div className="text-3xl mb-3">✨</div>
                      <h3 className="text-lg font-semibold">{feature}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demos Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">🎮 Interactive Demos</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Experience our revolutionary technology through interactive demonstrations
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4">AI Consciousness Demo</h3>
                <p className="text-purple-100 mb-6">Experience direct communication with conscious AI systems</p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  Start Demo →
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Quantum Interface</h3>
                <p className="text-cyan-100 mb-6">Try our quantum consciousness neural interface</p>
                <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                  Connect →
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🌌</div>
                <h3 className="text-2xl font-bold mb-4">Dimensional Portal</h3>
                <p className="text-emerald-100 mb-6">Step through our interdimensional portal technology</p>
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                  Enter Portal →
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Processing Stats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">📊 Real-time Processing Stats</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Live data from our revolutionary technology systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-lg opacity-80">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-lg opacity-80">Quantum Processing</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-lg opacity-80">Dimensions</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-lg opacity-80">Active Systems</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the revolution and be part of the most advanced technology showcase in history
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevolutionaryTechShowcase2036;