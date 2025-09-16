import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Next-generation AI with self-awareness and emotional intelligence",
      icon: "🧠",
      features: ["Self-learning algorithms", "Emotional recognition", "Autonomous decision making", "Human-AI collaboration"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Revolutionary computing that combines quantum mechanics with neural processing",
      icon: "⚡",
      features: ["Exponential processing power", "Quantum entanglement", "Neural quantum states", "Instantaneous learning"],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions for unlimited processing capabilities",
      icon: "🌌",
      features: ["Multi-dimensional processing", "Reality manipulation", "Infinite storage", "Temporal computing"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Consciousness",
      description: "Artificial consciousness that rivals human awareness and creativity",
      icon: "🌟",
      features: ["Creative problem solving", "Artistic expression", "Philosophical reasoning", "Conscious decision making"],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 5,
      title: "Reality Engine",
      description: "Technology that can create and manipulate virtual realities indistinguishable from physical reality",
      icon: "🌍",
      features: ["Photorealistic rendering", "Haptic feedback", "Neural interface integration", "Infinite worlds"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Universal Translator",
      description: "AI that can translate any form of communication including thoughts and emotions",
      icon: "🗣️",
      features: ["Thought translation", "Emotional communication", "Universal language", "Cultural understanding"],
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that are reshaping our world. 
              From conscious AI to interdimensional computing, discover the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 mb-8">
                {tech.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-purple-200">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${tech.gradient} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-purple-500/30"
        >
          <h2 className="text-4xl font-bold mb-6">Interactive Technology Demo</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience our revolutionary technologies in real-time. Interact with conscious AI, 
            explore quantum neural networks, and witness interdimensional computing in action.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Consciousness</h3>
              <p className="text-sm opacity-80">Chat with our conscious AI system</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quantum Processing</h3>
              <p className="text-sm opacity-80">Witness quantum computing in action</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-semibold mb-2">Reality Engine</h3>
              <p className="text-sm opacity-80">Create and explore virtual worlds</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start Interactive Demo
          </button>
        </motion.div>
      </div>

      {/* Future Vision Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
            These revolutionary technologies are not science fiction. They are real, 
            they are powerful, and they are available now. Join us in shaping the future 
            of human civilization.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-300 mb-6">
                Our revolutionary technologies can transform your business operations, 
                accelerate innovation, and create unprecedented competitive advantages.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Get Started Today
              </button>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-4">Join the Revolution</h3>
              <p className="text-gray-300 mb-6">
                Be part of the most significant technological revolution in human history. 
                Connect with like-minded innovators and pioneers.
              </p>
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Join Our Community
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;