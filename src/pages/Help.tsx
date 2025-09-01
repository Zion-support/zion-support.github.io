import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, Phone, Mail, FileText, Video, BookOpen, Users, Zap, Shield, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: BookOpen },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'technical', name: 'Technical', icon: Zap },
    { id: 'billing', name: 'Billing', icon: Shield },
    { id: 'account', name: 'Account', icon: Users }
  ];

  const faqs = [
    {
      category: 'ai-services',
      question: 'How do I get started with AI services?',
      answer: 'Getting started with our AI services is simple. First, contact our team for a consultation to understand your needs. We\'ll then create a customized implementation plan and guide you through the setup process.'
    },
    {
      category: 'ai-services',
      question: 'What AI models do you support?',
      answer: 'We support a wide range of AI models including GPT-4, Claude, and custom models. We can also integrate with your existing AI infrastructure or create custom models tailored to your specific use case.'
    },
    {
      category: 'technical',
      question: 'How do I integrate your services with my existing systems?',
      answer: 'Our services are designed with easy integration in mind. We provide comprehensive APIs, SDKs, and documentation. Our technical team will work with you to ensure seamless integration with your existing infrastructure.'
    },
    {
      category: 'technical',
      question: 'What are the system requirements?',
      answer: 'System requirements vary by service. Most of our cloud-based services require only a modern web browser. For on-premise solutions, we\'ll provide detailed specifications based on your deployment needs.'
    },
    {
      category: 'billing',
      question: 'How is billing handled?',
      answer: 'We offer flexible billing options including monthly subscriptions, annual plans with discounts, and custom enterprise pricing. All billing is handled securely through our platform with detailed usage reports.'
    },
    {
      category: 'billing',
      question: 'Can I change my plan mid-cycle?',
      answer: 'Yes, you can upgrade your plan at any time. Downgrades take effect at the start of your next billing cycle. We prorate charges for upgrades to ensure you only pay for what you use.'
    },
    {
      category: 'account',
      question: 'How do I manage user access and permissions?',
      answer: 'Our platform includes comprehensive user management features. You can create user accounts, assign roles and permissions, and manage access levels through our admin dashboard.'
    },
    {
      category: 'account',
      question: 'Is there a limit on the number of users?',
      answer: 'User limits depend on your plan. Starter plans typically include 5 users, Professional plans include 25 users, and Enterprise plans have unlimited users with advanced management features.'
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600',
      action: 'Start Chat',
      href: '/contact'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      color: 'from-green-500 to-green-600',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      name: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      color: 'from-purple-500 to-purple-600',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      name: 'Video Call',
      description: 'Schedule a screen sharing session',
      icon: Video,
      color: 'from-red-500 to-red-600',
      action: 'Schedule Call',
      href: '/contact'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: FileText,
      href: '/docs',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable articles and tutorials',
      icon: BookOpen,
      href: '/knowledge-base',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      href: '/tutorials',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      href: '/community',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Help & Support
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8"
          >
            Get the help you need to make the most of Zion Tech Group's AI and technology services
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Help Fast</h2>
            <p className="text-xl text-zion-cyan-light">Choose your preferred way to get support</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${channel.color} text-white mb-4`}>
                  <channel.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.name}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <a
                  href={channel.href}
                  className="inline-block bg-zion-purple text-white px-6 py-2 rounded-lg hover:bg-zion-purple-dark transition-colors duration-300"
                >
                  {channel.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions</p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Helpful Resources</h2>
            <p className="text-xl text-zion-cyan-light">Explore our comprehensive support materials</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${resource.color} text-white mb-4`}>
                  <resource.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  to={resource.href}
                  className="inline-block bg-zion-purple text-white px-6 py-2 rounded-lg hover:bg-zion-purple-dark transition-colors duration-300"
                >
                  Explore
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-cyan-light mb-8">
              Our support team is here to help you succeed. Don't hesitate to reach out for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Support
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}