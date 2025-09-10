<<<<<<< HEAD
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI and technology solutions. Contact our experts today."
        keywords={["contact", "get in touch", "consultation", "Zion Tech Group"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Ready to transform your business? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 text-lg mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">info@ziontechgroup.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 rounded-full p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+1 (302) 464-0950</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-500 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
=======
import React from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for your technology needs and consultation."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to transform your business? Get in touch with our team of experts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Get Started</h3>
                <p className="text-slate-300 mb-4">
                  Schedule a consultation with our experts to discuss your project needs.
                </p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Schedule Call
                </button>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
                <p className="text-slate-300 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
