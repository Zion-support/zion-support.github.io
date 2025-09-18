<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-5863
>>>>>>> cursor/create-and-deploy-new-content-01e2
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-e4b8
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
<<<<<<< HEAD
=======
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> cursor/create-and-deploy-new-content-bec3
import { useState } from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
// Tooltip components temporarily removed due to missing module path
import z from 'zod';
import { ChatAssistant } from '@/components/ChatAssistant';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react'
import Link from 'next/link';


export default function Contact() {
  const { showToast: toast } = useToast();
=======
import React, { useState } from 'react';

import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
import React from 'react';
>>>>>>> cursor/create-and-deploy-new-content-1912

const Contact: React.FC = () => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-01e2
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-01e2
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
>>>>>>> cursor/create-and-deploy-new-content-bec3

const Contact: React.FC = () => {
>>>>>>> cursor/create-and-deploy-new-content-376e
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-e4b8
=======

const Contact: React.FC = () => {
>>>>>>> cursor/create-and-deploy-new-content-376e
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
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
    "Cloud & DevOps",
    "Cybersecurity",
    "Data Analytics",
    "Digital Transformation",
    "IT Infrastructure",
    "Micro SaaS Solutions",
    "Quantum Computing",
    "Blockchain Services",
    "IoT Solutions"
  ];

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-5863
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-079e
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-e4b8
=======
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> cursor/create-and-deploy-new-content-bec3
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI-powered technology solutions, consulting, and innovative business services."
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build the Future
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Together</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge AI and technology solutions? 
            Our team of experts is here to help you navigate the digital landscape.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactMethods.map((method, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-lg text-cyan-400 font-medium mb-2">{method.details}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-gray-300">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>

            {isSubmitted ? (
              <div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
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
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-4">🚨 Emergency Support</h3>
            <p className="text-gray-300 mb-6">
              Need immediate assistance? Our 24/7 emergency support team is here to help.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-e4b8
>>>>>>> cursor/create-and-deploy-new-content-bec3
<<<<<<< HEAD
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AI-powered automation</li>
              <li>• Quantum computing breakthroughs</li>
              <li>• Neural interface technology</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Innovation Hub</h3>
            <p className="text-gray-300 mb-4">
              Discover the latest developments in technology and innovation
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Research and development</li>
              <li>• Industry partnerships</li>
              <li>• Future technology trends</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Solutions</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive technology solutions for modern challenges
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Enterprise solutions</li>
              <li>• Custom development</li>
              <li>• Technology consulting</li>
            </ul>
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-e4b8
=======
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> cursor/create-and-deploy-new-content-bec3
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
              <div className="grid grid-cols-1 gap-6">
                {offices.map((office, index) => (
                  <Card
                    key={index}
                    className="bg-zion-blue-dark border border-zion-blue-light p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      {office.name}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                        <span className="text-zion-slate-light">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light">
                          {office.phone}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-zion-cyan hover:underline"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
=======
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
<<<<<<< HEAD
          <motion.div
=======
          <div
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> cursor/create-and-deploy-new-content-bec3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver 
              exceptional results for our clients.
            </p>
<<<<<<< HEAD
          </motion.div>
=======
          </div>
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> cursor/create-and-deploy-new-content-376e

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
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + 0.1 * index }}
                className="text-center"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-5863
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-079e
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-e4b8
=======
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> cursor/create-and-deploy-new-content-bec3
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
