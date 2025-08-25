import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
<<<<<<< HEAD
  MessageSquare, 
  Building, 
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
  CheckCircle,
  Globe,
  Building,
  Users,
  Shield,
  Brain
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
<<<<<<< HEAD
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
=======
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
<<<<<<< HEAD
<<<<<<< HEAD
      details: ['+1 (302) 464-0950', '+1 (800) 123-4567'],
      description: 'Speak directly with our team',
      action: 'Call Now',
=======
      value: '+1 (302) 464-0950',
>>>>>>> origin/main
      href: 'tel:+13024640950',
      color: 'from-blue-500 to-cyan-500'
=======
      value: '+1 302 464 0950',
      description: 'Call us directly for immediate assistance',
      action: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    },
    {
      icon: Mail,
      title: 'Email',
<<<<<<< HEAD
      details: ['info@ziontechgroup.com', 'support@ziontechgroup.com'],
      description: 'Send us a detailed message',
      action: 'Send Email',
      href: 'mailto:info@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      details: ['Available 24/7', 'Instant response'],
      description: 'Chat with our support team',
      action: 'Start Chat',
      href: '#',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const officeLocations = [
    {
      city: 'New York',
      country: 'United States',
      address: '123 Tech Plaza, Suite 100',
      zip: '10001',
      phone: '+1 (212) 555-0123',
      email: 'nyc@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      city: 'San Francisco',
      country: 'United States',
      address: '456 Innovation Drive, Floor 3',
      zip: '94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Business District, Office 5',
      zip: 'EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT'
=======
      value: 'kleber@ziontechgroup.com',
      description: 'Send us an email for detailed inquiries',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our headquarters in Delaware',
      action: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: '24/7 emergency support available',
      action: '#',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const services = [
    'AI & Autonomous Systems',
    'Cybersecurity Services',
    'Quantum Technology',
    'Cloud & Infrastructure',
    'Digital Transformation',
    'Industry Solutions',
    'Custom Development',
    'Consulting Services'
  ];

  const officeLocations = [
    {
      city: 'Middletown, DE',
      address: '364 E Main St STE 1008, Middletown DE 19709',
      country: 'United States',
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      timezone: 'EST (UTC-5)',
      description: 'Our headquarters and primary development center'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/zion-tech-group',
      icon: '💼',
      description: 'Follow us for industry insights and updates'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: '🐦',
      description: 'Get real-time updates and announcements'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Zion-Holdings',
      icon: '💻',
      description: 'Explore our open-source projects and contributions'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@ziontechgroup',
      icon: '📺',
      description: 'Watch our latest demos and tutorials'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Quantum Technology',
    'Cybersecurity',
    'Cloud Migration',
    'Digital Transformation',
    'IT Infrastructure',
    'Micro-SaaS Development',
    'Business Intelligence',
    'Custom Software Development',
    'Consulting Services'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)',
    'Flexible'
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Global Service</span>
              </div>
            </div>
          </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge AI and technology solutions? 
            Let's start a conversation about your digital transformation journey.
          </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{method.title}</h3>
                  <div className="space-y-2 mb-4">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  <a
                    href={method.href}
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                  >
                    {method.action}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <span className="text-red-400">Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
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
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    {['email', 'phone'].map((method) => (
                      <label key={method} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleInputChange}
                          className="text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="text-gray-300 capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
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

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Our Offices</h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {office.city}, {office.country}
                        </h3>
                        <div className="space-y-2 text-gray-300">
                          <p className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{office.address}, {office.city}, {office.zip}</span>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${office.phone}`} className="hover:text-cyan-400 transition-colors">
                              {office.phone}
                            </a>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <a href={`mailto:${office.email}`} className="hover:text-cyan-400 transition-colors">
                              {office.email}
                            </a>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{office.hours}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Facebook, href: '#', label: 'Facebook' },
                    { icon: Instagram, href: '#', label: 'Instagram' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                {method.action.startsWith('tel:') || method.action.startsWith('mailto:') ? (
                  <a
                    href={method.action}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-cyan-400 font-medium">{method.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your email address"
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
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
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-cyan-400" />
                  Office Locations
                </h3>
                {officeLocations.map((location, index) => (
                  <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-white mb-2">{location.city}</h4>
                    <p className="text-gray-400 text-sm mb-2">{location.address}</p>
                    <p className="text-gray-400 text-sm mb-2">{location.country}</p>
                    <p className="text-gray-400 text-sm mb-2">Timezone: {location.timezone}</p>
                    <p className="text-gray-400 text-sm mb-2">{location.description}</p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-200 group"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <p className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {social.name}
                        </p>
                        <p className="text-xs text-gray-400">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
                  Why Contact Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-5 h-5 text-cyan-400 mt-1" />
                    <p className="text-gray-400 text-sm">Expert consultation on AI and emerging technologies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400 mt-1" />
                    <p className="text-gray-400 text-sm">Cybersecurity assessment and implementation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-cyan-400 mt-1" />
                    <p className="text-gray-400 text-sm">Custom solution development for your business</p>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a free consultation with our experts to discuss your project requirements 
            and discover how we can help you achieve your business goals.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our AI and technology solutions can help you achieve your business goals.
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
=======
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}