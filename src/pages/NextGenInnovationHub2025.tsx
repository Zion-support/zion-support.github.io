import React, { useState } from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const innovations = {
    ai: {
      title: "Artificial Intelligence Revolution",
      description: "Advanced AI systems that think, learn, and evolve autonomously",
      features: [
        "Quantum Neural Networks",
        "Consciousness Computing",
        "Autonomous Decision Making",
        "Emotional Intelligence",
        "Creative Problem Solving"
      ],
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum processors that solve impossible problems",
      features: [
        "Quantum Supremacy",
        "Quantum Internet",
        "Quantum Cryptography",
        "Quantum Machine Learning",
        "Quantum Simulation"
      ],
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless human-AI interaction",
      features: [
        "Thought Control",
        "Memory Enhancement",
        "Sensory Augmentation",
        "Emotion Transfer",
        "Consciousness Upload"
      ],
      icon: "🔮",
      color: "from-green-500 to-emerald-500"
    },
    space: {
      title: "Space Technology Innovation",
      description: "Advanced space exploration and colonization technologies",
      features: [
        "Faster-Than-Light Travel",
        "Asteroid Mining",
        "Mars Colonization",
        "Space Elevators",
        "Interplanetary Internet"
      ],
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div
            className="text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 NEXT-GEN INNOVATION HUB 2025
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovation Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most advanced innovation hub where cutting-edge technologies 
              converge to create the future. Experience tomorrow's solutions today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Innovations
              </button>
              <button className="border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Tabs */}
      <div className="container mx-auto px-4 py-20">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Innovation Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge innovation categories and discover the technologies shaping tomorrow
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(innovations).map(([key, innovation]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${innovation.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{innovation.icon}</span>
              {innovation.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div
          key={activeTab}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{innovations[activeTab as keyof typeof innovations].icon}</div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {innovations[activeTab as keyof typeof innovations].title}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {innovations[activeTab as keyof typeof innovations].description}
              </p>
              <div className="space-y-4">
                {innovations[activeTab as keyof typeof innovations].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="text-center">
                  <div className="text-8xl mb-4">{innovations[activeTab as keyof typeof innovations].icon}</div>
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    {innovations[activeTab as keyof typeof innovations].title}
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Experience the future of {innovations[activeTab as keyof typeof innovations].title.toLowerCase()}
                  </p>
                  <button className={`bg-gradient-to-r ${innovations[activeTab as keyof typeof innovations].color} px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Stats */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4">
          <div
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovation Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our innovations are transforming industries and creating new possibilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-xl text-gray-300 mb-2">Active Projects</div>
              <div className="text-sm text-gray-400">In development</div>
            </div>
            <div
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-xl text-gray-300 mb-2">Innovators</div>
              <div className="text-sm text-gray-400">Global community</div>
            </div>
            <div
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-5xl font-bold text-green-400 mb-2">$500M+</div>
              <div className="text-xl text-gray-300 mb-2">Investment</div>
              <div className="text-sm text-gray-400">In R&D</div>
            </div>
            <div
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-5xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-xl text-gray-300 mb-2">Success Rate</div>
              <div className="text-sm text-gray-400">Project completion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most groundbreaking innovations that are reshaping the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(innovations).map(([key, innovation], index) => (
            <div
              key={key}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {innovation.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {innovation.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {innovation.description}
              </p>
              <div className="space-y-2 mb-6">
                {innovation.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full bg-gradient-to-r ${innovation.color} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                Explore Innovation
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join the Innovation Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Collaborate with leading 
            researchers, entrepreneurs, and visionaries to create the future.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join Innovation Hub
            </button>
            <button className="border-2 border-white/30 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300">
              View Research
            </button>
            <button className="bg-gradient-to-r from-green-600 to-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;