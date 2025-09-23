import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle,
  User, Building, MessageSquare, Globe, Clock, Star
} from 'lucide-react';

const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    howDidYouHear: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    { value: 'ai-business-intelligence', label: 'AI Business Intelligence', icon: '🤖' },
    { value: 'quantum-cybersecurity', label: 'Quantum Cybersecurity', icon: '🔒' },
    { value: 'edge-computing', label: 'Edge Computing Orchestration', icon: '⚡' },
    { value: 'space-technology', label: 'Space Technology Innovation', icon: '🚀' },
    { value: 'neural-interfaces', label: 'Neural Interface Development', icon: '🧠' },
    { value: 'custom-solution', label: 'Custom Solution', icon: '⚙️' }
  ];

  const budgets = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediate (1-2 months)' },
    { value: 'quarter', label: 'This Quarter (3-6 months)' },
    { value: 'year', label: 'This Year (6-12 months)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
=======
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FormData, FormErrors } from '../types';
import { useToast } from './ui/Toast';

const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showSuccess, showError } = useToast();

  const services = [
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Data Analytics',
    'Digital Transformation',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

>>>>>>> origin/auto/autonomy-17186719616
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
<<<<<<< HEAD
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
=======

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
>>>>>>> origin/auto/autonomy-17186719616

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
<<<<<<< HEAD
    if (!validateForm()) return;

    setIsSubmitting(true);
    
=======
    if (!validateForm()) {
      showError('Validation Error', 'Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

>>>>>>> origin/auto/autonomy-17186719616
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
<<<<<<< HEAD
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        firstName: '', lastName: '', email: '', company: '', phone: '',
        service: '', message: '', budget: '', timeline: '', howDidYouHear: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
=======
      setIsSubmitted(true);
      showSuccess('Message Sent!', 'Thank you for contacting us. We\'ll get back to you soon.');
      
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      showError('Submission Failed', 'There was an error sending your message. Please try again.');
>>>>>>> origin/auto/autonomy-17186719616
    } finally {
      setIsSubmitting(false);
    }
  };

<<<<<<< HEAD
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our experts",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      value: "San Francisco, CA",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

=======
  const services = [
    'AI Business Intelligence',
    'Quantum Cybersecurity',
    'Edge Computing Orchestration',
    'Space Technology Innovation',
    'Neural Interface Development',
    'Other'
  ];

  const handleInputBlur = (name: keyof FormData) => {
    // Validate individual field on blur
    if (formData[name] && errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

>>>>>>> origin/auto/autonomy-17186719616
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
        className="max-w-2xl mx-auto text-center py-12"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-white/70 mb-6">
          Your message has been sent successfully. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-medium text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        >
          Send Another Message
        </button>
      </motion.div>
=======
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
        <p className="text-white/70 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Send Another Message
        </button>
      </div>
>>>>>>> origin/auto/autonomy-17186719616
    );
  }

  return (
<<<<<<< HEAD
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" aria-hidden="true" />
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} p-3 flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-white/60 text-sm mb-1">{info.description}</p>
                    <span className="text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors duration-300">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" aria-hidden="true" />
                Why Choose Zion Tech Group?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span>500+ successful projects delivered</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span>99.9% client satisfaction rate</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span>24/7 expert support available</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span>Cutting-edge technology solutions</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                <div>
                  <p className="text-white font-medium text-sm">Fast Response</p>
                  <p className="text-white/60 text-xs">We'll get back to you within 24 hours</p>
                </div>
=======
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-white/70">contact@ziontechgroup.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                <p className="text-white/70">San Francisco, CA</p>
>>>>>>> origin/auto/autonomy-17186719616
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
<<<<<<< HEAD
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 backdrop-blur-xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-white/70">
                Let's discuss your project and explore how our cutting-edge technology solutions can drive innovation and growth.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                      errors.firstName ? 'border-red-500' : 'border-white/20 focus:border-cyan-500/50'
                    }`}
                    placeholder="Enter your first name"
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                      errors.lastName ? 'border-red-500' : 'border-white/20 focus:border-cyan-500/50'
                    }`}
                    placeholder="Enter your last name"
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-white/20 focus:border-cyan-500/50'
                    }`}
                    placeholder="Enter your email address"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Company and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                      errors.company ? 'border-red-500' : 'border-white/20 focus:border-cyan-500/50'
                    }`}
                    placeholder="Enter your company name"
                    aria-describedby={errors.company ? 'company-error' : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.icon} {service.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-white font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/20 focus:border-cyan-500/50'
                  }`}
                  placeholder="Tell us about your project, goals, and requirements..."
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* How did you hear */}
              <div>
                <label htmlFor="howDidYouHear" className="block text-white font-medium mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                >
                  <option value="">Select an option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="event">Event/Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactForm;
=======
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('name')}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                      : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('email')}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                      : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-slate-800 text-white">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur('message')}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                  errors.message 
                    ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                    : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'
                } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                placeholder="Tell us about your project and requirements..."
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-400 flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105'
              } flex items-center justify-center gap-3`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactForm;
>>>>>>> origin/auto/autonomy-17186719616
