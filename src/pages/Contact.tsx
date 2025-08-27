import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
=======
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
<<<<<<< HEAD
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Globe,
  Building,
  ArrowRight
=======
  Send, 
  MessageCircle, 
  Globe, 
  Users,
  Building,
  Zap,
  Shield,
  CheckCircle
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
<<<<<<< HEAD
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
=======
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
=======
  const handleSubmit = async (e) => {
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
<<<<<<< HEAD
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
          budget: '',
          timeline: ''
        });
      }, 3000);
    }, 2000);
=======
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
  };

  const contactInfo = [
    {
<<<<<<< HEAD
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      description: 'Call us anytime',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us a message',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our office',
      href: '#'
=======
      icon: <Mail className="w-6 h-6 text-zion-cyan" />,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'Get in touch via email for general inquiries'
    },
    {
      icon: <Phone className="w-6 h-6 text-zion-cyan" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our team'
    },
    {
      icon: <MapPin className="w-6 h-6 text-zion-cyan" />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule an in-person meeting'
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
    },
    {
      icon: <Clock className="w-6 h-6 text-zion-cyan" />,
      title: 'Business Hours',
<<<<<<< HEAD
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: 'We\'re here to help',
      href: '#'
=======
      details: 'Mon-Fri 9AM-6PM PST',
      description: 'We\'re here when you need us'
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
    }
  ];

  const services = [
    'AI & Machine Learning',
<<<<<<< HEAD
    'Cybersecurity',
    'Cloud Infrastructure',
    'Digital Transformation',
    'IT Consulting',
    'Custom Software Development',
    'Blockchain Solutions',
    'IoT & Edge Computing',
    'Quantum Computing',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+'
  ];

  const timelineOptions = [
    'Immediate (1-3 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (12+ months)',
    'Flexible'
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch | Zion Tech Group" 
        description="Ready to transform your business? Contact Zion Tech Group today. Our experts are here to discuss your AI, cybersecurity, and technology needs."
        canonical="/contact"
        url="https://ziontechgroup.com/contact"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
=======
    'Cybersecurity Solutions',
    'Cloud & DevOps',
    'IT Consulting',
    'Micro SAAS Development',
    'Digital Transformation',
    'Quantum Computing',
    'Blockchain Services'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Contact Zion Tech Group - Get In Touch"
        description="Contact Zion Tech Group for AI services, cybersecurity solutions, cloud consulting, and technology expertise. Get in touch with our team of experts."
        keywords="contact, Zion Tech Group, AI services, cybersecurity, cloud consulting, IT services"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Let's Build
=======
              Let's <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Connect
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
              </span>
              <br />
              <span className="text-white">Something Amazing</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
<<<<<<< HEAD
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help 
              you navigate the future of AI, cybersecurity, and digital innovation.
=======
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our team of experts and let's discuss how we can help.
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
            </motion.p>
          </section>

<<<<<<< HEAD
          {/* Contact Information */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  <a 
                    href={info.href}
                    className="text-zion-cyan hover:text-zion-blue transition-colors duration-300 block mb-2"
                  >
                    {info.value}
                  </a>
                  <p className="text-zion-slate-light text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-3xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-white font-medium mb-2">
                        First Name *
=======
      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Touch</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-zion-cyan font-medium mb-2">{info.details}</p>
                <p className="text-zion-slate-light text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Send us a <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Tell us about your project or inquiry. We'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-cyan/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {submitSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-zion-slate-light">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter your first name"
=======
                        className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your full name"
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                      />
                    </div>
                    
                    <div>
<<<<<<< HEAD
                      <label htmlFor="lastName" className="block text-white font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email *
=======
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
=======
                        className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
<<<<<<< HEAD
                      <label htmlFor="service" className="block text-white font-medium mb-2">
                        Service Interest *
=======
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">
                        Phone Number
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
<<<<<<< HEAD
                        required
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
=======
                        className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-white font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
<<<<<<< HEAD
                    <label htmlFor="timeline" className="block text-white font-medium mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
=======
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
<<<<<<< HEAD
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center space-x-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center space-x-3 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">Expert Team</h3>
                        <p className="text-zion-slate-light">Our specialists bring 15+ years of experience in AI, cybersecurity, and emerging technologies.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">Proven Results</h3>
                        <p className="text-zion-slate-light">We've successfully delivered 500+ projects for clients across 25+ countries.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">Innovation Focus</h3>
                        <p className="text-zion-slate-light">We stay ahead of the curve with cutting-edge solutions and emerging technologies.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">24/7 Support</h3>
                        <p className="text-zion-slate-light">Round-the-clock support to ensure your success and peace of mind.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-zion-slate-light mb-4">
                    Schedule a free consultation to discuss your project requirements and explore how our solutions can drive your business forward.
                  </p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
                    Schedule Consultation
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Global Presence */}
          <section className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Global Reach, Local Expertise
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                With offices and partners worldwide, we bring global technology expertise with local market understanding 
                to deliver solutions that work in your specific environment.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-zion-slate-light">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-zion-cyan" />
                  <span>25+ Countries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-zion-cyan" />
                  <span>Global Offices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-zion-cyan" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </>
=======
                      className="w-full px-4 py-3 bg-zion-slate-dark/70 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-zion-cyan" />,
                title: 'Innovation First',
                description: 'We stay ahead of the curve with cutting-edge technologies and forward-thinking solutions.'
              },
              {
                icon: <Shield className="w-12 h-12 text-zion-cyan" />,
                title: 'Proven Expertise',
                description: 'Our team brings years of experience and deep technical knowledge to every project.'
              },
              {
                icon: <Users className="w-12 h-12 text-zion-cyan" />,
                title: 'Client Partnership',
                description: 'We work closely with you to understand your needs and deliver solutions that drive results.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
  );
}
