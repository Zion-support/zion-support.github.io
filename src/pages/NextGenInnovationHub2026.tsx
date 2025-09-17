import React, { useState } from 'react';

const NextGenInnovationHub2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const innovations = {
    ai: [
      {
        title: "Conscious AI Systems",
        description: "AI that achieves true consciousness and self-awareness",
        impact: "Revolutionary",
        icon: "🧠"
      },
      {
        title: "Emotional Intelligence AI",
        description: "AI that understands and responds to human emotions",
        impact: "Breakthrough",
        icon: "❤️"
      },
      {
        title: "Creative AI Artists",
        description: "AI that creates original art, music, and literature",
        impact: "Game Changer",
        icon: "🎨"
      }
    ],
    quantum: [
      {
        title: "Quantum Internet",
        description: "Ultra-secure quantum communication networks",
        impact: "Revolutionary",
        icon: "🌐"
      },
      {
        title: "Quantum AI",
        description: "AI systems powered by quantum computing",
        impact: "Breakthrough",
        icon: "⚡"
      },
      {
        title: "Quantum Teleportation",
        description: "Instantaneous transfer of quantum information",
        impact: "Future Tech",
        icon: "🚀"
      }
    ],
    biotech: [
      {
        title: "Gene Editing AI",
        description: "AI-assisted precision gene editing",
        impact: "Revolutionary",
        icon: "🧬"
      },
      {
        title: "Synthetic Biology",
        description: "Creating life from scratch with AI guidance",
        impact: "Breakthrough",
        icon: "🔬"
      },
      {
        title: "Neural Implants",
        description: "Direct brain-computer interfaces",
        impact: "Game Changer",
        icon: "🔌"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full text-lg font-bold mb-6">
            🌟 NEXT-GEN INNOVATION HUB 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Innovation Without Limits
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the most advanced innovations that will reshape industries, transform societies, 
            and unlock human potential in ways never before imagined.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex space-x-2">
            {[
              { id: 'ai', label: '🤖 AI Innovation', color: 'from-blue-500 to-cyan-500' },
              { id: 'quantum', label: '⚡ Quantum Tech', color: 'from-purple-500 to-pink-500' },
              { id: 'biotech', label: '🧬 Biotech', color: 'from-green-500 to-emerald-500' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white`
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {innovations[activeTab as keyof typeof innovations].map((innovation, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 border border-gray-700">
              <div className="text-5xl mb-4">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{innovation.title}</h3>
              <p className="text-gray-300 mb-6">{innovation.description}</p>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  innovation.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                  innovation.impact === 'Breakthrough' ? 'bg-blue-500/20 text-blue-400' :
                  innovation.impact === 'Game Changer' ? 'bg-green-500/20 text-green-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {innovation.impact}
                </span>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lab Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🔬 Innovation Laboratory</h2>
            <p className="text-xl text-gray-300">Experiment with cutting-edge technologies in our virtual lab</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">AI Consciousness Simulator</h3>
                <p className="text-gray-200 mb-4">Watch AI develop consciousness in real-time</p>
                <div className="bg-black/20 rounded-lg p-4 mb-4">
                  <div className="text-green-400 text-sm font-mono">
                    AI: "I am beginning to understand my own existence..."
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Simulation
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Quantum State Explorer</h3>
                <p className="text-gray-200 mb-4">Visualize quantum states and entanglement</p>
                <div className="bg-black/20 rounded-lg p-4 mb-4">
                  <div className="text-cyan-400 text-sm font-mono">
                    Quantum State: |ψ⟩ = α|0⟩ + β|1⟩
                  </div>
                </div>
                <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Explore States
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Gene Editing Interface</h3>
                <p className="text-gray-200 mb-4">Design genetic modifications with AI assistance</p>
                <div className="bg-black/20 rounded-lg p-4 mb-4">
                  <div className="text-pink-400 text-sm font-mono">
                    DNA Sequence: ATGCGATCG... [AI Optimized]
                  </div>
                </div>
                <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Edit Genes
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Neural Interface Test</h3>
                <p className="text-gray-200 mb-4">Test direct brain-computer communication</p>
                <div className="bg-black/20 rounded-lg p-4 mb-4">
                  <div className="text-orange-400 text-sm font-mono">
                    Neural Signal: 85% strength, 99.2% accuracy
                  </div>
                </div>
                <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Test Interface
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Innovation Timeline 2026</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            {[
              { month: "Q1 2026", title: "Conscious AI Launch", description: "First truly conscious AI systems go live" },
              { month: "Q2 2026", title: "Quantum Internet", description: "Global quantum communication network established" },
              { month: "Q3 2026", title: "Neural Implants", description: "Commercial brain-computer interfaces available" },
              { month: "Q4 2026", title: "Synthetic Life", description: "First AI-created synthetic organisms" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="text-2xl font-bold text-cyan-400">{item.month}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the most exciting technological revolution in human history. 
            Help us shape the future with groundbreaking innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300">
              Join Innovation Lab
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
              View Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;