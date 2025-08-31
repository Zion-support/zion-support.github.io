import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Users, 
  Globe, 
  Settings, 
  CreditCard, 
  Shield, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  FileText,
  Video,
  Star
} from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'How to create your first account',
          description: 'Step-by-step guide to setting up your Zion Tech Group account',
          url: '/help/account-creation'
        },
        {
          title: 'Understanding the marketplace',
          description: 'Learn how our AI and tech marketplace works',
          url: '/help/marketplace-guide'
        },
        {
          title: 'First steps for new users',
          description: 'Essential information to get you started quickly',
          url: '/help/first-steps'
        }
      ]
    },
    {
      id: 'account-management',
      title: 'Account Management',
      icon: Users,
      articles: [
        {
          title: 'Updating your profile information',
          description: 'How to keep your profile current and accurate',
          url: '/help/profile-updates'
        },
        {
          title: 'Security settings and two-factor authentication',
          description: 'Protect your account with enhanced security features',
          url: '/help/security-settings'
        },
        {
          title: 'Managing notifications and preferences',
          description: 'Customize how and when you receive updates',
          url: '/help/notifications'
        }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace Features',
      icon: Globe,
      articles: [
        {
          title: 'How to list your services',
          description: 'Create compelling service listings that attract clients',
          url: '/help/service-listings'
        },
        {
          title: 'Finding and hiring talent',
          description: 'Discover and connect with skilled professionals',
          url: '/help/hiring-talent'
        },
        {
          title: 'Payment and billing explained',
          description: 'Understanding our payment system and fees',
          url: '/help/payments'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Technology Services',
      icon: Settings,
      articles: [
        {
          title: 'Available AI solutions',
          description: 'Overview of our artificial intelligence services',
          url: '/help/ai-solutions'
        },
        {
          title: 'Cybersecurity services guide',
          description: 'Protect your business with our security solutions',
          url: '/help/cybersecurity'
        },
        {
          title: 'Cloud and infrastructure services',
          description: 'Understanding our cloud computing offerings',
          url: '/help/cloud-services'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      icon: CreditCard,
      articles: [
        {
          title: 'Understanding your invoice',
          description: 'Breakdown of charges and payment terms',
          url: '/help/invoice-guide'
        },
        {
          title: 'Payment methods accepted',
          description: 'All the ways you can pay for our services',
          url: '/help/payment-methods'
        },
        {
          title: 'Billing disputes and refunds',
          description: 'How to resolve billing issues',
          url: '/help/billing-disputes'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      articles: [
        {
          title: 'Data protection and privacy',
          description: 'How we protect your information',
          url: '/help/data-protection'
        },
        {
          title: 'Security best practices',
          description: 'Tips to keep your account secure',
          url: '/help/security-best-practices'
        },
        {
          title: 'Reporting security issues',
          description: 'What to do if you find a security problem',
          url: '/help/report-security'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group?',
      answer: 'Getting started is easy! Simply create an account, browse our services, and contact us for a consultation. Our team will guide you through the process and help you choose the right solutions for your needs.'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including machine learning, natural language processing, computer vision, predictive analytics, and custom AI development. Our solutions are tailored to your specific business requirements.'
    },
    {
      question: 'How quickly can you deliver a project?',
      answer: 'Project timelines vary depending on complexity and scope. Simple implementations can be completed in weeks, while complex enterprise solutions may take several months. We always provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive ongoing support including 24/7 monitoring, regular updates, maintenance, and technical support. Our support packages are designed to ensure your solutions continue performing optimally.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across all industries including healthcare, finance, manufacturing, retail, education, and government. Our AI solutions are adaptable to any sector and can be customized for specific industry requirements.'
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      available: true,
      responseTime: 'Immediate'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      available: true,
      responseTime: 'Within 1 hour'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us detailed questions',
      available: true,
      responseTime: 'Within 24 hours'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance',
      available: true,
      responseTime: 'Always available'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}help you?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn how to use our platform, and get 
              the support you need to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-200 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Help Fast</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get the support you need, when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/50">
                  {channel.responseTime}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Help Center</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our comprehensive help articles and guides
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {category.articles.length} articles available
                      </p>
                    </div>
                  </div>
                  {openCategories.includes(category.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {openCategories.includes(category.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50"
                  >
                    <div className="p-6 space-y-4">
                      {category.articles.map((article, articleIndex) => (
                        <motion.div
                          key={articleIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: articleIndex * 0.1 }}
                          className="flex items-start space-x-4 p-4 bg-slate-700/20 rounded-lg hover:bg-slate-700/30 transition-colors duration-200"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1">{article.title}</h4>
                            <p className="text-gray-400 text-sm mb-2">{article.description}</p>
                            <a
                              href={article.url}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                            >
                              Read Article
                              <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to the most common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              More ways to learn and get support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8" />,
                title: 'Video Tutorials',
                description: 'Step-by-step video guides for common tasks',
                link: '/tutorials'
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Documentation',
                description: 'Comprehensive technical documentation and APIs',
                link: '/docs'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community Forum',
                description: 'Connect with other users and share experiences',
                link: '/community'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                >
                  Explore
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;