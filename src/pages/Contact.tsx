import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
      budget: '',
      timeline: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Available 24/7 for urgent inquiries',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us an email for detailed inquiries',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '364 E Main St STE 1008',
      description: 'Visit our office in Middletown, DE',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: '24/7 support available for enterprise clients',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Quantum Computing',
    'Micro SaaS Solutions',
    'Digital Transformation',
    'IT Consulting',
    'Other'
  ];

  const officeLocations = [
    {
      city: 'Wilmington, Delaware',
      country: 'United States',
      type: 'Headquarters',
      address: '1000 N Market Street, Suite 1800',
      zip: 'Wilmington, DE 19801',
      phone: '+1 302 464 0950',
      email: 'us@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM EST',
      features: ['AI Research Lab', 'Quantum Computing Center', 'Security Operations Center']
    },
    {
      city: 'London, UK',
      country: 'United Kingdom',
      type: 'European Hub',
      address: '1 Poultry, Bank',
      zip: 'London, EC2R 8EJ',
      phone: '+44 20 7946 0950',
      email: 'uk@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM GMT',
      features: ['AI Innovation Center', 'European Support Hub', 'Compliance Office']
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      type: 'Asia-Pacific Hub',
      address: '71 Robinson Road, #14-01',
      zip: 'Singapore 068895',
      phone: '+65 6789 0950',
      email: 'sg@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM SGT',
      features: ['APAC Support Center', 'AI Development Lab', 'Regional Training Center']
    }
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'Leading-edge artificial intelligence solutions that drive real business value'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security with SOC 2 Type II and ISO 27001 compliance'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'Pioneering quantum computing and emerging technology solutions'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers, scientists, and business consultants'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+1 302 464 0950', 'Available 24/7 for urgent support'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['kleber@ziontechgroup.com', 'Response within 2 hours'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM EST', 'Global remote support available'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const quickLinks = [
    { title: 'Services', url: '/services', icon: '🔧' },
    { title: 'About', url: '/about', icon: 'ℹ️' },
    { title: 'Blog', url: '/blog', icon: '📝' },
    { title: 'Pricing', url: '/pricing', icon: '💰' },
    { title: 'Comprehensive Services', url: '/comprehensive-services', icon: '🔍' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how Zion Tech Group can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us. We're here to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="text-lg font-semibold text-gray-700 mb-2">{info.details}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the contact method that works best for you. We're here to help with any questions 
                about our services or to get you started with a consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 mb-2 font-medium">{method.details}</p>
                  <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                  <a
                    href={method.href}
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    {method.action}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours. 
                Let's discuss how we can help transform your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="edge-computing">Edge Computing</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-white font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-3 months)</option>
                    <option value="short-term">Short-term (3-6 months)</option>
                    <option value="medium-term">Medium-term (6-12 months)</option>
                    <option value="long-term">Long-term (1+ years)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Additional Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕒</span>
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-gray-300">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
                <div className="grid grid-cols-1 gap-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={link.title}
                      to={link.url}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span className="text-gray-300 hover:text-white transition-colors duration-300">
                        {link.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Fast Response Guarantee</h3>
                <div className="space-y-3 text-gray-300">
                  <p>✅ <span className="text-white">Email:</span> Response within 24 hours</p>
                  <p>✅ <span className="text-white">Phone:</span> Immediate assistance during business hours</p>
                  <p>✅ <span className="text-white">Urgent:</span> Emergency support available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose Zion Tech Group?
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  📞 Call Now
                </a>
                <Link
                  to="/services"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  🚀 Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
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
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008</p>
              <p className="text-gray-300">Middletown DE 19709</p>
              <p className="text-gray-300 mt-4">United States</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">{office.type}</span>
                  </div>
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600 mb-4">{office.country}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{office.address}</p>
                      <p className="text-gray-600 text-sm">{office.zip}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{office.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{office.hours}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.features.map(feature => (
                      <span key={feature} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging Zion Tech Group's cutting-edge 
              technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;