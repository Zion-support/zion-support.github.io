import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Network as SitemapIcon,
  Home,
  Users,
  Zap,
  Code,
  Network,
  ShoppingCart,
  HelpCircle,
  Shield,
  FileText,
  MessageCircle,
  Building,
  Globe,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Heart,
  Settings,
  BookOpen,
  TrendingUp,
  Cpu,
  Database,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

const sitemapData = {
  main: {
    title: 'Main Pages',
    icon: Home,
    items: [
      { name: 'Home', href: '/', description: 'Main landing page' },
      { name: 'About Us', href: '/about', description: 'Company information and story' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', href: '/blog', description: 'Latest insights and articles' },
      { name: 'News', href: '/news', description: 'Company updates and announcements' },
      { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
      { name: 'Careers', href: '/careers', description: 'Job opportunities' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
    ]
  },
  services: {
    title: 'Services',
    icon: Zap,
    items: [
      { name: 'Services Overview', href: '/services', description: 'All our services' },
      { name: 'AI & Analytics', href: '/services/ai-analytics', description: 'Machine learning and data insights' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Protect your digital assets' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Scalable infrastructure solutions' },
      { name: 'IoT & Edge', href: '/services/iot-edge', description: 'Connected device management' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-generation computing' },
      { name: 'Blockchain', href: '/services/blockchain', description: 'Decentralized solutions' },
      { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual replica technology' },
      { name: 'Sustainability', href: '/services/sustainability', description: 'Green IT solutions' },
      { name: 'Green IT', href: '/green-it', description: 'Eco-friendly technology solutions' }
    ]
  },
  microSaas: {
    title: 'Micro SAAS',
    icon: Code,
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'Smart analytics platform' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', description: 'Enhanced customer engagement' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', description: 'Quantum-powered solutions' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', description: 'Optimized logistics management' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', description: 'Advanced security tools' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', description: 'Edge device solutions' },
      { name: 'Content Creation', href: '/micro-saas/content-creation', description: 'AI-powered content tools' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', description: 'Human resources automation' }
    ]
  },
  itServices: {
    title: 'IT Services',
    icon: Network,
    items: [
      { name: 'Infrastructure', href: '/it-services/infrastructure', description: 'Robust IT foundation' },
      { name: 'Digital Transformation', href: '/it-services/digital-transformation', description: 'Modernize your business' },
      { name: 'Consulting', href: '/it-services/consulting', description: 'Expert IT guidance' },
      { name: 'Onsite Support', href: '/it-services/onsite-support', description: 'Local technical assistance' },
      { name: 'Green IT', href: '/it-services/green-it', description: 'Eco-friendly solutions' },
      { name: '5G Solutions', href: '/it-services/5g-solutions', description: 'Next-gen connectivity' }
    ]
  },
  marketplace: {
    title: 'Marketplace',
    icon: ShoppingCart,
    items: [
      { name: 'Marketplace Overview', href: '/marketplace', description: 'Browse all categories' },
      { name: 'Products', href: '/marketplace/products', description: 'Browse tech products' },
      { name: 'Talent', href: '/marketplace/talent', description: 'Find skilled professionals' },
      { name: 'Equipment', href: '/marketplace/equipment', description: 'High-tech hardware' },
      { name: 'Services', href: '/marketplace/services', description: 'Professional services' }
    ]
  },
  solutions: {
    title: 'Solutions',
    icon: Building,
    items: [
      { name: 'Solutions Overview', href: '/solutions', description: 'All our solutions' },
      { name: 'Research & Development', href: '/research-development', description: 'Innovation and R&D' },
      { name: 'Request Quote', href: '/request-quote', description: 'Get project estimates' }
    ]
  },
  support: {
    title: 'Support & Resources',
    icon: HelpCircle,
    items: [
      { name: 'Help Center', href: '/help-center', description: 'Get help and support' },
      { name: 'Contact Support', href: '/contact', description: 'Reach our team' },
      { name: 'Request Quote', href: '/request-quote', description: 'Get project estimates' },
      { name: 'Search', href: '/search', description: 'Search our platform' }
    ]
  },
  legal: {
    title: 'Legal & Policies',
    icon: Shield,
    items: [
      { name: 'Terms of Service', href: '/terms', description: 'Legal terms and conditions' },
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection and privacy' },
      { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences' }
    ]
  },
  user: {
    title: 'User Account',
    icon: Users,
    items: [
      { name: 'Login', href: '/login', description: 'Sign in to your account' },
      { name: 'Sign Up', href: '/signup', description: 'Create a new account' },
      { name: 'Dashboard', href: '/dashboard', description: 'User dashboard' },
      { name: 'Profile', href: '/profile', description: 'Manage your profile' },
      { name: 'Settings', href: '/settings', description: 'Account settings' }
    ]
  }
};

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

        <div className="container-responsive relative z-10 py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <SitemapIcon className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl font-bold text-gradient">Sitemap</h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8">
              Navigate through our comprehensive website structure and find exactly what you're looking for.
            </p>
            
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-zion-cyan mb-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Complete Website Navigation</span>
              </div>
              <p className="text-zion-slate-light text-sm">
                Explore all pages, services, and resources available on our platform.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="container-responsive py-20">
        <div className="max-w-7xl mx-auto">
          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Navigation</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(sitemapData).map(([key, section]) => (
                <Link
                  key={key}
                  to={`#${key}`}
                  className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-4 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <section.icon className="w-8 h-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors">
                    {section.title}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Detailed Sitemap */}
          <div className="space-y-16">
            {Object.entries(sitemapData).map(([key, section], index) => (
              <motion.div
                key={key}
                id={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-mt-20"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={item.href}
                        className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group h-full"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-zion-slate-light text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        <div className="mt-4 flex items-center text-zion-cyan text-sm font-medium group-hover:text-zion-cyan/80 transition-colors">
                          Visit Page
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Need Help Finding Something?</h2>
            
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Phone className="w-5 h-5 text-zion-cyan" />
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Mail className="w-5 h-5 text-zion-cyan" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <MapPin className="w-5 h-5 text-zion-cyan" />
                      <span>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-zion-cyan" />
                      <span>Contact Support</span>
                    </Link>
                    <Link
                      to="/help-center"
                      className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      <HelpCircle className="w-5 h-5 text-zion-cyan" />
                      <span>Help Center</span>
                    </Link>
                    <Link
                      to="/search"
                      className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      <TrendingUp className="w-5 h-5 text-zion-cyan" />
                      <span>Search Platform</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}