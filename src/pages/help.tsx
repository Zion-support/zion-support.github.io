import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Video, 
  FileText,
  ChevronDown,
  ChevronRight,
  Star,
  Users,
  Zap,
  Shield,
  Cloud
} from 'lucide-react';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'How to create your first account',
          description: 'Step-by-step guide to setting up your Zion Tech Group account',
          url: '/help/getting-started/create-account'
        },
        {
          title: 'Understanding our services',
          description: 'Overview of all available services and how to choose the right one',
          url: '/help/getting-started/understanding-services'
        },
        {
          title: 'First project setup',
          description: 'Complete guide to setting up your first project with us',
          url: '/help/getting-started/first-project'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Solutions',
      icon: Zap,
      articles: [
        {
          title: 'AI & Analytics services',
          description: 'Everything you need to know about our AI and analytics solutions',
          url: '/help/services/ai-analytics'
        },
        {
          title: 'Cybersecurity implementation',
          description: 'Guide to implementing our cybersecurity solutions',
          url: '/help/services/cybersecurity'
        },
        {
          title: 'Cloud & DevOps setup',
          description: 'How to get started with our cloud and DevOps services',
          url: '/help/services/cloud-devops'
        }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      icon: Users,
      articles: [
        {
          title: 'How to use the marketplace',
          description: 'Complete guide to navigating and using our marketplace',
          url: '/help/marketplace/using-marketplace'
        },
        {
          title: 'Finding the right talent',
          description: 'Tips for finding and hiring the perfect professional',
          url: '/help/marketplace/finding-talent'
        },
        {
          title: 'Posting services and products',
          description: 'How to list your services and products on our marketplace',
          url: '/help/marketplace/posting-services'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      icon: Shield,
      articles: [
        {
          title: 'Understanding pricing',
          description: 'Complete breakdown of our pricing structure',
          url: '/help/billing/pricing-structure'
        },
        {
          title: 'Payment methods',
          description: 'Accepted payment methods and how to set them up',
          url: '/help/billing/payment-methods'
        },
        {
          title: 'Invoicing and receipts',
          description: 'How to access and manage your invoices and receipts',
          url: '/help/billing/invoicing'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Cloud,
      articles: [
        {
          title: 'API documentation',
          description: 'Complete API reference and integration guides',
          url: '/help/technical/api-documentation'
        },
        {
          title: 'Troubleshooting common issues',
          description: 'Solutions to frequently encountered problems',
          url: '/help/technical/troubleshooting'
        },
        {
          title: 'System requirements',
          description: 'Minimum system requirements for our services',
          url: '/help/technical/system-requirements'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to get started with AI services',
      description: 'Quick start guide for implementing AI solutions',
      views: 1247,
      rating: 4.8
    },
    {
      title: 'Cybersecurity best practices',
      description: 'Essential security measures for your business',
      views: 892,
      rating: 4.9
    },
    {
      title: 'Marketplace seller guide',
      description: 'Complete guide to selling on our marketplace',
      views: 756,
      rating: 4.7
    },
    {
      title: 'Cloud migration checklist',
      description: 'Step-by-step cloud migration process',
      views: 634,
      rating: 4.6
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Help Center
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Find answers to your questions, learn how to use our services, and get the support you need. 
              Our comprehensive help center is here to guide you every step of the way.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular Help Articles
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Most viewed and highly rated help articles to get you started quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {article.rating}
                    </span>
                    <span>{article.views} views</span>
                  </div>
                  
                  <div className="text-zion-cyan group-hover:text-white transition-colors duration-300">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Help Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse help articles organized by category to find exactly what you need.
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-8 text-left hover:bg-zion-cyan/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        <p className="text-zion-slate-light">{category.articles.length} articles</p>
                      </div>
                    </div>
                    
                    <div className="text-zion-cyan">
                      {expandedCategory === category.id ? (
                        <ChevronDown className="w-6 h-6" />
                      ) : (
                        <ChevronRight className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </button>
                
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-zion-cyan/20 bg-zion-slate-dark/30"
                  >
                    <div className="p-8 space-y-6">
                      {category.articles.map((article) => (
                        <div key={article.title} className="flex items-center justify-between p-4 bg-zion-slate-dark/30 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 cursor-pointer">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">{article.title}</h4>
                            <p className="text-zion-slate-light">{article.description}</p>
                          </div>
                          <Link
                            to={article.url}
                            className="text-zion-cyan hover:text-white transition-colors duration-300"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-zion-slate-light">Get instant help from our support team</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                <p className="text-zion-slate-light">Send us a detailed message</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-zion-slate-light">Call us directly for urgent issues</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Contact Support
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenterPage;