import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveServices2035: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Conscious AI Development",
      description: "Create AI systems with self-awareness, emotional intelligence, and ethical reasoning capabilities.",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Ethical reasoning frameworks",
        "Contextual understanding systems",
        "Autonomous learning capabilities"
      ],
      pricing: "Starting at $50,000",
      timeline: "3-6 months",
      category: "AI Development"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Leverage quantum computing power for exponential problem-solving and data processing capabilities.",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum algorithm development",
        "Quantum cryptography systems",
        "Molecular simulation platforms",
        "Quantum machine learning",
        "Quantum optimization solutions"
      ],
      pricing: "Starting at $100,000",
      timeline: "6-12 months",
      category: "Quantum Technology"
    },
    {
      id: 3,
      title: "Neural Interface Systems",
      description: "Develop brain-computer interfaces that enable direct communication between mind and machine.",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Non-invasive BCI development",
        "Neural signal processing",
        "Thought-controlled interfaces",
        "Real-time neural feedback",
        "Multi-modal neural integration"
      ],
      pricing: "Starting at $75,000",
      timeline: "4-8 months",
      category: "Neural Technology"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Revolutionary computing systems that operate across multiple dimensions for unlimited processing power.",
      icon: "🚀",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Multi-dimensional processing",
        "Cross-dimensional communication",
        "Infinite data capacity systems",
        "Reality-bending algorithms",
        "Dimensional optimization"
      ],
      pricing: "Starting at $200,000",
      timeline: "12-18 months",
      category: "Advanced Computing"
    },
    {
      id: 5,
      title: "Synthetic Intelligence Platform",
      description: "Hybrid AI systems that combine biological and artificial intelligence for human-like creativity.",
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      features: [
        "Biological-AI fusion",
        "Creative problem solving",
        "Human-like intuition",
        "Adaptive learning systems",
        "Emotional intelligence integration"
      ],
      pricing: "Starting at $60,000",
      timeline: "5-9 months",
      category: "Hybrid AI"
    },
    {
      id: 6,
      title: "Quantum Neural Networks",
      description: "Breakthrough technology combining quantum computing with neural networks for exponential AI capabilities.",
      icon: "⚛️",
      color: "from-orange-600 to-red-600",
      features: [
        "Quantum neural processing",
        "Exponential learning speed",
        "Quantum entanglement computing",
        "Neural quantum optimization",
        "Real-time quantum learning"
      ],
      pricing: "Starting at $150,000",
      timeline: "8-14 months",
      category: "Quantum AI"
    }
  ];

  const categories = [
    "All Services",
    "AI Development",
    "Quantum Technology",
    "Neural Technology",
    "Advanced Computing",
    "Hybrid AI",
    "Quantum AI"
  ];

  const filteredServices = selectedService === 0 
    ? services 
    : services.filter(service => service.category === categories[selectedService]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 COMPREHENSIVE SERVICES • 2035
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Comprehensive Services 2035
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with our cutting-edge technology services. From conscious AI to quantum computing, 
              we provide comprehensive solutions that drive innovation and growth.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Services
              </button>
              <button className="border border-indigo-400 text-indigo-200 px-8 py-4 rounded-lg hover:bg-indigo-500/20 transition-colors font-semibold text-lg">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedService === index
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-indigo-200 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-indigo-100 mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-yellow-400 mb-2">{service.pricing}</div>
                <div className="text-sm text-indigo-300">Timeline: {service.timeline}</div>
              </div>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                    <span className="text-indigo-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <button className={`w-full bg-gradient-to-r ${service.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Get Started →
                </button>
                <button className="w-full border border-indigo-400 text-indigo-200 py-3 rounded-lg hover:bg-indigo-500/20 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-400/30"
        >
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-4">Discovery</h3>
              <p className="text-indigo-200">We analyze your needs and identify the best technology solutions for your business.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p className="text-indigo-200">Our experts design custom solutions tailored to your specific requirements.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <p className="text-indigo-200">We build and implement your solution using cutting-edge technology and best practices.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Deployment</h3>
              <p className="text-indigo-200">We deploy your solution and provide ongoing support and optimization.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our revolutionary technology services 
            to achieve unprecedented growth and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Project
            </button>
            <button className="border border-indigo-400 text-indigo-200 px-8 py-4 rounded-lg hover:bg-indigo-500/20 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2035;