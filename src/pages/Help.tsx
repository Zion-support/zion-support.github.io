import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Mail, 
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  FileText,
  Users,
  Zap,
  Shield,
  Cloud
} from 'lucide-react';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: HelpCircle, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen, count: 12 },
    { id: 'services', name: 'Services', icon: Zap, count: 18 },
    { id: 'security', name: 'Security', icon: Shield, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 7 }
  ];

  const helpArticles = [
    {
      title: 'Getting Started with Zion Tech Group',
      category: 'getting-started',
      description: 'Learn the basics of using our platform and services.',
      tags: ['beginner', 'onboarding', 'tutorial'],
      readTime: '5 min read'
    },
    {
      title: 'AI & Analytics Services Guide',
      category: 'services',
      description: 'Comprehensive guide to our AI and analytics solutions.',
      tags: ['AI', 'analytics', 'machine-learning'],
      readTime: '8 min read'
    },
    {
      title: 'Cybersecurity Best Practices',
      category: 'security',
      description: 'Essential security practices for your business.',
      tags: ['security', 'cybersecurity', 'best-practices'],
      readTime: '6 min read'
    },
    {
      title: 'Cloud Migration Guide',
      category: 'cloud',
      description: 'Step-by-step guide to migrating to the cloud.',
      tags: ['cloud', 'migration', 'devops'],
      readTime: '10 min read'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      responseTime: 'Instant',
      availability: '24/7'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and get a response within hours',
      icon: Mail,
      responseTime: '2-4 hours',
      availability: '24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      responseTime: 'Immediate',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <HelpCircle className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Help Center</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="text-gradient"> Help You?</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Find answers to your questions, learn how to use our services, and get the support 
              you need to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find help articles organized by topic and service area.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-center hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan/20 border-zion-cyan/40'
                    : 'bg-zion-slate-dark/50 border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{category.name}</h3>
                <p className="text-xs text-zion-slate-light">{category.count} articles</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Articles Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Help Articles
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse our comprehensive collection of help articles and guides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-zion-cyan font-medium uppercase tracking-wide">
                    {article.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-zion-slate-light">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-xs text-zion-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-zion-cyan group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Multiple ways to get help when you need it most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{channel.title}</h3>
                <p className="text-zion-slate-light mb-6">{channel.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Response Time:</span>
                    <span className="text-zion-cyan font-medium">{channel.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Availability:</span>
                    <span className="text-zion-cyan font-medium">{channel.availability}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 btn-futuristic">
                  Get Help
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;