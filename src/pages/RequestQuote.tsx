import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  Brain,
  Cloud,
  Rocket,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';

interface QuoteRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  industry: string;
  services: string[];
  projectDescription: string;
  timeline: string;
  budget: string;
  additionalInfo: string;
}

const RequestQuote: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    services: [],
    projectDescription: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit',
    'Other'
  ];

  const availableServices = [
    { id: 'ai-services', name: 'AI & Machine Learning', icon: Brain, description: 'AI-powered solutions and analytics' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, description: 'Cloud infrastructure and automation' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, description: 'Security solutions and compliance' },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, description: 'Business process optimization' },
    { id: 'iot-edge', name: 'IoT & Edge Computing', icon: Zap, description: 'Connected device solutions' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: TrendingUp, description: 'Next-gen computing solutions' },
    { id: 'micro-saas', name: 'Micro SaaS Solutions', icon: Users, description: 'Custom software applications' },
    { id: 'consulting', name: 'IT Consulting', icon: MessageCircle, description: 'Strategic technology guidance' }
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)',
    'Flexible'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'To be discussed'
  ];

  const handleInputChange = (field: keyof QuoteRequest, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
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

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.contactName && formData.email;
      case 2:
        return formData.companySize && formData.industry && formData.services.length > 0;
      case 3:
        return formData.projectDescription && formData.timeline && formData.budget;
      default:
        return true;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Quote Request Submitted!
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Thank you for your interest in Zion Tech Group. Our team will review your requirements and get back to you within 24 hours with a customized quote.
          </p>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">24-hour response</p>
                  <p className="text-slate-400 text-sm">We'll review your requirements and respond within one business day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Detailed consultation</p>
                  <p className="text-slate-400 text-sm">Schedule a call to discuss your project in detail</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Customized proposal</p>
                  <p className="text-slate-400 text-sm">Receive a tailored solution and pricing proposal</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Get Your Custom
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Technology Quote
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Transform your business with cutting-edge technology solutions. Get a personalized quote tailored to your specific needs and objectives.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    step <= currentStep
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-slate-700/50 text-slate-400'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      step < currentStep ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-slate-700/50'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-slate-400">
              Step {currentStep} of 4: {
                currentStep === 1 ? 'Company Information' :
                currentStep === 2 ? 'Project Requirements' :
                currentStep === 3 ? 'Project Details' :
                'Review & Submit'
              }
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Company Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Company Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Contact Name *</label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Requirements */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Project Requirements</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-white font-medium mb-2">Company Size *</label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => handleInputChange('companySize', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Industry *</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-4">Services of Interest *</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {availableServices.map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                          formData.services.includes(service.id)
                            ? 'border-cyan-500/50 bg-cyan-500/10'
                            : 'border-slate-600/30 bg-slate-700/30 hover:border-slate-500/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="mt-1 w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <service.icon className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium text-white">{service.name}</span>
                          </div>
                          <p className="text-sm text-slate-400">{service.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Project Description *</label>
                    <textarea
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Describe your project goals, requirements, and expected outcomes..."
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Timeline *</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Budget Range *</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Additional Information</label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Any additional details, constraints, or specific requirements..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Review Your Information</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Company Details</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-slate-400">Company:</span> <span className="text-white">{formData.companyName}</span></p>
                        <p><span className="text-slate-400">Contact:</span> <span className="text-white">{formData.contactName}</span></p>
                        <p><span className="text-slate-400">Email:</span> <span className="text-white">{formData.email}</span></p>
                        {formData.phone && <p><span className="text-slate-400">Phone:</span> <span className="text-white">{formData.phone}</span></p>}
                        <p><span className="text-slate-400">Size:</span> <span className="text-white">{formData.companySize}</span></p>
                        <p><span className="text-slate-400">Industry:</span> <span className="text-white">{formData.industry}</span></p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-slate-400">Services:</span></p>
                        <div className="flex flex-wrap gap-1">
                          {formData.services.map((serviceId) => {
                            const service = availableServices.find(s => s.id === serviceId);
                            return service ? (
                              <span key={serviceId} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                                {service.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                        <p><span className="text-slate-400">Timeline:</span> <span className="text-white">{formData.timeline}</span></p>
                        <p><span className="text-slate-400">Budget:</span> <span className="text-white">{formData.budget}</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Project Description</h3>
                    <p className="text-slate-300 text-sm">{formData.projectDescription}</p>
                  </div>
                  
                  {formData.additionalInfo && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Additional Information</h3>
                      <p className="text-slate-300 text-sm">{formData.additionalInfo}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 rounded-lg transition-all duration-300 border border-slate-600/30"
                >
                  Previous
                </button>
              )}
              
              <div className="ml-auto">
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                      canProceed()
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-700/50 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Quote Request
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md rounded-2xl p-8 border border-slate-600/30"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
            <p className="text-slate-300 mb-6">
              Our team is here to help. Contact us directly for urgent inquiries or to schedule a consultation.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <p className="text-slate-400 text-sm">hello@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Visit Us</p>
                  <p className="text-slate-400 text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
