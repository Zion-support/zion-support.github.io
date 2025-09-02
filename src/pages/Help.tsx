import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Video, MessageCircle, Phone, Mail, FileText, CheckCircle, Clock, Users, Zap } from 'lucide-react';

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-500',
      description: 'Quick start guides and basic setup instructions',
      resources: [
        { title: 'Welcome Guide', type: 'Guide', duration: '5 min read' },
        { title: 'Account Setup', type: 'Tutorial', duration: '10 min read' },
        { title: 'First Project', type: 'Video', duration: '15 min' }
      ]
    },
    {
      title: 'AI Services',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      description: 'AI development and ML workflows',
      resources: [
        { title: 'Model Training', type: 'Guide', duration: '20 min read' },
        { title: 'Data Preparation', type: 'Tutorial', duration: '12 min read' },
        { title: 'Model Deployment', type: 'Video', duration: '25 min' }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7 Available',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Help & Support Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers, get help, and access resources to make the most of our services.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles, guides, and tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Help Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides, tutorials, and documentation to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.resources.map((resource, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {resource.duration}
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                              {resource.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to get help from our expert support team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {option.availability}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is ready to help you succeed. Get in touch for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;