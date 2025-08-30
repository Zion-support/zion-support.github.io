import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building, 
  Users, 
  FileText, 
  Settings, 
  Shield, 
  Globe, 
  Rocket, 
  Brain, 
  Cloud, 
  Cpu, 
  Database, 
  Lock, 
  Search, 
  BookOpen, 
  MessageCircle, 
  DollarSign, 
  Star,
  Zap,
  Target,
  TrendingUp,
  Heart,
  Atom,
  Leaf,
  Code,
  ShoppingCart,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About Us', href: '/about', description: 'Company information and team' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'Legal', href: '/legal', description: 'Legal information' },
        { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' }
      ]
    },
    {
      title: 'Services',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'All Services', href: '/services', description: 'Complete service catalog' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare AI solutions' },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', description: 'Legal AI automation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'Financial AI platform' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'Content generation AI' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT and edge computing' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Digital twin technology' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Cloud and DevOps services' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data analysis solutions' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'IT infrastructure services' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', description: 'Micro SaaS solutions' }
      ]
    },
    {
      title: 'Innovative Services',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', description: 'Future technology solutions' },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', description: '2025 innovative services' },
        { name: 'Innovative Services Showcase 2027', href: '/innovative-services-showcase-2027', description: '2027 showcase' },
        { name: 'Comprehensive Services Landing 2025', href: '/services/comprehensive-2025', description: '2025 comprehensive services' },
        { name: 'Comprehensive Services Landing 2027', href: '/services/comprehensive-2027', description: '2027 comprehensive services' },
        { name: 'Comprehensive Services Landing 2030', href: '/services/comprehensive-2030', description: '2030 comprehensive services' },
        { name: 'Enhanced Services Landing', href: '/services/enhanced', description: 'Enhanced services overview' },
        { name: 'Comprehensive Services Advertising', href: '/services/comprehensive-advertising', description: 'Advertising services' },
        { name: 'Comprehensive Services Showcase 2030', href: '/services/showcase-2030', description: '2030 showcase' },
        { name: 'Innovative Services Overview', href: '/services/overview', description: 'Services overview' },
        { name: 'Innovative Micro SAAS Services 2025', href: '/innovative-micro-saas-services-2025', description: '2025 micro SAAS' }
      ]
    },
    {
      title: 'Solutions',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'All Solutions', href: '/solutions', description: 'Complete solutions catalog' },
        { name: 'Enterprise Solutions', href: '/solutions#enterprise', description: 'Large-scale business solutions' },
        { name: 'SMB Solutions', href: '/solutions#smb', description: 'Small to medium business solutions' },
        { name: 'Startup Solutions', href: '/solutions#startup', description: 'Startup growth solutions' },
        { name: 'Government Solutions', href: '/solutions#government', description: 'Public sector solutions' },
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', description: 'Healthcare industry solutions' },
        { name: 'Financial Solutions', href: '/solutions#financial', description: 'Financial industry solutions' },
        { name: 'Manufacturing Solutions', href: '/solutions#manufacturing', description: 'Manufacturing industry solutions' },
        { name: 'Retail Solutions', href: '/solutions#retail', description: 'Retail industry solutions' },
        { name: 'Energy Solutions', href: '/solutions#energy', description: 'Energy industry solutions' },
        { name: 'Space Solutions', href: '/solutions#space', description: 'Space industry solutions' },
        { name: 'Education Solutions', href: '/solutions#education', description: 'Education industry solutions' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500',
      links: [
        { name: 'All Resources', href: '/resources', description: 'Complete resource library' },
        { name: 'Blog & Insights', href: '/blog', description: 'Latest industry insights' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Webinars', href: '/webinars', description: 'Expert-led sessions' },
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'FAQ & Support', href: '/faq', description: 'Help and answers' },
        { name: 'Training & Certification', href: '/training', description: 'Learning programs' },
        { name: 'Community Forum', href: '/community', description: 'User community' },
        { name: 'Developer Portal', href: '/developers', description: 'Developer resources' },
        { name: 'API Reference', href: '/api-docs', description: 'API documentation' }
      ]
    },
    {
      title: 'Pricing & Business',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      links: [
        { name: 'Pricing', href: '/pricing', description: 'Service pricing' },
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', description: '2025 pricing information' },
        { name: 'Pricing Guide 2027', href: '/pricing-guide-2027', description: '2027 pricing information' },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', description: '2030 pricing information' },
        { name: 'Request Quote', href: '/request-quote', description: 'Get custom pricing' },
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a demonstration' },
        { name: 'Marketplace', href: '/marketplace', description: 'Product marketplace' },
        { name: 'Demo', href: '/demo', description: 'Product demonstrations' }
      ]
    },
    {
      title: 'Support & Contact',
      icon: MessageCircle,
      color: 'from-teal-500 to-cyan-500',
      links: [
        { name: 'Contact Us', href: '/contact', description: 'Get in touch' },
        { name: 'Support Center', href: '/support', description: 'Technical support' },
        { name: 'System Status', href: '/status', description: 'Service status' },
        { name: 'Help Desk', href: '/helpdesk', description: 'Help and support' },
        { name: 'Emergency Support', href: '/emergency-support', description: 'Critical issue support' },
        { name: 'Training Programs', href: '/training', description: 'Training and education' },
        { name: 'Consulting Services', href: '/consulting', description: 'Professional consulting' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Rocket },
    { name: 'Solutions', href: '/solutions', icon: Target },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all our services, solutions, and resources organized by category."
        keywords="sitemap, Zion Tech Group, website structure, services, solutions, navigation"
      />
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="container-responsive py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete navigation guide to all pages and services on Zion Tech Group website
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive py-16">
        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="block p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-16">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="block p-6 bg-slate-800/30 border border-slate-700/30 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {link.description}
                      </p>
                      <div className="mt-3 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                        <span>Learn More</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-sm">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
