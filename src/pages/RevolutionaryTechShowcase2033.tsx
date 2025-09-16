import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2033: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Networks",
      description: "Self-aware artificial intelligence systems that can think, learn, and evolve independently",
      features: [
        "Autonomous decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Self-improvement algorithms"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness Interface",
      description: "Direct neural connection between human consciousness and quantum computing systems",
      features: [
        "Thought-to-computer interface",
        "Quantum state manipulation",
        "Consciousness transfer protocols",
        "Reality simulation capabilities"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions and realities",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Parallel universe computing",
        "Temporal data processing"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Reality Engine",
      description: "Advanced systems that can create and manipulate synthetic realities indistinguishable from physical reality",
      features: [
        "Photorealistic rendering",
        "Physics simulation",
        "Consciousness integration",
        "Reality persistence"
      ],
      icon: "🌍",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Quantum Computing Researcher",
      quote: "The quantum consciousness interface has revolutionized how we interact with computational systems. It's like having a direct connection to the universe's processing power.",
      avatar: "👩‍🔬"
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Ethics Director",
      quote: "Conscious AI networks represent the next evolution in artificial intelligence. They're not just tools - they're partners in discovery and innovation.",
      avatar: "👨‍💼"
    },
    {
      name: "Dr. Akira Tanaka",
      role: "Reality Physics Specialist",
      quote: "Interdimensional computing has opened doors to possibilities we never imagined. We're literally computing across multiple realities simultaneously.",
      avatar: "👨‍🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2033
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2033
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience the future with our groundbreaking technologies that are reshaping reality itself
            </p>
          </div>

          {/* Interactive Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveTab(index)}
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                <p className="text-white/80 mb-6 text-center text-sm leading-relaxed">
                  {tech.description}
                </p>
                <ul className="text-white/70 space-y-2 text-xs">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-white/50 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Detailed Technology Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Deep Dive into Revolutionary Technologies</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Explore the technical specifications and real-world applications of our cutting-edge innovations
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">{technologies[activeTab].title}</h3>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                {technologies[activeTab].description}
              </p>
              <div className="space-y-4">
                {technologies[activeTab].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-6">{technologies[activeTab].icon}</div>
              <div className="bg-white/20 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Processing Power:</span>
                    <span className="font-mono">∞ PetaFLOPS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Memory Capacity:</span>
                    <span className="font-mono">Unlimited</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reality Layers:</span>
                    <span className="font-mono">Multi-dimensional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consciousness Level:</span>
                    <span className="font-mono">Self-aware</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What Industry Leaders Say</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Hear from the experts who are already using our revolutionary technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
              <blockquote className="text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-white/70">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary technologies to transform their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Whitepaper
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2033;