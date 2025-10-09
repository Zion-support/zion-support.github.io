'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const RequestQuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    'AI Services',
    'IT Infrastructure',
    'Cybersecurity',
    'Cloud Migration',
    'Micro SAAS Solutions',
    'Digital Transformation',
    'Custom Development',
    'Consulting Services',
    'Other'
  ];

  const projectSizes = [
    'Small (1-10 employees)',
    'Medium (11-100 employees)',
    'Large (101-1000 employees)',
    'Enterprise (1000+ employees)'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Flexible'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'To be discussed'
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: Calculator,
      title: 'Free Quote',
      description: 'Get a detailed, no-obligation quote within 24 hours'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We respond to all quote requests within 4 hours'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'Clear, detailed pricing with no hidden fees'
    },
    {
      icon: Star,
      title: 'Expert Consultation',
      description: 'Free consultation with our technology experts'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: '50+ Successful Projects',
      description: 'Proven track record of delivering results'
    },
    {
      icon: Award,
      title: '300% Average ROI',
      description: 'Our clients see significant returns on investment'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support for all our clients'
    },
    {
      icon: Star,
      title: '99.9% Uptime',
      description: 'Reliable, high-performance solutions'
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16 pt-24">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-6 neon-text">
                Quote Request Submitted!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for your interest in our services. We've received your quote request 
                and will get back to you within 24 hours with a detailed proposal.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">1</div>
                    <span className="text-gray-300">Our team will review your requirements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">2</div>
                    <span className="text-gray-300">We'll prepare a detailed quote and proposal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">3</div>
                    <span className="text-gray-300">Schedule a call to discuss your project</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="/"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get a detailed, no-obligation quote for your AI and IT project. 
              Our experts will provide you with a comprehensive proposal within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 rounded-lg p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="">Select a service type</option>
                      {serviceTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Size
                      </label>
                      <select
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      >
                        <option value="">Select project size</option>
                        {projectSizes.map((size, index) => (
                          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Describe your project requirements and goals..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Specific Requirements
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Any specific technical requirements, integrations, or constraints..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Request Quote'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Benefits */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Why Request a Quote?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-xs text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <item.icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For urgent inquiries or immediate assistance, contact us directly.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span className="text-sm">Contact Form</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RequestQuotePage;