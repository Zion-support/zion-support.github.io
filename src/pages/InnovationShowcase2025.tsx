import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const InnovationShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const innovations = {
    ai: {
      title: "AI Innovation Hub",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      features: [
        "Autonomous AI Agents",
        "Generative AI 3.0",
        "Edge AI Computing",
        "AI-Powered Automation"
      ],
      description: "Revolutionary artificial intelligence solutions that think, learn, and adapt in real-time."
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      features: [
        "Quantum Supremacy",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Quantum Machine Learning"
      ],
      description: "Breakthrough quantum computing technology solving impossible problems at lightning speed."
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      features: [
        "Brain-Computer Interface",
        "Thought Control",
        "Memory Enhancement",
        "Cognitive Augmentation"
      ],
      description: "Direct neural interfaces enabling seamless communication between mind and machine."
    },
    metaverse: {
      title: "Metaverse Technology",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      borderColor: "border-orange-400",
      features: [
        "Virtual Reality 2.0",
        "Augmented Reality Pro",
        "Digital Twins",
        "Virtual Economies"
      ],
      description: "Next-generation metaverse technology creating immersive digital experiences."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>Innovation Showcase 2025 - Revolutionary Technology</title>
        <meta name="description" content="Explore the most innovative technologies of 2025 that are reshaping industries and transforming the future." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INNOVATION SHOWCASE • 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            🌟 Innovation Showcase 2025
          </h1>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
            Discover the cutting-edge innovations that are revolutionizing industries and creating new possibilities for human advancement
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(innovations).map(([key, innovation]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${innovation.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-gray-600'
                }`}
              >
                <span className="mr-2">{innovation.icon}</span>
                {innovation.title}
              </button>
            ))}
          </div>

          {/* Active Innovation Display */}
          <div className={`bg-gradient-to-br ${innovations[activeTab as keyof typeof innovations].color}/30 backdrop-blur-sm rounded-2xl p-12 border ${innovations[activeTab as keyof typeof innovations].borderColor}/30`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">{innovations[activeTab as keyof typeof innovations].icon}</span>
                  <h2 className="text-4xl font-bold text-white">{innovations[activeTab as keyof typeof innovations].title}</h2>
                </div>
                <p className="text-xl text-white/90 mb-8">
                  {innovations[activeTab as keyof typeof innovations].description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {innovations[activeTab as keyof typeof innovations].features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-white font-semibold">{feature}</div>
                    </div>
                  ))}
                </div>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Explore {innovations[activeTab as keyof typeof innovations].title} →
                </button>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Live Demo</h3>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{innovations[activeTab as keyof typeof innovations].icon}</div>
                    <div className="text-white font-semibold">Interactive Demo</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-purple-200">Innovations</div>
            <div className="text-sm text-purple-300">Launched in 2025</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-cyan-200">Success Rate</div>
            <div className="text-sm text-cyan-300">Innovation Delivery</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 text-center">
            <div className="text-4xl font-bold text-white mb-2">10M+</div>
            <div className="text-emerald-200">Users Impacted</div>
            <div className="text-sm text-emerald-300">Worldwide</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 text-center">
            <div className="text-4xl font-bold text-white mb-2">$5B+</div>
            <div className="text-orange-200">Value Created</div>
            <div className="text-sm text-orange-300">For Clients</div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🔥 Featured Innovations</h2>
            <p className="text-xl text-blue-200">The most groundbreaking technologies of 2025</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Conscious AI Systems</h3>
              <p className="text-purple-200 mb-6">
                AI that understands emotions, makes ethical decisions, and evolves its consciousness.
              </p>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Learn More →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Internet</h3>
              <p className="text-cyan-200 mb-6">
                Ultra-secure quantum communication network connecting the world at light speed.
              </p>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Explore →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Enhancement</h3>
              <p className="text-emerald-200 mb-6">
                Non-invasive brain enhancement technology boosting cognitive abilities.
              </p>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Discover →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join the innovation revolution and transform your organization with cutting-edge technology solutions.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating →
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationShowcase2025;