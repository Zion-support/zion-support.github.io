import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About', path: '/about', description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Partners', path: '/partners', description: 'Our business partners' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and news' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'All Services', path: '/services', description: 'Complete service catalog' },
        { name: 'AI Services', path: '/services?category=AI%20Services', description: 'Artificial intelligence solutions' },
        { name: 'IT Services', path: '/services?category=IT%20Services', description: 'Information technology services' },
        { name: 'Enterprise AI', path: '/services?category=Enterprise%20AI', description: 'Enterprise AI solutions' },
        { name: 'Quantum Technology', path: '/services?category=Quantum%20Technology', description: 'Quantum computing services' },
        { name: 'Blockchain Technology', path: '/services?category=Blockchain%20Technology', description: 'Blockchain solutions' },
        { name: 'Strategic Consulting', path: '/services?category=Strategic%20Consulting', description: 'Strategic consulting services' },
        { name: 'Compliance Consulting', path: '/services?category=Compliance%20Consulting', description: 'Compliance and regulatory services' }
      ]
    },
    {
      title: 'Pricing & Plans',
      links: [
        { name: 'Comprehensive Pricing', path: '/pricing', description: 'View all service pricing' },
        { name: 'Enterprise Solutions', path: '/pricing?category=Enterprise', description: 'Enterprise pricing plans' },
        { name: 'Micro SaaS Solutions', path: '/pricing?category=MicroSaaS', description: 'Micro SaaS pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about', description: 'Our mission and values' },
        { name: 'Team', path: '/about#team', description: 'Meet our team' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Our privacy policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Site
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Map
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all pages and services available on Zion Tech Group
          </p>
        </motion.div>

        {/* Sitemap Sections */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sitemapSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={sectionVariants}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-cyan-400/30 pb-3">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div className="flex-1">
                        <h3 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quick Navigation
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                View All Services
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-200"
              >
                See Pricing
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap;