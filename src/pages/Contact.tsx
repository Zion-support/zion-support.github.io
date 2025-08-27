import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Globe, 
  Users, 
  Award,
  Star,
  ArrowRight,
  Calendar,
  Video,
  FileText
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Footer } from '@/components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    responseTime: 'Within 2 hours during business hours'
  };

  const services = [
    'AI & Machine Learning Solutions',
    'Micro SAAS Development',
    'Quantum Computing Services',
    'Blockchain & Web3 Solutions',
    'Cybersecurity & Compliance',
    'Cloud Infrastructure & DevOps',
    'Digital Transformation',
    'Custom Software Development',
    'Data Analytics & BI',
    'IoT & Edge Computing'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      action: `Call ${contactInfo.phone}`,
      href: `tel:${contactInfo.phone}`,
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-400/10'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      action: `Email ${contactInfo.email}`,
      href: `mailto:${contactInfo.email}`,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant support',
      action: 'Start Chat',
      href: '#',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-400/10'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support Available' },
    { value: '99.9%', label: 'Uptime Guarantee' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI solutions, cybersecurity, and digital transformation services. Contact us today for a consultation."
        canonical="/contact"
      />
      <div className="min-h-screen bg-futuristic relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 neon-glow"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60 neon-glow"></div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60 neon-glow"></div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <motion.section 
            className="py-20 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready to transform your business? Let's discuss how our innovative solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="btn-futuristic inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="btn-neon inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Send Email
                </a>
              </div>
            </div>
          </motion.section>

          {/* Contact Methods */}
          <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Contact Method</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Multiple ways to reach us - choose what works best for you
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card-futuristic text-center p-8 hover-lift"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                    <p className="text-gray-300 mb-6">{method.description}</p>
                    <a
                      href={method.href}
                      className={`btn-futuristic inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300`}
                    >
                      {method.action}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Contact Form */}
          <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Send Us a <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you within 2 hours
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="card-futuristic p-8">
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="Enter your company name"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-gray-800 text-white">
                            {service}
                          </option>
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
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-futuristic inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>

                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                      >
                        <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <p className="text-green-400 font-medium">Message sent successfully! We'll get back to you soon.</p>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Contact <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Information</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Get in touch with us through any of these channels
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="card-futuristic p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Company Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{contactInfo.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <a href={contactInfo.website} className="text-gray-300 hover:text-cyan-400 transition-colors">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="card-futuristic p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{contactInfo.hours}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Response time: {contactInfo.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Expert team available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Certified professionals</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Start Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Project</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our innovative solutions can transform your business and drive growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="btn-futuristic inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="btn-neon inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Send Email
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
