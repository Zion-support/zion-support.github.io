import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

const departments = [
  {
    name: 'Sales & Business Development',
    email: 'sales@ziontechgroup.com',
    phone: '+1 (555) 123-4567'
  },
  {
    name: 'Technical Support',
    email: 'support@ziontechgroup.com',
    phone: '+1 (555) 123-4568'
  },
  {
    name: 'Partnerships',
    email: 'partnerships@ziontechgroup.com',
    phone: '+1 (555) 123-4569'
  }
];

const contactInfo = [
  {
    title: 'Email Us',
    icon: Mail,
    color: 'from-blue-500 to-blue-600',
    details: [
      'General inquiries: info@ziontechgroup.com',
      'Sales: sales@ziontechgroup.com',
      'Support: support@ziontechgroup.com'
    ]
  },
  {
    title: 'Call Us',
    icon: Phone,
    color: 'from-green-500 to-green-600',
    details: [
      'Main office: +1 (555) 123-4567',
      'Support: +1 (555) 123-4568',
      'Available Mon-Fri, 9 AM - 6 PM EST'
    ]
  },
  {
    title: 'Visit Us',
    icon: MapPin,
    color: 'from-purple-500 to-purple-600',
    details: [
      '123 Innovation Drive',
      'Tech Valley, CA 94000',
      'United States'
    ]
  },
  {
    title: 'Business Hours',
    icon: Clock,
    color: 'from-orange-500 to-orange-600',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM EST',
      'Saturday: 10:00 AM - 2:00 PM EST',
      'Sunday: Closed'
    ]
  }
];

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

  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group. We're here to help you transform your business with cutting-edge AI and technology solutions."
        keywords="contact, support, consultation, AI services, technology solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Let's Build Something
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {' '}Amazing Together
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge AI and technology solutions? 
                Get in touch with our team of experts and let's discuss how we can help you succeed.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Start Your Journey
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
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
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="cloud-devops">Cloud & DevOps</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="digital-transformation">Digital Transformation</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project or how we can help you..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </div>
                        )}
                      </motion.button>
                      
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Schedule a Call
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Contact Specific Departments
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Need to reach a specific team? Here are the direct contact details for our key departments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{dept.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <a href={`mailto:${dept.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <a href={`tel:${dept.phone}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We're here to help you transform your business with cutting-edge AI and technology solutions. 
                  Let's discuss your needs and explore how we can work together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Schedule a consultation to discuss your technology needs and explore how our solutions can drive your business forward.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
