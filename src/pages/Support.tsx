import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Search,
  FileText,
  Video,
  BookOpen,
  Users,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Star,
  AlertCircle,
  Lightbulb,
  Settings,
  Download,
  Play,
  Calendar,
  Globe
} from 'lucide-react';

const Support: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const supportCategories = [
    { id: 'all', name: 'All Support', icon: HelpCircle, count: 6 },
    { id: 'technical', name: 'Technical', icon: Settings, count: 2 },
    { id: 'billing', name: 'Billing', icon: Shield, count: 2 },
    { id: 'general', name: 'General', icon: Users, count: 2 }
  ];

  const faqs = [
    {
      id: 'technical-1',
      category: 'technical',
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. We\'ll send you an email with a secure link to create a new password. If you don\'t receive the email, check your spam folder or contact our support team.',
      tags: ['password', 'login', 'security']
    },
    {
      id: 'technical-2',
      category: 'technical',
      question: 'What browsers are supported?',
      answer: 'We support all modern browsers including Chrome (latest 2 versions), Firefox (latest 2 versions), Safari (latest 2 versions), and Edge (latest 2 versions). For the best experience, we recommend using the latest version of Chrome or Firefox.',
      tags: ['browser', 'compatibility', 'requirements']
    },
    {
      id: 'billing-1',
      category: 'billing',
      question: 'How do I update my payment method?',
      answer: 'You can update your payment method by logging into your account and navigating to the Billing section. Click on "Payment Methods" and then "Add New Payment Method" to add a new card or bank account. You can also remove old payment methods from this section.',
      tags: ['billing', 'payment', 'account']
    },
    {
      id: 'billing-2',
      category: 'billing',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. When you cancel, you\'ll continue to have access to your services until the end of your current billing period. You can reactivate your subscription at any time.',
      tags: ['subscription', 'cancellation', 'billing']
    },
    {
      id: 'general-1',
      category: 'general',
      question: 'What are your support hours?',
      answer: 'Our technical support team is available 24/7 for critical issues. General support is available Monday through Friday, 9:00 AM to 6:00 PM EST. For urgent technical issues outside of business hours, please use our emergency support line.',
      tags: ['hours', 'availability', 'emergency']
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'How do I contact the sales team?',
      answer: 'You can reach our sales team by calling +1 (302) 464-0950 or emailing kleber@ziontechgroup.com. Our sales representatives are available Monday through Friday, 9:00 AM to 6:00 PM EST. We also offer scheduled consultations for complex projects.',
      tags: ['sales', 'consultation', 'contact']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev => 
      prev.includes(faqId) 
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7 for critical issues',
      response: '< 15 minutes',
      contact: '+1 (302) 464-0950',
      link: 'tel:+13024640950',
      priority: 'high'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send detailed inquiries and get written responses',
      availability: 'Mon-Fri 9AM-6PM EST',
      response: '< 4 hours',
      contact: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      priority: 'medium'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Real-time chat with support representatives',
      availability: 'Mon-Fri 9AM-6PM EST',
      response: '< 2 minutes',
      contact: 'Start Chat',
      link: '#',
      priority: 'medium'
    },
    {
      icon: HelpCircle,
      title: 'Helpdesk Portal',
      description: 'Submit and track support tickets',
      availability: '24/7',
      response: '< 2 hours',
      contact: 'Open Portal',
      link: '/helpdesk',
      priority: 'low'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      type: 'Guide'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and walkthroughs',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base',
      type: 'Article'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and share solutions',
      link: '/community',
      type: 'Community'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityBg = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20';
      case 'medium': return 'bg-yellow-500/20';
      case 'low': return 'bg-green-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Technical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {' '}Support
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're here to help you succeed. Get expert technical support, find answers to common questions, 
            and access comprehensive resources to maximize your experience with Zion Tech Group.
          </p>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for your needs. 
              We offer multiple ways to get the help you need quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {channel.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 text-center">
                  {channel.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white">{channel.response}</span>
                  </div>
                </div>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(channel.priority)} ${getPriorityBg(channel.priority)} mb-4`}>
                  {channel.priority === 'high' ? 'Critical Issues' : 
                   channel.priority === 'medium' ? 'General Support' : 'Self-Service'}
                </div>

                <a
                  href={channel.link}
                  className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    channel.priority === 'high'
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                      : channel.priority === 'medium'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {channel.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions. Can't find what you're looking for? 
              Use our search or contact our support team directly.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-3">
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:bg-slate-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-800 rounded-xl border border-slate-600 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-6 flex items-center justify-between hover:bg-slate-700 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white text-left pr-4">
                        {faq.question}
                      </h3>
                      {expandedFaqs.includes(faq.id) ? (
                        <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedFaqs.includes(faq.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400">
                  Try adjusting your search terms or browse all categories.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access comprehensive documentation, tutorials, and community resources 
              to help you get the most out of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {resource.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 text-center">
                  {resource.description}
                </p>

                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full">
                    {resource.type}
                  </span>
                </div>

                <a
                  href={resource.link}
                  className="block w-full bg-slate-700 text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-slate-600 transition-colors"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-2">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">24/7 for critical issues</p>
                <a 
                  href="tel:+13024640950"
                  className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Office Location</h3>
                <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm">Middletown DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Don't hesitate to reach out 
              for personalized assistance with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Support Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Technical Support Request"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Support Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;