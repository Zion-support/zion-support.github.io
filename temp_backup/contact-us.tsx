import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, 
  Send, Building2, Globe, Users, Award
} from 'lucide-react';

export default function ContactUsPage() {
  const contactMethods = [
    {
      title: 'Phone',
      value: '+1 302 464 0950',
      description: 'Call us directly for immediate assistance',
      icon: Phone,
      color: 'from-green-400 to-emerald-500',
      action: 'tel:+13024640950'
    },
    {
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us a detailed message',
      icon: Mail,
      color: 'from-blue-400 to-cyan-500',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      title: 'Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709, United States',
      icon: MapPin,
      color: 'from-purple-400 to-pink-500',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
      icon: Clock,
      color: 'from-orange-400 to-red-500',
      action: null
    }
  ];

  const departments = [
    {
      name: 'Sales & Business Development',
      email: 'sales@ziontechgroup.com',
      phone: '+1 302 464 0950',
      description: 'For new business inquiries and partnerships'
    },
    {
      name: 'Technical Support',
      email: 'support@ziontechgroup.com',
      phone: '+1 302 464 0951',
      description: 'For technical issues and product support'
    },
    {
      name: 'Partnerships',
      email: 'partnerships@ziontechgroup.com',
      phone: '+1 302 464 0952',
      description: 'For strategic partnerships and collaborations'
    },
    {
      name: 'Media & Press',
      email: 'press@ziontechgroup.com',
      phone: '+1 302 464 0953',
      description: 'For media inquiries and press releases'
    }
  ];

  const globalOffices = [
    {
      city: 'Middletown, DE',
      country: 'United States',
      type: 'Headquarters',
      address: '364 E Main St STE 1008, 19709',
      phone: '+1 302 464 0950'
    },
    {
      city: 'San Francisco, CA',
      country: 'United States',
      type: 'R&D Center',
      address: '123 Innovation Drive, 94105',
      phone: '+1 415 555 0123'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      type: 'European Hub',
      address: '456 Tech Square, EC1A 1BB',
      phone: '+44 20 7946 0958'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      type: 'Asia-Pacific Hub',
      address: '789 Digital Boulevard, 018956',
      phone: '+65 6789 0123'
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for sales, support, partnerships, or any inquiries about our technology solutions." />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group. Contact us for sales, support, partnerships, or any inquiries about our technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/contact-us" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-4xl mx-auto mb-8"
            >
              Ready to transform your business with cutting-edge technology? 
              Our team is here to help you every step of the way.
            </motion.p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Contact Information
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Multiple ways to reach our team for any questions or inquiries.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{method.title}</h3>
                  <p className="text-lg font-medium text-cyan-400 mb-2">{method.value}</p>
                  <p className="text-white/70 mb-4">{method.description}</p>
                  {method.action && (
                    <a 
                      href={method.action} 
                      className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50"
                    >
                      {method.title === 'Phone' ? 'Call Now' : method.title === 'Email' ? 'Send Email' : 'Get Directions'}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Have a specific question or project in mind? Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </motion.div>
              
              <motion.form 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Careers</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Department Contacts
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Get in touch with the right team for your specific needs.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{dept.name}</h3>
                  <p className="text-white/70 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-white/80">
                      <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                      <a href={`mailto:${dept.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                      <a href={`tel:${dept.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Global Offices
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Visit us at any of our locations around the world.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {globalOffices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{office.city}</h3>
                      <p className="text-cyan-400 text-sm">{office.type}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-white/70">
                    <p className="text-sm">{office.address}</p>
                    <p className="text-cyan-400 font-medium">{office.country}</p>
                    <div className="flex items-center text-white/80">
                      <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                      <a href={`tel:${office.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Our team is ready to help you transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Explore Our Services
                </a>
                <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}