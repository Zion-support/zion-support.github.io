import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  Globe,
  Users,
  Zap,
  Brain,
  Shield,
  MessageSquare,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: '',
          budget: '',
          timeline: '',
          preferredContact: 'email',
          subject: ''
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 302 464 0950',
      description: 'Available Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      value: 'Middletown, DE',
      description: '364 E Main St STE 1008, Middletown DE 19709'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: '9:00 AM - 6:00 PM EST',
      description: 'Monday through Friday'
    }
  ];

  const services = [
    { value: 'ai-automation', label: 'AI & Automation' },
    { value: 'cloud-infrastructure', label: 'Cloud & Infrastructure' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
    { value: 'quantum-computing', label: 'Quantum Computing' },
    { value: 'micro-saas', label: 'Micro SAAS Solutions' },
    { value: 'custom-development', label: 'Custom Development' },
    { value: 'consulting', label: 'IT Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'over-12-months', label: 'Over 12 months' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, IT infrastructure, and technology consulting. Get expert advice and start your digital transformation journey." />
        <meta name="keywords" content="contact, AI solutions, IT consulting, technology services, Zion Tech Group" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group for cutting-edge technology solutions and expert consulting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-transparent to-zion-purple/10" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Let's Build the{' '}
                <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                  Future
                </span>{' '}
                Together
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Ready to transform your business with cutting-edge AI and technology solutions? 
                Our team of experts is here to help you navigate the digital landscape and achieve your goals.
              </motion.p>

              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300"
                  >
                    <div className="text-zion-cyan mb-3">{info.icon}</div>
                    <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-1">{info.value}</p>
                    <p className="text-zion-slate-light/70 text-xs">{info.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-400">Something went wrong. Please try again.</span>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white placeholder-zion-slate-light/50"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white placeholder-zion-slate-light/50"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white placeholder-zion-slate-light/50"
                          placeholder="Enter your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white placeholder-zion-slate-light/50"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white placeholder-zion-slate-light/50"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-zion-slate-light mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((budget) => (
                            <option key={budget.value} value={budget.value}>
                              {budget.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-zion-slate-light mb-2">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((timeline) => (
                            <option key={timeline.value} value={timeline.value}>
                              {timeline.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-white placeholder-zion-slate-light/50 resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zion-slate-light mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-6">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="mr-2 text-zion-cyan focus:ring-zion-cyan"
                          />
                          <span className="text-zion-slate-light">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="mr-2 text-zion-cyan focus:ring-zion-cyan"
                          />
                          <span className="text-zion-slate-light">Phone</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-4 px-8 rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </button>
                  </form>
                </motion.div>

                {/* Additional Information */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-8"
                >
                  {/* Why Choose Us */}
                  <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Brain className="w-4 h-4 text-zion-cyan" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">AI-First Approach</h4>
                          <p className="text-zion-slate-light text-sm">Cutting-edge AI solutions that drive real business value</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Shield className="w-4 h-4 text-zion-purple" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Enterprise Security</h4>
                          <p className="text-zion-slate-light text-sm">Bank-level security and compliance standards</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-zion-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Users className="w-4 h-4 text-zion-blue" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                          <p className="text-zion-slate-light text-sm">Industry veterans with decades of experience</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Zap className="w-4 h-4 text-zion-cyan" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Rapid Delivery</h4>
                          <p className="text-zion-slate-light text-sm">Quick turnaround times without compromising quality</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
                    <div className="space-y-4">
                      <Link
                        to="/services"
                        className="block w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-zion-purple/90 hover:to-zion-purple-dark/90 transition-all duration-300 transform hover:scale-105"
                      >
                        Explore Our Services
                      </Link>
                      <Link
                        to="/pricing"
                        className="block w-full bg-zion-slate-darker hover:bg-zion-slate-dark text-white font-semibold py-3 px-6 rounded-lg text-center border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300"
                      >
                        View Pricing
                      </Link>
                      <Link
                        to="/about"
                        className="block w-full bg-zion-slate-darker hover:bg-zion-slate-dark text-white font-semibold py-3 px-6 rounded-lg text-center border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300"
                      >
                        Learn About Us
                      </Link>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Visit Our Office</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-zion-cyan mt-1" />
                        <div>
                          <p className="text-white font-semibold">Zion Tech Group</p>
                          <p className="text-zion-slate-light text-sm">364 E Main St STE 1008</p>
                          <p className="text-zion-slate-light text-sm">Middletown, DE 19709</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-zion-cyan mt-1" />
                        <div>
                          <p className="text-white font-semibold">Business Hours</p>
                          <p className="text-zion-slate-light text-sm">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                          <p className="text-zion-slate-light text-sm">Weekend: By appointment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Digital Transformation?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Let's discuss how our AI-powered solutions can revolutionize your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-4 px-8 rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  Explore Services
                </Link>
                <Link
                  to="/schedule-demo"
                  className="bg-zion-slate-darker hover:bg-zion-slate-dark text-white font-semibold py-4 px-8 rounded-xl border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
