import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge AI and quantum technology? 
              Let's discuss how Zion Tech Group can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+13024640950" 
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                +1 (302) 464-0950
              </a>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Global Operations</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-300">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
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
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-autonomous-business-manager">AI Autonomous Business Manager</option>
                  <option value="quantum-technology">Quantum Technology</option>
                  <option value="advanced-cybersecurity">Advanced Cybersecurity</option>
                  <option value="it-infrastructure">IT Infrastructure</option>
                  <option value="space-tech">Space Tech</option>
                  <option value="custom-solution">Custom Solution</option>
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
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your project or how we can help you..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Other Ways to Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-gray-300 mb-4">
                Get instant answers to your questions through our live chat support.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Start Chat
              </button>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="bg-green-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
              <p className="text-gray-300 mb-4">
                Speak directly with our technology experts for immediate assistance.
              </p>
              <a 
                href="tel:+13024640950"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 inline-block"
              >
                Call Now
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-gray-300 mb-4">
                Send us detailed inquiries and receive comprehensive responses.
              </p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 inline-block"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">North America</h3>
              <p className="text-gray-300 mb-2">United States</p>
              <p className="text-gray-300 mb-2">Canada</p>
              <p className="text-gray-300">Mexico</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Europe</h3>
              <p className="text-gray-300 mb-2">United Kingdom</p>
              <p className="text-gray-300 mb-2">Germany</p>
              <p className="text-gray-300">Netherlands</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Asia Pacific</h3>
              <p className="text-gray-300 mb-2">Singapore</p>
              <p className="text-gray-300 mb-2">Japan</p>
              <p className="text-gray-300">Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to transform your business. Contact Zion Tech Group today and discover 
            how our cutting-edge solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Call Us Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
