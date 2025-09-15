<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  MessageCircle, 
  BookOpen, 
  Video, 
  Users, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Globe,
  FileText,
  Play,
  Star,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const supportCategories = [
  {
    title: 'Technical Support',
    icon: <Headphones className="w-8 h-8 text-cyan-400" />,
    description: 'Get help with our platforms and services',
    items: [
      'Platform troubleshooting',
      'API integration support',
      'Performance optimization',
      'Security configuration',
      'Deployment assistance'
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-400/30'
  },
  {
    title: 'Documentation',
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    description: 'Comprehensive guides and references',
    items: [
      'Getting started guides',
      'API documentation',
      'Best practices',
      'Troubleshooting guides',
      'Video tutorials'
    ],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-400/30'
  },
  {
    title: 'Training & Onboarding',
    icon: <Video className="w-8 h-8 text-emerald-400" />,
    description: 'Learn to use our platforms effectively',
    items: [
      'Live training sessions',
      'On-demand courses',
      'Certification programs',
      'Custom workshops',
      'Team onboarding'
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-400/30'
  },
  {
    title: 'Community Support',
    icon: <Users className="w-8 h-8 text-orange-400" />,
    description: 'Connect with other users and experts',
    items: [
      'User forums',
      'Knowledge sharing',
      'Peer support',
      'Expert Q&A',
      'Success stories'
    ],
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-400/30'
  }
];

const supportChannels = [
  {
    name: 'Live Chat',
    icon: <MessageCircle className="w-6 h-6" />,
    description: 'Instant support during business hours',
    availability: '24/7',
    responseTime: '< 5 minutes',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-400/30'
  },
  {
    name: 'Email Support',
    icon: <Mail className="w-6 h-6" />,
    description: 'Detailed technical assistance',
    availability: '24/7',
    responseTime: '< 4 hours',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-400/30'
  },
  {
    name: 'Phone Support',
    icon: <Phone className="w-6 h-6" />,
    description: 'Direct conversation with experts',
    availability: '9 AM - 6 PM EST',
    responseTime: 'Immediate',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-400/30'
  },
  {
    name: 'Ticket System',
    icon: <FileText className="w-6 h-6" />,
    description: 'Track and manage support requests',
    availability: '24/7',
    responseTime: '< 2 hours',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-400/30'
  }
];

const faqItems = [
  {
    question: 'How do I get started with Zion Tech Group services?',
    answer: 'Getting started is easy! Simply contact our team through any of our support channels, and we\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
  },
  {
    question: 'What kind of technical support do you provide?',
    answer: 'We provide comprehensive technical support including platform troubleshooting, API integration assistance, performance optimization, security configuration, and deployment support. Our team of experts is available 24/7.'
  },
  {
    question: 'Do you offer training for your platforms?',
    answer: 'Yes! We offer live training sessions, on-demand courses, certification programs, and custom workshops. We also provide team onboarding to ensure your team can use our platforms effectively.'
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'We pride ourselves on fast response times. Live chat responses are typically under 5 minutes, email support within 4 hours, and our ticket system responds within 2 hours. Phone support is immediate during business hours.'
  },
  {
    question: 'Is there a community where I can connect with other users?',
    answer: 'Absolutely! We have active user forums, knowledge sharing platforms, peer support groups, and expert Q&A sessions. Our community is a great place to learn from other users and share experiences.'
  }
];

export default function Support() {
  return (
    <Layout>
      <SEO
        title="Support | Zion Tech Group"
        description="Get comprehensive technical support, documentation, training, and community assistance for all Zion Tech Group platforms and services."
        keywords={["technical support", "customer service", "help documentation", "training", "community support", "Zion Tech Group"]}
      />

    <Layout 
      title="Support - Zion Tech Group"
      description="Get comprehensive support for all Zion Tech Group services. 24/7 assistance, documentation, and expert guidance to ensure your success."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
=======
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                We're Here to Help
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the support you need to succeed with our cutting-edge technology platforms. 
                Our expert team is available 24/7 to help you maximize the value of our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Start Live Chat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 inline mr-2" />
                  View Documentation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about our revolutionary technology solutions.
            </p>
          </motion.div>

        {/* Contact Support Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
=======
        {/* Support Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Comprehensive Support Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From technical assistance to training and community support, we provide everything you need to succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border ${category.borderColor} bg-gradient-to-br ${category.color} hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Multiple Ways to Get Help</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're available 24/7 to ensure you never face challenges alone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border ${channel.borderColor} ${channel.bgColor} hover:scale-105 transition-all duration-300`}
                >
                  <div className={`${channel.color} mb-4`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-green-400 font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-cyan-400 font-medium">{channel.responseTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
                </motion.div>
              ))}
            </div>
          </div>
        </section>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <span className="text-gray-300 text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Emergency Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">24/7 Emergency Line</div>
                      <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Emergency Email</div>
                      <a href={`mailto:${contactInfo.emergencyEmail}`} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.emergencyEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help Right Now?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Our support team is ready to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Call Support Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Contact Form
                </Link>
=======
        {/* Support Channels Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Multiple Support Channels</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the support method that works best for you. We're here to help through 
                multiple channels, ensuring you get the assistance you need when you need it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {channel.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{channel.title}</h3>
                      <p className="text-gray-400">{channel.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Availability</div>
                      <div className="text-sm font-medium">{channel.availability}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Response</div>
                      <div className="text-sm font-medium">{channel.responseTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Priority</div>
                      <div className="text-sm font-medium">{channel.priority}</div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Get {channel.title}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Emergency Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">24/7 Emergency Line</div>
                      <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Emergency Email</div>
                      <a href={`mailto:${contactInfo.emergencyEmail}`} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.emergencyEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
=======
            </div>
          </div>
        </section>

        {/* Help Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" id="documentation">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Help & Documentation</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive resources to help you succeed with our technology solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-3">
                      <div className="text-cyan-400">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      {category.popular && (
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Browse →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
=======
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400">
                Find quick answers to common questions about our support services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get the Support You Need?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert team is ready to help you succeed with our technology platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 inline mr-2" />
                  Browse Documentation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, MessageCircle, Phone, Mail, Clock, 
  BookOpen, Video, FileText, Search, Filter,
  CheckCircle, ArrowRight, Brain, Atom, Rocket, 
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      description: 'Support for AI consciousness and autonomous systems',
      articles: 25
    },
    {
      id: 'quantum-solutions',
      name: 'Quantum Solutions',
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      description: 'Help with quantum computing and cryptography',
      articles: 18
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      description: 'Support for self-managing business operations',
      articles: 32
    },
    {
      id: 'enterprise-it',
      name: 'Enterprise IT',
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      description: 'Infrastructure and security support',
      articles: 28
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      description: 'Payment, invoices, and account management',
      articles: 15
    },
    {
      id: 'technical',
      name: 'Technical Issues',
      icon: <Code className="w-8 h-8 text-orange-400" />,
      description: 'Bug reports and technical troubleshooting',
      articles: 42
    }
  ];

  const quickActions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      action: 'Start Chat',
      color: 'from-cyan-500 to-blue-600',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="w-8 h-8 text-green-400" />,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-600',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600',
      available: true
    },
    {
      title: 'Video Call',
      description: 'Screen share and visual assistance',
      icon: <Video className="w-8 h-8 text-orange-400" />,
      action: 'Schedule Call',
      color: 'from-orange-500 to-red-600',
      available: true
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with AI Consciousness Platform',
      category: 'AI Services',
      readTime: '5 min read',
      views: '2.4k',
      helpful: '98%'
    },
    {
      title: 'Setting Up Quantum-Secure Infrastructure',
      category: 'Quantum Solutions',
      readTime: '8 min read',
      views: '1.8k',
      helpful: '95%'
    },
    {
      title: 'Troubleshooting Autonomous System Errors',
      category: 'Autonomous Systems',
      readTime: '6 min read',
      views: '3.1k',
      helpful: '92%'
    },
    {
      title: 'API Integration Best Practices',
      category: 'Technical Issues',
      readTime: '7 min read',
      views: '4.2k',
      helpful: '96%'
    },
    {
      title: 'Understanding Your Invoice and Billing',
      category: 'Billing & Account',
      readTime: '3 min read',
      views: '1.5k',
      helpful: '89%'
    }
  ];

  const supportHours = [
    {
      day: 'Monday - Friday',
      hours: '9:00 AM - 8:00 PM EST',
      status: 'Available'
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 6:00 PM EST',
      status: 'Available'
    },
    {
      day: 'Sunday',
      hours: '12:00 PM - 6:00 PM EST',
      status: 'Limited'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? supportCategories 
    : supportCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get the support you need for our AI consciousness, quantum computing, 
              and autonomous systems. Our expert team is here to help 24/7.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <HelpCircle className="w-6 h-6" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Users className="w-6 h-6" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span>Quick Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/auto/autonomy-17186719616
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to connect with our expert support team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${channel.color} flex items-center justify-center`}>
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">Availability: {channel.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-400">Response: {channel.responseTime}</span>
                  </div>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Help
                </button>
              </motion.div>
=======
=======
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Help Fast
            </h2>
            <p className="text-xl text-gray-400">Choose your preferred support method</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{action.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{action.description}</p>
                  
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${action.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {action.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-400">Find solutions organized by topic and service area</p>
          </motion.div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                All Categories
              </button>
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-sm text-gray-400">{category.articles} articles</span>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Browse</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300">
                Multiple support channels to meet your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-cyan-400">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-green-400">{channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Priority:</span>
                      <span className="text-purple-400">{channel.priority}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help topics, questions, or solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                    <span className="text-sm text-gray-400">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
>>>>>>> origin/auto/autonomy-17186719616
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is AI Consciousness Evolution?",
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self-aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence."
              },
              {
                question: "How does Quantum Neural Ecosystem work?",
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power."
              },
              {
                question: "What makes Space Resource Intelligence unique?",
                answer: "Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization."
              },
              {
                question: "How secure is your Quantum Cybersecurity platform?",
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations."
              },
              {
                question: "Can I integrate your AI with my existing systems?",
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure."
              },
              {
                question: "What support do you offer for enterprise deployments?",
                answer: "We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
=======
      {/* FAQs */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
=======
=======
      {/* Popular Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and solutions.
            </p>
          </motion.div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70 mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
=======
        <section id="knowledge-base" className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions and solutions
              </p>
            </motion.div>

            {filteredFAQs.length === 0 ? (
              <div className="text-center py-20">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">No results found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Resources
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive documentation and learning materials
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                      {resource.category}
                    </span>
                    <a
                      href={resource.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Access
                    </a>
>>>>>>> origin/auto/autonomy-17186719616
                  </div>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <p className="text-white/70 text-lg">No FAQs found matching your search.</p>
              <p className="text-white/50 text-sm mt-2">Try adjusting your search terms or contact us directly.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Support Resources</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Access comprehensive documentation, guides, and learning materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{resource.category}</span>
                    <a
                      href={resource.downloadUrl}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <Download className="w-5 h-5" />
                    </a>
=======
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-400">Most viewed and helpful support content</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {article.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {article.helpful} helpful
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Read</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
>>>>>>> origin/auto/autonomy-17186719616
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Support Hours & Contact */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Hours & Availability
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our expert support team is available to help you succeed with our 
                revolutionary technology solutions.
              </p>
              
              <div className="space-y-4">
                {supportHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-white">{schedule.day}</h3>
                      <p className="text-gray-400">{schedule.hours}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      schedule.status === 'Available' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6">
                  For urgent technical issues or critical support needs, 
                  our team is available around the clock.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white">support@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Live Chat Available</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-cyan-500/20">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    Contact Support
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Our support team is ready to assist you with any questions or technical issues.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-white/70 mb-2">+1 302 464 0950</p>
                <p className="text-white/50 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-white/70 mb-2">support@ziontechgroup.com</p>
                <p className="text-white/50 text-sm">Response within 4 hours</p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Office Location</h3>
                <p className="text-white/70 mb-2">Wilmington, DE</p>
                <p className="text-white/50 text-sm">Available for in-person meetings</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Contact Support Team
              </Link>
              <Link href="/docs" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Browse Documentation
              </Link>
=======
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is dedicated to ensuring your success with our 
              revolutionary technology solutions. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get Support
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/resources"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Browse Resources
              </a>
>>>>>>> origin/auto/autonomy-17186719616
            </div>
          </motion.div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/auto/autonomy-17186719616
  );
};

export default Support;
<<<<<<< HEAD
=======
=======
          </div>
        </section>

        {/* Contact Support */}
        <section id="contact-support" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert support team is ready to assist you with any questions or technical issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Emergency Support</h3>
                <p className="text-gray-300 mb-4">
                  For critical issues affecting production systems, contact our emergency support line:
                </p>
                <div className="text-2xl font-bold text-cyan-400">+1 (302) 464-0950</div>
                <p className="text-sm text-gray-400 mt-2">Available 24/7 for enterprise clients</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SupportPage;
>>>>>>> origin/auto/autonomy-17186719616
