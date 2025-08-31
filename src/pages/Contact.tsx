import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building2,
  Globe,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    department: 'general',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Business Development' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnerships', label: 'Partnerships & Alliances' },
    { value: 'careers', label: 'Careers & Employment' },
    { value: 'media', label: 'Media & Press' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'video', label: 'Video Call' }
  ];

  const officeLocations = [
    {
      name: 'Headquarters',
      address: '364 E Main St STE 1008, Middletown DE 19709',
      phone: '+1 (302) 464-0950',
      email: 'info@ziontechgroup.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      timezone: 'Eastern Time (ET)',
      primary: true
    },
    {
      name: 'West Coast Office',
      address: '123 Innovation Drive, San Francisco CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'westcoast@ziontechgroup.com',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM PST',
      timezone: 'Pacific Time (PT)',
      primary: false
    },
    {
      name: 'European Office',
      address: '456 Tech Boulevard, London EC2A 4BX, UK',
      phone: '+44 20 7123 4567',
      email: 'europe@ziontechgroup.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM GMT',
      timezone: 'Greenwich Mean Time (GMT)',
      primary: false
    }
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@ziontechgroup', color: 'hover:text-red-400' }
  ];

  const quickContactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      primary: '+1 (302) 464-0950',
      secondary: 'Available Mon-Fri, 9AM-6PM EST',
      action: 'tel:+13024640950',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      primary: 'info@ziontechgroup.com',
      secondary: 'We respond within 24 hours',
      action: 'mailto:info@ziontechgroup.com',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help online',
      primary: 'Start Chat',
      secondary: 'Available during business hours',
      action: '#',
      color: 'from-zion-cyan to-zion-purple'
    }
  ];

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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        department: 'general',
        preferredContact: 'email'
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge AI and technology solutions? 
              Let's start a conversation about your needs and how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {quickContactInfo.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-zion-cyan mb-3">{method.title}</h3>
                <p className="text-zion-slate-light mb-4">{method.description}</p>
                <div className="mb-4">
                  <div className="text-lg font-semibold text-white">{method.primary}</div>
                  <div className="text-sm text-zion-slate-light">{method.secondary}</div>
                </div>
                <a
                  href={method.action}
                  className="inline-flex items-center px-4 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg font-medium transition-all duration-300"
                >
                  {method.title === 'Live Chat' ? 'Start Chat' : 'Contact Now'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-zion-cyan mb-6">
                Send Us a Message
              </h2>
              <p className="text-zion-slate-light mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-zion-cyan mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-zion-cyan mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zion-cyan mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zion-cyan mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zion-cyan mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-zion-cyan mb-2">
                        Department *
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      >
                        {departments.map((dept) => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-zion-cyan mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      >
                        {contactMethods.map((method) => (
                          <option key={method.value} value={method.value}>
                            {method.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zion-cyan mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zion-cyan mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, questions, or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-zion-cyan hover:bg-zion-cyan/80 disabled:bg-zion-slate-light text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-zion-cyan mb-6">
                Our Offices
              </h2>
              <p className="text-zion-slate-light mb-8">
                Visit us at any of our global locations or reach out remotely. 
                We're here to serve you wherever you are.
              </p>

              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={office.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      office.primary
                        ? 'border-zion-cyan bg-zion-cyan/10'
                        : 'border-zion-purple/20 bg-zion-slate-darker hover:border-zion-cyan/40'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Building2 className={`w-6 h-6 ${office.primary ? 'text-zion-cyan' : 'text-zion-purple'}`} />
                        <h3 className={`text-lg font-semibold ${office.primary ? 'text-zion-cyan' : 'text-white'}`}>
                          {office.name}
                          {office.primary && (
                            <span className="ml-2 px-2 py-1 bg-zion-cyan text-white text-xs rounded-full">
                              Main Office
                            </span>
                          )}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-zion-slate-light mt-0.5" />
                        <span className="text-zion-slate-light">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-zion-slate-light" />
                        <a href={`tel:${office.phone}`} className="text-zion-cyan hover:text-zion-cyan/80">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-zion-slate-light" />
                        <a href={`mailto:${office.email}`} className="text-zion-cyan hover:text-zion-cyan/80">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-zion-slate-light" />
                        <div>
                          <div className="text-zion-slate-light">{office.hours}</div>
                          <div className="text-sm text-zion-slate-light">{office.timezone}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media and Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-zion-cyan mb-6">
                Connect With Us
              </h2>
              <p className="text-zion-slate-light mb-8">
                Follow us on social media for the latest updates, insights, and industry news.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-zion-slate-dark rounded-lg border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group"
                  >
                    <platform.icon className={`w-6 h-6 text-zion-slate-light group-hover:scale-110 transition-transform duration-300 ${platform.color}`} />
                    <span className="text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {platform.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-zion-cyan mb-6">
                About Zion Tech Group
              </h2>
              <p className="text-zion-slate-light mb-6">
                We're a leading technology company specializing in AI, cloud computing, and digital transformation solutions. 
                Our mission is to empower businesses with cutting-edge technology that drives innovation and growth.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">500+ Enterprise Clients Worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">ISO 27001 & SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">Global Presence in 25+ Countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">15+ Years of Technology Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our AI and technology solutions can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
