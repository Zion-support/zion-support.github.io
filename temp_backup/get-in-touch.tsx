import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Phone, Mail, MapPin, Clock, 
  Send, Building2, Globe, Users, Award, Zap
} from 'lucide-react';

export default function GetInTouchPage() {
  const quickActions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-green-400 to-emerald-500',
      action: '#chat',
      status: 'Online Now'
    },
    {
      title: 'Call Us',
      description: 'Speak directly with our experts',
      icon: Phone,
      color: 'from-blue-400 to-cyan-500',
      action: 'tel:+13024640950',
      status: 'Available 24/7'
    },
    {
      title: 'Email Us',
      description: 'Send us a detailed message',
      icon: Mail,
      color: 'from-purple-400 to-pink-500',
      action: 'mailto:kleber@ziontechgroup.com',
      status: 'Response in 2 hours'
    },
    {
      title: 'Schedule Call',
      description: 'Book a consultation at your convenience',
      icon: Clock,
      color: 'from-orange-400 to-red-500',
      action: '#schedule',
      status: 'Free 30-min session'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    emergency: '24/7 Support Available'
  };

  const departments = [
    {
      name: 'Sales & Business Development',
      contact: 'sales@ziontechgroup.com',
      phone: '+1 302 464 0950',
      response: 'Within 2 hours',
      icon: Users
    },
    {
      name: 'Technical Support',
      contact: 'support@ziontechgroup.com',
      phone: '+1 302 464 0951',
      response: 'Within 1 hour',
      icon: Zap
    },
    {
      name: 'Partnerships',
      contact: 'partnerships@ziontechgroup.com',
      phone: '+1 302 464 0952',
      response: 'Within 4 hours',
      icon: Globe
    },
    {
      name: 'Media & Press',
      contact: 'press@ziontechgroup.com',
      phone: '+1 302 464 0953',
      response: 'Within 6 hours',
      icon: Award
    }
  ];

  return (
    <>
      <Head>
        <title>Get in Touch - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group through multiple channels. We're here to help with sales, support, partnerships, and any questions about our technology solutions." />
        <meta property="og:title" content="Get in Touch - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group through multiple channels. We're here to help with sales, support, partnerships, and any questions about our technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/get-in-touch" />
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
              Ready to transform your business? We're here to help you every step of the way. 
              Choose the best way to reach our team.
            </motion.p>
          </div>
        </section>

        {/* Quick Actions */}
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
                Quick Ways to Reach Us
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose the method that works best for you. We're here to help 24/7.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{action.title}</h3>
                  <p className="text-white/70 mb-3">{action.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400 mb-4">
                    {action.status}
                  </div>
                  <a 
                    href={action.action}
                    className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50"
                  >
                    {action.title === 'Live Chat' ? 'Start Chat' : 
                     action.title === 'Call Us' ? 'Call Now' : 
                     action.title === 'Email Us' ? 'Send Email' : 'Book Now'}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
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
                  Contact Information
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  All the ways you can reach our team and get the help you need.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                        <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                          {contactInfo.phone}
                        </a>
                        <p className="text-white/70 text-sm mt-1">{contactInfo.emergency}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                        <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                          {contactInfo.email}
                        </a>
                        <p className="text-white/70 text-sm mt-1">We respond within 2 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                        <p className="text-white/80">{contactInfo.address}</p>
                        <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm mt-1 inline-block">
                          Get Directions →
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                        <p className="text-white/80">{contactInfo.hours}</p>
                        <p className="text-green-400 text-sm mt-1">24/7 Emergency Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                Get in touch with the right team for your specific needs and get faster responses.
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
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
                      <p className="text-green-400 text-sm">Response: {dept.response}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-white/80">
                      <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                      <a href={`mailto:${dept.contact}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {dept.contact}
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Our team is ready to help you leverage cutting-edge technology to achieve unprecedented growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start a Conversation
                </a>
                <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}