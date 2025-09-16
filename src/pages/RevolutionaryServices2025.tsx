import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryServices2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = {
    ai: {
      title: "Artificial Intelligence Solutions",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "Autonomous AI Agents",
          description: "Self-managing AI systems that handle complex tasks with 99.9% accuracy",
          features: ["24/7 operation", "Self-learning", "Real-time adaptation", "Zero downtime"],
          price: "From $10,000/month",
          popular: true
        },
        {
          name: "Predictive Analytics Engine",
          description: "Advanced machine learning models for forecasting and decision making",
          features: ["95% accuracy", "Real-time insights", "Custom models", "API integration"],
          price: "From $5,000/month",
          popular: false
        },
        {
          name: "Natural Language Processing",
          description: "Human-level language understanding and generation capabilities",
          features: ["Multi-language", "Context awareness", "Sentiment analysis", "Voice synthesis"],
          price: "From $3,000/month",
          popular: false
        },
        {
          name: "Computer Vision Systems",
          description: "Advanced image and video analysis with human-level recognition",
          features: ["Object detection", "Facial recognition", "Quality control", "Real-time processing"],
          price: "From $7,000/month",
          popular: true
        }
      ]
    },
    quantum: {
      title: "Quantum Computing Services",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      services: [
        {
          name: "Quantum Optimization",
          description: "Solve complex optimization problems with quantum algorithms",
          features: ["Exponential speedup", "Complex problem solving", "Real-time results", "Custom algorithms"],
          price: "From $25,000/month",
          popular: true
        },
        {
          name: "Quantum Cryptography",
          description: "Unbreakable security using quantum principles",
          features: ["Military-grade security", "Quantum key distribution", "Future-proof", "Zero vulnerabilities"],
          price: "From $15,000/month",
          popular: false
        },
        {
          name: "Molecular Simulation",
          description: "Simulate molecular interactions for drug discovery and materials science",
          features: ["Atomic precision", "Complex simulations", "Drug discovery", "Materials research"],
          price: "From $20,000/month",
          popular: false
        }
      ]
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      services: [
        {
          name: "Brain-Computer Interface",
          description: "Direct neural connection between human brain and digital systems",
          features: ["Non-invasive", "Real-time processing", "Thought control", "Memory enhancement"],
          price: "From $50,000/month",
          popular: true
        },
        {
          name: "Consciousness Transfer",
          description: "Advanced technology for digital consciousness preservation",
          features: ["Full backup", "Seamless transfer", "Identity preservation", "Immortality tech"],
          price: "From $100,000/month",
          popular: false
        }
      ]
    },
    blockchain: {
      title: "Next-Gen Blockchain Solutions",
      icon: "🔗",
      color: "from-orange-600 to-red-600",
      services: [
        {
          name: "Lightning-Fast Transactions",
          description: "Ultra-high-speed blockchain with 100,000 TPS capacity",
          features: ["100,000 TPS", "Instant settlement", "Low fees", "Global scale"],
          price: "From $8,000/month",
          popular: true
        },
        {
          name: "Smart Contract Automation",
          description: "Self-executing contracts with advanced logic capabilities",
          features: ["Auto-execution", "Complex logic", "Multi-party", "Dispute resolution"],
          price: "From $5,000/month",
          popular: false
        },
        {
          name: "Decentralized Governance",
          description: "Democratic decision-making systems for organizations",
          features: ["Voting systems", "Transparency", "Automated execution", "Community driven"],
          price: "From $12,000/month",
          popular: false
        }
      ]
    }
  };

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
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
          >
            🚀 REVOLUTIONARY SERVICES • JANUARY 2025
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent"
          >
            Revolutionary Services 2025
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12"
          >
            Transform your business with our cutting-edge technology services. 
            From AI automation to quantum computing, we deliver solutions that drive unprecedented results.
          </motion.p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <motion.button
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {serviceCategories[activeCategory as keyof typeof serviceCategories].services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    service.popular ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-100'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">
                      {serviceCategories[activeCategory as keyof typeof serviceCategories].icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${serviceCategories[activeCategory as keyof typeof serviceCategories].color} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${serviceCategories[activeCategory as keyof typeof serviceCategories].color} rounded-full`}></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <button className={`w-full bg-gradient-to-r ${serviceCategories[activeCategory as keyof typeof serviceCategories].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                      Get Started →
                    </button>
                    <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">🏆 Client Success Stories</h2>
            <p className="text-xl text-gray-600">See how our revolutionary services transform businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">+500%</span>
                <span className="text-sm text-gray-500">Efficiency Gain</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fortune 500 AI Transformation</h3>
              <p className="text-gray-600 mb-4">
                "Implemented autonomous AI agents that reduced operational costs by 40% and increased productivity by 500%. ROI achieved in just 3 months."
              </p>
              <div className="text-sm text-gray-500">- CEO, Global Tech Corp</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">$5M</span>
                <span className="text-sm text-gray-500">Cost Savings</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quantum Optimization Success</h3>
              <p className="text-gray-600 mb-4">
                "Quantum optimization algorithms solved our complex logistics problems, saving $5M annually and reducing delivery times by 60%."
              </p>
              <div className="text-sm text-gray-500">- CTO, Logistics Giant</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-semibold">99.9%</span>
                <span className="text-sm text-gray-500">Accuracy Rate</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Neural Interface Breakthrough</h3>
              <p className="text-gray-600 mb-4">
                "Neural interface technology enabled our team to control complex systems with thought, achieving 99.9% accuracy and unprecedented speed."
              </p>
              <div className="text-sm text-gray-500">- Research Director, NeuroTech Inc</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the future of technology with our revolutionary services. 
              Transform your business today and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                Start Your Transformation →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryServices2025;