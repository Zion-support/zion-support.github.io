import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Globe, 
  Building,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
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
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ziontechgroup.com', 'support@ziontechgroup.com'],
      description: 'Get in touch via email for general inquiries and support'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Speak directly with our team during business hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Street', 'San Francisco, CA 94105'],
      description: 'Schedule a meeting at our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM PST', 'Sat: 10:00 AM - 2:00 PM PST'],
      description: 'We\'re available during these hours for immediate assistance'
    }
  ];

  const services = [
    'AI Development & Consulting',
    'Cloud Infrastructure',
    'Cybersecurity Solutions',
    'Digital Transformation',
    'Custom Software Development',
    'Data Analytics & BI',
    'IT Consulting',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Long-term (6+ months)',
    'Not sure yet'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group. Contact our team for AI consulting, IT solutions, and technology services. We're here to help transform your business."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Our team is here to help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your preferred way to reach us. We're here to help with any questions or projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{info.description}</p>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-cyan-400 font-medium">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tell us about your project or inquiry. We'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-8"
            >
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-400">Something went wrong. Please try again or contact us directly.</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
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
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Offices</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Visit us at one of our locations or schedule a virtual meeting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">San Francisco</h3>
                  <p className="text-cyan-400">Headquarters</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">123 Tech Street</p>
                    <p className="text-gray-300">San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                    <p className="text-gray-300">Main office line</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">9:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-300">Monday - Friday</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Virtual Office</h3>
                  <p className="text-purple-400">Global Reach</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Video Conferencing</p>
                    <p className="text-gray-300">Zoom, Teams, Google Meet</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">24/7 Support</p>
                    <p className="text-gray-300">Email and chat support</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Flexible Scheduling</p>
                    <p className="text-gray-300">Available across time zones</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Call Us Now
                <Phone className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
