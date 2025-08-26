import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      description: 'Available Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Headquarters location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Solutions',
    'Data Analytics',
    'Digital Transformation',
    'Custom Software Development',
    'IT Consulting',
    'Other'
  ];

  return (
    <>
      <SEO 
        title="Contact Zion Tech Group - Get In Touch"
        description="Ready to transform your business? Contact Zion Tech Group today to discuss your technology needs and discover how our AI solutions can drive your success."
      />
      
      <div className="min-h-screen bg-futuristic py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your technology needs and discover how our 
              cutting-edge solutions can drive your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-zion-blue-dark/50 p-8 rounded-lg border border-zion-cyan/20">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-zion-slate-light">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">Something went wrong. Please try again.</span>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zion-slate-dark/50 border rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-500' : 'border-zion-cyan/20'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zion-slate-dark/50 border rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : 'border-zion-cyan/20'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 bg-zion-slate-dark/50 border rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-zion-cyan/20'
                      }`}
                      placeholder="Tell us about your project, goals, or how we can help..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-zion-cyan font-medium mb-1">{info.value}</p>
                        <p className="text-zion-slate-light text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-zion-blue-dark/30 p-6 rounded-lg border border-zion-cyan/20">
                <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-zion-cyan text-sm mt-4">
                  * Emergency support available 24/7 for existing clients
                </p>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-zion-cyan to-zion-purple p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">Need Immediate Help?</h3>
                <p className="text-white/90 mb-4">
                  For urgent matters or existing client support, call our emergency line:
                </p>
                <div className="text-center">
                  <a 
                    href="tel:+13024640950"
                    className="inline-block px-6 py-3 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform"
                  >
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
