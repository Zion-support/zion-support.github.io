import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Send, 
  CheckCircle,
  Building,
  Users,
  Zap,
  Brain,
  Shield,
  Cloud,
  Star,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github
} from 'lucide-react';

export default function Contact() {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
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
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950',
      description: 'Call us directly for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us a detailed message'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      link: 'https://www.google.com/maps/search/?api=1&query=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      link: null,
      description: 'Available during business hours'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/ziontechgroup',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/ziontechgroup',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ziontechgroup',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ziontechgroup',
      icon: Github,
      color: 'hover:text-gray-400'
    }
  ];

  const services = [
    'AI Business Intelligence',
    'Quantum Computing Solutions',
    'Cloud DevOps & Infrastructure',
    'Cybersecurity & Compliance',
    'Digital Transformation',
    'Micro SaaS Solutions',
    'Data Analytics',
    'Custom AI Development'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'To be discussed'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)',
    'To be discussed'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI, quantum computing, and technology solutions. Contact us for consultations, quotes, and support."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mr-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Contact Us
              </h1>
            </div>
            
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Ready to transform your business with cutting-edge AI and quantum computing solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-cyan-400 mb-2">{info.value}</p>
                )}
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Additional Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-400/30 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
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
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                        placeholder="Enter company name"
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
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-white font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
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
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
            
            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                <div className="space-y-4">
                  {[
                    'Pioneering AI and quantum computing solutions',
                    'Proven track record with enterprise clients',
                    '24/7 expert support and maintenance',
                    'Scalable and secure infrastructure',
                    'Continuous innovation and updates',
                    'Global reach with local expertise'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Brain, name: 'AI Solutions', color: 'from-cyan-400 to-blue-500' },
                    { icon: Zap, name: 'Quantum Computing', color: 'from-purple-400 to-pink-500' },
                    { icon: Cloud, name: 'Cloud & DevOps', color: 'from-green-400 to-emerald-500' },
                    { icon: Shield, name: 'Cybersecurity', color: 'from-orange-400 to-red-500' }
                  ].map((expertise) => (
                    <div key={expertise.name} className="flex items-center p-3 bg-slate-800/30 rounded-lg">
                      <div className={`w-10 h-10 bg-gradient-to-br ${expertise.color} rounded-lg flex items-center justify-center mr-3`}>
                        <expertise.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">{expertise.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:border-cyan-400/30`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait to transform your business. Contact us today to discuss your project 
              and discover how our AI and quantum computing solutions can drive your success.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
