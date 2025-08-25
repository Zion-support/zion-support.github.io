import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: PhoneIcon,
      contact: '+1 (302) 464-0950',
      href: 'tel:+13024640950',
      available: '24/7'
    },
    {
      name: 'Email Support',
      description: 'Send us detailed inquiries and get comprehensive responses',
      icon: EnvelopeIcon,
      contact: 'info@ziontechgroup.com',
      href: 'mailto:info@ziontechgroup.com',
      available: 'Within 4 hours'
    },
    {
      name: 'Live Chat',
      description: 'Get instant help from our AI-powered support team',
      icon: ChatBubbleLeftRightIcon,
      contact: 'Available Now',
      href: '#',
      available: '24/7'
    }
  ];

  const officeLocations = [
    {
      name: 'Global Headquarters',
      address: '364 E Main St STE 1008',
      city: 'Middletown, DE 19709',
      country: 'United States',
      icon: MapPinIcon,
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    }
  ];

  const contactMethods = [
    {
      name: "Headquarters",
      address: "364 E Main St STE 1008, Middletown DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    }
  ];

  const services = [
    "AI & Autonomous Systems",
    "Quantum Technology",
    "Cybersecurity",
    "IT Infrastructure",
    "Micro SAAS Solutions",
    "Industry Solutions",
    "Custom Development",
    "Consulting Services"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Link 
            to="/" 
            className="btn-primary text-lg px-8 py-4"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to transform your business with cutting-edge AI and technology solutions? 
            Our team is here to help you succeed.
          </motion.p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <div 
                  className="text-cyan-400 font-medium mb-2"
                  dangerouslySetInnerHTML={{ __html: method.details }}
                />
                <p className="text-gray-400 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tell us about your project and we'll get back to you with a customized solution
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-75.7166667!3d39.4500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7c8c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2s364%20E%20Main%20St%2C%20Middletown%2C%20DE%2019709!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zion Office Location - Middletown, DE"
                ></iframe>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project, requirements, or questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't wait to transform your business with cutting-edge technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/get-started" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
