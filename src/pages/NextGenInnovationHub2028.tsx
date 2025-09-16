import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NextGenInnovationHub2028: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const innovationCategories = {
    ai: {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      innovations: [
        {
          name: "Conscious AI Systems",
          description: "Self-aware AI with emotional intelligence and ethical reasoning",
          status: "Available",
          impact: "Revolutionary"
        },
        {
          name: "Quantum Neural Networks",
          description: "AI systems powered by quantum computing for exponential processing",
          status: "Beta",
          impact: "Breakthrough"
        },
        {
          name: "Synthetic Intelligence",
          description: "AI that can create and improve other AI systems autonomously",
          status: "Development",
          impact: "Transformative"
        }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      innovations: [
        {
          name: "Quantum Consciousness",
          description: "Quantum systems that can simulate and enhance human consciousness",
          status: "Available",
          impact: "Revolutionary"
        },
        {
          name: "Interdimensional Computing",
          description: "Computing across multiple dimensions and parallel realities",
          status: "Beta",
          impact: "Breakthrough"
        },
        {
          name: "Quantum Telepathy",
          description: "Direct quantum communication between minds",
          status: "Research",
          impact: "Transformative"
        }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      innovations: [
        {
          name: "Direct Neural Control",
          description: "Complete control of digital systems through thought alone",
          status: "Available",
          impact: "Revolutionary"
        },
        {
          name: "Memory Enhancement",
          description: "Augment human memory with digital storage and retrieval",
          status: "Beta",
          impact: "Breakthrough"
        },
        {
          name: "Consciousness Transfer",
          description: "Transfer human consciousness to digital substrates",
          status: "Research",
          impact: "Transformative"
        }
      ]
    },
    reality: {
      title: "Reality Engineering",
      icon: "🌐",
      color: "from-orange-600 to-red-600",
      innovations: [
        {
          name: "Neural Reality Engine",
          description: "Complete virtual reality controlled by neural interfaces",
          status: "Available",
          impact: "Revolutionary"
        },
        {
          name: "Holographic Environments",
          description: "Photorealistic holographic projections in physical space",
          status: "Beta",
          impact: "Breakthrough"
        },
        {
          name: "Time Manipulation",
          description: "Control and manipulate the flow of time in virtual environments",
          status: "Research",
          impact: "Transformative"
        }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-500/50 text-green-200';
      case 'Beta': return 'bg-yellow-500/50 text-yellow-200';
      case 'Development': return 'bg-blue-500/50 text-blue-200';
      case 'Research': return 'bg-purple-500/50 text-purple-200';
      default: return 'bg-gray-500/50 text-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary': return 'text-red-400';
      case 'Breakthrough': return 'text-orange-400';
      case 'Transformative': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2028
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                ← Back to Home
              </Link>
              <a href="#innovations" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Innovations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div id="innovations" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our cutting-edge innovations across multiple technology domains
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(innovationCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{innovationCategories[activeCategory as keyof typeof innovationCategories].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{innovationCategories[activeCategory as keyof typeof innovationCategories].title}</h3>
                  <p className="text-lg opacity-90">Revolutionary innovations that will transform the future</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovationCategories[activeCategory as keyof typeof innovationCategories].innovations.map((innovation, index) => (
                <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold">{innovation.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(innovation.status)}`}>
                      {innovation.status}
                    </span>
                  </div>
                  <p className="text-sm opacity-90 mb-4">{innovation.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-semibold ${getImpactColor(innovation.impact)}`}>
                      {innovation.impact} Impact
                    </span>
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Innovation Statistics</h2>
            <p className="text-xl opacity-90">The numbers that prove our innovation leadership</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
              <div className="text-sm opacity-75">Across all categories</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
              <div className="text-sm opacity-75">Innovation deployment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
              <div className="text-sm opacity-75">Future potential</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Innovation Lab</div>
              <div className="text-sm opacity-75">Continuous development</div>
            </div>
          </div>
        </div>

        {/* Innovation Pipeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Innovation Pipeline</h2>
            <p className="text-xl opacity-90">See what's coming next in our innovation roadmap</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3">Q1 2028</h3>
              <ul className="space-y-2 text-sm">
                <li>• Conscious AI Systems Launch</li>
                <li>• Neural Reality Engine Beta</li>
                <li>• Quantum Neural Networks</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-xl font-bold mb-3">Q2 2028</h3>
              <ul className="space-y-2 text-sm">
                <li>• Interdimensional Computing</li>
                <li>• Holographic Environments</li>
                <li>• Memory Enhancement Systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-3">Q3-Q4 2028</h3>
              <ul className="space-y-2 text-sm">
                <li>• Consciousness Transfer</li>
                <li>• Time Manipulation</li>
                <li>• Quantum Telepathy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Innovation Lab */}
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🧪 Innovation Lab</h2>
            <p className="text-xl opacity-90">Experience our innovations in real-time</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Live Innovation Dashboard</h3>
              <div className="bg-black/50 rounded-lg p-6 mb-6">
                <div className="text-green-400 font-mono text-sm">
                  <div className="mb-2">$ innovation-lab --status</div>
                  <div className="mb-2">✓ AI Systems: 15 active experiments</div>
                  <div className="mb-2">✓ Quantum Computing: 8 breakthrough tests</div>
                  <div className="mb-2">✓ Neural Interfaces: 12 consciousness trials</div>
                  <div className="mb-2">✓ Reality Engine: 6 dimensional simulations</div>
                  <div className="text-yellow-400">Total innovations: 41 active</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Access Innovation Lab
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Innovation Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>AI Development</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Quantum Research</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Neural Interface</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Reality Engineering</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the future by collaborating with our innovation lab and accessing cutting-edge technologies
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/pages/ComprehensiveServices2025" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Contact Innovation Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2028;