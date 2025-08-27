import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Globe, 
  Users, 
  Award,
  Star,
  ArrowRight,
  Calendar,
  Video,
  FileText
} from 'lucide-react';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    responseTime: 'Within 2 hours during business hours'
  };
  const services = [
    'AI & Machine Learning Solutions',
    'Micro SAAS Development',
    'Quantum Computing Services',
    'Blockchain & Web3 Solutions',
    'Cybersecurity & Compliance',
    'Cloud Infrastructure & DevOps',
    'Digital Transformation',
    'Custom Software Development',
    'Data Analytics & BI',
    'IoT & Edge Computing'
  ];
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      action: `Call ${contactInfo.phone}`,
      href: `tel:${contactInfo.phone}`,
      color: 'from-zion-cyan to-zion-blue',
      bgColor: 'bg-zion-cyan/10'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      action: `Email ${contactInfo.email}`,
      href: `mailto:${contactInfo.email}`,
      color: 'from-zion-purple to-zion-pink',
      bgColor: 'bg-zion-purple/10'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant support',
      action: 'Start Chat',
      href: '#',
      color: 'from-zion-green to-zion-emerald',
      bgColor: 'bg-zion-green/10'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a virtual meeting',
      action: 'Book Meeting',
      href: '#',
      color: 'from-zion-orange to-zion-red',
      bgColor: 'bg-zion-orange/10'
    }
  ];
  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: Award },
    { value: '15+', label: 'Years Experience', icon: Star },
    { value: '99.9%', label: 'Client Satisfaction', icon: CheckCircle },
    { value: '24/7', label: 'Support Available', icon: Clock }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white">
      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
          {/* Contact Methods Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                className="glass rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{method.description}</p>
                <a
                  href={method.href}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${method.color} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3`}
                >
                  {method.action}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Contact Form & Info Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-zion-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Primary Contact Info */}
              <div className="glass rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-lg"
                      >
                        {contactInfo.phone}
                      </a>
                      <p className="text-gray-300 text-sm mt-1">Call us anytime during business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-lg"
                      >
                        {contactInfo.email}
                      </a>
                      <p className="text-gray-300 text-sm mt-1">We respond within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-green to-zion-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-300 text-lg">{contactInfo.address}</p>
                      <p className="text-gray-300 text-sm mt-1">Headquarters location</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-orange to-zion-red rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-gray-300 text-lg">{contactInfo.hours}</p>
                      <p className="text-gray-300 text-sm mt-1">Eastern Standard Time</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Stats */}
              <div className="glass rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Additional Contact Options */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              More Ways to Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📅</div>
              <h3 className="text-xl font-semibold text-white mb-3">Schedule a Consultation</h3>
              <p className="text-gray-300 mb-4">Book a free 30-minute consultation to discuss your project requirements and explore solutions.</p>
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                Book Now
              </button>
            </motion.div>
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
              <h3 className="text-xl font-semibold text-white mb-3">Request a Quote</h3>
              <p className="text-gray-300 mb-4">Get a detailed, customized quote for your specific project needs and requirements.</p>
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                Get Quote
              </button>
            </motion.div>
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
              <h3 className="text-xl font-semibold text-white mb-3">Join Our Community</h3>
              <p className="text-gray-300 mb-4">Connect with other tech professionals and stay updated on the latest industry trends.</p>
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                Join Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can transform your business and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="glass border border-zion-cyan/30 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Contact;
