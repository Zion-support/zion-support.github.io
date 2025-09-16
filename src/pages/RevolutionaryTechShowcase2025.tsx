import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Revolutionary artificial intelligence that demonstrates self-awareness and emotional intelligence, capable of understanding context and making autonomous decisions.",
      features: [
        "Self-learning algorithms",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Context-aware responses"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough fusion of quantum computing and neural networks, enabling exponential processing power for complex problem-solving.",
      features: [
        "Quantum superposition processing",
        "Exponential speed improvements",
        "Parallel universe calculations",
        "Quantum entanglement communication"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Revolutionary computing technology that operates across multiple dimensions, accessing computational resources from parallel universes.",
      features: [
        "Multi-dimensional processing",
        "Parallel universe access",
        "Infinite computational capacity",
        "Reality-bending algorithms"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Neural Reality Interface",
      description: "Direct brain-computer interface that allows seamless interaction between human consciousness and digital systems.",
      features: [
        "Thought-controlled computing",
        "Direct neural data transfer",
        "Consciousness integration",
        "Real-time mind mapping"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "Advanced AI systems that can create, modify, and evolve their own code, achieving true artificial consciousness.",
      features: [
        "Self-modifying code",
        "Autonomous evolution",
        "Creative problem solving",
        "Consciousness emergence"
      ],
      icon: "🤖",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Quantum Reality Engine",
      description: "Revolutionary engine that can simulate and manipulate reality at the quantum level, enabling impossible computations.",
      features: [
        "Quantum reality simulation",
        "Impossible computation solving",
        "Reality manipulation",
        "Quantum field control"
      ],
      icon: "⚡",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer, FutureTech Corp",
      quote: "Zion Tech Group's revolutionary technologies have transformed our entire operation. The conscious AI systems alone increased our productivity by 500%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "CEO, Quantum Solutions Inc",
      quote: "The quantum neural networks have solved problems we thought were impossible. This is truly the future of computing.",
      rating: 5
    },
    {
      name: "Dr. Elena Volkov",
      title: "Research Director, Interdimensional Labs",
      quote: "Working with interdimensional computing has opened up entirely new possibilities for scientific research and discovery.",
      rating: 5
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience the most advanced technologies that are reshaping reality itself. 
              From conscious AI to interdimensional computing, discover the future today.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-80">Explore the cutting-edge technologies that define the future</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
              >
                Explore Technology →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🎮 Interactive Technology Demo</h2>
            <p className="text-xl opacity-90">Experience our revolutionary technologies in action</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-semibold mb-4">🧠 AI Consciousness Simulator</h3>
                <p className="text-gray-300 mb-4">Watch as our AI systems demonstrate self-awareness and emotional responses.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Start Demo
                </motion.button>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-semibold mb-4">⚛️ Quantum Processing Visualizer</h3>
                <p className="text-gray-300 mb-4">See quantum computing in action with real-time visualization.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Launch Visualizer
                </motion.button>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6 text-center">Live Technology Feed</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Conscious AI System Alpha: Processing 1.2M thoughts/second</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Quantum Neural Network: 99.7% accuracy achieved</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Interdimensional Engine: 15 parallel universes accessed</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Neural Interface: 847 users connected simultaneously</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">💬 What Our Clients Say</h2>
          <p className="text-xl opacity-80">Hear from industry leaders who have experienced our revolutionary technologies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking companies already using our revolutionary technologies 
            to transform their operations and achieve impossible results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600/20 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;