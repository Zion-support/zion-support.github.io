import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  Users,
  Building2,
  Target,
  TrendingUp,
  Lock,
  Database,
  Workflow,
  Server
} from 'lucide-react';

interface QuoteRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  industry: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
  urgency: string;
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
    budget: '',
    timeline: '',
    description: '',
    urgency: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      services: [
        'AI Business Intelligence',
        'AI Cybersecurity Platform',
        'AI Healthcare Platform',
        'AI Financial Trading Platform',
        'AI Supply Chain Optimization',
        'AI Autonomous Research Assistant',
        'AI Enterprise Automation',
        'AI Data Analytics Platform'
      ]
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      services: [
        'Quantum Edge Computing',
        'AI Quantum Hybrid Platform',
        'Quantum Neural Networks',
        'Quantum Financial Trading'
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      services: [
        'Zero Trust Network Architecture',
        'SOC2 Compliance Automation',
        'Incident Response Platform',
        'Security Headers & CSP Manager'
      ]
    },
    {
      id: 'infrastructure',
      name: 'IT Infrastructure',
      icon: Server,
      services: [
        'IT Infrastructure Management',
        'Cloud DevOps',
        'IoT Edge Computing',
        'Blockchain Enterprise Solutions'
      ]
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      icon: Rocket,
      services: [
        'Digital Twin Solutions',
        'FinOps Advisor',
        'Micro SaaS Solutions',
        'Green IT Solutions'
      ]
    }
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log('Quote request submitted:', formData);
    
    setIsSubmitting(false);
    setCurrentStep(4); // Move to success step
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Tell Us About Your Company</h2>
        <p className="text-gray-300">Help us understand your business needs and provide the best solution</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your company name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Contact Name *</label>
          <input
            type="text"
            value={formData.contactName}
            onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="your.email@company.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Company Size *</label>
          <select
            value={formData.companySize}
            onChange={(e) => setFormData(prev => ({ ...prev, companySize: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
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
          <label className="block text-sm font-medium text-gray-300 mb-2">Industry *</label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          >
            <option value="">Select industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Financial Services</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="retail">Retail & E-commerce</option>
            <option value="government">Government</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Select Your Services</h2>
        <p className="text-gray-300">Choose the services you're interested in</p>
      </div>

      <div className="space-y-6">
        {serviceCategories.map((category) => (
          <div key={category.id} className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <category.icon className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {category.services.map((service) => (
                <label key={service} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-gray-300 hover:text-white transition-colors">{service}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Project Details</h2>
        <p className="text-gray-300">Tell us more about your project requirements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range *</label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          >
            <option value="">Select budget range</option>
            <option value="under-25k">Under $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-250k">$100,000 - $250,000</option>
            <option value="250k-500k">$250,000 - $500,000</option>
            <option value="500k+">$500,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Timeline *</label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
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
          <label className="block text-sm font-medium text-gray-300 mb-2">Urgency Level</label>
          <select
            value={formData.urgency}
            onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select urgency</option>
            <option value="low">Low - Planning phase</option>
            <option value="medium">Medium - Ready to start</option>
            <option value="high">High - Need immediate solution</option>
            <option value="critical">Critical - Emergency situation</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={6}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
          required
        />
      </div>
    </motion.div>
  );

  const renderSuccess = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Quote Request Submitted!</h2>
      <p className="text-gray-300 mb-6">
        Thank you for your interest in Zion Tech Group. Our team will review your requirements 
        and get back to you within 24 hours with a detailed quote and next steps.
      </p>
      <div className="bg-slate-800/50 rounded-lg p-6 max-w-md mx-auto">
        <h3 className="text-lg font-semibold text-white mb-3">What happens next?</h3>
        <ul className="text-left text-gray-300 space-y-2">
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            Review of your requirements
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            Custom solution design
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            Detailed quote within 24 hours
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            Free consultation call
          </li>
        </ul>
      </div>
    </motion.div>
  );

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step <= currentStep 
              ? 'bg-cyan-500 text-white' 
              : 'bg-slate-700 text-gray-400'
          }`}>
            {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 3 && (
            <div className={`w-16 h-1 mx-2 ${
              step < currentStep ? 'bg-cyan-500' : 'bg-slate-700'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, quantum computing, and digital transformation solutions. 
              Get a personalized quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step Indicator */}
          {currentStep <= 3 && renderStepIndicator()}

          {/* Form Steps */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderSuccess()}

            {/* Navigation Buttons */}
            {currentStep <= 3 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-700/50">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    currentStep === 1
                      ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Previous
                </button>

                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    disabled={!formData.companyName || !formData.contactName || !formData.email}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      !formData.companyName || !formData.contactName || !formData.email
                        ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                        : 'bg-cyan-500 text-white hover:bg-cyan-600'
                    }`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.description || formData.services.length === 0}
                    className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                      isSubmitting || !formData.description || formData.services.length === 0
                        ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Why Choose Zion Tech Group */}
          {currentStep <= 3 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/30 backdrop-blur-md rounded-lg p-6 border border-slate-700/50 text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-300">Access to the latest AI, quantum computing, and emerging technologies</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-md rounded-lg p-6 border border-slate-700/50 text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">World-class engineers and consultants with deep industry expertise</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-md rounded-lg p-6 border border-slate-700/50 text-center">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Track record of successful digital transformations and ROI delivery</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
