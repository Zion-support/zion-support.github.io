import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Bot, TrendingUp, Target, MessageCircle, BarChart3,
  DollarSign, Users, Check, ArrowRight, ExternalLink, Phone, Mail,
  Calendar, Shield, Filter, Headphones, Calculator, PieChart,
  Globe, Leaf, Cpu, Atom, Wifi, CheckCircle, Star, TrendingDown, Clock, Brain, Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function NewServicesShowcase2025() {
  const newServices = [
    {
      name: 'AI Supply Chain Risk Management',
      description: 'Protect your business from supply chain disruptions with AI-driven risk assessment, real-time monitoring, and predictive analytics.',
      features: ['AI-powered risk assessment', 'Real-time disruption alerts', 'Predictive analytics', 'Multi-tier supplier analysis'],
      pricing: 'Starting at $299/mo',
      benefits: ['60-80% reduction in disruptions', '90% faster risk assessment', '30-60 days early warning'],
      color: 'from-orange-600 via-red-600 to-red-800',
      icon: Shield,
      path: '/services/ai-supply-chain-risk-management'
    },
    {
      name: 'AI ESG Compliance Platform',
      description: 'Streamline your ESG compliance with AI-driven data collection, automated reporting, and real-time sustainability monitoring.',
      features: ['AI-powered data collection', 'Automated compliance reporting', 'Real-time sustainability tracking', 'Carbon footprint optimization'],
      pricing: 'Starting at $399/mo',
      benefits: ['85% faster reporting time', '90% improved compliance accuracy', '70% reduced tracking costs'],
      color: 'from-green-600 via-emerald-600 to-teal-800',
      icon: Leaf,
      path: '/services/ai-esg-compliance-platform'
    },
    {
      name: 'AI Digital Twin Platform',
      description: 'Create intelligent digital replicas of your physical assets with AI-driven monitoring, predictive analytics, and real-time optimization.',
      features: ['AI-powered digital twin creation', 'Real-time IoT integration', 'Predictive maintenance', '3D visualization support'],
      pricing: 'Starting at $599/mo',
      benefits: ['25-40% reduction in operational costs', '30-50% improvement in uptime', '20-35% cut in maintenance costs'],
      color: 'from-blue-600 via-indigo-600 to-purple-800',
      icon: Cpu,
      path: '/services/ai-digital-twin-platform'
    },
    {
      name: 'AI Quantum Computing Platform',
      description: 'Harness the power of quantum computing with AI-driven optimization, hybrid quantum-classical solutions, and breakthrough computational capabilities.',
      features: ['AI-powered quantum optimization', 'Hybrid quantum-classical computing', 'Quantum machine learning', 'Real-time circuit simulation'],
      pricing: 'Starting at $1,299/mo',
      benefits: ['1000x faster problem solving', '60-80% reduction in computational costs', 'Breakthrough scientific discoveries'],
      color: 'from-purple-600 via-indigo-600 to-blue-800',
      icon: Atom,
      path: '/services/ai-quantum-computing-platform'
    },
    {
      name: 'AI Edge Computing Platform',
      description: 'Bring AI processing to the edge with intelligent device management, real-time data processing, and distributed computing capabilities.',
      features: ['AI-powered edge management', 'Real-time data processing', 'Distributed AI deployment', 'Edge-to-cloud synchronization'],
      pricing: 'Starting at $499/mo',
      benefits: ['80-90% reduction in latency', '60-70% cut in bandwidth costs', 'Enhanced data privacy and security'],
      color: 'from-teal-600 via-cyan-600 to-blue-800',
      icon: Wifi,
      path: '/services/ai-edge-computing-platform'
    }
  ];

  const stats = [
    { label: 'AI Services Delivered', value: '500+', icon: Bot },
    { label: 'Client Satisfaction', value: '98%', icon: Check },
    { label: 'Cost Reduction', value: '40-80%', icon: TrendingDown },
    { label: 'Implementation Time', value: '50% Faster', icon: Clock }
  ];

  const features = [
    {
      title: 'AI-Powered Innovation',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations and drive growth.',
      icon: Brain,
      color: 'text-blue-600'
    },
    {
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across multiple industries with proven track records of success.',
      icon: Award,
      color: 'text-green-600'
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible architectures that grow with your business and adapt to changing requirements.',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance to ensure your systems run smoothly.',
      icon: Headphones,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="New Services Showcase 2025 - Zion Tech Group"
        description="Discover our latest AI-powered services and solutions for 2025. Transform your business with cutting-edge technology from Zion Tech Group."
        keywords="AI services, technology solutions, digital transformation, 2025, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              New Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover the future of technology with our latest AI-powered services and solutions designed to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary New Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of AI-powered solutions that will redefine how you do business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                      <Link
                        to={service.path}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
