import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  FileText, 
  ChevronDown, 
  ChevronRight,
  Star,
  Users,
  Code,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Heart,
  Building,
  Cpu,
  Lock,
  Globe,
  Award,
  CheckCircle,
  X,
  ArrowRight,
  ExternalLink,
  Lightbulb,
  AlertCircle,
  Info,
  Clock,
  MapPin
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  articleCount: number;
  path: string;
}

interface SupportOption {
  title: string;
  description: string;
  icon: any;
  color: string;
  action: string;
  path: string;
}

const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of using Zion Tech Group services',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    articleCount: 12,
    path: '/help/getting-started'
  },
  {
    id: 'services',
    title: 'Services Guide',
    description: 'Detailed information about our technology services',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    articleCount: 25,
    path: '/help/services'
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    description: 'How to use our marketplace for talent and equipment',
    icon: Building,
    color: 'from-green-500 to-teal-500',
    articleCount: 18,
    path: '/help/marketplace'
  },
  {
    id: 'billing',
    title: 'Billing & Payments',
    description: 'Payment methods, invoices, and billing questions',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
    articleCount: 8,
    path: '/help/billing'
  },
  {
    id: 'account',
    title: 'Account Management',
    description: 'Profile settings, security, and account preferences',
    icon: Users,
    color: 'from-indigo-500 to-purple-500',
    articleCount: 15,
    path: '/help/account'
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    icon: AlertCircle,
    color: 'from-red-500 to-pink-500',
    articleCount: 22,
    path: '/help/troubleshooting'
  }
];

const supportOptions: SupportOption[] = [
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    color: 'from-green-500 to-teal-500',
    action: 'Start Chat',
    path: '/chat'
  },
  {
    title: 'Email Support',
    description: 'Send us a detailed message and get a response within 24 hours',
    icon: Mail,
    color: 'from-blue-500 to-cyan-500',
    action: 'Send Email',
    path: '/contact'
  },
  {
    title: 'Phone Support',
    description: 'Call us directly for urgent technical issues',
    icon: Phone,
    color: 'from-purple-500 to-pink-500',
    action: 'Call Now',
    path: 'tel:+13024640950'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step guides and tutorials',
    icon: Video,
    color: 'from-orange-500 to-red-500',
    action: 'Watch Videos',
    path: '/help/videos'
  }
];

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I get started with Zion Tech Group services?',
    answer: 'Getting started is easy! Simply browse our services, contact our team for a consultation, or use our online quote request form. We\'ll assess your needs and recommend the best solutions for your business.',
    category: 'getting-started',
    tags: ['onboarding', 'consultation', 'services']
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our encrypted payment system.',
    category: 'billing',
    tags: ['payment', 'billing', 'security']
  },
  {
    id: '3',
    question: 'How quickly can you deploy AI solutions?',
    answer: 'Deployment timelines vary based on complexity. Simple AI integrations can be deployed in 2-4 weeks, while complex enterprise solutions typically take 8-12 weeks. We\'ll provide a detailed timeline during consultation.',
    category: 'services',
    tags: ['ai', 'deployment', 'timeline']
  },
  {
    id: '4',
    question: 'Do you provide ongoing support after deployment?',
    answer: 'Yes! We offer comprehensive post-deployment support including 24/7 monitoring, regular maintenance, updates, and technical support. Our support packages are customizable to your needs.',
    category: 'services',
    tags: ['support', 'maintenance', 'monitoring']
  },
  {
    id: '5',
    question: 'Can you work with existing IT infrastructure?',
    answer: 'Absolutely! We specialize in integrating with existing systems. Our team will assess your current infrastructure and design solutions that work seamlessly with what you already have.',
    category: 'troubleshooting',
    tags: ['integration', 'infrastructure', 'compatibility']
  },
  {
    id: '6',
    question: 'What security measures do you implement?',
    answer: 'We implement enterprise-grade security including SOC2 compliance, end-to-end encryption, regular security audits, and 24/7 threat monitoring. Your data security is our top priority.',
    category: 'account',
    tags: ['security', 'compliance', 'encryption']
  },
  {
    id: '7',
    question: 'How do I find talent through your marketplace?',
    answer: 'Browse our talent marketplace by skills, experience, or location. You can post job requirements, review profiles, and connect directly with qualified professionals. We also offer managed recruitment services.',
    category: 'marketplace',
    tags: ['talent', 'recruitment', 'hiring']
  },
  {
    id: '8',
    question: 'What if I\'m not satisfied with a service?',
    answer: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely satisfied, we\'ll work to fix the issue or provide a full refund. Your success is our success.',
    category: 'billing',
    tags: ['guarantee', 'refund', 'satisfaction']
  }
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(faqData);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredFAQs(faqData);
      return;
    }

    const filtered = faqData.filter(faq => 
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredFAQs(filtered);
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'getting-started': return BookOpen;
      case 'services': return Code;
      case 'marketplace': return Building;
      case 'billing': return Award;
      case 'account': return Users;
      case 'troubleshooting': return AlertCircle;
      default: return HelpCircle;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'getting-started': return 'text-blue-500';
      case 'services': return 'text-purple-500';
      case 'marketplace': return 'text-green-500';
      case 'billing': return 'text-yellow-500';
      case 'account': return 'text-indigo-500';
      case 'troubleshooting': return 'text-red-500';
      default: return 'text-zion-cyan';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need to succeed with Zion Tech Group.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or guides..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-2xl px-6 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 text-lg"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-6 w-6" />
          </div>
        </motion.div>

        {/* Help Categories */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={category.path}
                  className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 text-center">{category.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 text-center">{category.description}</p>
                  <div className="flex items-center justify-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">{category.articleCount} articles</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Options */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Get Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  to={option.path}
                  className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{option.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{option.description}</p>
                  <div className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg text-sm font-medium group-hover:from-zion-cyan-dark group-hover:to-zion-purple-dark transition-all duration-300">
                    {option.action}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                All Categories
              </button>
              {helpCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs
                .filter(faq => selectedCategory === 'all' || faq.category === selectedCategory)
                .map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center flex-shrink-0 mt-1`}>
                          {getCategoryIcon(faq.category)({ className: "h-4 w-4 text-white" })}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-lg mb-2">{faq.question}</h3>
                          <div className="flex flex-wrap gap-2">
                            {faq.tags.map(tag => (
                              <span
                                key={tag}
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(faq.category)} bg-white/10`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        {expandedFAQ === faq.id ? (
                          <ChevronDown className="h-5 w-5 text-zion-cyan" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-zion-slate-light" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-zion-cyan/20 pt-4">
                              <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                              <div className="mt-4 flex items-center gap-4 text-sm text-zion-slate-light">
                                <span className={`flex items-center gap-1 ${getCategoryColor(faq.category)}`}>
                                  {getCategoryIcon(faq.category)({ className: "h-4 w-4" })}
                                  {helpCategories.find(c => c.id === faq.category)?.title}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Lightbulb className="h-4 w-4" />
                                  Helpful
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
            </div>

            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-zion-slate-light mb-4">
                  Try adjusting your search terms or browse our help categories above.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setFilteredFAQs(faqData);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Still Need Help?</h3>
            <p className="text-zion-slate-light mb-6">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/chat"
                className="inline-flex items-center border border-zion-cyan text-zion-cyan px-6 py-3 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
              >
                Start Live Chat
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
