import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
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

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-full mb-6">
              <Map className="w-8 h-8 text-zion-cyan" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Navigate through our comprehensive website structure to find exactly what you're looking for.
            </p>
          </motion.div>

          {/* Main Pages */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Home className="w-6 h-6 text-zion-cyan mr-3" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <page.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{page.description}</p>
                  <Link 
                    to={page.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Visit Page
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Services */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Settings className="w-6 h-6 text-zion-cyan mr-3" />
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePages.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <service.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Explore Service
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Legal Pages */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Shield className="w-6 h-6 text-zion-cyan mr-3" />
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <page.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{page.description}</p>
                  <Link 
                    to={page.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Read Policy
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-16 border-t border-zion-blue-light/20"
          >
            <p className="text-zion-slate-light mb-4">
              Can't find what you're looking for? Contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-semibold"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300 font-semibold"
              >
                Help Center
              </Link>
            </div>
            <p className="text-zion-slate-light text-sm mt-8">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}