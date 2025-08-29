import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Newspaper, Users, Globe, Award, Star, CheckCircle, Zap, Shield } from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform',
      date: 'December 15, 2024',
      summary: 'Breakthrough quantum computing solution combines AI and quantum algorithms for unprecedented computational power.',
      category: 'Product Launch',
      readTime: '3 min read'
    },
    {
      title: 'Zion Tech Group Secures $50M Series B Funding for Global Expansion',
      date: 'November 28, 2024',
      summary: 'Investment will accelerate development of next-generation AI and blockchain solutions.',
      category: 'Company News',
      readTime: '2 min read'
    },
    {
      title: 'Zion Tech Group Named Top 10 AI Companies by TechCrunch',
      date: 'October 15, 2024',
      summary: 'Recognition for innovative AI solutions and commitment to responsible technology development.',
      category: 'Awards',
      readTime: '2 min read'
    },
    {
      title: 'Zion Tech Group Partners with Fortune 500 Companies for Digital Transformation',
      date: 'September 20, 2024',
      summary: 'Strategic partnerships to deliver cutting-edge technology solutions to enterprise clients.',
      category: 'Partnerships',
      readTime: '4 min read'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo',
      description: 'High-resolution logos in various formats',
      formats: ['SVG', 'PNG', 'JPG'],
      icon: Star
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of leadership team',
      formats: ['JPG', 'PNG'],
      icon: Users
    },
    {
      title: 'Product Screenshots',
      description: 'Visual assets of our technology solutions',
      formats: ['PNG', 'JPG'],
      icon: Globe
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      formats: ['PDF'],
      icon: Award
    }
  ];

  const contactInfo = [
    {
      title: 'Media Inquiries',
      contact: 'press@ziontechgroup.com',
      description: 'For press releases, interviews, and media requests'
    },
    {
      title: 'Investor Relations',
      contact: 'investors@ziontechgroup.com',
      description: 'For financial information and investor inquiries'
    },
    {
      title: 'Partnerships',
      contact: 'partnerships@ziontechgroup.com',
      description: 'For business development and partnership opportunities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Latest news, press releases, and media resources from Zion Tech Group. Stay updated on our innovations and company developments."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Newspaper className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Press &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Media
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Latest news, press releases, and media resources from Zion Tech Group. 
              Stay updated on our innovations and company developments.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Globe className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Award className="w-16 h-16 text-blue-500 animate-bounce" />
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay informed about our latest developments, partnerships, and innovations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {release.category}
                  </span>
                  <span className="text-slate-400 text-sm">{release.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{release.title}</h3>
                <p className="text-slate-300 mb-4">{release.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{release.date}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Download our brand assets and media resources for your coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 mb-6">{item.description}</p>
                <div className="space-y-2">
                  {item.formats.map((format, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full mr-2 mb-2">
                      {format}
                    </span>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to cover our story? Contact our media team for interviews, 
              press opportunities, and more information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
                <p className="text-slate-300 mb-6">{contact.description}</p>
                <a 
                  href={`mailto:${contact.contact}`}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  {contact.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our press releases and stay informed about our latest 
              innovations and company developments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Subscribe to Press Releases
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Media Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}