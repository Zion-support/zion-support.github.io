import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comp: '',
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
      comp: '',
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
      name: 'Cybersecurity',
      services: [
        'Cybersecurity',
        'AI Security',
        'Zero Trust Architecture'
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'AI Services Showcase',
      url: '/ai-services-showcase',
      icon: '🤖'
    },
    {
      title: 'Micro SAAS Solutions',
      url: '/micro-saas-solutions',
      icon: '💻'
    },
    {
      title: 'IT Services',
      url: '/it-services',
      icon: '🔧'
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'ℹ️'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI-powered solutions, micro SAAS services, and IT consulting. Contact us today!"
        keywords="contact, Zion Tech Group, AI services, micro SAAS, IT consulting"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's Build Something
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Amazing</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge AI solutions? 
                Get in touch with our team of experts and let's discuss your vision.
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                    <p className="text-cyan-400 font-medium mb-2">{method.details}</p>
                    <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                    <a
                      href={method.href}
                      className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                    >
                      {method.action}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="comp" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="comp"
                        name="comp"
                        value={formData.comp}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="over-12months">Over 12 months</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
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
            </motion.div>
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
