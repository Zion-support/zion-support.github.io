import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Brain, 
  Server, 
  Shield, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Target,
  Mail,
  Phone,
  Building,
  FileText,
  Clock,
  DollarSign
} from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    projectType: [],
    timeline: '',
    budget: '',
    description: '',
    urgency: 'medium'
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(value)
        ? prev.projectType.filter(type => type !== value)
        : [...prev.projectType, value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setCurrentStep(3);
  };

  const projectTypes = [
    { id: 'ai-automation', label: 'AI & Automation', icon: Brain, description: 'Intelligent process automation and AI solutions' },
    { id: 'it-infrastructure', label: 'IT Infrastructure', icon: Server, description: 'Cloud migration, DevOps, and infrastructure modernization' },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, description: 'Security audits, threat detection, and compliance' },
    { id: 'digital-transformation', label: 'Digital Transformation', icon: TrendingUp, description: 'End-to-end business transformation' },
    { id: 'custom-development', label: 'Custom Development', icon: FileText, description: 'Tailored software solutions and integrations' },
    { id: 'consulting', label: 'Technology Consulting', icon: Users, description: 'Strategic technology planning and advisory' }
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Technology',
    'Government',
    'Education',
    'Real Estate',
    'Transportation',
    'Energy',
    'Other'
  ];

  const timelines = [
    'Immediate (1-3 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (12+ months)',
    'Flexible'
  ];

  const budgets = [
    'Under $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+',
    'To be determined'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low', description: 'Planning phase, no immediate deadline' },
    { value: 'medium', label: 'Medium', description: 'Looking to start within 3-6 months' },
    { value: 'high', label: 'High', description: 'Need to start within 1-3 months' },
    { value: 'urgent', label: 'Urgent', description: 'Critical need, immediate start required' }
  ];

  const renderStep1 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Company Information</h3>
        <p className="text-zion-slate-light">Tell us about your organization and project needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Company Name *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your company name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Contact Name *</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your email address"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Company Size *</label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            required
          >
            <option value="">Select company size</option>
            {companySizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Industry *</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            required
          >
            <option value="">Select industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="text-center">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          disabled={!formData.companyName || !formData.contactName || !formData.email || !formData.companySize || !formData.industry}
          className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Project Details
          <ArrowRight className="ml-2 w-5 h-5 inline" />
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Project Details</h3>
        <p className="text-zion-slate-light">Describe your project requirements and timeline</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-4">Project Type *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectTypes.map(type => (
            <label key={type.id} className="flex items-start space-x-3 p-4 bg-zion-slate-dark/30 border border-zion-purple/30 rounded-lg hover:border-zion-cyan/50 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={formData.projectType.includes(type.id)}
                onChange={() => handleCheckboxChange(type.id)}
                className="mt-1 w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-purple/30 rounded focus:ring-zion-cyan"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <type.icon className="w-5 h-5 text-zion-cyan" />
                  <span className="font-medium text-white">{type.label}</span>
                </div>
                <p className="text-sm text-zion-slate-light">{type.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Project Timeline *</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            required
          >
            <option value="">Select timeline</option>
            {timelines.map(timeline => (
              <option key={timeline} value={timeline}>{timeline}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Budget Range *</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            required
          >
            <option value="">Select budget range</option>
            {budgets.map(budget => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-2">Project Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-4">Project Urgency</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {urgencyLevels.map(level => (
            <label key={level.value} className="flex items-center space-x-3 p-4 bg-zion-slate-dark/30 border border-zion-purple/30 rounded-lg hover:border-zion-cyan/50 transition-colors cursor-pointer">
              <input
                type="radio"
                name="urgency"
                value={level.value}
                checked={formData.urgency === level.value}
                onChange={handleInputChange}
                className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-purple/30 focus:ring-zion-cyan"
              />
              <div>
                <div className="font-medium text-white">{level.label}</div>
                <div className="text-sm text-zion-slate-light">{level.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className="px-6 py-3 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={formData.projectType.length === 0 || !formData.timeline || !formData.budget || !formData.description}
          className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Quote Request
          <ArrowRight className="ml-2 w-5 h-5 inline" />
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-8">
      <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-white" />
      </div>
      
      <div>
        <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-xl text-zion-slate-light mb-6">
          Your quote request has been submitted successfully. Our team will review your 
          requirements and get back to you within 24 hours with a detailed proposal.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8">
        <h4 className="text-xl font-semibold text-white mb-4">What Happens Next?</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-medium text-white">24-Hour Response</div>
              <div className="text-sm text-zion-slate-light">We'll review and respond within 24 hours</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
              <Calculator className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-medium text-white">Detailed Quote</div>
              <div className="text-sm text-zion-slate-light">Comprehensive proposal with pricing and timeline</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-medium text-white">Expert Consultation</div>
              <div className="text-sm text-zion-slate-light">Free consultation with our technology experts</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
        >
          Contact Our Team
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center px-8 py-3 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
                <Calculator className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Get a personalized quote for your project in just a few minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-3xl p-8 md:p-12">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-12">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      currentStep >= step
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                        : 'bg-zion-slate-dark/50 border border-zion-purple/30 text-zion-slate-light'
                    }`}>
                      {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                    </div>
                    {step < 3 && (
                      <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                        currentStep > step ? 'bg-gradient-to-r from-zion-cyan to-zion-purple' : 'bg-zion-slate-dark/50'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-24 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver exceptional value through our proven expertise, innovative solutions, 
              and commitment to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Excellence</h3>
              <p className="text-zion-slate-light">500+ successful projects delivered on time and budget</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with deep industry expertise</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">Cutting-edge AI and emerging technologies</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Support</h3>
              <p className="text-zion-slate-light">24/7 support and maintenance services</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today to discuss your 
              project requirements and get started on your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple text-zion-purple font-semibold rounded-xl hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
