import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, Globe, FileText, Users, Settings, Shield, Brain, Cloud, BarChart3, ShoppingCart, HelpCircle, Mail, Phone, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';

interface SitemapSection {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  links: {
    name: string;
    path: string;
    description?: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Pages',
    description: 'Core website pages and navigation',
    icon: Globe,
    links: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'Company information and mission' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
      { name: 'Careers', path: '/careers', description: 'Job opportunities and careers' },
      { name: 'Team', path: '/team', description: 'Meet our team members' },
      { name: 'News', path: '/news', description: 'Latest company news and updates' },
      { name: 'Blog', path: '/blog', description: 'Articles and insights' },
      { name: 'Case Studies', path: '/case-studies', description: 'Success stories and projects' }
    ]
  },
  {
    title: 'Services',
    description: 'Our comprehensive service offerings',
    icon: Settings,
    links: [
      { name: 'All Services', path: '/services', description: 'Complete service overview' },
      { name: 'AI Services', path: '/ai-services', description: 'Artificial intelligence solutions' },
      { name: 'IT Services', path: '/it-services', description: 'Information technology services' },
      { name: 'MicroSaaS', path: '/micro-saas', description: 'Micro SaaS solutions' },
      { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Cloud and DevOps services' },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Infrastructure solutions' },
      { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and protection' },
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Data analysis and insights' },
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Digital twin technology' },
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'AI-powered BI solutions' }
    ]
  },
  {
    title: 'Solutions',
    description: 'Industry-specific solutions and platforms',
    icon: Brain,
    links: [
      { name: 'Solutions Overview', path: '/solutions', description: 'All available solutions' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'AI-powered sales assistance' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations optimization' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Compliance automation' },
      { name: 'AI Auto Email Responder', path: '/services/ai-auto-email-responder', description: 'Automated email responses' },
      { name: 'Customer Feedback Surveys', path: '/services/mobile-feedback-surveys', description: 'Feedback collection tools' },
      { name: 'AI Compliance Copilot', path: '/services/ai-compliance-copilot', description: 'Compliance guidance' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'Content creation with LLMs' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Financial operations advice' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Return process optimization' }
    ]
  },
  {
    title: 'Marketplace',
    description: 'Talent, equipment, and service marketplace',
    icon: ShoppingCart,
    links: [
      { name: 'Marketplace Home', path: '/marketplace', description: 'Main marketplace page' },
      { name: 'Products', path: '/marketplace/products', description: 'Available products' },
      { name: 'Talent', path: '/marketplace/talent', description: 'Find skilled professionals' },
      { name: 'Equipment', path: '/marketplace/equipment', description: 'Rent or buy equipment' },
      { name: 'Services', path: '/marketplace/services', description: 'Professional services' }
    ]
  },
  {
    title: 'Support & Resources',
    description: 'Help, documentation, and learning resources',
    icon: HelpCircle,
    links: [
      { name: 'Support Center', path: '/support', description: 'Technical support and help' },
      { name: 'Help Center', path: '/help', description: 'Self-service help resources' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'System Status', path: '/status', description: 'Service status and uptime' },
      { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', path: '/api', description: 'API documentation and guides' },
      { name: 'Developer Portal', path: '/developers', description: 'Developer resources' },
      { name: 'White Papers', path: '/white-papers', description: 'Industry insights and research' },
      { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
      { name: 'Training', path: '/training', description: 'Professional training programs' }
    ]
  },
  {
    title: 'Legal & Information',
    description: 'Legal documents and company information',
    icon: FileText,
    links: [
      { name: 'Privacy Policy', path: '/privacy', description: 'Data privacy information' },
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
      { name: 'Sitemap', path: '/sitemap', description: 'This page - site structure' }
    ]
  },
  {
    title: 'Business Tools',
    description: 'Tools and platforms for business operations',
    icon: BarChart3,
    links: [
      { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
      { name: 'Dashboard', path: '/dashboard', description: 'User dashboard and controls' },
      { name: 'Login', path: '/login', description: 'User authentication' },
      { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
      { name: 'Partners', path: '/partners', description: 'Partnership opportunities' },
      { name: 'Research & Development', path: '/research-development', description: 'R&D initiatives' }
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category."
      />
      
      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium mb-6 border border-slate-700/50"
          >
            <Map className="w-4 h-4 mr-2 text-cyan-400" />
            Site Navigation
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Sitemap
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Navigate through all pages, services, and resources available on our website. 
            Everything is organized by category for easy discovery.
          </motion.p>
        </div>
      </div>

      {/* Sitemap Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sitemapData.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + sectionIndex * 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    className="group"
                  >
                    <Link
                      to={link.path}
                      className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group-hover:translate-x-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                            {link.name}
                          </div>
                          {link.description && (
                            <div className="text-sm text-gray-400 mt-1">
                              {link.description}
                            </div>
                          )}
                        </div>
                        <div className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-200">
                          →
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/contact"
              className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-white group-hover:text-cyan-400 transition-colors duration-200">Contact</span>
            </Link>
            <Link
              to="/support"
              className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
            >
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <span className="text-white group-hover:text-cyan-400 transition-colors duration-200">Support</span>
            </Link>
            <Link
              to="/services"
              className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
            >
              <Settings className="w-5 h-5 text-cyan-400" />
              <span className="text-white group-hover:text-cyan-400 transition-colors duration-200">Services</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
            >
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-white group-hover:text-cyan-400 transition-colors duration-200">About</span>
            </Link>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-8 text-center"
        >
          <div className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-4">Need Help Finding Something?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Get Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
