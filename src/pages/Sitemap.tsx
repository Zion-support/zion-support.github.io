import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const sitemapData = {
    mainPages: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'Company information and mission' },
      { name: 'Services', path: '/services', description: 'Overview of our technology services' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
      { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
      { name: 'Careers', path: '/careers', description: 'Job opportunities and company culture' }
    ],
    services: [
      { name: 'AI Solutions', path: '/services#ai', description: 'Machine Learning & AI Services' },
      { name: 'Cloud & DevOps', path: '/services#cloud', description: 'Cloud Migration & Automation' },
      { name: 'Cybersecurity', path: '/services#cybersecurity', description: 'Security & Threat Protection' },
      { name: 'IT Infrastructure', path: '/services#infrastructure', description: 'Network & System Management' },
      { name: 'Digital Transformation', path: '/services#transformation', description: 'Business Process Optimization' },
      { name: 'Consulting', path: '/services#consulting', description: 'Technology Strategy & Advisory' },
      { name: 'Innovative Services 2025', path: '/innovative-services-2025', description: 'Next-generation technology solutions' },
      { name: 'Advanced Services 2025', path: '/advanced-services-2025', description: 'Cutting-edge advanced services' }
    ],
    company: [
      { name: 'About Us', path: '/about', description: 'Company overview and values' },
      { name: 'Our Team', path: '/about#team', description: 'Meet our leadership and experts' },
      { name: 'Careers', path: '/careers', description: 'Join our team' },
      { name: 'News & Updates', path: '/blog', description: 'Company news and industry insights' },
      { name: 'Partners', path: '/about#partners', description: 'Strategic partnerships' }
    ],
    resources: [
      { name: 'Blog', path: '/blog', description: 'Technology insights and trends' },
      { name: 'Documentation', path: '/docs', description: 'Technical documentation and guides' },
      { name: 'White Papers', path: '/white-papers', description: 'In-depth research and analysis' },
      { name: 'Webinars', path: '/webinars', description: 'Educational webinars and presentations' },
      { name: 'Research', path: '/research', description: 'Latest research and development' },
      { name: 'Events', path: '/events', description: 'Upcoming events and conferences' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact', description: 'General inquiries and support' },
      { name: 'Help Center', path: '/help', description: 'Self-service support resources' },
      { name: 'Support Portal', path: '/support', description: 'Technical support and ticketing' },
      { name: 'Training', path: '/training', description: 'Professional development and training' },
      { name: 'Consulting', path: '/consulting', description: 'Expert consultation services' },
      { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' },
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions of use' },
      { name: 'Cookie Policy', path: '/cookies', description: 'How we use cookies' },
      { name: 'Sitemap', path: '/sitemap', description: 'Complete site structure' }
    ],
    additionalPages: [
      { name: 'Pricing', path: '/pricing', description: 'Service pricing and packages' },
      { name: 'Team', path: '/team', description: 'Meet our team members' },
      { name: 'Leadership', path: '/leadership', description: 'Executive leadership team' },
      { name: 'Support', path: '/support', description: 'Customer support services' },
      { name: 'Help Center', path: '/help-center', description: 'Help and documentation' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'Tutorials', path: '/tutorials', description: 'Step-by-step guides' },
      { name: 'Webinars', path: '/webinars', description: 'Educational content' },
      { name: 'White Papers', path: '/white-papers', description: 'Research and insights' },
      { name: 'Space Tech', path: '/space-tech', description: 'Space technology solutions' },
      { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing solutions' },
      { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
      { name: 'Industry Solutions', path: '/industry-solutions', description: 'Sector-specific solutions' },
      { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Manufacturing technology' },
      { name: 'Micro SAAS', path: '/micro-saas', description: 'Micro software-as-a-service solutions' }
    ]
  };

  const renderSection = (title: string, items: any[], color: string) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
    >
      <h3 className={`text-2xl font-bold text-white mb-6 flex items-center`}>
        <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center mr-3`}>
          <span className="text-white font-bold text-lg">
            {title.charAt(0)}
          </span>
        </div>
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="group">
            <Link
              to={item.path}
              className="block p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
            >
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {item.name}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Site
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Map
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Navigate our website easily with this comprehensive overview of all pages and sections. 
            Find exactly what you're looking for quickly and efficiently.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              {sitemapData.mainPages.length + sitemapData.services.length + sitemapData.company.length + sitemapData.resources.length + sitemapData.support.length + sitemapData.legal.length + sitemapData.additionalPages.length} Total Pages
            </div>
            <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
              Organized by Category
            </div>
            <div className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
              Easy Navigation
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Main Pages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Core pages that form the foundation of our website
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapData.mainPages.map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <Link to={page.path} className="block">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {page.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {page.description}
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Visit Page</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          {renderSection('Services', sitemapData.services, 'bg-gradient-to-r from-blue-600 to-cyan-600')}
        </div>
      </section>

      {/* Company Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {renderSection('Company', sitemapData.company, 'bg-gradient-to-r from-green-600 to-emerald-600')}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          {renderSection('Resources', sitemapData.resources, 'bg-gradient-to-r from-purple-600 to-pink-600')}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {renderSection('Support', sitemapData.support, 'bg-gradient-to-r from-orange-600 to-red-600')}
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          {renderSection('Legal', sitemapData.legal, 'bg-gradient-to-r from-indigo-600 to-purple-600')}
        </div>
      </section>

      {/* Additional Pages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Pages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized pages and detailed service information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapData.additionalPages.map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <Link to={page.path} className="block">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {page.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {page.description}
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="text-xs font-medium">View Page</span>
                    <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Navigation Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Can't find what you're looking for? We're here to help you navigate our website
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Search Our Site</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Use the search functionality to quickly find specific content, services, or information.
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button className="absolute right-2 top-2 px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
            >
              <div className="text-6xl mb-6">📞</div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Support</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our team is ready to help you find the information you need or answer any questions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Help
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Start navigating our website to discover all the services and resources we offer
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Explore Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Sitemap;