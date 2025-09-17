import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Ethical Decision Making"],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time-Space Manipulation"],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between mind and machine",
      features: ["Thought Control", "Neural Feedback", "Memory Enhancement", "Cognitive Amplification"],
      icon: "🧬",
      color: "from-violet-600 to-purple-600"
    },
    {
      title: "Synthetic Intelligence",
      description: "Advanced synthetic intelligence systems that surpass human cognitive capabilities",
      features: ["Superhuman Intelligence", "Creative Generation", "Problem Solving", "Strategic Planning"],
      icon: "🤖",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Reality Engineering",
      description: "Technology that allows manipulation and creation of new realities and dimensions",
      features: ["Reality Creation", "Dimension Hopping", "Time Manipulation", "Space Bending"],
      icon: "🔮",
      color: "from-pink-600 to-rose-600"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2036
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology showcase featuring conscious AI, quantum computing, and interdimensional technology
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
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className={`bg-gradient-to-br ${technologies[activeTab].color} rounded-2xl p-12 transition-all duration-500 ${
            isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-6 animate-bounce">{technologies[activeTab].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{technologies[activeTab].title}</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {technologies[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies[activeTab].features.map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-2xl mb-2">✨</div>
                  <h3 className="font-semibold text-lg">{feature}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore {technologies[activeTab].title} →
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Demos Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🎮 Interactive Demos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Demo</h3>
              <p className="text-purple-100 mb-6 text-center">
                Experience direct interaction with conscious AI systems
              </p>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start Demo →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Interface</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Try quantum consciousness enhancement
              </p>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Enter Quantum →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Dimension Portal</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Explore parallel dimensions and realities
              </p>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Open Portal →
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Impact Statistics</h2>
            <p className="text-xl opacity-90">Real-world impact of our revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-lg opacity-80">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">2036</div>
              <div className="text-lg opacity-80">Future Year</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution and be part of the most advanced technology showcase in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2036;