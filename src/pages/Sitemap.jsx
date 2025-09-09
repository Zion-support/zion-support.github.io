import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Map, 
  Home, 
  Users, 
  Briefcase, 
  ShoppingCart, 
  Building, 
  Code, 
  FileText,
  HelpCircle,
  Settings,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: <Home className="w-6 h-6" />,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'How It Works', path: '/how-it-works', description: 'Platform overview and process' },
        { name: 'Mission', path: '/mission', description: 'Our company mission and values' }
      ]
    },
    {
      title: 'Services',
      icon: <Briefcase className="w-6 h-6" />,
      links: [
        { name: 'All Services', path: '/services', description: 'Complete service catalog' },
        { name: 'AI Business Solutions', path: '/ai-business-solutions', description: 'Artificial intelligence services' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security and protection services' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud infrastructure services' },
        { name: 'Blockchain Services', path: '/blockchain-services', description: 'Blockchain and Web3 solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Digital modernization services' },
        { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: '5G network services' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-premise IT support' },
        { name: 'Micro SaaS Services', path: '/micro-saas-services', description: 'Software-as-a-Service solutions' },
        { name: 'Financial Solutions', path: '/financial-solutions', description: 'Fintech and financial services' },
        { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Industry 4.0 solutions' }
      ]
    },
    {
      title: 'Marketplace',
      icon: <ShoppingCart className="w-6 h-6" />,
      links: [
        { name: 'Marketplace', path: '/marketplace', description: 'Product and service marketplace' },
        { name: 'Products', path: '/products', description: 'Browse all products' },
        { name: 'Equipment', path: '/equipment', description: 'Technology equipment and hardware' },
        { name: 'Publish Product', path: '/publish-product', description: 'Sell your products' },
        { name: 'Cart', path: '/cart', description: 'Shopping cart' },
        { name: 'Orders', path: '/orders', description: 'Order history and tracking' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get custom pricing' }
      ]
    },
    {
      title: 'Talent & Jobs',
      icon: <Users className="w-6 h-6" />,
      links: [
        { name: 'Find Talent', path: '/talent', description: 'Browse skilled professionals' },
        { name: 'Post Job', path: '/post-job', description: 'Create job listings' },
        { name: 'Portfolio Builder', path: '/portfolio-builder', description: 'Create professional portfolios' },
        { name: 'Hiring Tracker', path: '/hiring-tracker', description: 'Manage hiring process' },
        { name: 'Talent Onboarding', path: '/talent-onboarding', description: 'Join our talent network' }
      ]
    },
    {
      title: 'Enterprise',
      icon: <Building className="w-6 h-6" />,
      links: [
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'Large-scale business solutions' },
        { name: 'Enterprise Plans', path: '/enterprise-plans', description: 'Pricing and packages' },
        { name: 'Enterprise Admin', path: '/enterprise-admin', description: 'Administrative tools' },
        { name: 'Enterprise Billing', path: '/enterprise-billing', description: 'Billing and invoicing' },
        { name: 'Enterprise Demo', path: '/enterprise-demo', description: 'Request a demonstration' },
        { name: 'Enterprise IT', path: '/enterprise-it', description: 'Corporate IT services' }
      ]
    },
    {
      title: 'Developer & API',
      icon: <Code className="w-6 h-6" />,
      links: [
        { name: 'Developer Portal', path: '/developer-portal', description: 'Developer resources and tools' },
        { name: 'API Documentation', path: '/docs', description: 'API reference and guides' },
        { name: 'Developer Resources', path: '/developer', description: 'Developer tools and SDKs' }
      ]
    },
    {
      title: 'Community & Resources',
      icon: <Users className="w-6 h-6" />,
      links: [
        { name: 'Community', path: '/community', description: 'User community and forums' },
        { name: 'Partners', path: '/partners', description: 'Partnership opportunities' },
        { name: 'Events', path: '/events', description: 'Upcoming events and conferences' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' }
      ]
    },
    {
      title: 'Account & Dashboard',
      icon: <Settings className="w-6 h-6" />,
      links: [
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard and overview' },
        { name: 'Profile', path: '/profile', description: 'Manage your profile' },
        { name: 'Creator Dashboard', path: '/creator-dashboard', description: 'Content creator tools' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered analytics' },
        { name: 'Notifications', path: '/notifications', description: 'System notifications' },
        { name: 'Login', path: '/login', description: 'User authentication' },
        { name: 'Sign Up', path: '/signup', description: 'Create new account' },
        { name: 'Forgot Password', path: '/forgot-password', description: 'Password recovery' }
      ]
    },
    {
      title: 'Support & Legal',
      icon: <HelpCircle className="w-6 h-6" />,
      links: [
        { name: 'Help Center', path: '/help', description: 'Support and documentation' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Data privacy information' },
        { name: 'Terms of Service', path: '/terms', description: 'Service terms and conditions' },
        { name: 'Cookies Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'Security', path: '/security', description: 'Security measures and policies' },
        { name: 'System Status', path: '/status', description: 'Service status and uptime' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility features' }
      ]
    },
    {
      title: 'Pricing & Plans',
      icon: <FileText className="w-6 h-6" />,
      links: [
        { name: 'Pricing', path: '/pricing', description: 'Service pricing and plans' },
        { name: 'Services Pricing', path: '/services-pricing', description: 'Detailed service costs' },
        { name: 'Enterprise Plans', path: '/enterprise-plans', description: 'Corporate pricing' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', path: '/contact', description: 'Begin your journey with us' },
    { name: 'Request Demo', path: '/enterprise-demo', description: 'See our solutions in action' },
    { name: 'Join Talent Network', path: '/talent-onboarding', description: 'Connect with opportunities' },
    { name: 'Become a Partner', path: '/partners', description: 'Partner with Zion Tech Group' },
    { name: 'View Careers', path: '/careers', description: 'Job opportunities at Zion Tech Group' },
    { name: 'Contact Sales', path: '/contact', description: 'Speak with our sales team' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Website <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Sitemap</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Navigate through all pages and sections of the Zion Tech Group website. 
            Find exactly what you're looking for with our comprehensive site structure.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path}
                className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">{link.name}</h3>
                  <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Main Sitemap Sections */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Complete Site Structure</h2>
          <div className="space-y-12 max-w-7xl mx-auto">
            {sitemapSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="text-zion-cyan mr-4">{section.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex}
                      to={link.path}
                      className="group p-4 rounded-lg hover:bg-zinc-700/50 transition-colors border border-transparent hover:border-zion-cyan/20"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-zion-cyan transition-colors mb-1">
                            {link.name}
                          </h4>
                          <p className="text-zion-slate-light text-sm leading-relaxed">{link.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6">
              <h3 className="text-white font-semibold text-xl mb-4 flex items-center">
                <ExternalLink className="w-5 h-5 text-zion-cyan mr-2" />
                External Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://twitter.com/ziontechgroup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center"
                  >
                    Twitter <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/zion-tech-group" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center"
                  >
                    LinkedIn <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/ziontechgroup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center"
                  >
                    Facebook <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/ziontechgroup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center"
                  >
                    GitHub <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6">
              <h3 className="text-white font-semibold text-xl mb-4 flex items-center">
                <FileText className="w-5 h-5 text-zion-cyan mr-2" />
                Documentation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/developer-portal" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                    Developer Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-12 max-w-4xl mx-auto">
            <Map className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">
              If you can't find the page or information you need, our team is here to help. 
              Contact us directly and we'll guide you to the right place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/help" 
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Get Help
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
