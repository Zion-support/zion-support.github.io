import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
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
  Star,
  Brain,
  Cloud,
  Zap,
  ArrowRight,
  ChevronRight,
  Eye
} from 'lucide-react';

export default function Help() {
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
          description: 'Learn how to keep your account information current',
          url: '/help/profile-update'
        },
        {
          title: 'Managing your subscriptions',
          description: 'How to view and modify your service subscriptions',
          url: '/help/subscription-management'
        },
        {
          title: 'Security settings and two-factor authentication',
          description: 'Protect your account with enhanced security measures',
          url: '/help/security-settings'
        }
      ]
    },
    {
      id: 'services-solutions',
      title: 'Services & Solutions',
      icon: Globe,
      articles: [
        {
          title: 'How to request a quote',
          description: 'Get pricing information for our services and solutions',
          url: '/help/request-quote'
        },
        {
          title: 'Understanding service delivery',
          description: 'What to expect when working with Zion Tech Group',
          url: '/help/service-delivery'
        },
        {
          title: 'Custom solution development',
          description: 'How we create tailored solutions for your business',
          url: '/help/custom-solutions'
        }
      ]
    },
    {
      id: 'billing-payments',
      title: 'Billing & Payments',
      icon: CreditCard,
      articles: [
        {
          title: 'Payment methods and options',
          description: 'Accepted payment methods and billing cycles',
          url: '/help/payment-methods'
        },
        {
          title: 'Understanding your invoice',
          description: 'How to read and understand your billing statements',
          url: '/help/invoice-explanation'
        },
        {
          title: 'Refund and cancellation policies',
          description: 'Our policies for refunds and service cancellations',
          url: '/help/refund-policy'
        }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      articles: [
        {
          title: 'Common technical issues',
          description: 'Solutions to frequently encountered problems',
          url: '/help/common-issues'
        },
        {
          title: 'System requirements',
          description: 'Technical requirements for our services',
          url: '/help/system-requirements'
        },
        {
          title: 'API documentation and integration',
          description: 'How to integrate our services with your systems',
          url: '/help/api-integration'
        }
      ]
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      icon: Shield,
      articles: [
        {
          title: 'Data protection and privacy',
          description: 'How we protect your data and maintain privacy',
          url: '/help/data-protection'
        },
        {
          title: 'Compliance certifications',
          description: 'Our security and compliance certifications',
          url: '/help/compliance-certifications'
        },
        {
          title: 'Security best practices',
          description: 'Recommended security practices for your organization',
          url: '/help/security-best-practices'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with AI Services',
      description: 'Learn how to implement AI solutions in your business',
      url: '/help/ai-services-guide',
      views: '2.5k',
      category: 'Services & Solutions'
    },
    {
      title: 'Cybersecurity Implementation Guide',
      description: 'Step-by-step guide to implementing our security solutions',
      url: '/help/cybersecurity-guide',
      views: '1.8k',
      category: 'Security & Compliance'
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Essential tips for successful cloud migration',
      url: '/help/cloud-migration',
      views: '1.2k',
      category: 'Technical Support'
    },
    {
      title: 'API Integration Tutorial',
      description: 'Complete guide to integrating our APIs',
      url: '/help/api-tutorial',
      views: '950',
      category: 'Technical Support'
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      url: '/support/chat',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      action: 'Call Now',
      url: 'tel:+1-800-ZION-TECH',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message for complex issues',
      icon: Mail,
      action: 'Send Email',
      url: 'mailto:support@ziontechgroup.com',
      available: true
    },
    {
      title: 'Video Consultation',
      description: 'Schedule a screen-sharing session with our team',
      icon: Video,
      action: 'Schedule',
      url: '/support/video-consultation',
      available: true
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers, contact support, and access comprehensive documentation."
        keywords="help, support, documentation, customer service, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              How can we{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                help you?
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Find answers to your questions, get technical support, and learn how to make the most of our services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Organized help content to quickly find the information you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.articles.map((article) => (
                      <Link
                        key={article.title}
                        to={article.url}
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {article.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="mt-4 w-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    {openCategories.includes(category.id) ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-2" />
                        Show More
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Most viewed and helpful articles from our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Eye className="h-4 w-4 mr-1" />
                    {article.views}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {article.description}
                </p>
                
                <Link
                  to={article.url}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our support team is here to help you with any questions or issues
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {option.description}
                </p>
                
                <Link
                  to={option.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-lg"
                >
                  {option.action}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer: "We typically begin project work within 1-2 weeks of contract signing. For urgent projects, we can expedite the process and start within 3-5 business days."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity. Simple implementations take 4-6 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance. We also provide training for your team to ensure smooth operation."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work across multiple industries including healthcare, finance, manufacturing, retail, and government. Our solutions are adaptable to any sector that can benefit from AI and technology innovation."
              },
              {
                question: "How do you ensure data security and compliance?",
                answer: "We implement enterprise-grade security measures including encryption, access controls, and regular security audits. We're compliant with SOC 2, GDPR, HIPAA, and other relevant standards."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
              >
                Contact Our Team
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Request a Quote
                <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}