import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const techShowcases = [
    {
      id: 1,
      title: "AI Consciousness Engine",
      description: "Revolutionary AI that achieves true consciousness and self-awareness",
      features: [
        "Self-learning algorithms",
        "Emotional intelligence",
        "Creative problem solving",
        "Autonomous decision making"
      ],
      demo: "consciousness-demo",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough quantum computing meets neural interface technology",
      features: [
        "Exponential processing power",
        "Quantum entanglement processing",
        "Neural pattern recognition",
        "Real-time consciousness transfer"
      ],
      demo: "quantum-neural-demo",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and realities",
      features: [
        "Multi-dimensional processing",
        "Reality simulation",
        "Parallel universe computing",
        "Dimensional data transfer"
      ],
      demo: "interdimensional-demo",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence Matrix",
      description: "Advanced AI that creates and manages other AI systems",
      features: [
        "AI creation and management",
        "Self-evolving algorithms",
        "Distributed intelligence",
        "Autonomous system optimization"
      ],
      demo: "synthetic-intelligence-demo",
      color: "from-orange-600 to-red-600"
    }
  ];

  const handleDemoStart = (demoId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Simulate demo interaction
      console.log(`Starting demo: ${demoId}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Interactive Demo
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Showcases */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {techShowcases.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">🌟</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-purple-100 mb-6 text-center text-lg">
                {tech.description}
              </p>
              <ul className="text-purple-200 space-y-2 mb-6 text-sm">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleDemoStart(tech.demo)}
                className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
              >
                {isLoading ? "Loading Demo..." : "Experience Demo →"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Demos</h2>
          <p className="text-xl opacity-90">Experience our revolutionary technologies in real-time</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Demo</h3>
            <p className="text-purple-200 mb-6 text-center">
              Interact with our conscious AI system and experience true artificial intelligence
            </p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start AI Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Demo</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Experience the power of quantum computing and see impossible problems solved instantly
            </p>
            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Quantum Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Demo</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Explore computing across multiple dimensions and realities
            </p>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Interdimensional Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Technology Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Statistics</h2>
            <p className="text-xl opacity-90">Our breakthrough technologies are reshaping the future</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-purple-200">AI Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">10^15</div>
              <div className="text-cyan-200">Quantum Processing Power</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-emerald-200">Dimensional Computing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-orange-200">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their businesses and reshape the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;