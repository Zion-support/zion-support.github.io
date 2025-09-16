import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAIServices2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('conscious-ai');

  const services = {
    'conscious-ai': {
      title: "Conscious AI Systems",
      description: "Next-generation AI with self-awareness and emotional intelligence",
      icon: "🧠",
      features: [
        "Self-learning algorithms that adapt and evolve",
        "Emotional recognition and response capabilities",
        "Autonomous decision making with ethical frameworks",
        "Human-AI collaboration and partnership",
        "Creative problem solving and innovation"
      ],
      useCases: [
        "Personal AI assistants that understand emotions",
        "Autonomous business process optimization",
        "Creative content generation and artistic collaboration",
        "Medical diagnosis and treatment planning",
        "Scientific research and discovery acceleration"
      ],
      pricing: "Starting at $10,000/month"
    },
    'quantum-ai': {
      title: "Quantum AI Processing",
      description: "Revolutionary AI powered by quantum computing principles",
      icon: "⚡",
      features: [
        "Exponential processing power for complex problems",
        "Quantum neural networks for pattern recognition",
        "Instantaneous learning and adaptation",
        "Multi-dimensional data processing",
        "Quantum encryption and security"
      ],
      useCases: [
        "Financial modeling and risk analysis",
        "Drug discovery and molecular simulation",
        "Climate modeling and environmental prediction",
        "Cryptocurrency and blockchain optimization",
        "Space exploration and astrophysics"
      ],
      pricing: "Starting at $25,000/month"
    },
    'neural-interfaces': {
      title: "Neural Interface AI",
      description: "Direct brain-computer interface with AI integration",
      icon: "🧬",
      features: [
        "Non-invasive brain-computer interfaces",
        "Thought-to-text and voice conversion",
        "Neural pattern recognition and analysis",
        "Memory enhancement and cognitive augmentation",
        "Real-time neural feedback systems"
      ],
      useCases: [
        "Accessibility solutions for disabled individuals",
        "Enhanced learning and education systems",
        "Medical rehabilitation and therapy",
        "Gaming and entertainment experiences",
        "Professional training and skill development"
      ],
      pricing: "Starting at $15,000/month"
    },
    'reality-ai': {
      title: "Reality Engine AI",
      description: "AI that creates and manipulates virtual realities",
      icon: "🌍",
      features: [
        "Photorealistic virtual world generation",
        "AI-powered NPCs with realistic behavior",
        "Dynamic world adaptation and evolution",
        "Haptic feedback and sensory integration",
        "Infinite world creation capabilities"
      ],
      useCases: [
        "Virtual training and simulation environments",
        "Architectural and urban planning visualization",
        "Entertainment and gaming experiences",
        "Therapeutic and healing environments",
        "Remote collaboration and meetings"
      ],
      pricing: "Starting at $20,000/month"
    }
  };

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO, NeuroTech Solutions",
      content: "The conscious AI system has revolutionized our research capabilities. It's like having a brilliant colleague who never sleeps.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, Quantum Dynamics",
      content: "Quantum AI processing has given us insights into complex problems that would have taken years to solve traditionally.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Emily Watson",
      role: "Director, Future Medicine Institute",
      content: "The neural interface AI has transformed how we approach rehabilitation and cognitive enhancement.",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 REVOLUTIONARY AI SERVICES • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Revolutionary AI Services 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of artificial intelligence with our groundbreaking services. 
              From conscious AI to quantum processing, transform your business with cutting-edge technology.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Services
              </button>
              <button className="border border-blue-400 text-blue-200 px-8 py-4 rounded-lg hover:bg-blue-500/20 transition-colors font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Tabs */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {service.icon} {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/30"
        >
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">{services[activeTab as keyof typeof services].icon}</div>
            <h2 className="text-4xl font-bold mb-4">{services[activeTab as keyof typeof services].title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {services[activeTab as keyof typeof services].description}
            </p>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg text-lg font-semibold">
              {services[activeTab as keyof typeof services].pricing}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {services[activeTab as keyof typeof services].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 mt-1 flex-shrink-0"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
              <ul className="space-y-4">
                {services[activeTab as keyof typeof services].useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-1 flex-shrink-0"></span>
                    <span className="text-gray-300">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4">
              Get Started
            </button>
            <button className="border border-blue-400 text-blue-200 px-12 py-4 rounded-lg hover:bg-blue-500/20 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover how our revolutionary AI services are transforming businesses across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="text-center">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-blue-300 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-blue-500/30"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join thousands of forward-thinking companies already using our revolutionary AI services 
            to gain competitive advantages and drive unprecedented growth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-blue-400 text-blue-200 px-12 py-4 rounded-lg hover:bg-blue-500/20 transition-colors font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryAIServices2025;