import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About', path: '/about', description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Partners', path: '/partners', description: 'Our business partners' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'All Services', path: '/services', description: 'Complete service catalog' },
        { name: 'AI Solutions', path: '/services/ai', description: 'Artificial intelligence services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and compliance' },
        { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure' },
        { name: 'Digital Transformation', path: '/transformation', description: 'Business transformation' }
      ]
    },
    {
      title: 'Marketplace',
      links: [
        { name: 'Marketplace', path: '/marketplace', description: 'Browse our marketplace' },
        { name: 'Products', path: '/marketplace/products', description: 'Available products' },
        { name: 'Services', path: '/marketplace/services', description: 'Professional services' },
        { name: 'Talent', path: '/marketplace/talent', description: 'Find skilled professionals' },
        { name: 'Equipment', path: '/marketplace/equipment', description: 'IT equipment and tools' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and news' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Help Center', path: '/help', description: 'Support and assistance' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Training', path: '/training', description: 'Educational resources' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about', description: 'Company information' },
        { name: 'Leadership', path: '/leadership', description: 'Our leadership team' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'News', path: '/news', description: 'Company updates' },
        { name: 'Events', path: '/events', description: 'Upcoming events' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy information' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Sitemap
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all the pages and sections of Zion Tech Group
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-3">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="block p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                        {link.description}
                      </div>
                      <div className="text-xs text-cyan-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {link.path}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
