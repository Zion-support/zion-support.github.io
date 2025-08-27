import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Users, 
  ShoppingCart, 
  Cloud, 
  Brain, 
  Shield, 
  Zap,
  Globe,
  FileText,
  MessageCircle,
  HelpCircle,
  Star,
  TrendingUp,
  Settings,
  BookOpen,
  Video,
  Award,
  Heart,
  Rocket,
  Code,
  Database,
  Server,
  Smartphone,
  Monitor,
  Cpu,
  Network,
  Lock,
  Key,
  Eye,
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitemapData = {
    main: {
      title: 'Main Pages',
      icon: Home,
      items: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Services', path: '/services', description: 'Overview of our services' },
        { name: 'Marketplace', path: '/marketplace', description: 'Browse products and services' },
        { name: 'Talent', path: '/talent', description: 'Find skilled professionals' },
        { name: 'Equipment', path: '/equipment', description: 'Rent or purchase tech equipment' }
      ]
    },
    services: {
      title: 'Services',
      icon: Cloud,
      items: [
        { name: 'AI & Analytics', path: '/services/ai-analytics', description: 'Artificial intelligence and data analytics' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and protection services' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Cloud infrastructure and development operations' },
        { name: 'IoT & Edge', path: '/services/iot-edge', description: 'Internet of Things and edge computing' },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing solutions' },
        { name: 'Blockchain', path: '/services/blockchain', description: 'Distributed ledger technology' },
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual representation of physical systems' },
        { name: 'Sustainability', path: '/services/sustainability', description: 'Green IT and sustainable technology' }
      ]
    },
    microSaas: {
      title: 'Micro SAAS Solutions',
      icon: Rocket,
      items: [
        { name: 'AI Business Intelligence', path: '/micro-saas/ai-business-intelligence', description: 'AI-powered business insights' },
        { name: 'Customer Experience', path: '/micro-saas/customer-experience', description: 'Enhance customer interactions' },
        { name: 'Quantum Computing', path: '/micro-saas/quantum-computing', description: 'Quantum computing applications' },
        { name: 'Supply Chain', path: '/micro-saas/supply-chain', description: 'Supply chain optimization' },
        { name: 'Cybersecurity', path: '/micro-saas/cybersecurity', description: 'Security solutions for businesses' },
        { name: 'IoT Edge Computing', path: '/micro-saas/iot-edge', description: 'IoT and edge computing platforms' },
        { name: 'Content Creation', path: '/micro-saas/content-creation', description: 'AI-powered content generation' },
        { name: 'HR Platform', path: '/micro-saas/hr-platform', description: 'Human resources management' }
      ]
    },
    marketplace: {
      title: 'Marketplace Categories',
      icon: ShoppingCart,
      items: [
        { name: 'Products', path: '/marketplace', description: 'Browse all marketplace products' },
        { name: 'Services', path: '/services', description: 'Professional services' },
        { name: 'Talent', path: '/talent', description: 'Skilled professionals' },
        { name: 'Equipment', path: '/equipment', description: 'Technology equipment' },
        { name: 'Categories', path: '/categories', description: 'Browse by category' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-site IT support' }
      ]
    },
    company: {
      title: 'Company',
      icon: Building,
      items: [
        { name: 'About Us', path: '/about', description: 'Our story and mission' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Sitemap', path: '/sitemap', description: 'This page' }
      ]
    },
    resources: {
      title: 'Resources & Support',
      icon: BookOpen,
      items: [
        { name: 'Help Center', path: '/help', description: 'Support and documentation' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        { name: 'Terms of Service', path: '/terms', description: 'Legal terms and conditions' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Security', path: '/security', description: 'Security information' },
        { name: 'System Status', path: '/status', description: 'Platform status and uptime' }
      ]
    },
    additional: {
      title: 'Additional Pages',
      icon: FileText,
      items: [
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        { name: 'Events', path: '/events', description: 'Upcoming events and webinars' },
        { name: 'Training', path: '/training', description: 'Educational programs' },
        { name: 'White Papers', path: '/white-papers', description: 'Research and insights' },
        { name: 'Webinars', path: '/webinars', description: 'Online learning sessions' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation and R&D' }
      ]
    }
  };

  const quickLinks = [
    { name: 'Get Started', path: '/signup', icon: TrendingUp, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Browse Services', path: '/services', icon: Cloud, color: 'from-zion-blue to-zion-purple' },
    { name: 'Find Talent', path: '/talent', icon: Users, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Contact Us', path: '/contact', icon: MessageCircle, color: 'from-zion-cyan to-zion-blue' }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="container-responsive text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Sitemap
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan/90 max-w-3xl mx-auto"
          >
            Complete overview of all pages and sections on Zion Tech Group
          </motion.p>
        </div>
      </div>

      <div className="container-responsive py-16">
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={link.path}
                  className="block bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{link.name}</h3>
                  <div className="flex items-center text-zion-cyan text-sm">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sitemap Sections */}
        <div className="space-y-12">
          {Object.entries(sitemapData).map(([key, section], sectionIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * sectionIndex }}
              className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * itemIndex }}
                    className="group"
                  >
                    <Link
                      to={item.path}
                      className="block bg-white/5 border border-zion-cyan/20 rounded-lg p-4 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                          {item.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-zion-cyan/60 group-hover:text-zion-cyan transition-colors" />
                      </div>
                      <p className="text-zion-cyan/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-3 text-xs text-zion-cyan/60">
                        {item.path}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Our website is constantly evolving with new content and features. 
              If you can't find a specific page or resource, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/help"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                <HelpCircle className="w-5 h-5" />
                Visit Help Center
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-futuristic transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Search Functionality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Search Our Website</h4>
            <p className="text-zion-cyan/80 text-sm mb-4">
              Use the search bar in the header to quickly find specific content across our entire website.
            </p>
            <div className="flex items-center justify-center gap-2 text-zion-cyan/60 text-sm">
              <Search className="w-4 h-4" />
              <span>Press Ctrl+K (or Cmd+K on Mac) to open search</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap;