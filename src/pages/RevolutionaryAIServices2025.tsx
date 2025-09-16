import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAIServices2025: React.FC = () => {
  const services = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently, making decisions and executing tasks without human intervention.",
      features: ["Self-healing systems", "Autonomous decision making", "Continuous learning", "Zero-touch operations"],
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum-Enhanced AI",
      description: "AI systems powered by quantum computing for exponential processing speed and problem-solving capabilities.",
      features: ["Quantum neural networks", "Exponential speedup", "Complex optimization", "Quantum cryptography"],
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Conscious AI Systems",
      description: "AI with self-awareness and consciousness, capable of understanding context and making ethical decisions.",
      features: ["Self-awareness", "Ethical reasoning", "Contextual understanding", "Emotional intelligence"],
      icon: "🧠",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Neural Interface AI",
      description: "Direct brain-computer interfaces that enable seamless communication between human minds and AI systems.",
      features: ["Brain-computer interface", "Thought control", "Neural feedback", "Mind-AI fusion"],
      icon: "🧬",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Predictive AI Analytics",
      description: "Advanced predictive models that forecast future trends and outcomes with unprecedented accuracy.",
      features: ["Future prediction", "Trend analysis", "Risk assessment", "Strategic planning"],
      icon: "🔮",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "Autonomous Business Operations",
      description: "Complete business process automation with AI agents managing entire workflows independently.",
      features: ["End-to-end automation", "Process optimization", "Resource management", "Performance monitoring"],
      icon: "🏢",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "10x", label: "Performance Boost" },
    { number: "50+", label: "AI Services" },
    { number: "24/7", label: "Autonomous Operation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY AI SERVICES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Next-Generation AI Solutions
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of artificial intelligence with our revolutionary services that push the boundaries of what's possible.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-300 mb-2">{stat.number}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary AI Services
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our cutting-edge AI services that are transforming industries and reshaping the future of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-6xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-purple-500/30"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our revolutionary AI services to drive innovation and achieve unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your AI Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryAIServices2025;