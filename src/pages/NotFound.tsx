import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Map, 
  HelpCircle, 
  ArrowLeft, 
  Globe,
  Brain,
  Cloud,
  Shield,
  ShoppingCart,
  Star,
  Building,
  Users,
  FileText,
  Newspaper,
  Phone,
  Mail
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/', icon: Home, description: 'Main landing page' },
  { name: 'Services', path: '/services', icon: Brain, description: 'All our services' },
  { name: 'About', path: '/about', icon: Users, description: 'Company information' },
  { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch' },
  { name: 'Sitemap', path: '/sitemap', icon: Map, description: 'Complete site navigation' },
  { name: 'Help Center', path: '/help', icon: HelpCircle, description: 'Support and documentation' }
];

const popularServices = [
  { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Brain },
  { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
  { name: 'Cybersecurity', path: '/services/ai-compliance-assistant', icon: Shield },
  { name: 'Micro SaaS', path: '/micro-saas', icon: ShoppingCart },
  { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Star },
  { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Building }
];

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-8xl md:text-9xl font-bold text-cyan-400 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, we're here to help you find what you need.
          </p>
          <div className="text-sm text-slate-400 mb-8">
            <p>Attempted URL: <code className="bg-slate-800 px-2 py-1 rounded">{location.pathname}</code></p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Quick Navigation</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="block p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                      <link.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-sm text-slate-400">{link.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Popular Services</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                      <service.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Still Can't Find What You're Looking For?</h2>
          <p className="text-slate-300 mb-6">
            Our team is here to help you navigate our services and find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Support</span>
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Visit Help Center</span>
            </Link>
            <Link
              to="/sitemap"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <Map className="w-5 h-5" />
              <span>View Sitemap</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
