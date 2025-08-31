import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, MessageCircle, Phone, Mail, Clock, 
  BookOpen, Video, FileText, HelpCircle, ArrowRight,
  CheckCircle, AlertCircle, Info, Star, Users, Globe
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'account', name: 'Account & Billing', count: 8 },
    { id: 'technical', name: 'Technical Issues', count: 15 },
    { id: 'api', name: 'API & Integration', count: 10 }
  ];

  const faqItems = [
    {
      id: 1,
      question: 'How do I get started with Zion Tech Group\'s AI platform?',
      answer: 'Getting started is easy! Simply create an account, complete your profile setup, and follow our step-by-step onboarding guide. We also offer personalized onboarding sessions with our team to ensure you\'re up and running quickly.',
      category: 'getting-started',
      tags: ['onboarding', 'account setup', 'getting started']
    },
    {
      id: 2,
      question: 'What AI models and services are available on your platform?',
      answer: 'We offer a comprehensive suite of AI services including natural language processing, computer vision, machine learning, and custom model training. Our platform supports both pre-trained models and custom development based on your specific needs.',
      category: 'technical',
      tags: ['AI models', 'services', 'custom development']
    },
    {
      id: 3,
      question: 'How do I integrate your APIs into my application?',
      answer: 'Integration is straightforward with our well-documented REST APIs and SDKs. We provide comprehensive documentation, code examples in multiple languages, and dedicated support for complex integrations.',
      category: 'api',
      tags: ['API integration', 'SDK', 'documentation']
    },
    {
      id: 4,
      question: 'What pricing plans do you offer?',
      answer: 'We offer flexible pricing plans including pay-as-you-go, monthly subscriptions, and enterprise plans. Pricing is based on usage and specific requirements. Contact our sales team for a customized quote.',
      category: 'account',
      tags: ['pricing', 'plans', 'billing']
    },
    {
      id: 5,
      question: 'How do you ensure data security and privacy?',
      answer: 'Data security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'technical',
      tags: ['security', 'privacy', 'compliance']
    },
    {
      id: 6,
      question: 'Can I train custom AI models on your platform?',
      answer: 'Yes! Our platform supports custom model training with your data. We provide tools for data preparation, model selection, training, and deployment. Our team can also assist with complex training scenarios.',
      category: 'technical',
      tags: ['custom models', 'training', 'deployment']
    }
  ];

  const helpResources = [
    {
      id: 1,
      title: 'Documentation Center',
      description: 'Comprehensive guides, API references, and technical documentation for all our services.',
      icon: BookOpen,
      category: 'documentation',
      url: '/documentation',
      featured: true
    },
    {
      id: 2,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides covering platform features, API integration, and best practices.',
      icon: Video,
      category: 'tutorials',
      url: '/tutorials',
      featured: true
    },
    {
      id: 3,
      title: 'Knowledge Base',
      description: 'Searchable database of articles, troubleshooting guides, and frequently asked questions.',
      icon: FileText,
      category: 'knowledge-base',
      url: '/knowledge-base',
      featured: false
    },
    {
      id: 4,
      title: 'Community Forum',
      description: 'Connect with other users, share experiences, and get help from the community.',
      icon: Users,
      category: 'community',
      url: '/community',
      featured: false
    },
    {
      id: 5,
      title: 'API Reference',
      description: 'Complete API documentation with examples, endpoints, and integration guides.',
      icon: Globe,
      category: 'api',
      url: '/api-docs',
      featured: false
    },
    {
      id: 6,
      title: 'Code Examples',
      description: 'Ready-to-use code samples in multiple programming languages for common use cases.',
      icon: FileText,
      category: 'examples',
      url: '/code-examples',
      featured: false
    }
  ];

  const contactMethods = [
    {
      id: 1,
      title: 'Technical Support',
      description: 'Get help with technical issues, API integration, and platform usage.',
      icon: HelpCircle,
      methods: [
        { type: 'Email', value: 'support@ziontechgroup.com', response: 'Within 4 hours' },
        { type: 'Phone', value: '+1 (555) 123-4567', response: '24/7 availability' },
        { type: 'Live Chat', value: 'Available on platform', response: 'Real-time support' }
      ],
      priority: 'high'
    },
    {
      id: 2,
      title: 'Sales & Billing',
      description: 'Questions about pricing, plans, billing, and account management.',
      icon: MessageCircle,
      methods: [
        { type: 'Email', value: 'sales@ziontechgroup.com', response: 'Within 2 hours' },
        { type: 'Phone', value: '+1 (555) 123-4568', response: 'Business hours' }
      ],
      priority: 'medium'
    },
    {
      id: 3,
      title: 'General Inquiries',
      description: 'General questions about our company, services, and partnerships.',
      icon: Info,
      methods: [
        { type: 'Email', value: 'info@ziontechgroup.com', response: 'Within 24 hours' },
        { type: 'Contact Form', value: '/contact', response: 'Within 24 hours' }
      ],
      priority: 'low'
    }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Support - Zion Tech Group"
        description="Get help and support for Zion Tech Group's AI platform. Access documentation, contact our team, and find answers to frequently asked questions."
        keywords="support, help, customer service, technical support, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/support"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get the support you need to succeed with our AI platform. Find answers, access resources, and connect with our team.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or contact information..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Help Quickly
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to reach our support team and get the assistance you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  method.priority === 'high' ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    method.priority === 'high' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-r from-green-500 to-blue-500'
                  }`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </div>
                
                <div className="space-y-3">
                  {method.methods.map((contactMethod, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm font-medium">{contactMethod.type}</span>
                        <span className="text-blue-400 text-xs">{contactMethod.response}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">{contactMethod.value}</span>
                        {contactMethod.type === 'Email' && (
                          <a
                            href={`mailto:${contactMethod.value}`}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                        {contactMethod.type === 'Phone' && (
                          <a
                            href={`tel:${contactMethod.value}`}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        )}
                        {contactMethod.type === 'Live Chat' && (
                          <button className="text-blue-400 hover:text-blue-300 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                          </button>
                        )}
                        {contactMethod.type === 'Contact Form' && (
                          <a
                            href={contactMethod.value}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access comprehensive documentation, tutorials, and community resources to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  resource.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className="text-center mb-6">
                  {resource.featured && (
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-4 inline-block">
                      Featured
                    </span>
                  )}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{resource.description}</p>
                </div>
                
                <a
                  href={resource.url}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our platform and services.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredFAQ.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {item.answer}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFAQ.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No FAQ items found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Support Commitment
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're committed to providing exceptional support to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: '4 hours', label: 'Average Response Time' },
              { icon: CheckCircle, value: '98%', label: 'Customer Satisfaction' },
              { icon: Users, value: '24/7', label: 'Support Availability' },
              { icon: Star, value: '4.9/5', label: 'Support Rating' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help with any questions or issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}