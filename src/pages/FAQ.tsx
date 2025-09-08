// Removed unused: import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
          </motion.div></div>
              </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                /></div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select></div>
          </div></div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full mt-2">
                      {item.category}
                    </span></div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedItems.has(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedItems.has(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <div className="pl-10">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter.</p></div>
        )}
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is here to help. Get in touch with us for personalized 
            assistance and detailed information about our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <Link
              to="/schedule-demo"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link></div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-2" />
              <p className="text-white font-semibold">Email Support</p>
              <p className="text-gray-300 text-sm">support@ziontechgroup.com</p></div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-2" />
              <p className="text-white font-semibold">Phone Support</p>
              <p className="text-gray-300 text-sm">+1 (555) 123-4567</p></div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-green-400 mb-2" />
              <p className="text-white font-semibold">Live Chat</p>
              <p className="text-gray-300 text-sm">Available 24/7</p></div>
          </div></div>
      </div></div>
  );
}

export default FAQ;
