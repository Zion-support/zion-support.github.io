import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  FileText,
  Video,
  Download,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'all',
      name: 'All Topics',
      icon: BookOpen,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Star,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: TrendingUp,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: HelpCircle,
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: FileText,
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const helpArticles = [
    {
      title: 'How to Get Started with AI Services',
      category: 'getting-started',
      description: 'Learn the basics of implementing AI solutions for your business',
      tags: ['AI', 'Getting Started', 'Implementation'],
      readTime: '5 min read',
      popular: true
    },
    {
      title: 'Setting Up Your Cloud Infrastructure',
      category: 'technical',
      description: 'Step-by-step guide to configuring your cloud environment',
      tags: ['Cloud', 'Setup', 'Infrastructure'],
      readTime: '8 min read',
      popular: false
    },
    {
      title: 'Understanding AI Pricing Models',
      category: 'billing',
      description: 'Complete guide to our pricing structure and payment options',
      tags: ['Pricing', 'Billing', 'AI Services'],
      readTime: '6 min read',
      popular: true
    },
    {
      title: 'AI Workflow Automation Best Practices',
      category: 'ai-services',
      description: 'Optimize your business processes with AI automation',
      tags: ['AI', 'Automation', 'Best Practices'],
      readTime: '10 min read',
      popular: false
    },
    {
      title: 'Troubleshooting Common Issues',
      category: 'technical',
      description: 'Solutions to frequently encountered problems',
      tags: ['Troubleshooting', 'Support', 'Issues'],
      readTime: '7 min read',
      popular: false
    },
    {
      title: 'Integrating Third-Party Services',
      category: 'technical',
      description: 'Connect external tools and services with our platform',
      tags: ['Integration', 'API', 'Third-Party'],
      readTime: '9 min read',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get started with your AI services?',
      answer: 'Most AI services can be implemented within 2-4 weeks, depending on complexity. We offer rapid deployment options for standard solutions.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive documentation and training resources.'
    },
    {
      question: 'Can I customize the AI solutions for my specific needs?',
      answer: 'Absolutely! We specialize in custom AI development and can tailor solutions to your exact business requirements and industry specifications.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including SOC 2 Type II compliance, ISO 27001 certification, and end-to-end encryption for all data.'
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Yes, we provide comprehensive training programs, workshops, and ongoing support to ensure your team can effectively use our solutions.'
    },
    {
      question: 'What happens if I need to scale my solution?',
      answer: 'Our solutions are built to scale seamlessly. We can help you expand capacity, add new features, or integrate additional services as your business grows.'
    }
  ];

  const supportChannels = [
    {
      title: '24/7 Technical Support',
      icon: Clock,
      description: 'Round-the-clock technical assistance for urgent issues',
      response: 'Response within 15 minutes',
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Live Chat Support',
      icon: MessageCircle,
      description: 'Real-time chat with our support specialists',
      response: 'Available during business hours',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Phone Support',
      icon: Phone,
      description: 'Direct phone support for complex issues',
      response: 'Available 9 AM - 6 PM EST',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Email Support',
      icon: Mail,
      description: 'Detailed email support for non-urgent matters',
      response: 'Response within 4 hours',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      icon: BookOpen,
      description: 'Comprehensive technical documentation and guides',
      link: '/docs',
      type: 'Internal'
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      description: 'Step-by-step video guides for all services',
      link: '/tutorials',
      type: 'Internal'
    },
    {
      title: 'API Reference',
      icon: FileText,
      description: 'Complete API documentation and examples',
      link: '/api-docs',
      type: 'Internal'
    },
    {
      title: 'White Papers',
      icon: Download,
      description: 'In-depth research and technical insights',
      link: '/white-papers',
      type: 'Internal'
    }
  ];

  const filteredArticles = helpArticles.filter(article => 
    selectedCategory === 'all' || article.category === selectedCategory
  );

  const searchResults = filteredArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers, documentation, and contact our support team."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, access helpful resources, and get the support you need to succeed with our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Find help organized by topic to quickly locate the information you need.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                    : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Help Articles</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Browse our comprehensive help articles and guides.'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                  {article.popular && (
                    <div className="flex items-center space-x-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs text-yellow-400 font-medium">Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">{article.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">{article.readTime}</span>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {searchResults.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-slate-300 mb-4">Try adjusting your search terms or browse our categories.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Quick answers to the most common questions about our services and support.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Multiple ways to get the help you need, when you need it.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${channel.color} flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{channel.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{channel.response}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Access comprehensive documentation, tutorials, and learning materials.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={resource.link}>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-3">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{resource.type}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Our support team is here to help you succeed. Get in touch for personalized assistance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 302 464 0950
              </a>
              <p className="text-slate-400 text-sm mt-2">Available 9 AM - 6 PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
              <p className="text-slate-400 text-sm mt-2">Response within 4 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Office Location</h3>
              <div className="text-slate-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;