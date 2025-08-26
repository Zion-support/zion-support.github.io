import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Globe, Map, Navigation, Search, Layers } from 'lucide-react';

export default function SitemapPage() {
  const sitemapData = {
    main: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'Company information and mission' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'Sitemap', path: '/sitemap', description: 'This page - site navigation' }
    ],
    services: [
      { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
      { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security and protection services' },
      { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud infrastructure and solutions' },
      { name: 'Blockchain Services', path: '/blockchain-services', description: 'Blockchain and Web3 solutions' },
      { name: 'Quantum Services', path: '/quantum-services', description: 'Quantum computing solutions' },
      { name: 'IoT Services', path: '/iot-services', description: 'Internet of Things solutions' },
      { name: 'Digital Marketing', path: '/digital-marketing-services', description: 'Marketing and advertising' },
      { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-site IT support' },
      { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large business solutions' },
      { name: 'Healthcare Solutions', path: '/healthcare-solutions', description: 'Healthcare industry solutions' },
      { name: 'Government Solutions', path: '/government-solutions', description: 'Public sector solutions' },
      { name: 'Retail Solutions', path: '/retail-solutions', description: 'Retail industry solutions' },
      { name: 'Financial Solutions', path: '/financial-solutions', description: 'Financial services solutions' },
      { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Manufacturing industry solutions' }
    ],
    marketplace: [
      { name: 'Marketplace', path: '/marketplace', description: 'Main marketplace hub' },
      { name: 'Talent', path: '/talent', description: 'Find skilled professionals' },
      { name: 'Equipment', path: '/equipment', description: 'Technology equipment and tools' },
      { name: 'Products', path: '/marketplace', description: 'Browse products and services' }
    ],
    company: [
      { name: 'Careers', path: '/careers', description: 'Job opportunities' },
      { name: 'Partners', path: '/partners', description: 'Partnership programs' },
      { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
      { name: 'Events', path: '/events', description: 'Upcoming events and webinars' },
      { name: 'Press', path: '/press', description: 'Press releases and media' }
    ],
    support: [
      { name: 'Help Center', path: '/help', description: 'Support and documentation' },
      { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
      { name: 'System Status', path: '/status', description: 'Service status and uptime' },
      { name: 'Security', path: '/security', description: 'Security information and practices' }
    ],
    legal: [
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
      { name: 'Privacy Policy', path: '/privacy', description: 'Data privacy information' },
      { name: 'Cookies Policy', path: '/cookies', description: 'Cookie usage information' },
      { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
    ],
    developer: [
      { name: 'Developer Portal', path: '/developer', description: 'Developer resources and tools' },
      { name: 'API Documentation', path: '/api', description: 'API reference and guides' },
      { name: 'Documentation', path: '/docs', description: 'Technical documentation' }
    ],
    dashboard: [
      { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
      { name: 'Profile', path: '/profile', description: 'User profile management' },
      { name: 'Settings', path: '/settings', description: 'Account settings' }
    ],
    admin: [
      { name: 'Admin Panel', path: '/admin', description: 'Administrative tools' },
      { name: 'Admin Dashboard', path: '/admin/dashboard', description: 'Admin overview and metrics' }
    ]
  };

  const renderSitemapSection = (title, items, icon, delay) => (
    <motion.div
      key={title}
      className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
          {icon && <icon className="w-5 h-5 text-white" />}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="group p-3 rounded-lg border border-zinc-700 hover:border-zion-cyan/40 hover:bg-zinc-700/30 transition-all duration-300"
          >
            <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
              {item.name}
            </div>
            <div className="text-sm text-zion-slate-light mt-1">
              {item.description}
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Navigate through all the pages and services available on Zion Tech Group. 
            Find what you're looking for quickly and easily.
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div 
          className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(sitemapData).map(([key, items]) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-zion-cyan/40 hover:bg-zinc-700/30 transition-all duration-300 group"
              >
                <div className="text-2xl font-bold text-zion-cyan group-hover:text-white transition-colors">
                  {items.length}
                </div>
                <div className="text-sm text-zion-slate-light group-hover:text-white transition-colors capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {renderSitemapSection('Main Pages', sitemapData.main, Globe, 0.3)}
          {renderSitemapSection('Services', sitemapData.services, Layers, 0.4)}
          {renderSitemapSection('Solutions', sitemapData.solutions, Navigation, 0.5)}
          {renderSitemapSection('Marketplace', sitemapData.marketplace, Map, 0.6)}
          {renderSitemapSection('Company', sitemapData.company, Globe, 0.7)}
          {renderSitemapSection('Support', sitemapData.support, Search, 0.8)}
          {renderSitemapSection('Legal', sitemapData.legal, Globe, 0.9)}
          {renderSitemapSection('Developer', sitemapData.developer, Search, 1.0)}
          {renderSitemapSection('Dashboard', sitemapData.dashboard, Navigation, 1.1)}
          {renderSitemapSection('Admin', sitemapData.admin, Search, 1.2)}
        </div>

        {/* Additional Information */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              If you can't find the page or service you're looking for, our team is here to help. 
              Contact us and we'll guide you to the right place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Contact Us
              </Link>
              <Link 
                to="/help" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                Help Center
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Search Engine Optimization Info */}
        <motion.div 
          className="mt-16 bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Search Engine Optimization</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Easy Discovery</h4>
              <p className="text-zion-slate-light text-sm">
                All pages are easily discoverable by search engines and users
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-zion-purple/20 border border-zion-purple/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Clear Navigation</h4>
              <p className="text-zion-slate-light text-sm">
                Logical structure makes it easy to find relevant content
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">SEO Friendly</h4>
              <p className="text-zion-slate-light text-sm">
                Optimized for search engines and user experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}