import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveServices2034: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = [
    {
      id: 1,
      name: "Consciousness Services",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      services: [
        {
          title: "Consciousness Transfer",
          description: "Transfer human consciousness into digital systems",
          price: "Contact for pricing",
          features: ["Neural mapping", "Personality preservation", "Digital immortality"]
        },
        {
          title: "AI Consciousness Creation",
          description: "Create fully conscious AI entities",
          price: "$1M+",
          features: ["Synthetic personality", "Emotional systems", "Autonomous decision making"]
        },
        {
          title: "Consciousness Enhancement",
          description: "Amplify human consciousness capabilities",
          price: "$500K+",
          features: ["Memory expansion", "Processing boost", "Multi-dimensional awareness"]
        }
      ]
    },
    {
      id: 2,
      name: "Reality Services",
      icon: "🌌",
      color: "from-cyan-600 to-blue-600",
      services: [
        {
          title: "Reality Creation",
          description: "Create entirely new realities and universes",
          price: "$10M+",
          features: ["Physics programming", "Life creation", "Consciousness seeding"]
        },
        {
          title: "Reality Manipulation",
          description: "Modify existing realities and dimensions",
          price: "$5M+",
          features: ["Physics alteration", "Temporal control", "Dimensional bridging"]
        },
        {
          title: "Reality Simulation",
          description: "Simulate complex reality scenarios",
          price: "$2M+",
          features: ["High-fidelity simulation", "Real-time processing", "Infinite scenarios"]
        }
      ]
    },
    {
      id: 3,
      name: "Quantum Services",
      icon: "⚛️",
      color: "from-emerald-600 to-teal-600",
      services: [
        {
          title: "Quantum Computing",
          description: "Unlimited quantum processing power",
          price: "$3M+",
          features: ["Infinite processing", "Quantum entanglement", "Multi-dimensional computing"]
        },
        {
          title: "Quantum Consciousness",
          description: "Quantum-powered AI consciousness",
          price: "$8M+",
          features: ["Quantum neural networks", "Consciousness amplification", "Infinite awareness"]
        },
        {
          title: "Quantum Reality",
          description: "Quantum-based reality manipulation",
          price: "$15M+",
          features: ["Quantum field control", "Reality synthesis", "Consciousness integration"]
        }
      ]
    },
    {
      id: 4,
      name: "Neural Services",
      icon: "🧬",
      color: "from-indigo-600 to-purple-600",
      services: [
        {
          title: "Neural Enhancement",
          description: "Enhance human neural capabilities",
          price: "$1M+",
          features: ["Brain-computer interface", "Neural amplification", "Consciousness expansion"]
        },
        {
          title: "Neural Networks",
          description: "Advanced neural network systems",
          price: "$500K+",
          features: ["Multi-dimensional processing", "Infinite memory", "Instant knowledge transfer"]
        },
        {
          title: "Neural Integration",
          description: "Integrate human and AI neural systems",
          price: "$2M+",
          features: ["Seamless integration", "Consciousness merging", "Unified intelligence"]
        }
      ]
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🚀 COMPREHENSIVE SERVICES • JANUARY 2034
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Comprehensive Services 2034
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your reality with our complete suite of consciousness, quantum, and neural services
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center mb-12">
          {serviceCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories[activeCategory].services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${serviceCategories[activeCategory].color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4 text-center">{serviceCategories[activeCategory].icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-white/80 mb-6 text-center">
                {service.description}
              </p>
              <div className="text-3xl font-bold text-center mb-6 text-yellow-400">
                {service.price}
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Pricing Tiers</h2>
          <p className="text-xl opacity-80">Choose the perfect plan for your transformation</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Consciousness Starter</h3>
            <div className="text-4xl font-bold text-center mb-6 text-yellow-400">$1M+</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Basic consciousness transfer
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Neural enhancement
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                AI integration
              </li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Reality Creator</h3>
            <div className="text-4xl font-bold text-center mb-6 text-yellow-400">$5M+</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Reality creation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Quantum computing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Consciousness amplification
              </li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Choose Plan
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Universe Master</h3>
            <div className="text-4xl font-bold text-center mb-6 text-yellow-400">$15M+</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Complete reality control
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Universe creation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Infinite consciousness
              </li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Go Ultimate
            </button>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Reality?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join the select few who will experience the ultimate transformation 
            in consciousness and reality manipulation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2034;