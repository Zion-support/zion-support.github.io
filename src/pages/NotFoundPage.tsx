import React from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
import { Home,
  Search,
  ArrowLeft,
  Zap,
  Brain,
  Shield,
  Cpu
 } from 'lucide-react.ts';

export function NotFoundPage(...args: any[]): any {
  const popularPages = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Contact', href: '/contact', icon: Cpu }
  ];

  return (
    <div className="min-h-screen py-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-cyan-500 mb-4">404</div>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, we're here to help you find what you need.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search our website..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Popular Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Popular Pages</h2>
            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-5 gap-4">
              {popularPages.map((page, index)  => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={page.href}
                    className="block p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <page.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {page.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 font-semibold text-lg border border-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-16">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-400 mb-6">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                >
                  <span>Contact Support</span>
                </Link>
                <a
                  href="mailto:contact@ziontechgroup.com"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFoundPage;