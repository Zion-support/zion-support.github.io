import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Shield,
  Cloud,
  RefreshCw,
  BarChart3,
  Satellite,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function ComprehensiveServicesPage() {
  const allServices = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning services',
      icon: Brain,
      href: '/services/ai-solutions',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      icon: Cpu,
      href: '/services/quantum-computing',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security and threat protection',
      icon: Shield,
      href: '/services/cybersecurity',
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure and development operations',
      icon: Cloud,
      href: '/services/cloud-devops',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services',
      icon: RefreshCw,
      href: '/services/digital-transformation',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data analysis and insights',
      icon: BarChart3,
      href: '/services/data-analytics',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things and edge computing solutions',
      icon: Zap,
      href: '/services/iot-edge-computing',
      color: 'from-pink-500 to-red-600'
    },
    {
      title: 'Space Technology',
      description: 'Cutting-edge space exploration technologies',
      icon: Satellite,
      href: '/services/space-technology',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete technology solutions that transform businesses and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">All Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our complete portfolio of technology services designed to meet every business need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 text-sm">{service.description}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our comprehensive services can drive your success and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}