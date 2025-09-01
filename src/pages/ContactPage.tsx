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
  Building,
  Users,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

export default function ContactPage() {
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Available Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ziontechgroup.com',
      href: 'mailto:info@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Tech Street, Innovation City, IC 12345',
      href: '#',
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      href: '#',
      description: 'Weekend support available for urgent matters'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/ziontechgroup',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/ziontechgroup',
      label: 'Twitter',
      color: 'hover:bg-sky-500'
    },
    {
      icon: Github,
      href: 'https://github.com/Zion-Holdings',
      label: 'GitHub',
      color: 'hover:bg-gray-600'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/ziontechgroup',
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/ziontechgroup',
      label: 'Instagram',
      color: 'hover:bg-pink-600'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@ziontechgroup',
      label: 'YouTube',
      color: 'hover:bg-red-600'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Digital Transformation',
    'Data Analytics',
    'IoT & Edge Computing',
    'Blockchain Solutions',
    'Quantum Computing',
    'Custom Development',
    'Consulting Services'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 rounded-2xl p-12 border border-zinc-700/50"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h2>
            <p className="text-zion-slate-light mb-8">
              Thank you for reaching out to Zion Tech Group. We've received your message and will get back to you within 24 hours.
            </p>
            <div className="text-sm text-zion-slate-light">
              You'll receive a confirmation email shortly.
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-zion-cyan">Touch</span>
            </h1>
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Ready to transform your business with cutting-edge technology? Let's discuss how our solutions can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-700/50 hover:border-zion-cyan/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <a
                  href={info.href}
                  className="text-zion-cyan font-medium mb-2 hover:text-zion-cyan-light transition-colors cursor-pointer block"
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {info.value}
                </a>
                <p className="text-zion-slate-light text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
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
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 px-6 rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Company Info */}
              <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">About Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  We are a leading technology company specializing in AI, quantum computing, and advanced technology solutions. 
                  Our team of experts is dedicated to helping businesses transform and thrive in the digital age.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Building className="w-5 h-5 text-zion-cyan" />
                    <span>Founded in 2010</span>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Users className="w-5 h-5 text-zion-cyan" />
                    <span>100+ Team Members</span>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <span>25+ Countries Served</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center space-x-3 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-white">Call Now</span>
                    <ArrowRight className="w-4 h-4 text-zion-slate-light ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="mailto:info@ziontechgroup.com"
                    className="flex items-center space-x-3 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-white">Send Email</span>
                    <ArrowRight className="w-4 h-4 text-zion-slate-light ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/request-quote"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-200 group"
                  >
                    <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium">Request Quote</span>
                    <ArrowRight className="w-4 h-4 text-white ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-zinc-800/50 hover:bg-zion-cyan rounded-lg flex items-center justify-center transition-all duration-200 group ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 text-zion-slate-light group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Located in the heart of innovation, our headquarters is designed to inspire creativity and collaboration.
            </p>
          </motion.div>

          <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group Headquarters</h3>
                <div className="space-y-4 text-zion-slate-light">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">123 Tech Street</p>
                      <p>Innovation City, IC 12345</p>
                      <p>United States</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-zion-cyan" />
                    <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
                <div className="text-center text-zion-slate-light">
                  <MapPin className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <p className="text-lg font-medium text-white mb-2">Interactive Map</p>
                  <p className="text-sm">Map integration would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
