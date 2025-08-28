import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  TrendingUp,
  Brain,
  Cloud,
  Cpu,
  Lock,
  Zap,
  Globe
} from 'lucide-react';

const featuredServices = [
  {
    name: 'AI-Powered Analytics',
    description: 'Advanced machine learning algorithms for predictive insights and data-driven decision making.',
    category: 'Artificial Intelligence',
    color: 'from-blue-500 to-purple-600',
    icon: Brain,
    features: ['Real-time processing', 'Predictive modeling', 'Natural language queries'],
    href: '/services/ai-analytics'
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions with enterprise-grade security and performance optimization.',
    category: 'Cloud Computing',
    color: 'from-green-500 to-blue-600',
    icon: Cloud,
    features: ['Auto-scaling', 'Multi-region deployment', 'Cost optimization'],
    href: '/services/cloud-infrastructure'
  },
  {
    name: 'Cybersecurity Suite',
    description: 'Comprehensive security solutions protecting your digital assets from evolving threats.',
    category: 'Security',
    color: 'from-red-500 to-orange-600',
    icon: Lock,
    features: ['Threat detection', 'Incident response', 'Compliance management'],
    href: '/services/cybersecurity'
  },
  {
    name: 'IoT Platform',
    description: 'End-to-end IoT solutions for connected devices and smart infrastructure.',
    category: 'Internet of Things',
    color: 'from-purple-500 to-pink-600',
    icon: Zap,
    features: ['Device management', 'Data analytics', 'Edge computing'],
    href: '/services/iot-platform'
  },
  {
    name: 'Quantum Computing',
    description: 'Next-generation computing solutions leveraging quantum mechanics for complex problem solving.',
    category: 'Emerging Tech',
    color: 'from-indigo-500 to-cyan-600',
    icon: Cpu,
    features: ['Quantum algorithms', 'Hybrid systems', 'Research partnerships'],
    href: '/services/quantum-computing'
  },
  {
    name: 'Global Solutions',
    description: 'Worldwide technology services with local expertise and global reach.',
    category: 'International',
    color: 'from-yellow-500 to-green-600',
    icon: Globe,
    features: ['Multi-language support', 'Local compliance', '24/7 availability'],
    href: '/services/global-solutions'
  }
];

const serviceCategories = [
  {
    name: 'Artificial Intelligence',
    description: 'Machine learning, deep learning, and AI-powered automation solutions.',
    services: 12,
    color: 'from-blue-500 to-purple-600',
    icon: Brain,
    href: '/services/ai'
  },
  {
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure, containerization, and continuous delivery solutions.',
    services: 8,
    color: 'from-green-500 to-blue-600',
    icon: Cloud,
    href: '/services/cloud-devops'
  },
  {
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions for modern digital threats.',
    services: 10,
    color: 'from-red-500 to-orange-600',
    icon: Lock,
    href: '/services/cybersecurity'
  },
  {
    name: 'Emerging Technologies',
    description: 'Cutting-edge solutions in quantum computing, blockchain, and more.',
    services: 6,
    color: 'from-purple-500 to-pink-600',
    icon: Zap,
    href: '/services/emerging-tech'
  }
];

export default function InnovativeServicesLanding2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                2025 Innovative
              </span>
              <br />
              <span className="text-white">Services Landing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary AI, cloud, and emerging technology services designed to transform your business in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative services that are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-400 font-medium">{service.category}</span>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group-hover:text-blue-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across all major technology domains to meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300 mb-2">{category.description}</p>
                    <span className="text-blue-400 font-medium">{category.services} services available</span>
                  </div>
                </div>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Explore Category
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Innovation First',
                description: 'Leading-edge solutions that keep you ahead of the competition'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced professionals with deep industry knowledge'
              },
              {
                icon: Shield,
                title: 'Trusted Partner',
                description: 'Reliable, secure, and scalable solutions you can count on'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Track record of successful implementations and ROI'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our innovative services and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}