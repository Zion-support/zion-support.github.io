import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Atom,
  Network,
  BarChart3,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Globe,
  Database,
  Cpu,
  Lock,
  Eye,
  Activity,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from 'lucide-react';

export default function EnterpriseServicesShowcase2025() {
  const enterpriseServices = [
    {
      icon: BarChart3,
      title: "AI Business Intelligence Platform Enterprise",
      description: "Transform your business with enterprise-grade AI-powered business intelligence. Real-time analytics, predictive insights, and automated reporting.",
      features: ["AI-Powered Predictive Analytics", "Real-Time Business Intelligence", "Multi-User Collaboration", "Enterprise-Grade Security"],
      pricing: "Starting at $2,999/month",
      href: "/services/ai-business-intelligence-platform-enterprise",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Threat Detection Enterprise",
      description: "Protect your organization with 99.9% threat detection accuracy. Real-time monitoring, automated response, and 24/7 protection.",
      features: ["AI-Powered Threat Detection", "24/7 Network Monitoring", "Zero-Day Threat Protection", "Automated Incident Response"],
      pricing: "Starting at $3,499/month",
      href: "/services/ai-cybersecurity-threat-detection-enterprise",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Atom,
      title: "AI Quantum Computing Solutions Enterprise",
      description: "Access the future of computing with AI-enhanced quantum algorithms. 1000x faster processing and cloud quantum access.",
      features: ["Quantum-Classical Hybrid Computing", "AI-Enhanced Quantum Algorithms", "Real-Time Error Correction", "Quantum Cloud Infrastructure"],
      pricing: "Starting at $4,999/month",
      href: "/services/ai-quantum-computing-solutions-enterprise",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Network,
      title: "AI Blockchain Web3 Solutions Enterprise",
      description: "Revolutionize your business with AI-enhanced blockchain and Web3. Multi-chain integration and intelligent smart contracts.",
      features: ["AI-Powered Smart Contracts", "Multi-Chain Integration", "Automated DeFi Strategies", "Enterprise Web3 Infrastructure"],
      pricing: "Starting at $3,999/month",
      href: "/services/ai-blockchain-web3-solutions-enterprise",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Enterprise Services Showcase 2025 | Zion Tech Group"
        description="Discover our comprehensive suite of enterprise-grade AI services including Business Intelligence, Cybersecurity, Quantum Computing, and Blockchain Web3 solutions."
        keywords="enterprise AI services, business intelligence, cybersecurity, quantum computing, blockchain, Web3, enterprise solutions"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Enterprise Services 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise AI Services Showcase
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of enterprise-grade AI services designed to transform 
              your business with cutting-edge technology and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each service is designed with enterprise needs in mind, featuring advanced AI capabilities, 
              comprehensive security, and scalable infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-cyan-400">{service.pricing}</span>
                  <Link
                    to={service.href}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading organizations that have revolutionized their operations with our AI-powered solutions. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
                Contact Sales Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about our enterprise services? Our team is here to help you 
                find the perfect solution for your organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-cyan-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                Contact Enterprise Team
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}