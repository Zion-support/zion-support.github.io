import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Phone, Mail, MapPin, Clock, Globe,
  Users, Building, Shield, Zap, CheckCircle, Send
} from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      description: 'Call us directly for immediate assistance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['kleber@ziontechgroup.com', 'support@ziontechgroup.com'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 302 464 0950'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: 'We\'re here when you need us',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const services = [
    'AI Business Intelligence',
    'Cloud Infrastructure',
    'Cybersecurity Solutions',
    'Digital Transformation',
    'Enterprise Solutions',
    'Custom Development'
  ];

  const departments = [
    {
      name: 'Sales & Business Development',
      email: 'sales@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      name: 'Technical Support',
      email: 'support@ziontechgroup.com',
      phone: '+1 302 464 0951'
    },
    {
      name: 'Partnerships',
      email: 'partnerships@ziontechgroup.com',
      phone: '+1 302 464 0952'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group. Contact our team for consultations, support, or to discuss your technology needs."
        keywords="contact Zion Tech Group, support, consultation, technology services, get in touch"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Let's Build the Future
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Together
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready to transform your business with cutting-edge AI and technology solutions? 
                Let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
                <button className="btn-futuristic-outline">
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
                    <p className="text-gray-300">We're Here to Help</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're here to help with all your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <div className="text-blue-400 font-medium mb-3 whitespace-pre-line">{method.value}</div>
                <p className="text-gray-400 leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Have a project in mind? Need technical consultation? Want to learn more about our services? Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Quick Response</p>
                    <p className="text-gray-300">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Secure Communication</p>
                    <p className="text-gray-300">Your information is protected</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Expert Team</p>
                    <p className="text-gray-300">Connect with our specialists</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select Service Interest</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                
                <textarea
                  placeholder="Tell us about your project or inquiry... *"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
                >
                  Schedule a Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Our Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

      {/* Departments Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Contact Specific Departments
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need to reach a specific team? Here are the direct contact details for our key departments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{dept.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href={`mailto:${dept.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href={`tel:${dept.phone}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                  <p className="text-lg text-gray-300 mb-8">
                    We're here to help you transform your business with cutting-edge AI and technology solutions. 
                    Let's discuss your needs and explore how we can work together.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-4">
                    Schedule a consultation to discuss your technology needs and explore how our solutions can drive your business forward.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Schedule Consultation
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
                Whether you're looking to implement AI solutions, modernize your cloud infrastructure, 
                or strengthen your cybersecurity posture, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  View Our Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  Learn More About Us
                </motion.button>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008</p>
              <p className="text-gray-300">Middletown DE 19709</p>
              <p className="text-gray-300 mt-4">United States</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your technology goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button className="btn-futuristic-outline">
                <MessageCircle className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
