import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Building, Users, Clock, DollarSign } from 'lucide-react';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    serviceType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-zion-slate-dark pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">
                Quote Request Submitted!
              </h1>
              <p className="text-xl text-zion-slate-light">
                Thank you for your interest in Zion Tech Group. Our team will review your requirements 
                and get back to you with a detailed quote within 24 hours.
              </p>
            </div>
            
            <div className="bg-zion-slate p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center text-xs text-white mr-3">1</div>
                  <span className="text-zion-slate-light">Our team reviews your requirements</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center text-xs text-white mr-3">2</div>
                  <span className="text-zion-slate-light">We prepare a customized quote</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center text-xs text-white mr-3">3</div>
                  <span className="text-zion-slate-light">You receive detailed pricing and timeline</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors">
                Contact Our Team
              </Link>
              <Link to="/" className="inline-flex items-center px-6 py-3 border border-zion-slate-light text-zion-slate-light font-semibold rounded-lg hover:bg-zion-slate-light/10 transition-colors ml-4">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zion-slate-dark pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Request Your Quote
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Get a personalized estimate for your IT services, AI solutions, or tech projects. 
            Our team will analyze your requirements and provide you with a detailed quote.
          </p>
        </div>

        {/* Why Choose Zion Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zion-slate rounded-lg border border-zion-slate-light/20">
              <Building className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Expertise</h3>
              <p className="text-zion-slate-light">20+ years of experience serving Fortune 500 companies</p>
            </div>
            
            <div className="text-center p-6 bg-zion-slate rounded-lg border border-zion-slate-light/20">
              <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with deep technical knowledge</p>
            </div>
            
            <div className="text-center p-6 bg-zion-slate rounded-lg border border-zion-slate-light/20">
              <Clock className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-zion-slate-light">Quick turnaround times without compromising quality</p>
            </div>
            
            <div className="text-center p-6 bg-zion-slate rounded-lg border border-zion-slate-light/20">
              <DollarSign className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Competitive Pricing</h3>
              <p className="text-zion-slate-light">Transparent pricing with no hidden costs</p>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-slate p-8 rounded-lg border border-zion-slate-light/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Get Your Custom Quote
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="education">Education</option>
                    <option value="government">Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Service Type *</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                >
                  <option value="">Select service type</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="it-infrastructure">IT Infrastructure</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="consulting">Technology Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Project Description *</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                  placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="12+months">12+ months</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                  placeholder="Any additional details, questions, or specific requirements..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h3>
          <p className="text-zion-slate-light mb-6">
            For urgent requests or to speak with our team directly, contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:commercial@ziontechgroup.com" className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors">
              Email Us
            </a>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-zion-slate-light text-zion-slate-light font-semibold rounded-lg hover:bg-zion-slate-light/10 transition-colors">
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
