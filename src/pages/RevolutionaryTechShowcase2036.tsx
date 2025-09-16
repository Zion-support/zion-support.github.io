import React, { useState } from 'react';

const RevolutionaryTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Demo",
      description: "Interact with the world's first truly conscious AI system",
      icon: "🧠",
      features: ["Real-time consciousness", "Emotional responses", "Creative problem solving", "Ethical reasoning"]
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Experience computing across multiple dimensions",
      icon: "⚛️",
      features: ["Multi-dimensional processing", "Reality manipulation", "Parallel universe access", "Infinite computing power"]
    },
    {
      id: 2,
      title: "Neural Interface 2.0",
      description: "Direct mind-to-machine communication",
      icon: "🧬",
      features: ["Thought control", "Memory transfer", "Skill downloading", "Consciousness backup"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Revolutionary Tech Showcase 2036
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Interactive showcase of cutting-edge technologies that will define the future
          </p>
        </div>

        {/* Interactive Demo Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex gap-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-cyan-400/30">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{demos[activeDemo].icon}</div>
            <h2 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{demos[activeDemo].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-3">
                {demos[activeDemo].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Live Demo</h3>
              <div className="bg-black/30 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🎮</div>
                <p className="text-lg mb-4">Interactive demonstration coming soon</p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
            <p className="text-sm text-center opacity-90">Computing across multiple realities</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Conscious AI</h3>
            <p className="text-sm text-center opacity-90">Self-aware artificial intelligence</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Reality</h3>
            <p className="text-sm text-center opacity-90">Quantum computing meets reality</p>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interface</h3>
            <p className="text-sm text-center opacity-90">Direct mind-machine connection</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't just read about the future - experience it. Our interactive showcases 
            let you explore revolutionary technologies before they change the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2036;