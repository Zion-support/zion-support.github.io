import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Settings,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Shield,
  Brain,
  Code,
  Server,
  Globe,
  Eye,
  Wrench
} from 'lucide-react';

const helpCategories = [
  {
    title: 'Getting Started',
    icon: HelpCircle,
    description: 'Learn the basics and get up and running quickly',
    items: [
      { title: 'Quick Start Guide', href: '/help/quick-start', difficulty: 'Beginner' },
      { title: 'Account Setup', href: '/help/account-setup', difficulty: 'Beginner' },
      { title: 'First Steps', href: '/help/first-steps', difficulty: 'Beginner' },
      { title: 'Tour of Features', href: '/help/features-tour', difficulty: 'Beginner' }
    ]
  },
  {
    title: 'AI Services',
    icon: Brain,
    description: 'Everything you need to know about our AI solutions',
    items: [
      { title: 'AI Consciousness Simulator', href: '/help/ai-consciousness', difficulty: 'Intermediate' },
      { title: 'Quantum Emotion Processor', href: '/help/quantum-emotion', difficulty: 'Advanced' },
      { title: 'AI Autonomous Systems', href: '/help/ai-autonomous', difficulty: 'Intermediate' },
      { title: 'Neural Network Architect', href: '/help/neural-architect', difficulty: 'Advanced' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: Code,
    description: 'Guide to our micro SAAS platform and services',
    items: [
      { title: 'Platform Overview', href: '/help/saas-overview', difficulty: 'Beginner' },
      { title: 'API Documentation', href: '/help/api-docs', difficulty: 'Advanced' },
      { title: 'Integration Guide', href: '/help/integration', difficulty: 'Intermediate' },
      { title: 'Customization', href: '/help/customization', difficulty: 'Intermediate' }
    ]
  },
  {
    title: 'IT Services',
    icon: Server,
    description: 'Support for IT infrastructure and consulting services',
    items: [
      { title: 'Infrastructure Setup', href: '/help/infrastructure', difficulty: 'Intermediate' },
      { title: 'Digital Transformation', href: '/help/digital-transformation', difficulty: 'Advanced' },
      { title: 'Onsite Support', href: '/help/onsite-support', difficulty: 'Beginner' },
      { title: 'Green IT Solutions', href: '/help/green-it', difficulty: 'Intermediate' }
    ]
  },
  {
    title: 'Account & Billing',
    icon: Settings,
    description: 'Manage your account, billing, and subscriptions',
    items: [
      { title: 'Account Settings', href: '/help/account-settings', difficulty: 'Beginner' },
      { title: 'Billing & Payments', href: '/help/billing', difficulty: 'Beginner' },
      { title: 'Subscription Management', href: '/help/subscriptions', difficulty: 'Beginner' },
      { title: 'Security Settings', href: '/help/security', difficulty: 'Intermediate' }
    ]
  },
  {
    title: 'Troubleshooting',
    icon: Wrench,
    description: 'Common issues and their solutions',
    items: [
      { title: 'Common Problems', href: '/help/common-issues', difficulty: 'Beginner' },
      { title: 'Error Messages', href: '/help/error-messages', difficulty: 'Intermediate' },
      { title: 'Performance Issues', href: '/help/performance', difficulty: 'Intermediate' },
      { title: 'Connection Problems', href: '/help/connection', difficulty: 'Beginner' }
    ]
  }
];

const contactMethods = [
  {
    title: 'Live Chat',
    icon: MessageCircle,
    description: 'Get instant help from our support team',
    action: 'Start Chat',
    href: '/contact',
    color: 'from-zion-cyan to-zion-blue'
  },
  {
    title: 'Phone Support',
    icon: Phone,
    description: 'Call us for immediate assistance',
    action: 'Call Now',
    href: 'tel:+13024640950',
    color: 'from-zion-green to-zion-cyan'
  },
  {
    title: 'Email Support',
    icon: Mail,
    description: 'Send us a detailed message',
    action: 'Send Email',
    href: 'mailto:kleber@ziontechgroup.com',
    color: 'from-zion-purple to-zion-cyan'
  },
  {
    title: 'Video Call',
    icon: Video,
    description: 'Schedule a video consultation',
    action: 'Schedule Call',
    href: '/contact',
    color: 'from-zion-orange to-zion-red'
  }
];

const popularArticles = [
  {
    title: 'How to Get Started with AI Services',
    description: 'Complete guide to setting up and using our AI solutions',
    views: '2.4k',
    rating: 4.8,
    href: '/help/ai-getting-started'
  },
  {
    title: 'Understanding Micro SAAS Pricing',
    description: 'Everything you need to know about our pricing structure',
    views: '1.8k',
    rating: 4.6,
    href: '/help/saas-pricing'
  },
  {
    title: 'IT Infrastructure Best Practices',
    description: 'Expert tips for optimizing your IT infrastructure',
    views: '1.2k',
    rating: 4.9,
    href: '/help/it-best-practices'
  },
  {
    title: 'Troubleshooting Common Issues',
    description: 'Quick solutions to frequently encountered problems',
    views: '3.1k',
    rating: 4.7,
    href: '/help/troubleshooting'
  }
];

export default function Help() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Find answers, get support, and discover everything you need to make the most of Zion Tech Group's services.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-16 bg-white/10 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 text-lg"
                />
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need immediate help?
            </h2>
            <p className="text-lg text-zion-slate-light">
              Choose your preferred way to get in touch with our support team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={method.href}
                  className="block p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-zion-slate-light mb-4">{method.description}</p>
                  <span className="inline-flex items-center text-zion-cyan font-medium group-hover:text-zion-purple transition-colors duration-300">
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse help by category
            </h2>
            <p className="text-lg text-zion-slate-light">
              Find organized help content tailored to your needs
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['all', 'getting started', 'ai services', 'micro saas', 'it services', 'account & billing', 'troubleshooting'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group/item"
                      >
                        <span className="text-white group-hover/item:text-zion-cyan transition-colors duration-300">
                          {item.title}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {item.difficulty}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular help articles
            </h2>
            <p className="text-lg text-zion-slate-light">
              Most viewed and highly rated help content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={article.href}
                  className="block p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {article.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <p className="text-zion-slate-light mb-4">{article.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-zion-slate-light">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </span>
                      <span className="flex items-center text-zion-slate-light">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                        {article.rating}
                      </span>
                    </div>
                    <span className="text-zion-cyan font-medium">Read more</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still need help?
              </h2>
              <p className="text-lg text-zion-slate-light mb-6">
                Our support team is here to help you succeed. Don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center justify-center px-8 py-4 bg-zion-slate-dark/50 text-white font-semibold rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}