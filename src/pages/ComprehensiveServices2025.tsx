import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComprehensiveServices2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = [
    {
      id: 0,
      name: "AI & Machine Learning",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/20 to-blue-900/20"
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/20 to-teal-900/20"
    },
    {
      id: 3,
      name: "Blockchain & Web3",
      icon: "🔗",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/20 to-red-900/20"
    },
    {
      id: 4,
      name: "Cloud & Infrastructure",
      icon: "☁️",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/20 to-purple-900/20"
    }
  ];

  const services = [
    // AI & Machine Learning Services
    [
      {
        id: 0,
        title: "Conscious AI Development",
        description: "Build AI systems with true consciousness and self-awareness capabilities",
        features: ["Emotional intelligence", "Self-learning algorithms", "Autonomous decision making", "Human-AI collaboration"],
        pricing: "Starting at $50,000/month",
        duration: "3-6 months",
        icon: "🤖"
      },
      {
        id: 1,
        title: "Advanced Neural Networks",
        description: "Custom neural network architectures for complex problem solving",
        features: ["Deep learning models", "Real-time processing", "Scalable architecture", "Custom optimization"],
        pricing: "Starting at $25,000/month",
        duration: "2-4 months",
        icon: "🧠"
      },
      {
        id: 2,
        title: "AI-Powered Automation",
        description: "Intelligent automation solutions for business processes",
        features: ["Process optimization", "Predictive analytics", "Automated decision making", "ROI tracking"],
        pricing: "Starting at $15,000/month",
        duration: "1-3 months",
        icon: "⚡"
      }
    ],
    // Quantum Computing Services
    [
      {
        id: 0,
        title: "Quantum Algorithm Development",
        description: "Custom quantum algorithms for specific business problems",
        features: ["Quantum optimization", "Cryptography solutions", "Simulation algorithms", "Error correction"],
        pricing: "Starting at $100,000/month",
        duration: "6-12 months",
        icon: "⚛️"
      },
      {
        id: 1,
        title: "Quantum Cloud Services",
        description: "Access to quantum computing power through cloud infrastructure",
        features: ["Quantum processing units", "Scalable resources", "Real-time access", "Expert support"],
        pricing: "Starting at $10,000/month",
        duration: "Ongoing",
        icon: "☁️"
      },
      {
        id: 2,
        title: "Quantum Security Solutions",
        description: "Quantum-resistant cryptography and security implementations",
        features: ["Post-quantum cryptography", "Quantum key distribution", "Security audits", "Compliance support"],
        pricing: "Starting at $30,000/month",
        duration: "3-6 months",
        icon: "🔐"
      }
    ],
    // Neural Interface Services
    [
      {
        id: 0,
        title: "Brain-Computer Interface Development",
        description: "Direct neural interfaces for seamless human-computer interaction",
        features: ["Non-invasive BCI", "Thought control", "Memory enhancement", "Real-time processing"],
        pricing: "Starting at $75,000/month",
        duration: "6-9 months",
        icon: "🧬"
      },
      {
        id: 1,
        title: "Neural Data Processing",
        description: "Advanced algorithms for processing and interpreting neural signals",
        features: ["Signal processing", "Pattern recognition", "Data visualization", "Machine learning integration"],
        pricing: "Starting at $35,000/month",
        duration: "3-5 months",
        icon: "📊"
      },
      {
        id: 2,
        title: "Consciousness Backup Systems",
        description: "Advanced systems for backing up and restoring human consciousness",
        features: ["Memory mapping", "Consciousness transfer", "Data integrity", "Recovery protocols"],
        pricing: "Starting at $200,000/month",
        duration: "12-18 months",
        icon: "💾"
      }
    ],
    // Blockchain & Web3 Services
    [
      {
        id: 0,
        title: "Decentralized AI Networks",
        description: "Blockchain-based AI networks for distributed intelligence",
        features: ["Distributed computing", "Token economics", "Smart contracts", "Governance systems"],
        pricing: "Starting at $40,000/month",
        duration: "4-8 months",
        icon: "🌐"
      },
      {
        id: 1,
        title: "Quantum-Safe Blockchain",
        description: "Blockchain solutions resistant to quantum computing attacks",
        features: ["Quantum-resistant algorithms", "Enhanced security", "Scalable architecture", "Future-proof design"],
        pricing: "Starting at $60,000/month",
        duration: "6-10 months",
        icon: "🔒"
      },
      {
        id: 2,
        title: "NFT & Digital Asset Platforms",
        description: "Advanced NFT platforms with AI and quantum integration",
        features: ["AI-generated content", "Quantum verification", "Marketplace integration", "Royalty systems"],
        pricing: "Starting at $25,000/month",
        duration: "3-6 months",
        icon: "🎨"
      }
    ],
    // Cloud & Infrastructure Services
    [
      {
        id: 0,
        title: "Quantum Cloud Infrastructure",
        description: "Cloud infrastructure optimized for quantum computing workloads",
        features: ["Quantum processing units", "Hybrid classical-quantum", "Global distribution", "99.99% uptime"],
        pricing: "Starting at $20,000/month",
        duration: "Ongoing",
        icon: "☁️"
      },
      {
        id: 1,
        title: "AI-Optimized Data Centers",
        description: "Data centers specifically designed for AI and machine learning workloads",
        features: ["GPU clusters", "High-speed networking", "Energy efficiency", "Scalable architecture"],
        pricing: "Starting at $50,000/month",
        duration: "Ongoing",
        icon: "🏗️"
      },
      {
        id: 2,
        title: "Edge Computing Solutions",
        description: "Distributed computing infrastructure for real-time AI processing",
        features: ["Low latency", "Local processing", "5G integration", "Autonomous operation"],
        pricing: "Starting at $15,000/month",
        duration: "2-4 months",
        icon: "📡"
      }
    ]
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
              variants={itemVariants}
            >
              🚀 COMPREHENSIVE SERVICES • 2025
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Revolutionary Technology Services
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Transform your business with our cutting-edge AI, quantum computing, and neural interface solutions
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Service Categories */}
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Choose Your Technology Category</h2>
            <p className="text-xl text-gray-600">Explore our comprehensive range of revolutionary technology services</p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services[activeCategory].map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    hoveredService === service.id ? 'border-purple-300' : 'border-transparent'
                  }`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-center mb-6">
                    <motion.div
                      className="text-5xl mb-4"
                      animate={hoveredService === service.id ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Pricing:</span>
                      <span className="font-semibold text-gray-800">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="font-semibold text-gray-800">{service.duration}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      className={`flex-1 bg-gradient-to-r ${serviceCategories[activeCategory].color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                    <motion.button
                      className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-12 border border-purple-200"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our revolutionary technology solutions drive your success in the digital age
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="border border-purple-500 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComprehensiveServices2025;