import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Map, 
  Home, 
  Info, 
  Settings, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  Shield, 
  Cookie, 
  Globe,
  Brain,
  Cloud,
  Zap,
  Users
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Main landing page' },
    { name: 'About Us', href: '/about', icon: Info, description: 'Company information and mission' },
    { name: 'Services', href: '/services', icon: Settings, description: 'Overview of all services' },
    { name: 'Contact', href: '/contact', icon: MessageSquare, description: 'Get in touch with us' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support and resources' },
    { name: 'Request Quote', href: '/quote', icon: FileText, description: 'Get a custom quote' },
  ];

  const servicePages = [
    { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Machine Learning & AI Services' },
    { name: 'Cloud Infrastructure', href: '/services/cloud', icon: Cloud, description: 'AWS, Azure, GCP Solutions' },
    { name: 'Cybersecurity', href: '/services/security', icon: Shield, description: 'Security & Compliance' },
    { name: 'Digital Transformation', href: '/services/transformation', icon: Zap, description: 'Business Process Modernization' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection and privacy' },
    { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie, description: 'Cookie usage information' },
  ];

  const marketplacePages = [
    { name: 'Marketplace', href: '/marketplace', icon: Globe, description: 'Browse all services and solutions' },
    { name: 'Talent', href: '/talent', icon: Users, description: 'Find skilled professionals' },
    { name: 'Equipment', href: '/equipment', icon: Settings, description: 'Hardware and tools' },
    { name: 'Community', href: '/community', icon: Users, description: 'Join our community' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue-dark">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center">
            <Map className="w-12 h-12 md:w-16 md:h-16 text-zion-cyan mr-4" />
            Sitemap
          </h1>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Navigate through all the pages and services available on Zion Tech Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Home className="w-6 h-6 text-zion-cyan mr-3" />
              Main Pages
            </h2>
            <ul className="space-y-3">
              {mainPages.map((page, index) => (
                <motion.li
                  key={page.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    to={page.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <page.icon className="w-4 h-4 mr-3 text-zion-purple group-hover:text-zion-cyan transition-colors" />
                    <div>
                      <div className="font-medium">{page.name}</div>
                      <div className="text-sm text-zion-slate-light/70">{page.description}</div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Settings className="w-6 h-6 text-zion-cyan mr-3" />
              Services
            </h2>
            <ul className="space-y-3">
              {servicePages.map((page, index) => (
                <motion.li
                  key={page.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <Link 
                    to={page.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <page.icon className="w-4 h-4 mr-3 text-zion-purple group-hover:text-zion-cyan transition-colors" />
                    <div>
                      <div className="font-medium">{page.name}</div>
                      <div className="text-sm text-zion-slate-light/70">{page.description}</div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Marketplace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Globe className="w-6 h-6 text-zion-cyan mr-3" />
              Marketplace
            </h2>
            <ul className="space-y-3">
              {marketplacePages.map((page, index) => (
                <motion.li
                  key={page.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    to={page.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <page.icon className="w-4 h-4 mr-3 text-zion-purple group-hover:text-zion-cyan transition-colors" />
                    <div>
                      <div className="font-medium">{page.name}</div>
                      <div className="text-sm text-zion-slate-light/70">{page.description}</div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* User Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="w-6 h-6 text-zion-cyan mr-3" />
              User Dashboard
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/dashboard" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Profile Settings
                </Link>
              </li>
              <li>
                <Link to="/messages" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Messages
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/admin/disputes" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Dispute Management
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal & Support */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-zion-cyan mr-3" />
              Legal & Support
            </h2>
            <ul className="space-y-3">
              {legalPages.map((page, index) => (
                <motion.li
                  key={page.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <Link 
                    to={page.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <page.icon className="w-4 h-4 mr-3 text-zion-purple group-hover:text-zion-cyan transition-colors" />
                    <div>
                      <div className="font-medium">{page.name}</div>
                      <div className="text-sm text-zion-slate-light/70">{page.description}</div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <HelpCircle className="w-6 h-6 text-zion-cyan mr-3" />
              Additional Resources
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Events & Webinars
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Resources & Downloads
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Partner Program
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-zion-blue-light/30"
        >
          <p className="text-zion-slate-light">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <p className="text-sm text-zion-slate-light/70 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}