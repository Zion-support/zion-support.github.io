import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Globe,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';
import { contactInfo } from '../data/services.js';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  serviceInterest: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    serviceInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage({
        type: 'success',
        text: 'Message sent successfully! We\'ll get back to you within 24 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        serviceInterest: ''
      });

    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: contactInfo.mobile,
      href: `tel:${contactInfo.mobile}`,
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: contactInfo.address,
      href: '#',
      description: 'Main office location'
    },
    {
      icon: Globe,
      title: 'Website',
      value: contactInfo.website,
      href: contactInfo.website,
      description: 'Explore our services'
    }
  ];

  const serviceOptions = [
    'AI & Machine Learning',
    'Cybersecurity Solutions',
    'Cloud Infrastructure',
    'Quantum Computing',
    'Blockchain Technology',
    'Digital Transformation',
    'IT Consulting',
    'Custom Software Development',
    'Other'
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/Zion-Holdings', icon: Github }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 block">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how Zion Tech Group can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Service Interest and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="" className="bg-slate-800">Select a service</option>
                    {serviceOptions.map(service => (
                      <option key={service} value={service} className="bg-slate-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Brief subject line"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                    required
                  />
                </div>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitMessage.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                      : 'bg-red-500/20 border border-red-500/30 text-red-400'
                  }`}
                >
                  {submitMessage.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span>{submitMessage.text}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-gray-300 break-words">{method.value}</p>
                      <p className="text-sm text-gray-400">{method.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-cyan-400" />
                Business Hours
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
                <div className="pt-3 border-t border-white/20">
                  <p className="text-sm text-cyan-400">
                    🚨 Emergency support available 24/7 for enterprise clients
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Stay updated with our latest innovations and insights
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-300 mb-6">
              Our team is ready to help you with your technology needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span>View Services</span>
              </motion.a>
              <motion.a
                href="/pricing"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCircle className="w-4 h-4" />
                <span>Get Pricing</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;