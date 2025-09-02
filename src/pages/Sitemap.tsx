import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, Home, Building, Code, Shield, Users, BookOpen, HelpCircle, FileText, Globe, ArrowRight } from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Our story and mission' },
        { name: 'Our Team', path: '/team', description: 'Meet our experts' },
        { name: 'Leadership', path: '/leadership', description: 'Executive team' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'News', path: '/news', description: 'Latest updates' },
        { name: 'Contact Us', path: '/contact', description: 'Get in touch with us' },
      ]
    },
    {
      category: 'Services',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      pages: [
        { name: 'AI Solutions', path: '/ai-solutions', description: 'Machine learning & automation' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Infrastructure & deployment' },
        { name: 'Cybersecurity', path: '/services/ai-cybersecurity-platform', description: 'Security & compliance' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Business modernization' },
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Lightweight applications' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Technology advisory' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Data analytics & insights' },
        { name: 'AI Content Creation', path: '/services/ai-content-marketing-suite', description: 'Content marketing tools' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'Smart project coordination' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Financial insights & forecasting' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Medical technology solutions' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Sales automation & optimization' },
      ]
    },
    {
      category: 'Solutions',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      pages: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Medical technology & systems' },
        { name: 'Financial Solutions', path: '/financial-solutions', description: 'Fintech & banking solutions' },
        { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Industry 4.0 & automation' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation labs & R&D' },
        { name: 'Green IT Solutions', path: '/green-it', description: 'Sustainable technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector technology' },
        { name: 'Education Solutions', path: '/solutions/education', description: 'Educational technology' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'E-commerce & retail tech' },
      ]
    },
    {
      category: 'Resources',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      pages: [
        { name: 'Blog', path: '/blog', description: 'Insights & industry updates' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories & examples' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research & analysis' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content & sessions' },
        { name: 'Documentation', path: '/documentation', description: 'Technical guides & manuals' },
        { name: 'API Reference', path: '/api', description: 'Developer resources & APIs' },
        { name: 'Developer Portal', path: '/developer-portal', description: 'Tools for developers' },
        { name: 'Training Materials', path: '/training', description: 'Learning resources' },
      ]
    },
    {
      category: 'Support',
      icon: HelpCircle,
      color: 'from-indigo-500 to-purple-500',
      pages: [
        { name: 'Help Center', path: '/help', description: 'Find answers & solutions' },
        { name: 'FAQ', path: '/faq', description: 'Common questions & answers' },
        { name: 'Contact Support', path: '/support', description: 'Get help from our team' },
        { name: 'Training', path: '/training', description: 'Skill development programs' },
        { name: 'Status Page', path: '/status', description: 'Service status & updates' },
        { name: 'Community', path: '/community', description: 'User forums & discussions' },
        { name: 'Live Chat', path: '/chat', description: 'Real-time support' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get pricing information' },
        { name: 'Schedule Demo', path: '/schedule-demo', description: 'See our solutions in action' },
      ]
    },
    {
      category: 'Legal & Privacy',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection & privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms & conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage & preferences' },
        { name: 'Data Protection', path: '/data-protection', description: 'GDPR & data security' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation structure' },
      ]
    }
  ];

  const quickLinks = [
    { name: 'Request Quote', path: '/request-quote', badge: 'Get Started' },
    { name: 'Schedule Demo', path: '/schedule-demo', badge: 'Free' },
    { name: 'Contact Sales', path: '/contact', badge: '24/7' },
    { name: 'Support Chat', path: '/chat', badge: 'Live' },
    { name: 'Careers', path: '/careers', badge: 'Hiring' },
    { name: 'Partners', path: '/partners', badge: 'Join Us' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Map className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Navigate through Zion Tech Group's comprehensive website structure. 
            Find all our pages, services, and resources organized by category.
          </p>
        </div>
      </motion.div>

      {/* Quick Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/50 text-center"
              >
                <div className="mb-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    link.badge === 'Get Started' ? 'bg-green-500 text-white' :
                    link.badge === 'Free' ? 'bg-blue-500 text-white' :
                    link.badge === '24/7' ? 'bg-purple-500 text-white' :
                    link.badge === 'Live' ? 'bg-orange-500 text-white' :
                    link.badge === 'Hiring' ? 'bg-pink-500 text-white' :
                    'bg-indigo-500 text-white'
                  }`}>
                    {link.badge}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                  {link.name}
                </h3>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Site Structure */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          {siteStructure.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (categoryIndex * 0.1) }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="group p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                          {page.name}
                        </h3>
                        <p className="text-zion-slate-light text-sm leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Need Help Finding Something?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate 
              our website and find the information you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              >
                Help Center
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-8"
        >
          <p className="text-zion-slate-light text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
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