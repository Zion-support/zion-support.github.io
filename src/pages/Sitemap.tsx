import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Map as SitemapIcon,
  Home,
  Briefcase,
  BookOpen,
  Users,
  FileText,
  Settings,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Search,
  Navigation,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Lock,
  Eye
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Services', path: '/services', description: 'Overview of our services' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      links: [
        { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'Micro SAAS', path: '/micro-saas', description: 'Specialized software solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Information Technology consulting' },
        { name: 'Emerging Tech', path: '/emerging-tech', description: 'Cutting-edge technology' },
        { name: 'Marketplace', path: '/marketplace', description: 'Technology marketplace' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      links: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and implementations' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', path: '/api-docs', description: 'API documentation and examples' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      links: [
        { name: 'About', path: '/about', description: 'Our story and mission' },
        { name: 'Team', path: '/team', description: 'Meet our experts' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'News', path: '/news', description: 'Company updates and announcements' }
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'Security', path: '/security', description: 'Security measures and practices' }
      ]
    },
    {
      title: 'Support',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/help', description: 'Get help and support' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', path: '/support', description: 'Reach our support team' },
        { name: 'Status', path: '/status', description: 'System status and updates' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', path: '/contact', icon: ArrowRight, color: 'from-blue-500 to-purple-500' },
    { name: 'View Services', path: '/services', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
    { name: 'Read Blog', path: '/blog', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { name: 'Join Team', path: '/careers', icon: Users, color: 'from-green-500 to-teal-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <SitemapIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Site
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Map
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Navigate through all our pages and discover the full range of our services and resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quick Links
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jump to the most important pages on our site
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="block bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`bg-gradient-to-r ${link.color} p-3 rounded-lg w-12 h-12 mb-4 flex items-center justify-center`}>
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {link.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Sections */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Pages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse through all sections of our website organized by category
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl border border-zinc-700 p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg mr-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="block bg-white/5 backdrop-blur-xl border border-zinc-700/50 rounded-lg p-4 hover:border-blue-500/40 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                            {link.name}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Navigation Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use our search or contact us directly for assistance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Search Our Site
              </h3>
              <p className="text-gray-400 mb-6">
                Use our powerful search feature to find specific content, services, or information quickly.
              </p>
              <Link
                to="/search"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Searching
                <Search className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700"
            >
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get Personal Help
              </h3>
              <p className="text-gray-400 mb-6">
                Can't find what you're looking for? Our team is here to help guide you to the right resources.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300"
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Can't Find What You Need?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Contact us directly and we'll help you navigate to the right information
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/help"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;