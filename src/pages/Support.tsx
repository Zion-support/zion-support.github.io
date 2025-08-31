import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  MessageCircle, 
  FileText, 
  Video, 
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  Zap
} from 'lucide-react';

const Support: React.FC = () => {
  const supportCategories = [
    {
      name: 'Technical Support',
      description: 'Get help with technical issues, troubleshooting, and system configuration.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        '24/7 technical assistance',
        'Remote troubleshooting',
        'System diagnostics',
        'Performance optimization'
      ]
    },
    {
      name: 'Product Support',
      description: 'Support for all our AI and technology solutions, including setup and maintenance.',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Product installation',
        'Configuration guidance',
        'Feature explanations',
        'Best practices'
      ]
    },
    {
      name: 'Account Support',
      description: 'Help with billing, account management, and subscription-related questions.',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Billing inquiries',
        'Account updates',
        'Subscription management',
        'Payment processing'
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Contact our sales team for a consultation, and we\'ll guide you through the onboarding process, including needs assessment, solution design, and implementation planning.'
    },
    {
      question: 'What are your support response times?',
      answer: 'We offer different support tiers: Standard support (24 hours), Priority support (8 hours), and Premium support (2 hours). Response times vary based on your support plan and issue severity.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We offer comprehensive training programs including initial setup training, user training, administrator training, and ongoing education sessions to ensure your team gets the most from our solutions.'
    },
    {
      question: 'How can I report a bug or request a feature?',
      answer: 'You can report bugs or request features through our support portal, by emailing support@ziontechgroup.com, or by contacting your dedicated support representative. We track all requests and provide regular updates.'
    },
    {
      question: 'What documentation and resources are available?',
      answer: 'We provide extensive documentation including user manuals, API documentation, best practices guides, video tutorials, and knowledge base articles. All resources are available through our customer portal.'
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Business Hours',
      responseTime: 'Under 5 min',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive responses',
      icon: Mail,
      availability: '24/7',
      responseTime: '2-4 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Support Portal',
      description: 'Access knowledge base and submit tickets',
      icon: FileText,
      availability: '24/7',
      responseTime: 'Self-service',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Headphones className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Customer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                {' '}Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're here to help you succeed. Get expert support, find answers to your questions, 
              and access resources to maximize the value of our solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Support Search */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search our knowledge base for answers..."
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the support category that best matches your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to reach our support team and get the help you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-3 h-3" />
                    <span>{channel.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions about our services and support.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>{item.question}</span>
                </h3>
                <p className="text-gray-300 ml-8">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Our Support Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to get help? Reach out to our dedicated support team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300 mb-4">Speak with our technical experts</p>
              <a
                href="tel:+13024640950"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                +1 (302) 464-0950
              </a>
              <p className="text-sm text-gray-400 mt-2">Mon-Fri: 8AM-6PM EST</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-300 mb-4">Send us a detailed message</p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                support@ziontechgroup.com
              </a>
              <p className="text-sm text-gray-400 mt-2">Response within 2-4 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Office Location</h3>
              <p className="text-gray-300 mb-4">Visit us in person</p>
              <p className="text-purple-400 font-medium">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
              <p className="text-sm text-gray-400 mt-2">By appointment only</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or issues. 
              Don't hesitate to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Contact Support
              </a>
              <a
                href="/blog"
                className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Browse Knowledge Base
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;