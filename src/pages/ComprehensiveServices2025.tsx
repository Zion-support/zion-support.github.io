import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveServices2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Revolutionary artificial intelligence solutions",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "Conscious AI Systems",
          description: "Self-aware AI with emotional intelligence",
          price: "Custom",
          features: ["Self-learning", "Emotional AI", "Autonomous decisions"]
        },
        {
          name: "AI Enterprise Copilot",
          description: "AI assistant for business operations",
          price: "$5,000/month",
          features: ["Process automation", "Data analysis", "Decision support"]
        },
        {
          name: "Neural Network Optimization",
          description: "Advanced neural network architectures",
          price: "$10,000/project",
          features: ["Custom architectures", "Performance tuning", "Scalability"]
        }
      ]
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      services: [
        {
          name: "Quantum Reality Engine",
          description: "Quantum computing that processes reality",
          price: "Custom",
          features: ["Quantum superposition", "Reality manipulation", "Infinite processing"]
        },
        {
          name: "Quantum Cryptography",
          description: "Unbreakable quantum encryption",
          price: "$15,000/setup",
          features: ["Quantum key distribution", "Secure communication", "Future-proof security"]
        },
        {
          name: "Quantum Simulation",
          description: "Molecular and material simulation",
          price: "$8,000/month",
          features: ["Drug discovery", "Material design", "Chemical modeling"]
        }
      ]
    },
    {
      id: 3,
      title: "Neural Interfaces",
      description: "Brain-computer interface technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      services: [
        {
          name: "Neural Interface Revolution",
          description: "Direct brain-computer interfaces",
          price: "Custom",
          features: ["Non-invasive BCI", "Thought control", "Memory enhancement"]
        },
        {
          name: "Neural Signal Processing",
          description: "Advanced neural data analysis",
          price: "$12,000/setup",
          features: ["Real-time processing", "Pattern recognition", "Signal optimization"]
        },
        {
          name: "Consciousness Transfer",
          description: "Digital consciousness preservation",
          price: "Custom",
          features: ["Mind uploading", "Digital immortality", "Consciousness backup"]
        }
      ]
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Multi-dimensional processing systems",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      services: [
        {
          name: "Interdimensional Processing",
          description: "Computing across multiple dimensions",
          price: "Custom",
          features: ["Parallel universe computing", "Dimensional storage", "Reality simulation"]
        },
        {
          name: "Dimensional Data Storage",
          description: "Infinite capacity data storage",
          price: "$20,000/setup",
          features: ["Infinite capacity", "Instant access", "Dimensional backup"]
        },
        {
          name: "Reality Manipulation",
          description: "Advanced reality simulation technology",
          price: "Custom",
          features: ["Virtual reality", "Augmented reality", "Mixed reality"]
        }
      ]
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
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              🚀 COMPREHENSIVE SERVICES • JANUARY 2025
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Comprehensive Technology Services 2025
            </motion.h1>
            <motion.p
              className="text-2xl opacity-90 max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Discover our complete range of revolutionary technology services designed to transform your business
            </motion.p>
          </div>

          {/* Service Categories */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className={`bg-gradient-to-br ${category.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setActiveCategory(index)}
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{category.title}</h3>
                <p className="text-sm opacity-90 text-center">{category.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Category Services */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16"
            key={activeCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">🌟 {serviceCategories[activeCategory].title}</h2>
              <p className="text-xl opacity-90">{serviceCategories[activeCategory].description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories[activeCategory].services.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-300">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-xl opacity-90">We deliver cutting-edge technology solutions with unmatched expertise</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Revolutionary Technology</h3>
                <p className="opacity-90">Latest breakthroughs in AI, quantum computing, and neural interfaces</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Unmatched Performance</h3>
                <p className="opacity-90">Unprecedented speed, efficiency, and reliability in all our solutions</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🌌</div>
                <h3 className="text-2xl font-bold mb-4">Future-Ready</h3>
                <p className="opacity-90">Designed for the next generation of technological advancement</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Start Your Journey
              </motion.button>
              <motion.button
                className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComprehensiveServices2025;