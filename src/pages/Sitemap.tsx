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

  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-md rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <IconComponent className="w-6 h-6 mr-3 text-cyan-400" />
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => {
          const PageIcon = page.icon;
          return (
            <Link
              key={page.name}
              to={page.href}
              className="group p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-cyan-400/50"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PageIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {page.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zion Tech Group Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive range of services, solutions, and resources. 
            Find everything you need to transform your business with cutting-edge technology.
          </p>
        </motion.div>

        {/* Sitemap Content */}
        <div className="space-y-8">
          {renderPageSection('Main Pages', mainPages, Map)}
          {renderPageSection('Services', servicePages, Settings)}
          {renderPageSection('Legal & Support', legalPages, Shield)}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}