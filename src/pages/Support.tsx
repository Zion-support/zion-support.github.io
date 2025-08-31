import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Phone, Mail, Clock, MapPin, 
  Users, BookOpen, Video, FileText, ArrowRight,
  CheckCircle, Star, Shield, Zap, Brain, Cloud
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Support = () => {
  const [selectedSupportType, setSelectedSupportType] = useState('general');

  const supportTypes = [
    {
      id: 'general',
      title: 'General Support',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      description: 'General questions about our services and platform',
      responseTime: '24 hours',
      available: true
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      description: 'Technical issues and implementation help',
      responseTime: '4-8 hours',
      available: true
    },
    {
      id: 'billing',
      title: 'Billing Support',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      description: 'Billing questions and account management',
      responseTime: '24 hours',
      available: true
    },
    {
      id: 'enterprise',
      title: 'Enterprise Support',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      description: 'Dedicated support for enterprise customers',
      responseTime: '1-2 hours',
      available: true
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-blue-500 to-cyan-500',
      href: '/chat'
    },
    {
      title: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-green-500 to-emerald-500',
      href: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      icon: Mail,
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: '24 hours',
      color: 'from-purple-500 to-pink-500',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      title: 'Documentation',
      icon: BookOpen,
      description: 'Comprehensive guides and references',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-orange-500 to-red-500',
      href: '/documentation'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST', available: true },
    { day: 'Sunday', hours: 'Emergency Support Only', available: false }
  ];

  const faqs = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'Response times vary by support type. General inquiries are answered within 24 hours, technical issues within 4-8 hours, and enterprise support within 1-2 hours.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 support through our live chat and email channels. Phone support is available during business hours with emergency support available for enterprise customers.'
    },
    {
      question: 'What information should I include in my support request?',
      answer: 'Please include your account details, a clear description of the issue, any error messages, and steps to reproduce the problem. This helps us provide faster, more accurate assistance.'
    },
    {
      question: 'How do I escalate a support ticket?',
      answer: 'If you need to escalate a ticket, you can reply to the support email thread, use our live chat to speak with a supervisor, or call our support line during business hours.'
    }
  ];

  const resources = [
    {
      title: 'Knowledge Base',
      icon: BookOpen,
      description: 'Searchable database of articles and guides',
      href: '/help',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      description: 'Step-by-step video guides',
      href: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API Documentation',
      icon: FileText,
      description: 'Technical API references and examples',
      href: '/api-docs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Community Forum',
      icon: Users,
      description: 'Connect with other developers',
      href: '/community',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Support - Zion Tech Group"
        description="Get expert support for Zion Tech Group's AI, cloud, and technology services. Multiple support channels available including live chat, phone, and email."
        keywords="support, customer service, technical support, help desk, contact support"
        canonicalUrl="https://ziontechgroup.com/support"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Expert
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Support
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Our dedicated support team is here to help you succeed with Zion Tech Group's 
            innovative solutions. Multiple support channels available 24/7.
          </motion.p>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Types
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the right support option for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                  selectedSupportType === type.id
                    ? 'border-blue-400 bg-blue-500/10'
                    : 'border-gray-700 hover:border-blue-400'
                }`}
                onClick={() => setSelectedSupportType(type.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{type.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Response:</span>
                  <span className="text-blue-400 font-semibold">{type.responseTime}</span>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-400 text-sm">Status:</span>
                  <span className={`flex items-center text-sm ${
                    type.available ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {type.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Channels
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get the help you need, when you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-blue-400">{channel.responseTime}</span>
                  </div>
                </div>
                
                <a
                  href={channel.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Get Support
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Hours
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to help when you need us most.
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
            {supportHours.map((schedule, index) => (
              <div
                key={schedule.day}
                className={`flex items-center justify-between p-6 ${
                  index !== supportHours.length - 1 ? 'border-b border-gray-700' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <Clock className={`w-6 h-6 ${
                    schedule.available ? 'text-green-400' : 'text-orange-400'
                  }`} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{schedule.day}</h3>
                    <p className="text-gray-300">{schedule.hours}</p>
                  </div>
                </div>
                
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  schedule.available
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {schedule.available ? 'Available' : 'Limited'}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
            <h3 className="text-xl font-bold text-white mb-3">Emergency Support</h3>
            <p className="text-gray-300 mb-4">
              For critical issues outside business hours, we provide emergency support for enterprise customers.
              Contact us immediately for urgent matters.
            </p>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              Call Emergency Line
              <Phone className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to common support questions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers quickly with our comprehensive resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                
                <a
                  href={resource.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you succeed with Zion Tech Group's 
              innovative solutions. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/help"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Help Center
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;