import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Shield, Zap } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Speak directly with our experts",
      action: "+1 (302) 464-0950",
      href: "tel:+13024640950",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a detailed message",
      action: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit our headquarters",
      action: "364 E Main St STE 1008, Middletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here when you need us",
      action: "Mon-Fri: 9AM-6PM EST",
      href: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const serviceCategories = [
    {
      icon: Zap,
      title: "AI Solutions",
      description: "Machine learning, automation, and intelligent systems"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat protection and compliance"
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description: "Modernize your business infrastructure"
    },
    {
      icon: MessageSquare,
      title: "Custom Development",
      description: "Tailored software solutions for your needs"
    }
  ];

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/support" }
  ];

  return (
    <>
      <SEO 
        title="Contact Zion Tech Group - Get in Touch for AI & Technology Solutions"
        description="Contact Zion Tech Group for expert AI solutions, cybersecurity, and digital transformation services. Get personalized consultation and support from our technology experts."
        keywords="contact Zion Tech Group, AI consultation, technology support, cybersecurity services, digital transformation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's Build Something
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Ready to transform your business with cutting-edge technology? 
                Our team of experts is here to help you navigate the future of AI, 
                cybersecurity, and digital innovation.
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter company name"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  {activeTab === 'consultation' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interest
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
                          <option value="cybersecurity">Cybersecurity</option>
                          <option value="digital-transformation">Digital Transformation</option>
                          <option value="custom-development">Custom Development</option>
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-500k">$100K - $500K</option>
                          <option value="over-500k">Over $500K</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Service Categories */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {serviceCategories.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{service.title}</h4>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
                  <p className="text-gray-300">
                    We typically respond to all inquiries within <span className="text-blue-400 font-semibold">24 hours</span> 
                    during business days. For urgent matters, please call us directly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Located in the heart of Delaware, our office is easily accessible 
                and ready to welcome you for in-person meetings and consultations.
              </p>
            </motion.div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-medium">364 E Main St STE 1008</p>
                  <p className="text-gray-300">Middletown, DE 19709</p>
                  <p className="text-gray-300">United States</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
