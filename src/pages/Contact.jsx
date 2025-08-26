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
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 302 464 0950",
      description: "Call us directly for immediate assistance",
      action: "tel:+13024640950",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us a detailed message anytime",
      action: "mailto:kleber@ziontechgroup.com",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "364 E Main St STE 1008, Middletown DE 19709",
      description: "Visit our headquarters for in-person meetings",
      action: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      color: "from-zion-green to-zion-cyan"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      description: "Available for consultations and support",
      color: "from-zion-purple to-zion-pink"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/zion-tech-group", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/ziontechgroup", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/ziontechgroup", label: "Facebook", color: "hover:text-blue-500" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/ziontechgroup", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/ziontechgroup", label: "GitHub", color: "hover:text-gray-400" },
    { icon: <Globe className="w-5 h-5" />, href: "https://ziontechgroup.com", label: "Website", color: "hover:text-zion-cyan" }
  ];

  const services = [
    "AI & Machine Learning",
    "Blockchain & Web3",
    "IoT & Edge Computing",
    "Quantum Computing",
    "AR/VR & Metaverse",
    "Cybersecurity",
    "Cloud & Infrastructure",
    "Business Intelligence",
    "Communication Tools",
    "Specialized AI Tools",
    "Emerging Technologies",
    "Custom Development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with Zion Tech Group for AI, blockchain, quantum computing, and emerging technology solutions. Contact us for consultations and project inquiries." 
        keywords="contact Zion Tech Group, AI consulting, blockchain development, quantum computing, technology consulting" 
        url="https://ziontechgroup.com/contact"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Let's Build the{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Future
              </span>{' '}
              Together
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you 
              navigate the future of AI, blockchain, quantum computing, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose your preferred method of communication. We're here to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-blue-dark to-zion-purple-dark p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{method.title}</h3>
                  <p className="text-zion-cyan font-medium mb-2">{method.details}</p>
                  <p className="text-zion-slate-light text-sm mb-4">{method.description}</p>
                  {method.action && (
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 text-sm font-medium"
                    >
                      {method.action.includes('tel:') ? 'Call Now' : 
                       method.action.includes('mailto:') ? 'Send Email' : 'Get Directions'}
                      <Send className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-zion-slate-light text-lg">
                  Tell us about your project and we'll get back to you within 24 hours with a personalized solution.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-300">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-zion-blue-dark text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm resize-none"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  {[
                    "20+ years of technology consulting experience",
                    "500+ successful project implementations",
                    "Expert team in AI, blockchain, and emerging tech",
                    "24/7 support and maintenance",
                    "Enterprise-grade security and compliance",
                    "Global reach with local expertise"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-zion-slate-light ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                      aria-label={social.label}
                      title={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 p-6 rounded-2xl border border-zion-cyan/30">
                <h4 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h4>
                <p className="text-zion-slate-light mb-4">
                  Schedule a free consultation to discuss your technology needs and discover how we can help transform your business.
                </p>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Free Consultation Request"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
                >
                  Schedule Consultation
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Located in the heart of Delaware, our office is easily accessible and ready to welcome you for in-person meetings.
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="bg-zion-blue-dark rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center text-zion-slate-light">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-zion-cyan" />
                    <p className="text-lg">Interactive Map Coming Soon</p>
                    <p className="text-sm">We're working on integrating a live map</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Office Address</h4>
                  <p className="text-zion-slate-light">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Business Hours</h4>
                  <p className="text-zion-slate-light">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 2:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Contact</h4>
                  <p className="text-zion-slate-light">
                    Phone: +1 302 464 0950<br />
                    Email: kleber@ziontechgroup.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
