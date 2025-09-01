import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Search, 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  AlertTriangle,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home, description: 'Return to homepage' },
    { name: 'Services', path: '/services', icon: Search, description: 'Explore our services' },
    { name: 'About', path: '/about', icon: Globe, description: 'Learn about our company' },
    { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
  ];

  const helpfulResources = [
    {
      title: 'Search Our Site',
      description: 'Use our search functionality to find what you\'re looking for',
      action: 'Search Now',
      icon: Search
    },
    {
      title: 'Contact Support',
      description: 'Our team is here to help you navigate our website',
      action: 'Get Help',
      icon: HelpCircle
    },
    {
      title: 'Site Map',
      description: 'View a complete overview of all our pages and sections',
      action: 'View Sitemap',
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Error Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
              404
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, we're here to help you find what you need.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Quick Navigation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={link.path}
                    className="block p-6 bg-slate-800 rounded-xl border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-slate-700"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {link.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Helpful Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Helpful Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {helpfulResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                    {resource.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-600"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find what you're looking for. 
              Contact us directly or explore our comprehensive site navigation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400 text-sm">+1 (302) 464-0950</p>
                <a 
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400 text-sm">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm">Middletown DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5 mr-2" />
                Return to Homepage
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
          </motion.div>

          {/* Error Report */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-600"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white">Report This Issue</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              If you believe this page should exist or you found a broken link, 
              please let us know so we can fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=404 Error Report&body=I encountered a 404 error on the page: [URL]%0D%0A%0D%0AExpected content: [Description]%0D%0A%0D%0AAdditional details: [Any other information]"
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Report Broken Link
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Get Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;