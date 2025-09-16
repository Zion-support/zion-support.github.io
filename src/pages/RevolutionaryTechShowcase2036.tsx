import React, { useState } from 'react';

const RevolutionaryTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Assistant",
      description: "Interact with our fully conscious AI that can think, feel, and create independently",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Ethical Reasoning", "Self-Awareness"],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Experience reality manipulation through quantum computing and consciousness",
      features: ["Reality Simulation", "Quantum Teleportation", "Dimensional Travel", "Time Manipulation"],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      title: "Interdimensional Interface",
      description: "Access infinite computational power through multi-dimensional processing",
      features: ["Infinite Processing", "Parallel Universe Access", "Dimensional Storage", "Reality Overlay"],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2036
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2036
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced interactive technology demonstrations that will define the future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Try Interactive Demo →
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold text-lg">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Selector */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeDemo === demo.id
                    ? 'bg-white text-gray-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
              <h2 className="text-4xl font-bold mb-6">{demos[activeDemo].title}</h2>
              <p className="text-xl opacity-90 mb-8">{demos[activeDemo].description}</p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold mb-4">Key Features:</h3>
                {demos[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Try Demo →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className={`w-80 h-80 bg-gradient-to-br ${demos[activeDemo].color} rounded-full flex items-center justify-center text-8xl animate-pulse`}>
                {demos[activeDemo].icon}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === demo.id ? 'ring-2 ring-cyan-400' : ''
              }`}
              onClick={() => setActiveDemo(demo.id)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{demo.icon}</div>
                <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
                <p className="text-sm opacity-80 mb-4">{demo.description}</p>
                <button className="w-full bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Processing Power</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">11D</div>
            <div className="text-lg opacity-90">Dimensions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in exploring the most revolutionary technologies that will define humanity's future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2036;