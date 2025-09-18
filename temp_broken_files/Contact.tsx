<<<<<<< HEAD:temp_broken_files/Contact.tsx
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
import React, { useState } from 'react';

import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {

const Contact: React.FC = () => {

const Contact: React.FC = () => {
=======
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c:src/pages/Contact.tsx
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

<<<<<<< HEAD:temp_broken_files/Contact.tsx
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

=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c:src/pages/Contact.tsx
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI solutions, technology consulting, and digital transformation services."
      />
      
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to transform your business with AI? Let's start the conversation.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@ziontechgroup.com</p>
                    <p className="text-gray-600">support@ziontechgroup.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Innovation Drive</p>
                    <p className="text-gray-600">Tech City, TC 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expert AI and technology solutions</li>
                  <li>• Proven track record of success</li>
                  <li>• 24/7 support and maintenance</li>
                  <li>• Custom solutions for your business</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
<<<<<<< HEAD:temp_broken_files/Contact.tsx
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
            </ul>cursor/fix-netlify-build-and-merge-to-main-a068
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
          </motion.div>
          </div>

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
          </div>
        </div>
      </section>
=======
            </div>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c:src/pages/Contact.tsx
    </div>
  );
};

export default Contact;