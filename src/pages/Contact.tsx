import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  Globe,
  Building2,
  Users,
  Award,
  Zap
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
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
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008\nMiddletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM EST\nSat: 10:00 AM - 2:00 PM EST',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'Quantum AI Business Intelligence Platform',
    'Blockchain Supply Chain Management',
    'AI-Powered Cybersecurity Platform',
    'Metaverse Business Platform',
    'Quantum-Resistant Cryptography',
    'AI-Powered Healthcare Analytics',
    'Sustainable Technology Platform',
    'Edge Computing AI Platform',
    'Digital Twin Platform',
    'Quantum Machine Learning Platform',
    'Advanced AI-Powered DevOps',
    'Zero-Trust Security Architecture',
    '5G Network Optimization',
    'AI-Powered Financial Services'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Contact Us | Zion Tech Group - Get in Touch for Innovative Technology Solutions"
        description="Contact Zion Tech Group for cutting-edge micro SAAS, IT, and AI services. Call +1 302 464 0950 or email kleber@ziontechgroup.com for innovative technology solutions."
        keywords="contact, Zion Tech Group, technology services, micro SAAS, IT services, AI services, phone, email, address"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Let's Build the
            </span>
            <br />
            <span className="text-zion-neon">Future Together</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 mb-8 max-w-4xl mx-auto"
          >
            Ready to transform your business with cutting-edge technology? Our team of experts is here to help you 
            navigate the future of innovation. Get in touch today and let's discuss how we can revolutionize your operations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3">
              <span className="text-zion-purple text-lg font-semibold">Expert Consultation</span>
            </div>
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
              <span className="text-zion-cyan text-lg font-semibold">24/7 Support</span>
            </div>
            <div className="bg-zion-neon/20 backdrop-blur-sm border border-zion-neon/30 rounded-full px-6 py-3">
              <span className="text-zion-neon text-lg font-semibold">Innovation First</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Get in Touch
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/60 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="block text-zion-cyan hover:text-zion-neon transition-colors duration-300"
                    >
                      <span className="whitespace-pre-line">{info.value}</span>
                    </a>
                  ) : (
                    <p className="text-zion-cyan whitespace-pre-line">{info.value}</p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Company Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-zion-cyan/80">
                  Tell us about your project and we'll get back to you within 24 hours with a personalized solution.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-300">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-zion-cyan mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-zion-cyan mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-zion-cyan mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-zion-cyan mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-zion-cyan mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-zion-cyan mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                        <option value="custom">Custom/Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-zion-cyan mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="over-12months">Over 12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-zion-cyan mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold py-4 px-8 rounded-lg text-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
                <p className="text-zion-cyan/80 mb-8">
                  We're not just another technology company. We're your innovation partners, committed to transforming 
                  your business with cutting-edge solutions that drive real results.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                    <p className="text-zion-cyan/80">
                      We stay ahead of the curve with cutting-edge technologies like Quantum AI, Blockchain, and Edge Computing.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                    <p className="text-zion-cyan/80">
                      Our team of seasoned professionals brings decades of experience in emerging technologies and business transformation.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-zion-neon to-zion-cyan rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                    <p className="text-zion-cyan/80">
                      We've helped hundreds of businesses achieve breakthrough results with our innovative technology solutions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Enterprise Ready</h3>
                    <p className="text-zion-cyan/80">
                      From startups to Fortune 500 companies, we deliver enterprise-grade solutions that scale with your business.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Quick Contact */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                className="bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-6 border border-zion-purple/30"
              >
                <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center gap-3 text-zion-cyan hover:text-zion-neon transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 302 464 0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center gap-3 text-zion-cyan hover:text-zion-neon transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                  <a
                    href="https://ziontechgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zion-cyan hover:text-zion-neon transition-colors duration-300"
                  >
                    <Globe className="w-5 h-5" />
                    <span>ziontechgroup.com</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-zion-cyan/80 max-w-2xl mx-auto">
              Located in the heart of Middletown, Delaware, our office is easily accessible and ready to welcome you 
              for in-person consultations and collaboration sessions.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 text-center"
          >
            <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl p-8 mb-6">
              <MapPin className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h3>
              <p className="text-zion-cyan/80 text-lg">
                364 E Main St STE 1008<br />
                Middletown, DE 19709<br />
                United States
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/30 rounded-lg p-4 border border-zion-cyan/20">
                <h4 className="text-lg font-semibold text-white mb-2">Parking</h4>
                <p className="text-zion-cyan/70 text-sm">Free parking available on-site</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-zion-purple/20">
                <h4 className="text-lg font-semibold text-white mb-2">Accessibility</h4>
                <p className="text-zion-purple/70 text-sm">Wheelchair accessible entrance</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-zion-neon/20">
                <h4 className="text-lg font-semibold text-white mb-2">Meeting Rooms</h4>
                <p className="text-zion-neon/70 text-sm">Professional meeting spaces available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Innovation Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan/80 mb-8"
          >
            Don't wait to transform your business. Contact us today and discover how our cutting-edge technology 
            solutions can revolutionize your operations and drive unprecedented growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold py-4 px-8 rounded-lg text-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
            >
              Call Now
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg text-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
