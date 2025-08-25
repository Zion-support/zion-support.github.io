import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  Building, 
  Globe, 
  Users, 
  Shield,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      description: 'Call us directly',
      href: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us an email',
      href: 'mailto:kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '364 E Main St STE 1008',
      description: 'Middletown DE 19709',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
      href: '#',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const services = [
    'AI & Autonomous Systems',
    'Quantum Technology',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'Business Operations',
    'Industry Solutions',
    'Custom Development',
    'Consulting',
    'Other'
  ];

  const officeLocations = [
    {
      city: 'Middletown, DE',
      country: 'United States',
      address: '364 E Main St STE 1008',
      zip: '19709',
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI and technology? Let's discuss how our solutions 
            can drive innovation and growth for your organization.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <a
                href={method.href}
                className="block text-cyan-400 font-medium mb-1 hover:text-cyan-300 transition-colors duration-200"
              >
                {method.value}
              </a>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400">Something went wrong. Please try again.</span>
              </div>
            )}

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
                    placeholder="Enter your first name"
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
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email"
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
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
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
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
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
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Building className="w-6 h-6 text-cyan-400" />
                <span>Our Office</span>
              </h3>
              {officeLocations.map((office, idx) => (
                <div key={idx} className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{office.city}, {office.country}</h4>
                    <p className="text-gray-300">{office.address}</p>
                    <p className="text-gray-300">{office.zip}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                <span>Why Choose Zion Tech Group?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Expert AI & Technology</h4>
                    <p className="text-gray-400 text-sm">Cutting-edge solutions powered by the latest AI and quantum technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Proven Track Record</h4>
                    <p className="text-gray-400 text-sm">500+ successful projects across 25+ industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">24/7 Support</h4>
                    <p className="text-gray-400 text-sm">Round-the-clock technical support and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Custom Solutions</h4>
                    <p className="text-gray-400 text-sm">Tailored solutions designed specifically for your business needs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-6">
                For urgent matters or immediate support, don't hesitate to call us directly.
              </p>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you need a quick consultation or want to discuss a complex project, 
              our team is here to help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}