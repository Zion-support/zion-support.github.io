import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Users,
  Award,
  Zap,
  Brain,
  Shield,
  Rocket,
  Heart,
  Sparkles
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        preferredContact: 'email',
        urgency: 'normal'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      description: 'Speak directly with our experts',
      action: 'tel:+13024640950',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '364 E Main St STE 1008',
      description: 'Middletown DE 19709',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM EST' },
    { day: 'Sunday', time: 'Closed' }
  ];

  const services = [
    'AI & Analytics Solutions',
    'AI & Sales Automation',
    'AI & Compliance Management',
    'AI & Communication Tools',
    'AI & Customer Experience',
    'AI & Content Generation',
    'AI & Financial Services',
    'Cloud & DevOps Services',
    'IoT & Digital Twin Solutions',
    'Quantum Computing Services',
    'Custom Development',
    'Consulting & Strategy',
    'Training & Workshops',
    'Support & Maintenance'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000',
    'Custom Quote Required'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Planning Phase', description: 'No immediate deadline' },
    { value: 'normal', label: 'Normal - Standard Timeline', description: 'Standard project timeline' },
    { value: 'high', label: 'High - Urgent', description: 'Need within 1-2 months' },
    { value: 'critical', label: 'Critical - ASAP', description: 'Immediate attention required' }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', color: 'from-blue-600 to-blue-700' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/ziontechgroup', color: 'from-sky-500 to-sky-600' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/ziontechgroup', color: 'from-blue-600 to-blue-700' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/ziontechgroup', color: 'from-pink-500 to-pink-600' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', color: 'from-red-500 to-red-600' },
    { icon: Github, name: 'GitHub', url: 'https://github.com/ziontechgroup', color: 'from-gray-600 to-gray-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with Zion Tech Group for innovative AI, Cloud, IoT, and Quantum Computing solutions. Contact us for consultations, quotes, and support."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
              <br />
              <span className="text-white">With Our Team</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              Ready to transform your business with cutting-edge technology? 
              Our experts are here to help you choose the right solutions and get started.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Multiple Ways to Connect
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{method.value}</div>
                <p className="text-slate-300 text-sm mb-6">{method.description}</p>
                <a
                  href={method.action}
                  className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${method.color} text-white font-semibold hover:opacity-90 transition-opacity`}
                >
                  {method.title === 'Visit Us' ? 'Get Directions' : `Contact via ${method.title.split(' ')[0]}`}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-900/60 backdrop-blur border border-cyan-400/20 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700/50 last:border-b-0">
                      <span className="text-slate-300 font-medium">{schedule.day}</span>
                      <span className="text-cyan-400 font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-sm text-slate-300">
                    <strong>Note:</strong> We offer 24/7 emergency support for enterprise clients. 
                    For urgent matters outside business hours, please call our emergency line.
                  </p>
                </div>
              </motion.div>

              {/* Location Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-900/60 backdrop-blur border border-cyan-400/20 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Location</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Zion Tech Group</h4>
                    <p className="text-slate-300">364 E Main St STE 1008</p>
                    <p className="text-slate-300">Middletown, DE 19709</p>
                    <p className="text-slate-300">United States</p>
                  </div>
                  <div className="pt-4 border-t border-slate-700/50">
                    <h4 className="text-lg font-semibold text-white mb-2">Getting Here</h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Located in the heart of Middletown, easily accessible from major highways 
                      and just minutes from the Delaware Memorial Bridge.
                    </p>
                    <a
                      href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-xl text-slate-300">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-900/60 backdrop-blur border border-cyan-400/20 rounded-2xl p-8"
            >
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Message sent successfully!</span>
                  </div>
                  <p className="text-green-300 text-sm mt-1">
                    We'll get back to you within 24 hours. Thank you for contacting Zion Tech Group.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-center text-red-400">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Error sending message</span>
                  </div>
                  <p className="text-red-300 text-sm mt-1">
                    Please try again or contact us directly via phone or email.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-slate-800 text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-slate-800 text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-slate-300 mb-2">
                      Project Urgency
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                    >
                      {urgencyLevels.map((level, index) => (
                        <option key={index} value={level.value} className="bg-slate-800 text-white">
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-slate-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-cyan-400 focus:ring-cyan-400"
                      />
                      <span className="text-slate-300">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-cyan-400 focus:ring-cyan-400"
                      />
                      <span className="text-slate-300">Phone</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 resize-vertical"
                    placeholder="Tell us about your project, requirements, and any specific questions you have..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-sm text-slate-400">
                  <p>
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms-of-service" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Terms of Service
                    </a>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & Connect */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6"
            >
              Connect With Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-12"
            >
              Follow us on social media for the latest updates, industry insights, and technology trends.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-xl bg-gradient-to-br ${social.color} hover:scale-110 transition-transform duration-300`}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Star, title: 'Expert Team', description: 'Certified professionals with 10+ years experience' },
                { icon: Award, title: 'Proven Results', description: '500+ successful projects delivered worldwide' },
                { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround times without compromising quality' },
                { icon: Heart, title: 'Customer Focus', description: 'Dedicated support and personalized solutions' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Don't wait to transform your business. Contact us today and let's discuss how 
              our innovative solutions can help you achieve your goals.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-colors"
              >
                Send Email
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
