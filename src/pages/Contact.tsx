import React, { useState } from 'react';
import { SEO   } from '../components/SEO';
import { motion   } from 'framer-motion';
import { Link   } from 'react-router-dom';

const Contact: React.FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)   => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent)   => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // // // console.log('Form submitted:', formData);
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

  const services = [
    { id: 'ai-analytics', name: 'AI & Analytics Solutions', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum-computing', name: 'Quantum Computing Services', icon: <Cpu className="w-5 h-5" /> },
    { id: 'blockchain', name: 'Blockchain Solutions', icon: <Database className="w-5 h-5" /> },
    { id: 'iot-smart-cities', name: 'IoT & Smart Cities', icon: <Network className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity Services', icon: <Shield className="w-5 h-5" /> },
    { id: 'metaverse', name: 'Metaverse Solutions', icon: <Globe className="w-5 h-5" /> },
    { id: 'custom', name: 'Custom Solution', icon: <Rocket className="w-5 h-5" /> }
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
      name: 'Security & Compliance',
      services: [
        'Zero Trust Network Architecture',
        'AI Cybersecurity Suite',
        'AI Compliance Assistant'
      ]
    }
  ];

  const quickLinks = [
    { title: 'AI Services Showcase', url: '/ai-services-showcase', icon: '🚀' },
    { title: 'All Services', url: '/all-services', icon: '📋' },
    { title: 'Pricing', url: '/pricing', icon: '💰' },
    { title: 'Comprehensive Services', url: '/comprehensive-services', icon: '🔍' }
  ];

  return (
  {/* Empty JSX fragment */}
      <SEO
        title="Contact Us | Zion Tech Group - Get Expert Consultation"
        description="Contact Zion Tech Group for expert consultation on AI-powered micro SAAS, cloud infrastructure, data analytics, and security solutions. Get in touch today!"
        keywords="contact Zion Tech Group, AI services consultation, cloud services support, data analytics help, cybersecurity consultation, micro SAAS support"
        canonical="https://ziontechgroup.com/contact"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Ready to transform your business with AI-powered solutions? Our experts are here to help 
                you choose the right services and get you started on your digital transformation journey.
              </p>
              
              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  📱 Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  ✉️ Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the contact method that works best for you. We're here to help with  questions 
                about our services or to get you started with a consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index)   => (
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
                Fill out the form below and we'll get back to you within 24 hours with personalized 
                recommendations for your business needs.
              </p>
            </motion.div>

            {/* Form Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['general', 'consultation', 'support', 'partnership'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {activeTab === 'general' && 'General Inquiry'}
                  {activeTab === 'consultation' && 'Service Consultation'}
                  {activeTab === 'support' && 'Technical Support'}
                  {activeTab === 'partnership' && 'Partnership Inquiry'}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@comp.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="comp"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {(activeTab === 'consultation' || activeTab === 'support') && (
                    <div>
                      <label className="block text-white font-medium mb-2">Service of Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  )}

                  {activeTab === 'consultation' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Budget Range</label>
                        <select
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
                      <div>
                        <label className="block text-white font-medium mb-2">Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-12-months">6-12 months</option>
                          <option value="over-12-months">Over 12 months</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                    <p className="text-zion-slate-light text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-zion-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-zion-slate-light">+1 302 464 0950</p>
                    <p className="text-zion-slate-light text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-zion-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</p>
                    <p className="text-zion-slate-light text-sm">Serving clients worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-zion-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Response Time</h3>
                    <p className="text-zion-slate-light">Within 24 hours</p>
                    <p className="text-zion-slate-light text-sm">Emergency support available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )};

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
            <p className="text-slate-400">Cutting-edge AI and machine learning solutions that give you a competitive edge.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-slate-400">Bank-level security and compliance standards for your peace of mind.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
            <p className="text-slate-400">Quick implementation and deployment with minimal disruption to your business.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;