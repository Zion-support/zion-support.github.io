import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import {
  Map as SitemapIcon,
  Home,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  HelpCircle,
  Shield,
  Globe,
  Building2,
  Rocket,
  Brain,
  Cloud,
  Code,
  BookOpen,
  Handshake,
  LogIn,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Sitemap: React.FC = () => {
=======
import { 
  Sitemap, 
  ArrowRight,
  Home,
  Users,
  Briefcase,
  Shield,
  Globe,
  FileText
} from 'lucide-react';

export default function Sitemap() {
>>>>>>> cursor/website-audit-and-enhancement-8260
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
<<<<<<< HEAD
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Services', path: '/services', description: 'Overview of our services' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' }
=======
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About", path: "/about", description: "Company information and team" },
        { name: "Services", path: "/services", description: "Overview of our services" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" }
>>>>>>> cursor/website-audit-and-enhancement-8260
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      links: [
<<<<<<< HEAD
        { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'Micro SAAS', path: '/micro-saas', description: 'Specialized software solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Information Technology consulting' },
        { name: 'Emerging Tech', path: '/emerging-tech', description: 'Cutting-edge technology' },
        { name: 'Marketplace', path: '/marketplace', description: 'Technology marketplace' }
      ]
    },
    {
      title: 'Company',
      icon: Building2,
      links: [
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership information' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Legal & Support',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection information' },
        { name: 'Terms of Service', path: '/terms', description: 'Service terms and conditions' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation structure' }
      ]
    },
    {
      title: 'User Account',
      icon: Users,
      links: [
        { name: 'Login', path: '/login', description: 'User authentication' },
        { name: 'Sign Up', path: '/signup', description: 'Create new account' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' }
=======
        { name: "AI Solutions", path: "/services/ai", description: "Artificial intelligence services" },
        { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud infrastructure and DevOps" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security solutions" },
        { name: "IT Infrastructure", path: "/services/infrastructure", description: "Infrastructure services" },
        { name: "Digital Transformation", path: "/services/transformation", description: "Business transformation" },
        { name: "Consulting", path: "/services/consulting", description: "Technology consulting" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { name: "Careers", path: "/careers", description: "Job opportunities" },
        { name: "Solutions", path: "/solutions", description: "Industry solutions" },
        { name: "Research & Development", path: "/research-development", description: "R&D initiatives" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories" },
        { name: "News", path: "/news", description: "Company updates" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Partners", path: "/partners", description: "Partnership information" }
      ]
    },
    {
      title: "Resources",
      icon: FileText,
      links: [
        { name: "Blog", path: "/blog", description: "Industry insights and articles" },
        { name: "Documentation", path: "/docs", description: "Technical documentation" },
        { name: "White Papers", path: "/white-papers", description: "Research and insights" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Training", path: "/training", description: "Training programs" }
      ]
    },
    {
      title: "Support",
      icon: Shield,
      links: [
        { name: "Help Center", path: "/help", description: "Support and help articles" },
        { name: "Support Portal", path: "/support", description: "Technical support" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" }
      ]
    },
    {
      title: "Legal",
      icon: Globe,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Sitemap", path: "/sitemap", description: "This page" }
>>>>>>> cursor/website-audit-and-enhancement-8260
      ]
    }
  ];

<<<<<<< HEAD
  const quickLinks = [
    { name: 'Get Started', path: '/contact', icon: Rocket, color: 'from-zion-cyan to-zion-blue' },
    { name: 'View Services', path: '/services', icon: Briefcase, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Read Blog', path: '/blog', icon: BookOpen, color: 'from-zion-blue to-zion-purple' },
    { name: 'Join Team', path: '/careers', icon: Users, color: 'from-zion-cyan to-zion-green' }
  ];

  const externalLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: ExternalLink },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: ExternalLink },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: ExternalLink },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: ExternalLink }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SitemapIcon className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Site <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Navigation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Explore our complete website structure and find the information you need quickly and easily.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quick <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Access</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Popular destinations and key pages for quick navigation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={link.path}
                  className="block bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <link.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">{link.name}</h3>
                  <div className="flex items-center justify-center text-zion-cyan">
                    <span className="text-sm">Visit Page</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Site Map</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organized navigation structure for easy browsing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {siteStructure.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>

                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.path}
                        className="block p-3 rounded-lg hover:bg-zion-slate-dark/30 transition-colors duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-zion-cyan transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-zion-slate-light text-sm">{link.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-zion-cyan opacity-0 group-hover:opacity-100 transition-all duration-300" />
=======
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Sitemap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate our website easily with this comprehensive site structure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="group/link">
                      <Link 
                        to={link.path}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group-hover/link:bg-slate-700/50"
                      >
                        <div className="flex-1">
                          <div className="text-cyan-400 font-medium group-hover/link:text-cyan-300 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {link.description}
                          </div>
>>>>>>> cursor/website-audit-and-enhancement-8260
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover/link:text-cyan-400 transition-colors" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* External Links */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">With Us</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Follow us on social media and explore our online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {externalLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <link.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{link.name}</h3>
                  <div className="flex items-center justify-center text-zion-cyan text-sm">
                    <span>Visit</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </a>
=======
      {/* Quick Links Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Navigation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Jump to the most important pages on our website
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Home", path: "/", icon: Home },
              { name: "Services", path: "/services", icon: Briefcase },
              { name: "About", path: "/about", icon: Users },
              { name: "Contact", path: "/contact", icon: Shield }
            ].map((quickLink, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={quickLink.path}
                  className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <quickLink.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {quickLink.name}
                  </div>
                </Link>
>>>>>>> cursor/website-audit-and-enhancement-8260
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search & Navigation Help */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Help</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-12">
              Can't find what you're looking for? We're here to help you navigate our website.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <HelpCircle className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">FAQ Section</h3>
                <p className="text-zion-slate-light mb-4">
                  Find answers to common questions about our services and website
                </p>
                <Link 
                  to="/faq"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Browse FAQ
                </Link>
              </div>
              
              <div className="text-center">
                <MessageSquare className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Contact Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Get in touch with our team for personalized assistance
                </p>
                <Link 
                  to="/contact"
                  className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us directly and we'll help you navigate to the right information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/help"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Help Center
            </Link>
          </div>
>>>>>>> cursor/website-audit-and-enhancement-8260
        </div>
      </section>
    </div>
  );
};

export default Sitemap;