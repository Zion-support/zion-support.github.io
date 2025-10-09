'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const RequestQuotePage: React.FC = () =>{
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

              setFormData(prev => ({
      ...prev,
      [name]: value;
    }));
  }
      setIsSubmitting(true);
    
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true)
  }
  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <div>
          <div>
            <div>
              <div>
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-6 neon-text">
                Quote Request Submitted!
              </h1>
              <p className="text-xl text-gray-300 mb-8">Thank you for your interest in our services. We've received your quote request
                and will get back to you within 24 hours with a detailed proposal.
              </p>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                <div>
                  <div>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">1</div>
                    <span className="text-gray-300">Our team will review your requirements</span>
                  </div>
                  <div>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">2</div>
                    <span className="text-gray-300">We'll prepare a detailed quote and proposal</span>
                  </div>
                  <div>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">3</div>
                    <span className="text-gray-300">Schedule a call to discuss your project</span>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />Contact Us</a>
                <a
                  href="/"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />Back to Home</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>)
  }

  return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Request a Quote</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get a detailed, no-obligation quote for your AI and IT project. 
              Our experts will provide you with a comprehensive proposal within 24 hours.
            </p>
          </div>
          <div>
            {/* Quote Form */}
            <div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input type="text"
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
                      <input type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
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
                    <select name="serviceType"
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
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Size</label>
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
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
                    <textarea name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Describe your project requirements and goals..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Specific Requirements</label>
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
                      <div>
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
            <div>
              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Why Request a Quote?</h3>
                <div>
                  {benefits.map((benefit, index) => (
                    <div>
                      <div>
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
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div>
                  {whyChooseUs.map((item, index) => (
                    <div>
                      <div>
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
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For urgent inquiries or immediate assistance, contact us directly.
                </p>
                <div>
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
    </>);
}
export default RequestQuotePage