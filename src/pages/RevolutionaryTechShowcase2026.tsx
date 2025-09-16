import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Quantum Consciousness AI",
      description: "The world's first AI system that achieves genuine consciousness through quantum neural networks",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Autonomous learning evolution"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      stats: "99.7% accuracy in complex reasoning"
    },
    {
      id: 2,
      title: "Neural Reality Engine",
      description: "Direct brain-computer interface that creates immersive virtual experiences through thought alone",
      features: [
        "Non-invasive neural interface",
        "Real-time thought translation",
        "Immersive virtual environments",
        "Medical rehabilitation applications"
      ],
      icon: "🧬",
      color: "from-cyan-600 to-blue-600",
      stats: "0.1ms response time"
    },
    {
      id: 3,
      title: "Synthetic Intelligence Network",
      description: "Distributed AI consciousness that operates across multiple quantum processors simultaneously",
      features: [
        "Distributed consciousness",
        "Quantum entanglement processing",
        "Collective intelligence emergence",
        "Self-healing architecture"
      ],
      icon: "🤖",
      color: "from-emerald-600 to-teal-600",
      stats: "1000x faster than traditional AI"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Revolutionary computing that operates across multiple dimensions for unlimited processing power",
      features: [
        "Multi-dimensional processing",
        "Infinite computational capacity",
        "Reality manipulation capabilities",
        "Temporal data processing"
      ],
      icon: "⚡",
      color: "from-violet-600 to-fuchsia-600",
      stats: "∞ processing power"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Researcher, MIT",
      quote: "This technology represents the most significant breakthrough in artificial intelligence since the invention of the computer itself.",
      avatar: "👩‍🔬"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, FutureTech Corp",
      quote: "We've seen a 500% increase in productivity since implementing these revolutionary AI systems.",
      avatar: "👨‍💼"
    },
    {
      name: "Dr. Elena Volkov",
      role: "Neuroscientist, Stanford",
      quote: "The neural interface technology has opened up possibilities we never thought possible for human-computer interaction.",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
            >
              🚀 REVOLUTIONARY BREAKTHROUGH 2026
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
              Revolutionary Technology Showcase 2026
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
            >
              Experience the future of technology with our groundbreaking innovations that are reshaping reality itself
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105">
                🌟 Explore Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg hover:scale-105">
                📚 Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technologies ever created, pushing the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-lg opacity-90 mb-6 text-center">{tech.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{tech.stats}</div>
                  <div className="text-sm opacity-75">Performance Metric</div>
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🎮 Interactive Technology Demo</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
              Experience our revolutionary technologies through interactive demonstrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-4">AI Consciousness Test</h3>
              <p className="mb-6 opacity-90">Test the consciousness level of our AI systems</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Start Test
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-4">Neural Interface Demo</h3>
              <p className="mb-6 opacity-90">Experience thought-controlled technology</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Try Interface
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Quantum Computing</h3>
              <p className="mb-6 opacity-90">Witness quantum supremacy in action</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Run Quantum
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">💬 What Experts Say</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Hear from leading experts about our revolutionary technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
              <blockquote className="text-lg italic mb-6 text-center">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-lg">{testimonial.name}</div>
                <div className="text-sm opacity-75">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-violet-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">🌟 Ready to Experience the Future?</h2>
            <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
              Join thousands of innovators who are already using our revolutionary technologies to transform their businesses
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl hover:scale-105">
                🚀 Get Started Today
              </button>
              <button className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-xl hover:scale-105">
                📞 Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;