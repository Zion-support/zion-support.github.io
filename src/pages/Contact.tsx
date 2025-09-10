import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: PhoneIcon,
      contact: '+1 (302) 464-0950',
      href: 'tel:+13024640950',
      available: '24/7'
    },
    {
      name: 'Email Support',
      description: 'Send us detailed inquiries and get comprehensive responses',
      icon: EnvelopeIcon,
      contact: 'info@ziontechgroup.com',
      href: 'mailto:info@ziontechgroup.com',
      available: 'Within 4 hours'
    },
    {
      name: 'Live Chat',
      description: 'Get instant help from our AI-powered support team',
      icon: ChatBubbleLeftRightIcon,
      contact: 'Available Now',
      href: '#',
      available: '24/7'
    }
  ];

  const officeLocations = [
    {
      name: 'Global Headquarters',
      address: '364 E Main St STE 1008',
      city: 'Middletown, DE 19709',
      country: 'United States',
      icon: MapPinIcon,
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle success (e.g., show success message, reset form)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.name}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <div className="text-purple-400 font-medium mb-2">{method.contact}</div>
                <div className="text-sm text-gray-500 mb-4">Available: {method.available}</div>
                <a
                  href={method.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  {method.name === 'Phone Support' ? 'Call Now' : 
                   method.name === 'Email Support' ? 'Send Email' : 'Start Chat'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Offices
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <location.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{location.name}</h3>
                    <p className="text-gray-400 text-sm">{location.country}</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Schedule a free consultation with our experts to discuss your project requirements 
              and discover how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;