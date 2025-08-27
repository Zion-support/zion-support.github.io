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
  Building,
  Users,
  Award,
  Shield
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 302 464 0950",
      link: "tel:+13024640950",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      color: "from-orange-500 to-red-500"
    }
  ];
  const services = [
    "AI & Machine Learning",
    "Quantum Computing",
    "Blockchain & Web3",
    "IoT & Edge Computing",
    "AR/VR Development",
    "FinTech Solutions",
    "Green Technology",
    "Cybersecurity",
    "Cloud Infrastructure",
    "Business Intelligence",
    "Custom Development",
    "Consulting Services"
  ];
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with 10+ years experience"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support across all time zones"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all services"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with Zion Tech Group for innovative AI, quantum computing, blockchain, and IT solutions. Contact us today for a free consultation." 
        keywords="contact Zion Tech Group, AI consulting, quantum computing, blockchain services, IT solutions" 
        url="https://ziontechgroup.com/contact"
      />
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-cyan/10 rounded-full animate-float"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Let's Build the <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Future</span> Together
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Our expert team is here to help you navigate the future of AI, quantum computing, and innovative IT solutions.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Touch</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-zion-slate-light">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              {/* Company Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{feature.title}</h4>
                        <p className="text-zion-slate-light text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-zion-slate-light">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-zinc-800 text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    <span className="flex items-center justify-center space-x-2">
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
                    </span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Additional Contact Methods */}
      <section className="py-20 bg-zion-blue-dark/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Other Ways to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Prefer a different communication method? We're available through multiple channels to accommodate your preferences.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Phone Consultation</h3>
              <p className="text-zion-slate-light mb-4">
                Schedule a free 30-minute consultation call to discuss your project requirements.
              </p>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300"
              >
                <span>Call Now</span>
                <Phone className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Email Support</h3>
              <p className="text-zion-slate-light mb-4">
                Send us detailed project requirements and we'll respond with a comprehensive proposal.
              </p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300"
              >
                <span>Send Email</span>
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Office Visit</h3>
              <p className="text-zion-slate-light mb-4">
                Schedule an in-person meeting at our office for detailed project discussions.
              </p>
              <a 
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300"
              >
                <span>Get Directions</span>
                <MapPin className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple via-zion-blue to-zion-cyan relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20"></div>
          <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full animate-pulse-slow"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Don't wait to transform your business. Contact us today and let's discuss how our innovative solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+13024640950">
                <motion.button 
                  className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </span>
                </motion.button>
              </a>
              <a href="mailto:kleber@ziontechgroup.com">
                <motion.button 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>Send Email</span>
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
