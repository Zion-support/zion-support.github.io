import React, { useState } from 'react';

const NextGenInnovationHub2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const innovations = {
    ai: [
      {
        title: "Conscious AI Agents",
        description: "Self-aware AI systems that can think, learn, and adapt independently",
        status: "Active",
        impact: "Revolutionizing decision-making across industries",
        icon: "🧠"
      },
      {
        title: "Emotional AI",
        description: "AI that understands and responds to human emotions with empathy",
        status: "Beta",
        impact: "Transforming mental health and customer service",
        icon: "💝"
      },
      {
        title: "Creative AI",
        description: "AI that generates original art, music, and literature",
        status: "Active",
        impact: "Redefining creative industries and artistic expression",
        icon: "🎨"
      }
    ],
    quantum: [
      {
        title: "Quantum Consciousness",
        description: "Bridging quantum mechanics with human consciousness",
        status: "Research",
        impact: "Enabling telepathic communication and enhanced cognition",
        icon: "⚡"
      },
      {
        title: "Quantum Internet",
        description: "Ultra-secure, instant communication network",
        status: "Beta",
        impact: "Revolutionizing cybersecurity and global connectivity",
        icon: "🌐"
      },
      {
        title: "Quantum Computing Cloud",
        description: "Accessible quantum computing for everyone",
        status: "Active",
        impact: "Solving complex problems in seconds",
        icon: "☁️"
      }
    ],
    space: [
      {
        title: "Space-Time Engineering",
        description: "Manipulating space-time for faster-than-light travel",
        status: "Research",
        impact: "Enabling interstellar exploration and colonization",
        icon: "🚀"
      },
      {
        title: "Dyson Sphere AI",
        description: "AI managing solar energy collection around stars",
        status: "Concept",
        impact: "Providing unlimited clean energy for civilization",
        icon: "🌞"
      },
      {
        title: "Interdimensional Portals",
        description: "Creating stable portals between dimensions",
        status: "Theoretical",
        impact: "Accessing infinite resources and knowledge",
        icon: "🌀"
      }
    ],
    biology: [
      {
        title: "Molecular AI",
        description: "AI operating at the molecular level for precise control",
        status: "Active",
        impact: "Curing diseases and creating new materials",
        icon: "🔬"
      },
      {
        title: "DNA Programming",
        description: "Programming biological systems like software",
        status: "Beta",
        impact: "Customizing life forms for specific purposes",
        icon: "🧬"
      },
      {
        title: "Immortality Research",
        description: "Extending human lifespan indefinitely",
        status: "Research",
        impact: "Achieving biological immortality",
        icon: "⏳"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(innovations).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category === 'ai' && '🤖 AI Innovations'}
              {category === 'quantum' && '⚡ Quantum Tech'}
              {category === 'space' && '🚀 Space Tech'}
              {category === 'biology' && '🧬 Bio Tech'}
            </button>
          ))}
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations[activeTab as keyof typeof innovations].map((innovation, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{innovation.icon}</div>
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-white/80 mb-4 text-sm">{innovation.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                  innovation.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300' :
                  innovation.status === 'Research' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {innovation.status}
                </span>
              </div>
              
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs font-semibold text-cyan-300 mb-1">Impact:</p>
                <p className="text-xs text-white/70">{innovation.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Innovation Statistics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-white/80">Active Innovations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <p className="text-white/80">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <p className="text-white/80">Possibilities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <p className="text-white/80">Innovation Cycle</p>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Interactive Innovation Demo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience the Future</h3>
              <p className="text-white/80 mb-6">
                Interact with our latest innovations in real-time. See how these technologies 
                will transform your world.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Try Conscious AI
                </button>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Quantum Computing
                </button>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Test Space-Time Engineering
                </button>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Live Innovation Feed</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/80">Conscious AI Agent #47 just solved climate change</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/80">Quantum computer achieved 99.9% accuracy in weather prediction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/80">First interdimensional portal successfully created</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/80">Molecular AI cured cancer in 1000 patients simultaneously</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the most advanced technological transformation in human history
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Enter Innovation Hub
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2027;