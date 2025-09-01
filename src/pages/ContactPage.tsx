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
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/ziontechgroup',
      icon: Linkedin,
      color: 'hover:bg-blue-600/20'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: Twitter,
      color: 'hover:bg-sky-500/20'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Zion-Holdings',
      icon: Github,
      color: 'hover:bg-gray-600/20'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/ziontechgroup',
      icon: Facebook,
      color: 'hover:bg-blue-600/20'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ziontechgroup',
      icon: Instagram,
      color: 'hover:bg-pink-600/20'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@ziontechgroup',
      icon: Youtube,
      color: 'hover:bg-red-600/20'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Digital Transformation',
    'IT Infrastructure',
    'Mobile Development',
    'UI/UX Design',
    'Data Analytics',
    'Consulting',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue-dark to-zion-cyan/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-zion-cyan">Touch</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Ready to transform your business? Let's discuss how our technology solutions 
              can help you achieve your goals and stay ahead of the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                <p className="text-zion-slate-light">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-green-500/20 border border-green-500/30 rounded-xl text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-300">
                    Thank you for reaching out. We'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
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
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter company name"
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
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter phone number"
                      />
                    </div>
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
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
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
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-zion-slate-light">
                  Get in touch with us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hover:border-zion-cyan/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <a
                        href={info.href}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors block mb-1"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-zion-slate-light">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg border border-zion-purple/30 text-zion-slate-light hover:text-zion-cyan transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Visit Our <span className="text-zion-cyan">Office</span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Located in the heart of Innovation City, our headquarters is designed to foster 
              creativity and collaboration.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Zion Tech Group Headquarters</h3>
                    <p className="text-zion-slate-light">
                      123 Tech Street<br />
                      Innovation City, IC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Office Hours</h3>
                    <p className="text-zion-slate-light">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Team Availability</h3>
                    <p className="text-zion-slate-light">
                      Our team is available for meetings and consultations during business hours. 
                      We also offer virtual meetings for remote clients.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="w-full h-80 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl border border-zion-purple/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-24 h-24 text-zion-cyan mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">Visit Our Office</h3>
                    <p className="text-zion-slate-light mt-2">Schedule a meeting or drop by for a tour</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss your technology needs and explore how we can help you achieve 
              your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
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
