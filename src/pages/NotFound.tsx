import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home, 
  Search, 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Users, 
  MessageCircle,
  HelpCircle,
  Atom,
  Mail,
  ArrowLeft
} from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Main landing page' },
    { name: 'Services', path: '/services', icon: Zap, description: 'All our services' },
    { name: 'AI Services', path: '/ai-services', icon: Brain, description: 'Artificial Intelligence solutions' },
    { name: 'About Us', path: '/about', icon: Users, description: 'Company information' },
    { name: 'Contact', path: '/contact', icon: MessageCircle, description: 'Get in touch' }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot' },
        { name: 'AI Content Generator', path: '/services/ai-content-generator' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps', path: '/services/cloud-devops' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure' },
        { name: 'Digital Transformation', path: '/services/digital-transformation' },
        { name: 'Data Analytics', path: '/services/data-analytics' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      services: [
        { name: 'Quantum Computing', path: '/services/quantum-computing' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing' },
        { name: 'Digital Twin', path: '/services/digital-twin' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-9xl font-bold text-cyan-400/80 mb-4">404</div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Don't worry, we're here to help you find what you need.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <Link
            to="/"
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-cyan-500/50 transition-all group"
          >
            <Home className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-white">Go Home</span>
          </Link>

          <Link
            to="/services"
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-cyan-500/50 transition-all group"
          >
            <Search className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-white">Browse Services</span>
          </Link>

          <Link
            to="/contact"
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-cyan-500/50 transition-all group"
          >
            <Mail className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-white">Contact Us</span>
          </Link>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + (categoryIndex * 0.1) }}
                className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    >
                      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Still Can't Find What You're Looking For?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you navigate our services and find the right solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Services
              </Link>
              <Link
                to="/help"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Help Center
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-sm text-gray-400">
            If you believe this is an error, please{' '}
            <Link to="/contact" className="text-cyan-400 hover:underline">
              contact our support team
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}