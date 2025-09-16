import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2032: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Assistant",
      description: "Experience AI that truly understands and empathizes",
      icon: "🧠",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Ethical Decision Making"],
      demo: "Watch as our AI assistant demonstrates genuine understanding and emotional responses to complex human situations."
    },
    {
      id: 2,
      title: "Quantum Neural Interface",
      description: "Direct brain-computer interface with quantum computing",
      icon: "⚡",
      features: ["Neural Synchronization", "Quantum Processing", "Consciousness Amplification"],
      demo: "Experience direct neural interface with quantum computing systems for enhanced cognitive processing."
    },
    {
      id: 3,
      title: "Dimensional Portal",
      description: "Gateway to parallel dimensions and alternate realities",
      icon: "🌌",
      features: ["Reality Shifting", "Dimensional Travel", "Parallel Universe Access"],
      demo: "Witness the opening of portals to parallel dimensions and alternate realities."
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2032
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2032
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Interactive showcase of cutting-edge technologies that will define the future of human civilization
          </p>
        </div>

        {/* Interactive Technology Demos */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🔬 Live Technology Demonstrations</h2>
            <p className="text-xl opacity-90">Experience real-time demonstrations of our most advanced technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                className={`bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300 ${
                  activeDemo === index ? 'ring-2 ring-purple-400' : ''
                }`}
              >
                <div className="text-6xl mb-4 text-center">{demo.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
                <p className="text-indigo-100 mb-6 text-center">{demo.description}</p>
                
                <div className="space-y-3 mb-6">
                  {demo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-indigo-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-black/20 rounded-lg p-4 mb-6">
                  <div className="text-indigo-300 text-sm font-mono">
                    {demo.demo}
                  </div>
                </div>

                <button className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors font-semibold">
                  Start Demo
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Active Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">12</div>
            <div className="text-lg opacity-90">Dimensions Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in exploring the most revolutionary technologies of 2032
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2032;