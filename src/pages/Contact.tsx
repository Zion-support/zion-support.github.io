import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { GradientHeading } from "@/components/GradientHeading";

export default function Contact() {
  const { showToast: toast } = useToast();
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
<<<<<<< HEAD
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
            Get in touch with our experts and discover what's possible.
          </p>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-lg text-cyan-400 font-medium mb-2">{method.details}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-gray-300">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>

            {isSubmitted ? (
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you soon.
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
                  </div>
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
                  </div>
                </div>

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
                  </div>
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
                  </div>
                </div>

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
                </div>

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
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
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
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-4">🚨 Emergency Support</h3>
            <p className="text-gray-300 mb-6">
              Need immediate assistance? Our 24/7 emergency support team is here to help.
            </p>
        </div>
      </section>

          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          <divdiv
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver 
              exceptional results for our clients.
            </p>
          </divdiv>
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
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
            ))}
          </div>
    <>
      <SEO 
        title="Contact Zion - Get in Touch" 
        description="Contact Zion Tech Group for support, partnerships, or any questions about our AI and tech marketplace platform." 
        keywords="contact Zion, support, help, partnership, inquiry"
        url="https://ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get in touch with our team. We're here to help with any questions about our platform, 
              partnerships, or support you might need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-4">
                  Send us a message anytime
                </p>
                <p className="text-zion-cyan font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-4">
                  Available during business hours
                </p>
                <p className="text-zion-cyan font-semibold">+1 302 464 0950</p>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light mb-4">
                  Our office location
                </p>
                <p className="text-zion-slate-light text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-zion-slate-light mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-zion-slate-light mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-zion-slate-light mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-zion-slate-light mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Business Hours</h2>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Live Chat Support</h3>
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-zion-cyan mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-white font-semibold">Online Support</span>
                  </div>
                  <p className="text-zion-slate-light mb-4">
                    Need immediate assistance? Our live chat support is available during business hours.
                  </p>
                  <button className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light px-6 py-3 rounded-lg font-semibold transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
