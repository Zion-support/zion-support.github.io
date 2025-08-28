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
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  TrendingUp,
  Target,
  Heart,
  Building,
  Cpu,
  Lock,
  Atom,
  Network,
  Eye,
  BarChart3,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

interface HelpSection {
  id: string;
  title: string;
  icon: any;
  description: string;
  articles: Array<{
    title: string;
    description: string;
    path?: string;
    external?: boolean;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    readTime: string;
  }>;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const helpSections: HelpSection[] = [
  {
    title: 'Getting Started',
    icon: Zap,
    description: 'Essential information to begin using our services',
    articles: [
      {
        title: 'Welcome to Zion Tech Group',
        description: 'Introduction to our platform and services',
        path: '/about',
        difficulty: 'Beginner',
        readTime: '5 min'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Step-by-step account creation and configuration',
        path: '/signup',
        difficulty: 'Beginner',
        readTime: '10 min'
      },
      {
        title: 'First Steps with AI Services',
        description: 'Quick start guide for AI-powered solutions',
        path: '/ai-services',
        difficulty: 'Beginner',
        readTime: '15 min'
      },
      {
        title: 'Understanding Our Pricing',
        description: 'Complete pricing structure and plans',
        path: '/pricing',
        difficulty: 'Beginner',
        readTime: '8 min'
      }
    ]
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    icon: Brain,
    description: 'Artificial Intelligence and Machine Learning solutions',
    articles: [
      {
        title: 'AI Business Intelligence Guide',
        description: 'How to leverage AI for business insights',
        path: '/services/ai-business-intelligence',
        difficulty: 'Intermediate',
        readTime: '20 min'
      },
      {
        title: 'AI Compliance Assistant Setup',
        description: 'Configuring automated compliance monitoring',
        path: '/services/ai-compliance-assistant',
        difficulty: 'Intermediate',
        readTime: '25 min'
      },
      {
        title: 'AI Sales Copilot Integration',
        description: 'Integrating AI sales optimization tools',
        path: '/services/ai-sales-copilot',
        difficulty: 'Intermediate',
        readTime: '18 min'
      },
      {
        title: 'AI Content Marketing Suite',
        description: 'Creating content with AI assistance',
        path: '/services/ai-content-marketing-suite',
        difficulty: 'Beginner',
        readTime: '12 min'
      }
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Cloud computing and infrastructure services',
    articles: [
      {
        title: 'Cloud DevOps Best Practices',
        description: 'DevOps implementation in cloud environments',
        path: '/services/cloud-devops',
        difficulty: 'Advanced',
        readTime: '30 min'
      },
      {
        title: 'IT Infrastructure Planning',
        description: 'Strategic infrastructure design and implementation',
        path: '/services/it-infrastructure',
        difficulty: 'Advanced',
        readTime: '35 min'
      },
      {
        title: 'FinOps Cost Optimization',
        description: 'Managing and optimizing cloud costs',
        path: '/services/finops-advisor',
        difficulty: 'Intermediate',
        readTime: '22 min'
      },
      {
        title: 'Digital Transformation Guide',
        description: 'Strategic technology transformation planning',
        path: '/services/digital-transformation',
        difficulty: 'Advanced',
        readTime: '40 min'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Security and compliance solutions',
    articles: [
      {
        title: 'AI Cybersecurity Platform',
        description: 'AI-powered security threat detection',
        path: '/services/ai-cybersecurity-platform',
        difficulty: 'Advanced',
        readTime: '28 min'
      },
      {
        title: 'Security Headers & CSP Setup',
        description: 'Web security configuration and hardening',
        path: '/services/security-headers-csp',
        difficulty: 'Intermediate',
        readTime: '20 min'
      },
      {
        title: 'Zero Trust Network Architecture',
        description: 'Implementing modern security frameworks',
        path: '/services/zero-trust-network-access',
        difficulty: 'Advanced',
        readTime: '35 min'
      },
      {
        title: 'GDPR/CCPA Compliance Guide',
        description: 'Privacy regulation compliance automation',
        path: '/services/dsr-portal',
        difficulty: 'Intermediate',
        readTime: '25 min'
      }
    ]
  },
  {
    id: 'micro-saas',
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Niche software solutions and platforms',
    articles: [
      {
        title: 'Micro SaaS Platform Overview',
        description: 'Understanding our micro SaaS ecosystem',
        path: '/micro-saas',
        difficulty: 'Beginner',
        readTime: '15 min'
      },
      {
        title: 'Micro CRM Implementation',
        description: 'Setting up customer relationship management',
        path: '/services/micro-crm',
        difficulty: 'Intermediate',
        readTime: '20 min'
      },
      {
        title: 'Helpdesk Platform Setup',
        description: 'Customer support system configuration',
        path: '/services/helpdesk',
        difficulty: 'Intermediate',
        readTime: '18 min'
      },
      {
        title: 'Website Analytics Dashboard',
        description: 'Performance tracking and insights setup',
        path: '/services/website-analytics',
        difficulty: 'Beginner',
        readTime: '12 min'
      }
    ]
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Cutting-edge and future technologies',
    articles: [
      {
        title: 'Quantum Computing Primer',
        description: 'Introduction to quantum computing concepts',
        path: '/services/quantum-computing',
        difficulty: 'Advanced',
        readTime: '45 min'
      },
      {
        title: 'IoT Edge Computing Guide',
        description: 'Internet of Things and edge computing',
        path: '/services/iot-edge-computing',
        difficulty: 'Intermediate',
        readTime: '25 min'
      },
      {
        title: 'AI Quantum Hybrid Platform',
        description: 'Combining AI and quantum computing',
        path: '/services/ai-quantum-hybrid-platform',
        difficulty: 'Advanced',
        readTime: '40 min'
      },
      {
        title: 'Space Technology Solutions',
        description: 'Space-based technology applications',
        path: '/space-tech',
        difficulty: 'Advanced',
        readTime: '30 min'
      }
    ]
  }
];

const faqData: FAQItem[] = [
  {
    question: 'What services does Zion Tech Group offer?',
    answer: 'We offer a comprehensive range of technology services including AI and machine learning solutions, cloud infrastructure, cybersecurity, emerging technologies like quantum computing, and micro SaaS platforms. Our services are designed to help businesses of all sizes leverage cutting-edge technology.',
    category: 'General'
  },
  {
    question: 'How do I get started with your AI services?',
    answer: 'Getting started is easy! Begin by exploring our AI services overview page, then contact our team for a consultation. We\'ll assess your needs and recommend the best AI solutions for your business. We also offer comprehensive onboarding and training.',
    category: 'AI Services'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing varies based on the service and your specific requirements. We offer flexible plans including pay-as-you-go, subscription models, and enterprise custom pricing. Contact us for a detailed quote tailored to your needs.',
    category: 'Pricing'
  },
  {
    question: 'Do you provide support and training?',
    answer: 'Yes! We provide comprehensive support including 24/7 technical assistance, detailed documentation, video tutorials, and personalized training sessions. Our team is committed to ensuring your success with our solutions.',
    category: 'Support'
  },
  {
    question: 'Are your services suitable for small businesses?',
    answer: 'Absolutely! We design our services to be scalable and accessible to businesses of all sizes. Our micro SaaS solutions are particularly well-suited for small businesses, offering enterprise-grade technology at accessible price points.',
    category: 'General'
  },
  {
    question: 'How do you ensure data security and compliance?',
    answer: 'Security is our top priority. We implement industry-leading security measures including encryption, regular security audits, and compliance with GDPR, CCPA, and other regulations. Our AI-powered security platforms provide real-time threat detection and response.',
    category: 'Security'
  }
];

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['getting-started']));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

  const filteredFAQ = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

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
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Help Sections */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Help Articles & Tutorials</h2>
              
              <div className="space-y-6">
                {helpSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-6 text-left hover:bg-zion-slate-dark/70 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                            <section.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                            <p className="text-cyan-300">{section.description}</p>
                          </div>
                        </div>
                        {expandedSections.has(section.id) ? (
                          <ChevronDown className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-cyan-400" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedSections.has(section.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-cyan-400/20"
                        >
                          <div className="p-6 space-y-4">
                            {section.articles.map((article, articleIndex) => (
                              <motion.div
                                key={article.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: articleIndex * 0.1 }}
                                className="group"
                              >
                                {article.path ? (
                                  <Link
                                    to={article.path}
                                    className="block p-4 bg-zion-slate-dark/30 hover:bg-zion-slate-dark/50 border border-cyan-400/10 hover:border-cyan-400/30 rounded-lg transition-all duration-300"
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                          {article.title}
                                        </h4>
                                        <p className="text-gray-400 mt-1">{article.description}</p>
                                        <div className="flex items-center space-x-4 mt-3">
                                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                            article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                            'bg-red-500/20 text-red-400'
                                          }`}>
                                            {article.difficulty}
                                          </span>
                                          <span className="text-gray-500 text-sm flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {article.readTime}
                                          </span>
                                        </div>
                                      </div>
                                      <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                  </Link>
                                ) : (
                                  <div className="p-4 bg-zion-slate-dark/30 border border-cyan-400/10 rounded-lg">
                                    <h4 className="font-semibold text-white">{article.title}</h4>
                                    <p className="text-gray-400 mt-1">{article.description}</p>
                                    <div className="flex items-center space-x-4 mt-3">
                                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                        article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                        'bg-red-500/20 text-red-400'
                                      }`}>
                                        {article.difficulty}
                                      </span>
                                      <span className="text-gray-500 text-sm flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {article.readTime}
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        {/* Contact Support */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="grid gap-4">
            {filteredFAQ.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <HelpCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HelpCenter;
