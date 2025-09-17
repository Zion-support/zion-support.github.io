import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComprehensiveServices2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const serviceCategories = {
    ai: {
      title: "Artificial Intelligence Solutions",
      description: "Revolutionary AI technologies that transform businesses and create new possibilities",
      icon: "🤖",
      color: "from-blue-500 to-purple-600"
    },
    quantum: {
      title: "Quantum Computing Services",
      description: "Next-generation quantum computing solutions for complex problem solving",
      icon: "⚛️",
      color: "from-purple-500 to-pink-600"
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless human-machine interaction",
      icon: "🧠",
      color: "from-green-500 to-teal-600"
    },
    reality: {
      title: "Reality Engineering",
      description: "Advanced technology for manipulating and enhancing reality",
      icon: "🌌",
      color: "from-indigo-500 to-cyan-600"
    }
  };

  const services = {
    ai: [
      {
        name: "Autonomous AI Agents",
        description: "Self-managing AI systems that operate independently across multiple domains",
        features: ["Self-healing capabilities", "Cross-platform integration", "Real-time learning"],
        pricing: "Starting at $10,000/month",
        icon: "🤖"
      },
      {
        name: "Conscious AI Systems",
        description: "AI that exhibits self-awareness and emotional intelligence",
        features: ["Emotional recognition", "Ethical decision making", "Creative problem solving"],
        pricing: "Starting at $25,000/month",
        icon: "🧠"
      },
      {
        name: "AI-Powered Analytics",
        description: "Advanced analytics powered by machine learning and AI",
        features: ["Predictive modeling", "Real-time insights", "Automated reporting"],
        pricing: "Starting at $5,000/month",
        icon: "📊"
      }
    ],
    quantum: [
      {
        name: "Quantum Processing Units",
        description: "High-performance quantum computing for complex calculations",
        features: ["Exponential speed", "Quantum encryption", "Molecular simulation"],
        pricing: "Starting at $50,000/month",
        icon: "⚛️"
      },
      {
        name: "Quantum Security Solutions",
        description: "Unbreakable security using quantum cryptography",
        features: ["Quantum key distribution", "Unhackable encryption", "Future-proof security"],
        pricing: "Starting at $15,000/month",
        icon: "🔒"
      },
      {
        name: "Quantum Machine Learning",
        description: "Machine learning algorithms powered by quantum computing",
        features: ["Quantum neural networks", "Exponential optimization", "Quantum advantage"],
        pricing: "Starting at $30,000/month",
        icon: "🧮"
      }
    ],
    neural: [
      {
        name: "Brain-Computer Interfaces",
        description: "Direct neural interfaces for seamless human-computer interaction",
        features: ["Thought control", "Neural feedback", "Non-invasive technology"],
        pricing: "Starting at $20,000/month",
        icon: "🧬"
      },
      {
        name: "Neural Data Processing",
        description: "Advanced processing of neural signals and brain data",
        features: ["Real-time analysis", "Pattern recognition", "Predictive modeling"],
        pricing: "Starting at $12,000/month",
        icon: "📈"
      },
      {
        name: "Consciousness Transfer",
        description: "Technology for transferring consciousness between systems",
        features: ["Digital consciousness", "Backup systems", "Immortality protocols"],
        pricing: "Starting at $100,000/month",
        icon: "👻"
      }
    ],
    reality: [
      {
        name: "Holographic Projections",
        description: "Advanced holographic technology for immersive experiences",
        features: ["3D projections", "Interactive displays", "Real-time rendering"],
        pricing: "Starting at $8,000/month",
        icon: "👻"
      },
      {
        name: "Matter Manipulation",
        description: "Technology for manipulating matter at the molecular level",
        features: ["Molecular control", "Material transformation", "Energy conversion"],
        pricing: "Starting at $75,000/month",
        icon: "⚗️"
      },
      {
        name: "Reality Simulation",
        description: "Complete reality simulation systems for training and testing",
        features: ["Full immersion", "Realistic physics", "Infinite scenarios"],
        pricing: "Starting at $40,000/month",
        icon: "🎮"
      }
    ]
  };

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechCorp",
      content: "Zion Tech Group's AI solutions have revolutionized our entire operation. We've seen a 500% increase in efficiency.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Johnson",
      role: "Quantum Physicist, Quantum Labs",
      content: "The quantum computing services are beyond anything I've ever seen. Truly revolutionary technology.",
      rating: 5,
      avatar: "👨‍🔬"
    },
    {
      name: "Elena Rodriguez",
      role: "Neural Interface Researcher, BrainTech",
      content: "The neural interface technology has opened up possibilities we never thought possible.",
      rating: 5,
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 COMPREHENSIVE SERVICES • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Services 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover our complete range of revolutionary services that are transforming industries and creating infinite possibilities
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {serviceCategories[activeCategory as keyof typeof serviceCategories].description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {services[activeCategory as keyof typeof services].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <div className={`w-16 h-1 bg-gradient-to-r ${serviceCategories[activeCategory as keyof typeof serviceCategories].color} rounded-full`}></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <div className="text-lg font-bold text-white mb-4">{service.pricing}</div>
                      <button className={`w-full bg-gradient-to-r ${serviceCategories[activeCategory as keyof typeof serviceCategories].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                        Get Started
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from industry leaders who are already using our revolutionary services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of organizations already using our revolutionary services to achieve unprecedented success
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2025;