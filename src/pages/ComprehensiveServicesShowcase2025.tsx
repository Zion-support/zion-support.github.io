import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Truck,
  Server,
  FileText,
  Code,
  TrendingUp,
  Shield,
  Zap,
  Cloud,
  Database,
  Network,
  Cpu,
  Atom,
  Leaf,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  Award,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Eye,
  Lock,
  BarChart3,
  Settings,
  Smartphone,
  Monitor,
  Warehouse,
  Route,
  Factory,
  Ship,
  Package,
  Backup,
  Recovery,
  Update,
  Security,
  Performance,
  Scalability
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Code },
    { id: 'it', name: 'IT Services', icon: Server },
    { id: 'quantum', name: 'Quantum Tech', icon: Atom },
    { id: 'emerging', name: 'Emerging Tech', icon: Lightbulb }
  ];

  const services = [
    {
      id: 'ai-contract-analysis',
      title: 'AI Intelligent Contract Analysis Platform',
      description: 'AI-powered contract analysis with risk assessment and compliance monitoring',
      category: 'ai',
      price: '$99-799/month',
      features: ['AI-powered analysis', 'Risk assessment', 'Compliance monitoring', 'Real-time collaboration'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-intelligent-contract-analysis-platform',
      popular: true
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization Platform',
      description: 'Revolutionize supply chain management with AI-powered optimization',
      category: 'ai',
      price: '$149-999/month',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management', 'Risk management'],
      icon: Truck,
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-supply-chain-optimization-platform',
      popular: false
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management Platform',
      description: 'Comprehensive IT infrastructure monitoring and management platform',
      category: 'it',
      price: '$199-1,299/month',
      features: ['Unified management', 'Advanced security', 'Performance optimization', 'Hybrid cloud'],
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      href: '/services/it-infrastructure-management-platform',
      popular: false
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation Studio Pro',
      description: 'Professional AI-powered content creation and optimization platform',
      category: 'micro-saas',
      price: '$79-399/month',
      features: ['AI content generation', 'SEO optimization', 'Multi-format support', 'Brand consistency'],
      icon: Code,
      color: 'from-orange-500 to-red-500',
      href: '/services/AI-Content-Creation-Studio-Pro',
      popular: false
    },
    {
      id: 'quantum-ai-trading',
      title: 'Quantum AI Trading Platform',
      description: 'Next-generation trading platform powered by quantum computing and AI',
      category: 'quantum',
      price: '$299-1,999/month',
      features: ['Quantum algorithms', 'AI predictions', 'Real-time analysis', 'Risk management'],
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      href: '/services/Quantum-AI-Trading-Platform',
      popular: false
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced cybersecurity powered by artificial intelligence',
      category: 'ai',
      price: '$199-899/month',
      features: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Compliance reporting'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      href: '/services/ai-cybersecurity-suite',
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate repetitive tasks and focus on what matters most'
    },
    {
      icon: DollarSign,
      title: 'Reduce Costs',
      description: 'Cut operational costs by up to 40% through intelligent automation'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with AI-powered threat detection'
    },
    {
      icon: TrendingUp,
      title: 'Improve Efficiency',
      description: 'Streamline operations and boost productivity across your organization'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              2025 Comprehensive Services Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Solutions Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered solutions, micro SAAS platforms, and cutting-edge technology services.
              Transform your business with our innovative offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                View All Services
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300">
                Get Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-500/30'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group ${
                  service.popular ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.href}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the benefits of our comprehensive technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies already using our innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions? Our team is here to help you get started
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-white font-semibold">+1 302 464 0950</p>
                <p className="text-gray-400">Call us anytime</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                <p className="text-gray-400">Email support</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-white font-semibold">364 E Main St STE 1008</p>
                <p className="text-gray-400">Middletown DE 19709</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Request a Demo</h3>
              <p className="text-gray-300 mb-6">
                See our platforms in action with a personalized demo
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
