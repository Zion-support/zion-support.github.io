
export default function Contact() {
  const { showToast: toast } = useToast();
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    { icon: <Phone className="h-6 w-6" />, title: "Phone", details: "+1 (302) 464-0950", description: "Available Mon-Fri, 9AM-6PM EST" },
    { icon: <Mail className="h-6 w-6" />, title: "Email", details: "kleber@ziontechgroup.com", description: "We'll respond within 24 hours" },
    { icon: <MapPin className="h-6 w-6" />, title: "Office", details: "364 E Main St STE 1008, Middletown DE 19709", description: "Visit us for a consultation" },
    { icon: <Clock className="h-6 w-6" />, title: "Business Hours", details: "Monday - Friday", description: "9:00 AM - 6:00 PM EST" }
  ];

  const services = [
    "AI & Machine Learning",
    "Quantum Computing",
    "Cybersecurity",
    "Neural Interfaces",
    "Conscious AI Systems",
    "Interdimensional Computing",
    "Digital Transformation",
    "Cloud Solutions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI-powered technology solutions, consulting, and innovative business services."
      />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Ready to transform your business with revolutionary technology? 
            Get in touch with our experts and discover what's possible.</p>
          </p>
      </section>
      {/* Contact Methods Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{method.icon}
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-lg text-cyan-400 font-medium mb-2">{method.details}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
      </section>
      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-gray-300">
                Tell us about your project and we'll get back to you within 24 hours</p>
              </p>
            {isSubmitted ? (
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you soon.</p>
                </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/30 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/30 transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/30 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/30 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                <div>
                  <label className="block text-white font-semibold mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:bg-white/30 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/30 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (</button>
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white">
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
            )}
      </section>
      {/* Emergency Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-4">🚨 Emergency Support</h3>
            <p className="text-gray-300 mb-6">
              Need immediate assistance? Our 24/7 emergency support team is here to help.</p>
            </p>
      </section>
          </motion.div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver 
              exceptional results for our clients.</p>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team consists of industry veterans with decades of combined experience in AI, cloud computing, and digital transformation."
              },
              {
                title: "Proven Results",
                description: "We've helped hundreds of companies achieve significant improvements in efficiency, cost savings, and competitive advantage."
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support ensures your business never stops, with rapid response times for critical issues."
              }
            ].map((feature, index) => (
                key={index}
                className="text-center"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
            ))}
  );
};

export default Contact;