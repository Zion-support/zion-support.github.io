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
  AlertCircle,
  Building2,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Zap,
  Brain,
  Shield,
  Cpu,
  HardDrive,
  Users,
  TrendingUp,
  Award,
  Star
} from 'lucide-react';
import { SEO } from '@/components/SEO';

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
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
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const services = [
    { id: 'ai-services', name: 'AI Services', icon: Brain, description: 'AI-powered solutions and platforms' },
    { id: 'it-services', name: 'IT Services', icon: Shield, description: 'Infrastructure and cybersecurity' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Cpu, description: 'Software-as-a-Service solutions' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: HardDrive, description: 'Cloud migration and automation' },
    { id: 'consulting', name: 'Consulting', icon: Users, description: 'Strategic technology consulting' },
    { id: 'custom', name: 'Custom Solution', icon: TrendingUp, description: 'Bespoke development services' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'over-12-months', label: 'Over 12 months' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI services, IT solutions, and micro SAAS platforms. Contact our experts today."
        keywords="contact, AI services, IT solutions, micro SAAS, consultation, support"
      />

      {/* Header */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
              {" "}Amazing
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Ready to transform your business with cutting-edge AI, IT solutions, or innovative micro SAAS platforms? 
            Our team of experts is here to help you succeed.
          </motion.p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-green-400">Thank you! We'll get back to you within 24 hours.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3"
              >
                <AlertCircle className="w-6 h-6 text-red-400" />
                <span className="text-red-400">Something went wrong. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zion-slate-light mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="john@company.com"
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
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

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
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((timeline) => (
                    <option key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                  placeholder="Tell us about your project, goals, and requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 px-6 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Company Info */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-zion-slate-light">Innovation • Technology • Solutions</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-zion-slate-light">
                  <MapPin className="w-5 h-5 text-zion-cyan mt-1" />
                  <div>
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown DE 19709</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Clock className="w-5 h-5 text-zion-cyan" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.id} className="flex items-center space-x-3 p-3 bg-zion-blue rounded-lg hover:bg-zion-purple/20 transition-colors">
                      <Icon className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <p className="text-white font-medium">{service.name}</p>
                        <p className="text-zion-slate-light text-sm">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/company/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-zion-blue rounded-lg hover:bg-zion-purple/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-zion-blue rounded-lg hover:bg-zion-purple/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Twitter</span>
                </a>
                <a
                  href="https://github.com/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-zion-blue rounded-lg hover:bg-zion-purple/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">GitHub</span>
                </a>
                <a
                  href="https://youtube.com/@ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-zion-blue rounded-lg hover:bg-zion-purple/20 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-zion-blue-dark border-t border-zion-purple/30 py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Expertise</h3>
              <p className="text-zion-slate-light text-sm">
                Years of experience delivering successful technology solutions across industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light text-sm">
                Always at the forefront of emerging technologies and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>
              <p className="text-zion-slate-light text-sm">
                24/7 support and dedicated account managers for enterprise clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Results Driven</h3>
              <p className="text-zion-slate-light text-sm">
                Focused on delivering measurable business outcomes and ROI for our clients.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center space-x-2 bg-transparent border border-zion-purple text-zion-purple px-8 py-4 rounded-lg font-medium hover:bg-zion-purple hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
