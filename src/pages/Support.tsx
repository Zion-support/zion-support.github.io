import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Headphones, 
  MessageSquare, 
  Phone, 
  Mail, 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  Database,
  Code,
  Target,
  Star,
  Rocket,
  Award,
  HelpCircle,
  Settings,
  Download,
  Upload,
  Wrench,
  Lightbulb
} from 'lucide-react';

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const supportCategories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'getting-started', name: 'Getting Started', icon: Rocket },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Wrench },
    { id: 'api', name: 'API & Integration', icon: Code },
    { id: 'billing', name: 'Billing & Account', icon: CreditCard },
    { id: 'security', name: 'Security & Privacy', icon: Shield }
  ];

  const helpResources = [
    {
      id: 'getting-started-guide',
      title: 'Getting Started Guide',
      category: 'getting-started',
      description: 'Complete walkthrough for new users to get up and running quickly',
      type: 'guide',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600',
      estimatedTime: '15 min read',
      difficulty: 'Beginner'
    },
    {
      id: 'video-tutorials',
      title: 'Video Tutorials',
      category: 'getting-started',
      description: 'Step-by-step video guides for all major features',
      type: 'video',
      icon: Video,
      color: 'from-purple-500 to-pink-600',
      estimatedTime: '2-10 min each',
      difficulty: 'All Levels'
    },
    {
      id: 'api-documentation',
      title: 'API Documentation',
      category: 'api',
      description: 'Comprehensive API reference with examples and SDKs',
      type: 'documentation',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      estimatedTime: 'Reference',
      difficulty: 'Advanced'
    },
    {
      id: 'troubleshooting-guide',
      title: 'Troubleshooting Guide',
      category: 'troubleshooting',
      description: 'Common issues and their solutions',
      type: 'guide',
      icon: Wrench,
      color: 'from-orange-500 to-red-600',
      estimatedTime: '10 min read',
      difficulty: 'Intermediate'
    },
    {
      id: 'security-best-practices',
      title: 'Security Best Practices',
      category: 'security',
      description: 'Security guidelines and compliance information',
      type: 'guide',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      estimatedTime: '20 min read',
      difficulty: 'Intermediate'
    },
    {
      id: 'billing-faq',
      title: 'Billing & Account FAQ',
      category: 'billing',
      description: 'Answers to common billing and account questions',
      type: 'faq',
      icon: CreditCard,
      color: 'from-yellow-500 to-orange-600',
      estimatedTime: '5 min read',
      difficulty: 'All Levels'
    }
  ];

  const faqs = [
    {
      id: 'account-setup',
      question: 'How do I set up my account?',
      answer: 'Setting up your account is simple. After signing up, you\'ll receive a welcome email with setup instructions. You can also follow our Getting Started Guide for step-by-step instructions.',
      category: 'getting-started'
    },
    {
      id: 'password-reset',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Click the "Forgot Password" link on the login page. Enter your email address and you\'ll receive a password reset link. Make sure to check your spam folder if you don\'t see the email.',
      category: 'getting-started'
    },
    {
      id: 'api-rate-limits',
      question: 'What are the API rate limits?',
      answer: 'Our API rate limits vary by plan. Free plans have 1,000 requests per hour, while paid plans range from 10,000 to 100,000 requests per hour. Check your plan details for specific limits.',
      category: 'api'
    },
    {
      id: 'data-export',
      question: 'How can I export my data?',
      answer: 'You can export your data in multiple formats including CSV, JSON, and Excel. Go to Settings > Data Export to download your information. Large exports may take a few minutes to process.',
      category: 'troubleshooting'
    },
    {
      id: 'billing-cycle',
      question: 'When does my billing cycle start?',
      answer: 'Your billing cycle starts on the day you first subscribe. Subsequent charges occur on the same date each month or year, depending on your chosen billing frequency.',
      category: 'billing'
    },
    {
      id: 'security-compliance',
      question: 'What security certifications do you have?',
      answer: 'We maintain SOC 2 Type II, ISO 27001, and GDPR compliance. Our security practices are regularly audited and we provide detailed security documentation upon request.',
      category: 'security'
    }
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Usually within 2 minutes',
      action: 'Start Chat',
      color: 'from-green-500 to-emerald-600',
      link: '#'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri, 9AM-6PM EST',
      responseTime: 'Immediate',
      action: '+1 (555) 123-4567',
      color: 'from-blue-500 to-cyan-600',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions or issues',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'support@ziontechgroup.com',
      color: 'from-purple-500 to-pink-600',
      link: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      availability: '24/7',
      responseTime: 'Varies',
      action: 'Visit Forum',
      color: 'from-orange-500 to-red-600',
      link: '#'
    }
  ];

  const filteredResources = helpResources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support - Zion Tech Group"
        description="Get help and support for all our products and services. Find documentation, tutorials, and contact our expert support team."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get the support you need with our comprehensive help resources, 
              expert assistance, and community-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the support method that works best for you. We're here to help 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{method.description}</p>
                <div className="text-xs text-gray-400 mb-4">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Clock className="w-3 h-3" />
                    {method.availability}
                  </div>
                  <div className="text-xs">{method.responseTime}</div>
                </div>
                <a
                  href={method.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Help Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to your questions in our comprehensive help library.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Resources Grid */}
          <div className="max-w-6xl mx-auto">
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-6 hover:border-slate-500/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {resource.estimatedTime}
                      </span>
                      <span className="px-2 py-1 bg-slate-600/50 rounded-full">
                        {resource.difficulty}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      View Resource
                    </button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to the most common questions we receive.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-xl border border-slate-600/30 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-600/30 transition-colors"
                    >
                      <span className="font-medium text-white">{faq.question}</span>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {expandedFAQ === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4 border-t border-slate-600/30"
                      >
                        <p className="text-gray-300 text-sm leading-relaxed pt-4">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/request-quote"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Add missing icon components
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CreditCard = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);