import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const NewServices = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Autonomous Systems",
      description: "Next-generation AI systems that operate independently and learn continuously",
      features: ["Self-learning algorithms", "Autonomous decision making", "Continuous optimization"],
      path: "/services/ai-autonomous-systems",
      category: "AI & Machine Learning"
    },
    {
      icon: Shield,
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions with AI-powered threat detection",
      features: ["Real-time monitoring", "AI threat analysis", "Automated response"],
      path: "/services/cybersecurity",
      category: "Security"
    },
    {
      icon: Cloud,
      title: "Quantum Cloud Infrastructure",
      description: "Revolutionary cloud computing powered by quantum technology",
      features: ["Quantum encryption", "Superior performance", "Future-proof architecture"],
      path: "/quantum-cloud-infrastructure",
      category: "Cloud & Infrastructure"
    },
    {
      icon: Zap,
      title: "5G Enterprise Solutions",
      description: "Cutting-edge 5G networks optimized for enterprise needs",
      features: ["Ultra-low latency", "Massive connectivity", "Enterprise security"],
      path: "/5g-enterprise-solutions",
      category: "Networking"
    },
    {
      icon: Globe,
      title: "AI-Powered IT Asset Management",
      description: "Intelligent asset tracking and optimization for modern enterprises",
      features: ["Predictive maintenance", "Cost optimization", "Real-time insights"],
      path: "/ai-powered-it-asset-management",
      category: "IT Management"
    },
    {
      icon: Cpu,
      title: "Quantum Neural Network Platform",
      description: "Revolutionary neural networks leveraging quantum computing principles",
      features: ["Quantum algorithms", "Enhanced learning", "Breakthrough performance"],
      path: "/quantum-neural-network-platform",
      category: "AI & Quantum"
    }
  ];

  const categories = [
    "AI & Machine Learning",
    "Security",
    "Cloud & Infrastructure",
    "Networking",
    "IT Management",
    "AI & Quantum"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                New Services
              </span>
              <br />
              <span className="text-white">2024-2025</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our latest cutting-edge technology services designed to transform your business 
              and keep you ahead of the competition in the AI-driven future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      to={service.path}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our new services are designed to give your business a competitive edge. 
              Get in touch to learn how we can help you transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Star, label: "New Services", value: "25+", description: "Cutting-edge solutions" },
              { icon: TrendingUp, label: "Success Rate", value: "98%", description: "Client satisfaction" },
              { icon: Zap, label: "Implementation", value: "2-4 weeks", description: "Fast deployment" },
              { icon: CheckCircle, label: "Support", value: "24/7", description: "Always available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewServices;