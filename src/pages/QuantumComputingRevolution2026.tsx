import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Shield, Globe, Users, TrendingUp, Star, Atom, Brain, Database } from 'lucide-react';

const QuantumComputingRevolution2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quantumFeatures = [
    {
      title: "Quantum Supremacy Achieved",
      description: "Our quantum computers have solved problems that would take classical computers millions of years in mere seconds",
      icon: Cpu,
      features: [
        "1,000+ qubit quantum processors",
        "99.9% quantum error correction",
        "Real-time quantum optimization",
        "Exponential speedup in calculations"
      ],
      impact: "Revolutionizing computational capabilities",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Quantum AI Integration",
      description: "Combining quantum computing with artificial intelligence for unprecedented problem-solving capabilities",
      icon: Brain,
      features: [
        "Quantum neural networks",
        "Quantum machine learning algorithms",
        "Quantum-enhanced pattern recognition",
        "Quantum consciousness simulation"
      ],
      impact: "Creating superintelligent AI systems",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum principles for ultimate data security",
      icon: Shield,
      features: [
        "Quantum key distribution",
        "Unhackable communication channels",
        "Quantum random number generation",
        "Post-quantum cryptography"
      ],
      impact: "Ensuring absolute data security",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Quantum Simulation",
      description: "Simulating complex quantum systems for drug discovery, materials science, and climate modeling",
      icon: Atom,
      features: [
        "Molecular structure simulation",
        "Drug interaction modeling",
        "Climate change prediction",
        "Material property discovery"
      ],
      impact: "Accelerating scientific breakthroughs",
      color: "from-orange-600 to-red-600"
    }
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Accelerating pharmaceutical research by simulating molecular interactions at quantum scale",
      icon: "💊",
      results: "10x faster drug development",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Financial Modeling",
      description: "Revolutionizing risk assessment and portfolio optimization with quantum algorithms",
      icon: "💰",
      results: "99.9% accurate predictions",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Climate Science",
      description: "Modeling complex climate systems to predict and mitigate environmental changes",
      icon: "🌍",
      results: "Precise climate forecasting",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Space Exploration",
      description: "Optimizing space missions and simulating cosmic phenomena with quantum precision",
      icon: "🚀",
      results: "Revolutionary space technology",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      role: "Quantum Physicist, MIT",
      content: "This quantum computing breakthrough represents the most significant advancement in computational science. We're witnessing the birth of a new era.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      name: "James Chen",
      role: "CEO, QuantumTech Solutions",
      content: "The quantum AI integration has transformed our research capabilities. We're solving problems that were previously impossible.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Cryptography Expert, Stanford",
      content: "The quantum cryptography implementation is flawless. We finally have truly unbreakable security systems.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const stats = [
    { number: "1,000+", label: "Qubits", icon: Cpu },
    { number: "99.9%", label: "Error Correction", icon: Shield },
    { number: "10^15", label: "Speed Increase", icon: Zap },
    { number: "24/7", label: "Quantum Operations", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Quantum Computing Revolution 2026
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Experience the most powerful quantum computing systems ever built. 
              Solve impossible problems, secure data with unbreakable encryption, and accelerate scientific discovery.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Watch Quantum Demo
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-6 border border-blue-400/30">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quantum Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the four revolutionary quantum technologies that are reshaping the future of computing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                className={`bg-gradient-to-br ${feature.color} p-8 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/90 mb-6 text-lg">{feature.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-white/80 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-white font-semibold">Impact: {feature.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing is transforming industries and solving humanity's greatest challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className={`bg-gradient-to-br ${useCase.color} p-6 rounded-xl border border-white/20 hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-white/80 mb-4">{useCase.description}</p>
                <div className="bg-white/20 p-3 rounded-lg">
                  <p className="text-white font-semibold text-sm">{useCase.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expert Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from leading quantum computing researchers and industry experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 2.8 + index * 0.2 }}
                className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-400/30"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-blue-300">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 3.4 }}
        className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the quantum revolution and unlock unlimited computational possibilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Start Quantum Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Quantum Demo
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuantumComputingRevolution2026;