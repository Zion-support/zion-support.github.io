import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  BookOpen, 
  Video, 
  FileText,
  HelpCircle,
  Search,
  Zap,
  Shield,
  Brain,
  Rocket
} from 'lucide-react';

export default function Support() {
  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our AI-powered support team',
      icon: MessageCircle,
      href: '/contact',
      color: 'from-blue-500 to-cyan-500',
      responseTime: '< 2 minutes'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      href: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500',
      responseTime: '< 5 minutes'
    },
    {
      name: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      href: 'mailto:kleber@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500',
      responseTime: '< 4 hours'
    },
    {
      name: 'Knowledge Base',
      description: 'Browse our extensive documentation and guides',
      icon: BookOpen,
      href: '/docs',
      color: 'from-orange-500 to-red-500',
      responseTime: 'Instant'
    }
  ];

  const supportCategories = [
    {
      name: 'Technical Issues',
      description: 'Resolve software, hardware, and integration problems',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Account & Billing',
      description: 'Manage your account, subscriptions, and payments',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Feature Requests',
      description: 'Suggest new features and improvements',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Training & Onboarding',
      description: 'Get help with product training and setup',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We pride ourselves on fast response times. Live chat responses are typically under 2 minutes, phone support under 5 minutes, and email support within 4 hours during business hours.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, our AI-powered support system is available 24/7 for basic inquiries. For complex technical issues, our human experts are available during business hours (9 AM - 6 PM EST).'
    },
    {
      question: 'Can I schedule a demo of your services?',
      answer: 'Absolutely! We offer personalized demos of all our services. You can schedule a demo through our website or contact us directly to arrange a convenient time.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support Center - Zion Tech Group"
        description="Get expert technical support, training, and assistance for all Zion Tech Group services and solutions."
        keywords="support, help, technical assistance, customer service, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              We're Here to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Help</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert support, technical assistance, and guidance for all your Zion Tech Group services. 
              Our team of specialists is ready to help you succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search our knowledge base..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Multiple Ways to Get Support
          </h2>
          <p className="text-lg text-gray-300">
            Choose the support channel that works best for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={channel.href}
                className="block p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${channel.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {channel.name}
                </h3>
                <p className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-200">
                  {channel.description}
                </p>
                <div className="flex items-center justify-center text-sm text-cyan-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {channel.responseTime}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Support Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Can We Help You With?
          </h2>
          <p className="text-lg text-gray-300">
            Browse our support categories to find the right assistance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-400">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Quick answers to common questions
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Our expert team is ready to assist you with any questions or technical issues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </a>
            <a
              href="/docs"
              className="inline-flex items-center px-6 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-all duration-200"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
