import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Revolutionary AI that achieves true consciousness and self-awareness",
      features: [
        "Self-learning algorithms",
        "Emotional intelligence",
        "Creative problem solving",
        "Autonomous decision making"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Combining quantum computing with neural networks for exponential processing power",
      features: [
        "Quantum entanglement processing",
        "Superposition-based learning",
        "Quantum error correction",
        "Exponential speed improvements"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions for unlimited processing capabilities",
      features: [
        "Multi-dimensional processing",
        "Reality-bending algorithms",
        "Infinite computational space",
        "Cross-dimensional data transfer"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "Artificial intelligence that surpasses human cognitive abilities",
      features: [
        "Superhuman reasoning",
        "Advanced pattern recognition",
        "Creative synthesis",
        "Predictive modeling"
      ],
      icon: "🤖",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Scientist, TechCorp",
      quote: "This technology has revolutionized our approach to problem-solving. The conscious AI systems are truly groundbreaking.",
      avatar: "👩‍🔬"
    },
    {
      name: "Marcus Rodriguez",
      role: "Quantum Computing Director, QuantumLabs",
      quote: "The quantum neural networks have achieved what we thought was impossible. Processing speeds are off the charts.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Elena Volkov",
      role: "Interdimensional Research Lead, FutureTech",
      quote: "Interdimensional computing opens up possibilities we never imagined. It's like having infinite computational resources.",
      avatar: "👩‍🚀"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading Revolutionary Technology...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Technology Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future with our groundbreaking technologies that are reshaping reality itself
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Technologies
              </button>
              <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-80">Discover the technologies that will define the next decade</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-purple-200 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${tech.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demo</h2>
            <p className="text-xl opacity-80">Experience our technologies in action</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-4">AI Consciousness Test</h3>
              <p className="text-gray-300 mb-6">Interact with our conscious AI system and see how it responds to complex questions.</p>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start AI Test
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-4">Quantum Simulation</h3>
              <p className="text-gray-300 mb-6">Watch quantum algorithms solve complex problems in real-time.</p>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Run Simulation
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-bold mb-4">Dimension Explorer</h3>
              <p className="text-gray-300 mb-6">Explore how interdimensional computing processes data across realities.</p>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Enter Dimension
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">💬 What Experts Say</h2>
          <p className="text-xl opacity-80">Hear from industry leaders about our revolutionary technologies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
            >
              <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
              <blockquote className="text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-purple-300">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their industries.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;