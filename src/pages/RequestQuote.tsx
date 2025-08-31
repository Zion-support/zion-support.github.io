import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Calculator, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Building,
  Users,
  Globe,
  Clock,
  Target,
  Lightbulb,
  Zap,
  Shield,
  Brain,
  Cloud,
  Database,
  Code,
  ArrowRight,
  FileText,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    requirements: '',
    additionalInfo: ''
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
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        companySize: '',
        industry: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        requirements: '',
        additionalInfo: ''
      });
    }, 5000);
  };

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Retail & E-commerce',
    'Manufacturing',
    'Education',
    'Technology',
    'Government',
    'Non-profit',
    'Other'
  ];

  const projectTypes = [
    'AI & Machine Learning',
    'Cloud Migration',
    'Cybersecurity',
    'Custom Software Development',
    'Data Analytics',
    'Digital Transformation',
    'IT Infrastructure',
    'DevOps & Automation',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000+'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Long-term (6+ months)',
    'Not sure yet'
  ];

  const benefits = [
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'Get detailed, itemized quotes with no hidden costs'
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored recommendations based on your specific needs'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Receive your quote within 24-48 hours'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Free consultation with our technology experts'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Submit Request',
      description: 'Fill out our detailed quote request form'
    },
    {
      step: '02',
      title: 'Review & Analysis',
      description: 'Our team analyzes your requirements'
    },
    {
      step: '03',
      title: 'Custom Quote',
      description: 'Receive a detailed, personalized quote'
    },
    {
      step: '04',
      title: 'Consultation',
      description: 'Schedule a free consultation to discuss options'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Request a Quote - Zion Tech Group"
        description="Get a custom quote for your technology project. Our experts will analyze your requirements and provide a detailed, transparent pricing estimate."
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
              Request a <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Quote</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get a detailed, transparent quote for your technology project. 
              Our experts will analyze your requirements and provide customized pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Quote Process?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We believe in transparency and providing real value from the start.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Quote Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple, transparent, and designed to get you the information you need quickly.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Get Your Custom Quote</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tell us about your project and we'll provide a detailed, transparent quote within 24-48 hours.
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
                  <span className="text-green-400">Thank you! Your quote request has been submitted successfully. We'll get back to you within 24-48 hours.</span>
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

              {/* Company Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-cyan-400" />
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-cyan-400" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="mt-6">
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

              {/* Project Details */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-cyan-400" />
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
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
                <div className="mt-6">
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
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-cyan-400" />
                  Project Description
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Describe your project goals and objectives..."
                    />
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-2">
                      Specific Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="List any specific requirements or constraints..."
                    />
                  </div>
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Any other information you'd like us to know..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Prefer to Talk Directly?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to help. Contact us through any of these methods for immediate assistance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  description: 'Speak directly with our team',
                  action: '+1 (555) 123-4567',
                  link: 'tel:+15551234567',
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  description: 'Send us a detailed message',
                  action: 'info@ziontechgroup.com',
                  link: 'mailto:info@ziontechgroup.com',
                  color: 'from-blue-500 to-cyan-600'
                },
                {
                  icon: MessageSquare,
                  title: 'Live Chat',
                  description: 'Get instant answers',
                  action: 'Start Chat',
                  link: '#',
                  color: 'from-purple-500 to-pink-600'
                }
              ].map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  <a
                    href={method.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
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
              Submit your quote request today and take the first step toward transforming your business with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote-form"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Request Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
