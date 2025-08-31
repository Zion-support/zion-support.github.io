import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, Calculator, Clock, Shield, Users, Zap, Brain, Server } from 'lucide-react';

interface QuoteRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectScope: string;
  timeline: string;
  budget: string;
  additionalInfo: string;
}

export default function RequestQuote() {
  const [formData, setFormData] = useState<QuoteRequest>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectScope: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const serviceTypes = [
    'AI Enterprise Automation',
    'AI Data Analytics',
    'AI Business Intelligence',
    'AI Cybersecurity',
    'AI Healthcare Platform',
    'AI Quantum Computing',
    'Cloud & DevOps',
    'IT Infrastructure',
    'Cybersecurity',
    'Blockchain Solutions',
    'Micro SaaS Development',
    'Digital Transformation',
    'Custom AI Solution',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="bg-zinc-800/50 rounded-lg p-12 border border-zinc-700/50 text-center max-w-2xl mx-4">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Quote Request Sent!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your interest in Zion Tech Group. Our team will review your requirements 
            and get back to you within 24 hours with a detailed quote and proposal.
          </p>
          <div className="bg-zinc-700/50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">We'll review your requirements within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calculator className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Receive a detailed quote and project timeline</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Schedule a consultation with our experts</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-8 rounded-lg transition-colors"
          >
            Request Another Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Request Quote - Zion Tech Group</title>
        <meta name="description" content="Get a custom quote for Zion Tech Group's AI, IT, and Micro SaaS services. Request pricing for enterprise solutions, custom development, and consulting services." />
        <meta name="keywords" content="request quote, custom pricing, enterprise solutions, AI services quote, Zion Tech Group pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get personalized pricing for Zion Tech Group's cutting-edge AI, IT, and Micro SaaS solutions. 
              Our experts will analyze your requirements and provide a detailed proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Contact Name *</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Service Type *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">Select a service type</option>
                      {serviceTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Project Scope *</label>
                    <textarea
                      name="projectScope"
                      value={formData.projectScope}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="Describe your project requirements, goals, and expected outcomes..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="$10K - $50K">$10K - $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="$100K - $250K">$100K - $250K</option>
                        <option value="$250K - $500K">$250K - $500K</option>
                        <option value="$500K+">$500K+</option>
                        <option value="To be discussed">To be discussed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="Any additional details, constraints, or specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Request Quote'}
                  </button>
                </form>
              </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                  Why Choose Zion Tech Group?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Industry-leading AI expertise</li>
                  <li>• Proven track record of success</li>
                  <li>• Custom solutions tailored to your needs</li>
                  <li>• Competitive pricing and flexible terms</li>
                  <li>• Ongoing support and maintenance</li>
                </ul>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-green-400 mr-2" />
                  What's Included
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Detailed project analysis</li>
                  <li>• Custom solution design</li>
                  <li>• Implementation timeline</li>
                  <li>• Cost breakdown</li>
                  <li>• Support and maintenance plan</li>
                </ul>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-purple-400 mr-2" />
                  Response Time
                </h3>
                <p className="text-gray-300">
                  We typically respond to quote requests within 24 hours during business days. 
                  For urgent projects, we can expedite the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
