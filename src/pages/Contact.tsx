import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, 
  Building, Globe, Send, CheckCircle, AlertCircle,
  ArrowRight, Users, Briefcase, BookOpen, Star
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Contact() {
  const [activeForm, setActiveForm] = useState('general');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
    projectType: '',
    teamSize: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      value: '+1 (555) 123-4567',
      description: '24/7 technical support and emergency assistance',
      action: 'Call Now',
      actionType: 'phone',
      priority: 'high'
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@ziontechgroup.com',
      description: 'General inquiries and non-urgent support requests',
      action: 'Send Email',
      actionType: 'email',
      priority: 'medium'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      value: 'Available on platform',
      description: 'Real-time assistance during business hours',
      action: 'Start Chat',
      actionType: 'chat',
      priority: 'high'
    },
    {
      icon: Building,
      title: 'Office Hours',
      value: 'Mon-Fri 9AM-6PM EST',
      description: 'Standard business hours for general inquiries',
      action: 'Schedule Call',
      actionType: 'schedule',
      priority: 'low'
    }
  ];

  const officeLocations = [
    {
      city: 'New York',
      country: 'United States',
      address: '123 Tech Avenue, Suite 100',
      zip: 'NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'nyc@ziontechgroup.com',
      timezone: 'EST (UTC-5)',
      primary: true
    },
    {
      city: 'San Francisco',
      country: 'United States',
      address: '456 Innovation Drive',
      zip: 'CA 94105',
      phone: '+1 (555) 123-4568',
      email: 'sf@ziontechgroup.com',
      timezone: 'PST (UTC-8)',
      primary: false
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Tech Square',
      zip: 'EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'london@ziontechgroup.com',
      timezone: 'GMT (UTC+0)',
      primary: false
    }
  ];

  const contactReasons = [
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Questions about our company, services, or general information',
      icon: MessageCircle,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'sales',
      title: 'Sales & Pricing',
      description: 'Information about our plans, pricing, and enterprise solutions',
      icon: Briefcase,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'support',
      title: 'Technical Support',
      description: 'Help with platform usage, API integration, or technical issues',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'partnership',
      title: 'Partnership',
      description: 'Business partnerships, integrations, or collaboration opportunities',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    }
  ];

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
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        budget: '',
        timeline: '',
        projectType: '',
        teamSize: ''
      });
      
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormFields = () => {
    const baseFields = [
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      { name: 'lastName', label: 'Last Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text', required: false },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
      { name: 'subject', label: 'Subject', type: 'text', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true }
    ];

    if (activeForm === 'sales') {
      return [
        ...baseFields.slice(0, 6),
        { name: 'budget', label: 'Budget Range', type: 'select', required: false, options: ['$10K - $50K', '$50K - $100K', '$100K - $500K', '$500K+'] },
        { name: 'timeline', label: 'Project Timeline', type: 'select', required: false, options: ['1-3 months', '3-6 months', '6-12 months', '12+ months'] },
        { name: 'projectType', label: 'Project Type', type: 'select', required: false, options: ['AI Implementation', 'Cloud Migration', 'Digital Transformation', 'Custom Development', 'Consulting'] },
        { name: 'teamSize', label: 'Team Size', type: 'select', required: false, options: ['1-10', '11-50', '51-200', '200+'] },
        baseFields[6]
      ];
    }

    if (activeForm === 'partnership') {
      return [
        ...baseFields.slice(0, 6),
        { name: 'projectType', label: 'Partnership Type', type: 'select', required: false, options: ['Technology Integration', 'Joint Development', 'Reseller Partnership', 'Strategic Alliance', 'Investment'] },
        { name: 'timeline', label: 'Partnership Timeline', type: 'select', required: false, options: ['Immediate', '1-3 months', '3-6 months', '6+ months'] },
        baseFields[6]
      ];
    }

    return baseFields;
  };

  const renderField = (field: any) => {
    if (field.type === 'textarea') {
      return (
        <textarea
          name={field.name}
          value={formData[field.name as keyof typeof formData] as string}
          onChange={handleInputChange}
          required={field.required}
          rows={4}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder={field.label}
        />
      );
    }

    if (field.type === 'select') {
      return (
        <select
          name={field.name}
          value={formData[field.name as keyof typeof formData] as string}
          onChange={handleInputChange}
          required={field.required}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select {field.label}</option>
          {field.options?.map((option: string) => (
            <option key={option} value={option} className="bg-slate-800 text-white">
              {option}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={field.type}
        name={field.name}
        value={formData[field.name as keyof typeof formData] as string}
        onChange={handleInputChange}
        required={field.required}
        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={field.label}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group. Contact our team for sales inquiries, technical support, partnerships, or general questions."
        keywords="contact, support, sales, partnership, Zion Tech Group, get in touch"
        canonicalUrl="https://ziontechgroup.com/contact"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business with AI? Contact our team to discuss your needs, get pricing information, or schedule a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the contact method that works best for you. Our team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  method.priority === 'high' ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    method.priority === 'high' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-r from-green-500 to-blue-500'
                  }`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  <div className="text-lg font-semibold text-blue-400 mb-4">{method.value}</div>
                </div>
                
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tell us about your project or inquiry. We'll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Contact Reason Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contactReasons.map((reason) => (
              <button
                key={reason.id}
                onClick={() => setActiveForm(reason.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeForm === reason.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <reason.icon className="w-5 h-5" />
                  <span>{reason.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-4xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {getFormFields().slice(0, -1).map((field) => (
                  <div key={field.name} className={field.name === 'message' ? 'md:col-span-2' : ''}>
                    <label className="block text-white font-medium mb-2">
                      {field.label} {field.required && <span className="text-red-400">*</span>}
                    </label>
                    {renderField(field)}
                  </div>
                ))}
              </div>

              {/* Message field */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                {renderField(getFormFields().slice(-1)[0])}
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Visit us at one of our global locations or connect with our local teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  office.primary ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className="text-center mb-6">
                  {office.primary && (
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-4 inline-block">
                      Headquarters
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{office.city}</h3>
                  <p className="text-gray-400 text-sm">{office.country}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300 text-sm">
                      <div>{office.address}</div>
                      <div>{office.zip}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{office.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{office.timezone}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={`mailto:${office.email}`}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                  <a
                    href={`tel:${office.phone}`}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Respond Quickly
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We understand that time is valuable. Here's what you can expect from us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Star, title: '24 Hours', description: 'General inquiries and support requests' },
                { icon: Clock, title: '4 Hours', description: 'Technical support and urgent issues' },
                { icon: MessageCircle, title: 'Immediate', description: 'Live chat and phone support' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
