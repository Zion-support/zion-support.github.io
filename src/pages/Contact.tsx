import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      contact: '+1 (302) 464-0950',
      action: 'Call Now'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters in Middletown, Delaware',
      contact: 'Middletown, DE 19709',
      action: 'Get Directions'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const supportCategories = [
    'Technical Support',
    'Sales Inquiries',
    'Partnership Opportunities',
    'General Questions',
    'Feature Requests',
    'Bug Reports'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Start a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Conversation
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Our team is here to help you succeed. Get in touch today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{method.title}</h3>
                <p className="text-zion-slate-light mb-6">{method.description}</p>
                <div className="text-zion-cyan font-medium mb-6">{method.contact}</div>
                <button className="px-6 py-3 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Fill out the form and we'll get back to you as soon as possible. 
                We're here to help with any questions or project requirements.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Support Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {supportCategories.map((category, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{category}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-3">Business Hours</h3>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-zion-slate-light text-sm">
                        <span>{schedule.day}</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="sales-inquiry">Sales Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general-question">General Question</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Located in the heart of Delaware's technology corridor
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-6">
                Middletown, Delaware 19709<br />
                United States
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                  Get Directions
                </button>
                <button className="px-6 py-3 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                  Schedule a Visit
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our technology solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;