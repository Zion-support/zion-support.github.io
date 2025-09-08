
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Quote request submitted:', formData);
    setIsSubmitted(true);
  };

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Energy',
    'Transportation',
    'Other'
  ];

  const serviceTypes = [
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Migration',
    'Digital Transformation',
    '5G & IoT Solutions',
    'Data Analytics',
    'Custom Software Development',
    'IT Consulting',
    'Other'
  ];

  const timelines = [
    'Immediate (1-3 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (12+ months)',
    'Not sure yet'
  ];

  const budgets = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000',
    'Not sure yet'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-zion-slate-dark mb-4">Thank You!</h2>
          <p className="text-zion-slate-light mb-6">
            Your quote request has been submitted successfully. Our team will review your requirements 
            and get back to you within 24-48 hours with a detailed proposal.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-zion-slate-light">
              <strong>What happens next?</strong>
            </p>
            <ul className="text-sm text-zion-slate-light space-y-2 text-left">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                We'll review your requirements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Our experts will create a custom proposal
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                You'll receive a detailed quote within 48 hours
              </li>
            </ul>
          </div>
          <div className="mt-6 space-y-3">
            <Link
              to="/contact"
              className="block w-full bg-zion-purple hover:bg-zion-purple/80 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="block w-full bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-slate-dark px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get a customized quote for your technology project. Our experts will analyze your requirements 
            and provide a detailed proposal tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-zion-cyan" />
              <span>24-48 hour response</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-zion-cyan" />
              <span>Expert consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-zion-cyan" />
              <span>Competitive pricing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6">Project Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-zion-slate-dark mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-zion-slate-dark mb-2">
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-zion-slate-dark mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                      placeholder="Enter contact name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-zion-slate-dark mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    >
                      <option value="">Select industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-zion-slate-dark mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    >
                      <option value="">Select service type</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-zion-slate-dark mb-2">
                      Project Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-zion-slate-dark mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-zion-slate-dark mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-zion-slate-dark mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    placeholder="Any additional details, constraints, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zion-purple hover:bg-zion-purple/80 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-zion-slate-dark mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-4 h-4 text-zion-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark">Expert Team</h4>
                    <p className="text-sm text-zion-slate-light">100+ certified professionals with industry expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-zion-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark">Proven Track Record</h4>
                    <p className="text-sm text-zion-slate-light">500+ successful projects across industries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-zion-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark">Fast Delivery</h4>
                    <p className="text-sm text-zion-slate-light">Average 30% faster project completion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-zion-slate-dark mb-4">What to Expect</h3>
              <div className="space-y-3 text-sm text-zion-slate-light">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>Detailed project analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>Custom solution design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>Comprehensive cost breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>Implementation timeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>Ongoing support options</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-zion-gradient rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-zion-slate-light mb-4">
                Can't wait for a quote? Contact our team directly for urgent consultations.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
