import React, { useState } from 'react.ts';
import { motion             } from 'framer-motion.ts';
import { Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Users,
  Building,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram
            } from 'lucide-react.ts';

export function ContactPage(...args: any[]): any {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: anyanyanyanyanyanyanyanyanyanyanyanyReact.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)             => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: anyanyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)             => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      title: 'Phone',
      value: '+1 302 464 0950',
      icon: Phone,
      description: 'Call us anytime',
      color: 'from-blue-500 to-cyan-600',
      link: 'tel:+13024640950'
    },
    {
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      icon: Mail,
      description: 'Send us a message',
      color: 'from-purple-500 to-pink-600',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      title: 'Office',
      value: '364 E Main St STE 1008 Middletown DE 19709',
      icon: MapPin,
      description: 'Visit our headquarters',
      color: 'from-green-500 to-teal-600',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      title: 'Hours',
      value: '24/7 Support',
      icon: Clock,
      description: 'Always here for you',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const services = [
    'AI Solutions',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud & DevOps',
    'Digital Transformation',
    'Data Analytics',
    'IoT & Edge Computing',
    'Space Technology',
    'AI Healthcare Platform',
    'AI Sales Copilot',
    'AI Marketing Automation',
    'AI Project Management',
    'Quantum AI Hybrid Platform',
    'AI Cybersecurity Platform',
    'Quantum AI Trading Platform',
    'Space Technology Solutions',
    'Digital Twin Solutions',
    'Green IT Solutions',
    'Zero Trust Network Access',
    'AI Creative Studio',
    'AI Health Monitoring',
    'AI Financial Advisor',
    'AI Education Platform',
    'AI Legal Assistant',
    'AI Real Estate Platform',
    'AI Supply Chain Optimizer',
    'AI Energy Management',
    'AI Manufacturing Platform',
    'AI Customer Intelligence',
    'AI Data Governance',
    'Custom Development',
    'Consulting'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-12 border border-gray-700"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h2>
            <p className="text-gray-400 mb-8">
              Thank you for reaching out to Zion Tech Group. We've received your message and will get back to you within 24 hours.
            </p>
            <div className="text-sm text-gray-500">
              You'll receive a confirmation email shortly.
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Let's discuss how 
              our solutions can help you achieve your goals.
            </p>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index)             => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              {method.link ? (
                <a 
                  href={method.link} 
                  className="text-cyan-400 font-medium mb-2 hover:text-cyan-300 transition-colors cursor-pointer block"
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-cyan-400 font-medium mb-2">{method.value}</p>
              )}
              <p className="text-gray-400 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your Comp"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

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
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Company Info */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">About Zion Tech Group</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We are a leading technology company specializing in AI, quantum computing, and advanced 
                technology solutions. Our team of experts is dedicated to helping businesses transform 
                and thrive in the digital age.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Building className="w-5 h-5 text-cyan-400" />
                  <span>Founded in 2020</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>100+ Team Members</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>25+ Countries Served</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                  >
                  <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white">Call Now</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white">Send Email</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="/request-quote"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group"
                >
                  <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Request Quote</span>
                  <ArrowRight className="w-4 h-4 text-white ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}