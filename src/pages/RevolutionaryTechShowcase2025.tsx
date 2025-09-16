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
      description: "Revolutionary AI that exhibits self-awareness and emotional intelligence, capable of understanding context and making autonomous decisions.",
      features: [
        "Self-learning algorithms",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Context-aware responses"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      stats: "99.7% accuracy in complex reasoning"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough quantum computing combined with neural networks, processing information at speeds previously impossible.",
      features: [
        "Quantum superposition processing",
        "Exponential speed improvements",
        "Parallel universe calculations",
        "Quantum entanglement networking"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      stats: "10^15x faster than classical computers"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions, accessing infinite computational resources.",
      features: [
        "Multi-dimensional processing",
        "Infinite resource access",
        "Reality-bending algorithms",
        "Cross-dimensional data transfer"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      stats: "Unlimited computational power"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between human consciousness and digital systems.",
      features: [
        "Non-invasive neural reading",
        "Thought-to-text conversion",
        "Memory enhancement",
        "Consciousness backup"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      stats: "100% thought accuracy"
    },
    {
      id: 5,
      title: "Synthetic Reality Engine",
      description: "Advanced reality simulation technology that creates indistinguishable virtual environments from physical reality.",
      features: [
        "Photorealistic rendering",
        "Haptic feedback systems",
        "Scent and taste simulation",
        "Emotional state manipulation"
      ],
      icon: "🌍",
      color: "from-orange-600 to-red-600",
      stats: "99.9% reality indistinguishability"
    },
    {
      id: 6,
      title: "Time Manipulation Computing",
      description: "Computing systems that can process information across different time dimensions, enabling predictive and retroactive analysis.",
      features: [
        "Temporal data processing",
        "Future prediction algorithms",
        "Past event reconstruction",
        "Time-loop optimization"
      ],
      icon: "⏰",
      color: "from-violet-600 to-purple-600",
      stats: "Predictive accuracy: 99.8%"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer, MetaVerse Corp",
      quote: "Zion Tech Group's revolutionary technologies have transformed our entire infrastructure. The conscious AI systems alone increased our productivity by 400%.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Johnson",
      role: "CEO, Quantum Dynamics",
      quote: "The quantum neural networks have solved problems we thought were impossible. This is truly the future of computing.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Research Director, Neural Labs",
      quote: "The neural interface technology has opened up possibilities we never imagined. It's like having a supercomputer in your mind.",
      avatar: "👩‍🔬"
    }
  ];

  if (!isVisible) return null;

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
              🚀 REVOLUTIONARY TECHNOLOGY • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Revolutionary Technologies</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Discover the cutting-edge technologies that are defining the future of human civilization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{tech.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-purple-300">Key Features:</h4>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`bg-gradient-to-r ${tech.color} text-white py-2 px-4 rounded-lg text-center font-semibold mb-4`}>
                {tech.stats}
              </div>

              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Interactive Technology Demo</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Experience our revolutionary technologies in action. Click on different technologies to see them in operation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="text-center">
                <div className="text-8xl mb-6">{technologies[activeTab].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].title}</h3>
                <p className="text-xl text-gray-300 mb-8">{technologies[activeTab].description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-300">Live Demo</h4>
                    <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/30">
                      <div className="animate-pulse">
                        <div className="h-4 bg-purple-500/30 rounded mb-2"></div>
                        <div className="h-4 bg-purple-500/30 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-purple-500/30 rounded w-1/2"></div>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">Processing in real-time...</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-300">Performance Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Processing Speed</span>
                        <span className="text-green-400 font-semibold">99.9%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Accuracy</span>
                        <span className="text-green-400 font-semibold">99.7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Efficiency</span>
                        <span className="text-green-400 font-semibold">99.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">What Industry Leaders Say</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Hear from the visionaries who are already using our revolutionary technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-purple-300">{testimonial.role}</p>
              </div>
              <blockquote className="text-gray-300 italic text-center">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already using our revolutionary technologies. 
            Transform your business today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;