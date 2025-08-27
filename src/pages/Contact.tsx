import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle,
  AlertCircle,
  Globe,
  Building,
  Users,
  Award,
  Shield,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
  Calendar,
  Video,
  FileText,
  Download
} from 'lucide-react';

interface ContactMethod {
  title: string;
  description: string;
  icon: any;
  value: string;
  action: string;
  color: string;
  link?: string;
}

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
  budget: string;
  timeline: string;
}

const contactMethods: ContactMethod[] = [
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: Phone,
    value: '+1 (302) 464-0950',
    action: 'Call Now',
    color: 'from-blue-500 to-cyan-500',
    link: 'tel:+13024640950'
  },
  {
    title: 'Email Support',
    description: 'Send detailed inquiries and get comprehensive responses',
    icon: Mail,
    value: 'info@ziontechgroup.com',
    action: 'Send Email',
    color: 'from-green-500 to-teal-500',
    link: 'mailto:info@ziontechgroup.com'
  },
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    value: 'Available 24/7',
    action: 'Start Chat',
    color: 'from-purple-500 to-pink-500',
    link: '/chat'
  },
  {
    title: 'Office Location',
    description: 'Visit our headquarters for in-person meetings',
    icon: MapPin,
    value: 'Wilmington, DE, USA',
    action: 'Get Directions',
    color: 'from-orange-500 to-red-500',
    link: 'https://maps.google.com/?q=Wilmington,DE'
  }
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
  { day: 'Sunday', hours: 'Emergency Support Only' }
];

const services = [
  'AI & Machine Learning',
  'Cloud Migration & DevOps',
  'Cybersecurity Solutions',
  'IoT & Edge Computing',
  'Quantum Computing',
  'Digital Transformation',
  'IT Infrastructure',
  'Custom Development',
  'Other'
];

const budgets = [
  'Under $10,000',
  '$10,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $500,000',
  'Over $500,000'
];

const timelines = [
  'Immediate (1-2 weeks)',
  'Quick (1-2 months)',
  'Standard (3-6 months)',
  'Extended (6+ months)',
  'Flexible'
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          service: '',
          budget: '',
          timeline: ''
        });
      }, 3000);
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Our team of experts is here to help you succeed. 
            Contact us today to discuss your project requirements and discover how Zion Tech Group can drive your digital transformation.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{method.description}</p>
                <div className="text-zion-cyan font-medium mb-3">{method.value}</div>
                {method.link ? (
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 group-hover:scale-105"
                  >
                    {method.action}
                    {method.link.startsWith('http') && <ExternalLink className="ml-2 h-4 w-4" />}
                  </a>
                ) : (
                  <button className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 group-hover:scale-105">
                    {method.action}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-zion-slate-light">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent matters, please call us directly.
                </p>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-green-400 font-medium">Message sent successfully!</p>
                    <p className="text-green-400/80 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-zion-slate-dark text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget} className="bg-zion-slate-dark text-white">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-white font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline} className="bg-zion-slate-dark text-white">
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, requirements, and any specific questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Office Hours */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-zion-slate-light">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-zion-cyan/10 border border-zion-cyan/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-zion-cyan" />
                    <div>
                      <p className="text-white font-medium">Emergency Support</p>
                      <p className="text-zion-slate-light text-sm">Available 24/7 for critical issues</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="/help-center"
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-zion-cyan" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Help Center</p>
                    <p className="text-zion-slate-light text-sm">Find answers to common questions</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300 ml-auto" />
                </a>

                <a
                  href="/request-quote"
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    <Download className="h-5 w-5 text-zion-cyan" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Request Quote</p>
                    <p className="text-zion-slate-light text-sm">Get a detailed project estimate</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300 ml-auto" />
                </a>

                <a
                  href="/chat"
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-zion-cyan" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Live Chat</p>
                    <p className="text-zion-slate-light text-sm">Get instant help online</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300 ml-auto" />
                </a>
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">About Zion Tech Group</h3>
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Founded in 2020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">50+ Team Members</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">100+ Projects Completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">SOC2 Compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Global Reach</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Our team is ready to help you implement cutting-edge solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
