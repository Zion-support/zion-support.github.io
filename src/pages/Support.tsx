import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle, Phone, Clock, Users, Shield, Cloud, Brain, Zap, CheckCircle, ArrowRight, Search, FileText, Video, BookOpen, Star, MapPin, Globe, Calendar, Send, Ticket, Headphones, MessageSquare, VideoCall, Mailbox } from 'lucide-react';

export default function Support() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [contactMethod, setContactMethod] = useState('email');
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    {
      id: 'help',
      name: 'Help Center',
      icon: HelpCircle,
      description: 'Find answers to common questions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'contact',
      name: 'Contact Support',
      icon: MessageCircle,
      description: 'Get in touch with our team',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: BookOpen,
      description: 'Documentation and guides',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'status',
      name: 'System Status',
      icon: Zap,
      description: 'Check service status',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const supportResources = [
    {
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      icon: BookOpen,
      action: 'Browse Docs',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all services',
      icon: Video,
      action: 'Watch Videos',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share knowledge',
      icon: Users,
      action: 'Join Forum',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Training Programs',
      description: 'Professional training and certification courses',
      icon: Star,
      href: '/training',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We prioritize support based on urgency. Emergency issues get immediate attention, while general inquiries are typically resolved within 2-4 hours during business hours.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we provide 24/7 emergency support for critical issues. Our team is always available to handle urgent system problems and outages.'
    },
    {
      question: 'What types of training do you offer?',
      answer: 'We offer comprehensive training programs including technical training, user adoption programs, and ongoing support to ensure your team gets the most out of our solutions.'
    },
    {
      question: 'How do you handle data security and compliance?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures and maintain compliance with industry standards including SOC 2, GDPR, and HIPAA where applicable.'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-cyan-500/20 rounded-full">
              <HelpCircle className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get the help you need with our comprehensive support resources,
            expert assistance, and self-service options.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-500 text-slate-900 px-4 py-2 rounded-md hover:bg-cyan-400 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support Resources */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Support Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${resource.color} rounded-lg`}>
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    {resource.title}
                  </h3>
                  <p className="text-slate-300 text-sm text-center mb-4">
                    {resource.description}
                  </p>
                  <button className="w-full bg-cyan-500 text-slate-900 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 transition-colors">
                    {resource.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-slate-300">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Still Need Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <MessageCircle className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Live Chat
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Chat with our support team in real-time
                </p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-400 transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <Phone className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Phone Support
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Call us directly for immediate assistance
                </p>
                <a
                  href="tel:+13024640950"
                  className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-400 transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
              
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Mailbox className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Email Support
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Send us a detailed message
                </p>
                <a
                  href="/contact"
                  className="bg-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-400 transition-colors inline-block"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Business Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Clock className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Regular Support
                  </h3>
                </div>
                <p className="text-slate-300">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Saturday: 10:00 AM - 2:00 PM EST<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Emergency Support
                  </h3>
                </div>
                <p className="text-slate-300">
                  24/7 Emergency Support Available<br />
                  Critical Issues Only<br />
                  Immediate Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}