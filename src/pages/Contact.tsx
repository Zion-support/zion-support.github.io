import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Globe, Users, CheckCircle } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Send us a message and we\'ll get back to you within 24 hours',
      contact: 'hello@ziontechgroup.com',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      contact: '+1 (302) 464-0950',
      icon: Phone,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Visit Us',
      description: 'Our headquarters in Wilmington, Delaware',
      contact: 'Wilmington, DE 19801',
      icon: MapPin,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Business Hours',
      description: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
      contact: 'Eastern Standard Time',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const supportChannels = [
    {
      title: 'Technical Support',
      description: 'Get help with our products and services',
      contact: 'support@ziontechgroup.com',
      responseTime: '2-4 hours',
      icon: MessageCircle
    },
    {
      title: 'Sales Inquiries',
      description: 'Learn about our solutions and pricing',
      contact: 'sales@ziontechgroup.com',
      responseTime: '1-2 hours',
      icon: Users
    },
    {
      title: 'Partnerships',
      description: 'Explore collaboration opportunities',
      contact: 'partnerships@ziontechgroup.com',
      responseTime: '24 hours',
      icon: Globe
    }
  ];

  const officeLocations = [
    {
      city: 'Wilmington',
      state: 'Delaware',
      country: 'United States',
      address: '1000 N Market St, Wilmington, DE 19801',
      phone: '+1 (302) 464-0950',
      email: 'wilmington@ziontechgroup.com',
      timezone: 'EST (UTC-5)'
    },
    {
      city: 'San Francisco',
      state: 'California',
      country: 'United States',
      address: '415 Mission St, San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@ziontechgroup.com',
      timezone: 'PST (UTC-8)'
    },
    {
      city: 'London',
      state: 'England',
      country: 'United Kingdom',
      address: '1 Poultry, London EC2R 8EJ',
      phone: '+44 20 7123 4567',
      email: 'london@ziontechgroup.com',
      timezone: 'GMT (UTC+0)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group. Contact our team for support, sales inquiries, partnerships, and more."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Our team is here to help you succeed.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Globe className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Users className="w-16 h-16 text-blue-500 animate-bounce" />
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              How to Reach Us
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{method.title}</h3>
                <p className="text-slate-300 mb-6">{method.description}</p>
                <div className="text-cyan-400 font-medium">{method.contact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Support & Inquiries
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get the help you need through our dedicated support channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{channel.title}</h3>
                <p className="text-slate-300 mb-6">{channel.description}</p>
                <div className="space-y-3">
                  <div className="text-cyan-400 font-medium">{channel.contact}</div>
                  <div className="text-slate-400 text-sm">
                    Response time: <span className="text-green-400">{channel.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Visit us at one of our global locations or reach out remotely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{office.city}</h3>
                  <p className="text-slate-400">{office.state}, {office.country}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Address</p>
                    <p className="text-white">{office.address}</p>
                  </div>
                  
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Phone</p>
                    <p className="text-cyan-400">{office.phone}</p>
                  </div>
                  
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Email</p>
                    <p className="text-cyan-400">{office.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Timezone</p>
                    <p className="text-white">{office.timezone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Have a specific question or project in mind? Fill out the form below 
                and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business 
              with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Our Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
