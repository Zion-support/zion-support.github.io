import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ExternalLink } from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitemapData = {
    main: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' }
    ],
    services: [
      { name: 'AI Services', path: '/services/ai' },
      { name: 'Cloud Services', path: '/services/cloud' },
      { name: 'Cybersecurity', path: '/services/cybersecurity' },
      { name: 'IT Infrastructure', path: '/services/infrastructure' },
      { name: 'Digital Transformation', path: '/services/transformation' },
      { name: 'IT Consulting', path: '/services/consulting' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Partners', path: '/partners' },
      { name: 'Green IT', path: '/green-it' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookies', path: '/cookies' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <Map className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Navigate through all the pages and services available on our website.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(sitemapData).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20"
              >
                <h2 className="text-xl font-bold text-white mb-4 capitalize">
                  {category}
                </h2>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className="text-zion-cyan/80 hover:text-zion-cyan transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-zion-cyan/60 text-sm">
              Can't find what you're looking for?{' '}
              <Link to="/contact" className="text-zion-cyan hover:text-zion-cyan/80 underline">
                Contact us
              </Link>{' '}
              for assistance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;