import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
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

  const contactMethods = [
    {
      icon: '📱',
      title: 'Phone Support',
      details: '+1 302 464 0950',
      description: 'Available Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      icon: '✉️',
      title: 'Email Support',
      details: 'kleber@ziontechgroup.com',
      description: 'Response within 24 hours',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: '📍',
      title: 'Office Location',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit us for in-person consultation',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: '🌐',
      title: 'Website',
      details: 'https://ziontechgroup.com',
      description: 'Explore our services and solutions',
      action: 'Visit Site',
      href: 'https://ziontechgroup.com'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI-Powered Micro SAAS',
      services: [
        'AI Code Review & Security',
        'AI Customer Experience Analytics',
        'AI DevOps Automation Platform',
        'AI IoT Edge Computing Platform'
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      services: [
        'Cloud DevOps',
        'IT Infrastructure',
        'Digital Twin'
      ]
    },
    {
      name: 'Data & Analytics',
      services: [
        'Data Analytics',
        'AI Business Intelligence',
        'IoT Edge Computing'
      ]
    },
    {
      name: 'AI & Machine Learning',
      services: [
        'AI Compliance Copilot',
        'LLM Content Studio',
        'AI Data Governance',
        'AI Customer Success Platform'
      ]
    }
  ];

  const quickLinks = [
    { title: 'AI Services Showcase', url: '/ai-services-showcase', icon: '🤖' },
    { title: 'Cloud DevOps', url: '/services/cloud-devops', icon: '☁️' },
    { title: 'Data Analytics', url: '/services/data-analytics', icon: '📊' },
    { title: 'About Us', url: '/about', icon: 'ℹ️' },
    { title: 'Blog', url: '/blog', icon: '📝' },
    { title: 'Documentation', url: '/documentation', icon: '📚' }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI-powered solutions, cloud services, and digital transformation expertise. We're here to help you succeed."
        keywords="contact Zion Tech Group, AI solutions, cloud services, digital transformation, support"
        canonical="https://ziontechgroup.com/contact"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <span className="text-lg mr-2">💬</span>
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Let's Build Something
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Amazing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge AI solutions? Our team of experts is here to help you succeed. 
                Let's discuss your project and explore how we can drive innovation together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the method that works best for you. We're here to help 24/7.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-300 mb-2">{method.description}</p>
                    <p className="text-blue-400 font-medium mb-4">{method.details}</p>
                    <a
                      href={method.href}
                      className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                      {method.action}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Tell us about your project and we'll get back to you within 24 hours with a personalized solution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="service" className="block text-white font-medium mb-2">Service Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      >
                        <option value="">Select a service</option>
                        {serviceCategories.map(category => (
                          <optgroup key={category.name} label={category.name}>
                            {category.services.map(service => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-white font-medium mb-2">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
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

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-medium mb-2">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We're not just another tech company. We're your strategic partner in digital transformation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
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
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
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
                </motion.div>

                {/* Response Time */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Fast Response Guarantee</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>✅ <span className="text-white">Email:</span> Response within 24 hours</p>
                    <p>✅ <span className="text-white">Phone:</span> Immediate assistance during business hours</p>
                    <p>✅ <span className="text-white">Urgent:</span> Emergency support available</p>
                  </div>
                </motion.div>
              </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait to transform your business. Contact us today and let's discuss how our 
                AI-powered solutions can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  📞 Call Now
                </a>
                <Link
                  to="/ai-services-showcase"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  🚀 Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
