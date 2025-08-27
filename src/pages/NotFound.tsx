import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Search, 
  MapPin, 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  Building, 
  Target, 
  Rocket, 
  Star,
  Cpu,
  Lock,
  Heart,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  TrendingUp,
  Award,
  Code,
  Truck,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  Globe
} from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Main landing page' },
    { name: 'Services', path: '/services', icon: Zap, description: 'All our services' },
    { name: '2026 Services', path: '/services2026', icon: Star, description: 'Revolutionary AI & Quantum Solutions' },
    { name: 'AI Services', path: '/ai-services', icon: Brain, description: 'Artificial Intelligence solutions' },
    { name: 'About Us', path: '/about', icon: Users, description: 'Company information' },
    { name: 'Contact', path: '/contact', icon: MessageCircle, description: 'Get in touch' },
    { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart, description: 'Digital marketplace' },
    { name: 'Solutions', path: '/solutions', icon: Target, description: 'Industry solutions' }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* 404 Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-full mb-6">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, we're here to help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <Link
              to="/sitemap"
              className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
            >
              <MapPin className="w-5 h-5 mr-2" />
              View Sitemap
            </Link>
          </div>
        </motion.div>

        {/* Popular Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Popular Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
              >
                <Link
                  to={page.path}
                  className="block p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <page.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {page.description}
                  </p>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 mt-3 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
                transition={{ duration: 0.4, delay: 0.5 + (categoryIndex * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                    >
                      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Still Can't Find What You're Looking For?</h3>
            <p className="text-slate-300 mb-6">
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
                to="/search"
                className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Site
              </Link>
              <Link
                to="/help"
                className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Help Center
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
