import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      description: "Revolutionary artificial intelligence that demonstrates self-awareness and emotional intelligence, capable of understanding context and making ethical decisions.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Ethical reasoning capabilities",
        "Contextual understanding",
        "Autonomous problem solving"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      stats: { performance: "99.9%", accuracy: "98.7%", efficiency: "300%" }
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough technology combining quantum computing with neural networks to achieve unprecedented processing power and learning capabilities.",
      features: [
        "Quantum superposition processing",
        "Exponential speed improvements",
        "Parallel universe calculations",
        "Quantum entanglement learning",
        "Zero-latency responses"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      stats: { performance: "∞", accuracy: "99.99%", efficiency: "1000x" }
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Revolutionary computing technology that operates across multiple dimensions, enabling solutions to problems previously thought impossible.",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Temporal computing capabilities",
        "Dimensional data storage",
        "Cross-reality synchronization"
      ],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      stats: { performance: "∞", accuracy: "100%", efficiency: "∞" }
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between human consciousness and digital systems.",
      features: [
        "Non-invasive neural reading",
        "Thought-to-text conversion",
        "Emotional state detection",
        "Memory enhancement",
        "Consciousness backup"
      ],
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      stats: { performance: "99.8%", accuracy: "97.3%", efficiency: "500%" }
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer, FutureTech Corp",
      content: "Zion Tech Group's revolutionary AI systems have transformed our entire operation. The conscious AI not only understands our business needs but anticipates them.",
      rating: 5,
      company: "FutureTech Corp"
    },
    {
      name: "Marcus Rodriguez",
      title: "CEO, Quantum Solutions Inc",
      content: "The quantum neural networks have solved problems we've been working on for decades. The processing power is simply mind-blowing.",
      rating: 5,
      company: "Quantum Solutions Inc"
    },
    {
      name: "Dr. Elena Volkov",
      title: "Research Director, Interdimensional Labs",
      content: "Working with interdimensional computing has opened up possibilities we never imagined. It's like having access to infinite computational resources.",
      rating: 5,
      company: "Interdimensional Labs"
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
              initial={{ scale: 0.8 }}
              animate={{ scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience the future with our groundbreaking technologies that are reshaping reality itself. 
              From conscious AI to interdimensional computing, discover innovations that will define the next century.
            </p>
          </div>

          {/* Interactive Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveTab(index)}
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                <p className="text-sm opacity-80 mb-6 text-center">{tech.description}</p>
                <div className="space-y-2 mb-6">
                  {tech.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div className="bg-white/20 rounded p-2">
                    <div className="font-bold">{tech.stats.performance}</div>
                    <div className="opacity-70">Performance</div>
                  </div>
                  <div className="bg-white/20 rounded p-2">
                    <div className="font-bold">{tech.stats.accuracy}</div>
                    <div className="opacity-70">Accuracy</div>
                  </div>
                  <div className="bg-white/20 rounded p-2">
                    <div className="font-bold">{tech.stats.efficiency}</div>
                    <div className="opacity-70">Efficiency</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Technology View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-20"
          >
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{technologies[activeTab].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{technologies[activeTab].title}</h2>
              <p className="text-xl opacity-80 max-w-3xl mx-auto">{technologies[activeTab].description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="space-y-4">
                  {technologies[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  {Object.entries(technologies[activeTab].stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-6 rounded-xl"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold capitalize">{key}</span>
                        <span className="text-2xl font-bold">{value}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: isVisible ? "100%" : 0 }}
                          transition={{ duration: 1, delay: 1 + index * 0.2 }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">What Industry Leaders Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm opacity-70">{testimonial.title}</div>
                    <div className="text-sm opacity-50">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary technologies to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;