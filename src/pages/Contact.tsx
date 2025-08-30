import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { SEO } from '../components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
=======
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Shield, Zap } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  });

<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
=======
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: '',
        preferredContact: 'email'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
=======
    // Handle form submission
    console.log('Form submitted:', formData);
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
  };

  const contactInfo = [
    {
      icon: Phone,
<<<<<<< HEAD
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008\nMiddletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM EST\nSat: 10:00 AM - 2:00 PM EST'
    }
  ];

  const services = [
    'AI Services & Machine Learning',
    'Cloud & DevOps Solutions',
    'IT Infrastructure & Consulting',
    'Micro SaaS Development',
    'Digital Transformation',
    'Cybersecurity Services',
    'Quantum Computing Solutions',
    'Custom Software Development'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group. We're here to help transform your business with cutting-edge AI and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge AI and technology solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400">Something went wrong. Please try again.</span>
                  </motion.div>
                )}
=======
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
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c

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
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
=======
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
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
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
=======
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
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
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
=======
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
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
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
=======
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

<<<<<<< HEAD
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
=======
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
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
<<<<<<< HEAD
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your project or how we can help..."
=======
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
                    />
                  </div>

                  <button
                    type="submit"
<<<<<<< HEAD
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
=======
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're here to help you navigate the future of technology. 
                  Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.title === 'Address' ? '_blank' : undefined}
                          rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 whitespace-pre-line"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 whitespace-pre-line">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                <h3 className="text-xl font-semibold text-white mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-300 mb-4">
                  For urgent matters or technical support, our team is available during business hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center justify-center px-4 py-2 bg-cyan-400 text-white font-medium rounded-lg hover:bg-cyan-500 transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-flex items-center justify-center px-4 py-2 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-white transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>

          {/* Contact Information */}
          <motion.section
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Contact <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Information</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Get in touch with us through any of these channels
                </p>
              </motion.div>

<<<<<<< HEAD
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
=======
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
                viewport={{ once: true }}
              >
<<<<<<< HEAD
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="card-futuristic p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Company Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{contactInfo.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <a href={contactInfo.website} className="text-gray-300 hover:text-cyan-400 transition-colors">
                        {contactInfo.website}
                      </a>
                    </div>
=======
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
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
                  </div>
                </motion.div>

<<<<<<< HEAD
                <motion.div variants={itemVariants} className="card-futuristic p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{contactInfo.hours}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Response time: {contactInfo.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Expert team available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Certified professionals</span>
                    </div>
                  </div>
                </motion.div>
=======
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
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
              </motion.div>
            </div>
          </motion.section>

<<<<<<< HEAD
          {/* CTA Section */}
          <motion.section
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Start Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Project</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our innovative solutions can transform your business and drive growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="btn-futuristic inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="btn-neon inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Send Email
                  </a>
                </div>
              </div>
=======
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
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
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
<<<<<<< HEAD
        </div>
      </section>
=======
        </section>
      </div>
    </>
  );
};
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What services does Zion Tech Group offer?",
                answer: "We offer a comprehensive range of services including AI and machine learning solutions, cloud and DevOps services, IT infrastructure consulting, micro SaaS development, and digital transformation consulting."
              },
              {
                question: "How quickly can you start a project?",
                answer: "Project timelines vary based on complexity, but we typically begin within 1-2 weeks of project approval. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. Our micro SaaS solutions are specifically designed for small to medium businesses."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have experience across multiple industries including healthcare, finance, manufacturing, retail, and technology. Our AI solutions are adaptable to any industry."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can transform your business 
              and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Explore Our Services
              </a>
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
