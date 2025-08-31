import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Globe, 
  Calendar, 
  MessageSquare, 
  Phone, 
  Mail, 
  FileText,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Workflow,
  Atom,
  Rocket,
  Target,
  DollarSign,
  Clock,
  Star
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
    budget: '',
    timeline: '',
    description: '',
    requirements: '',
    preferredContact: 'email'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain, description: 'AI-powered business process automation' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, description: 'Cloud infrastructure and deployment' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, description: 'Security solutions and compliance' },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3, description: 'Business intelligence and insights' },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Workflow, description: 'End-to-end business transformation' },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Cpu, description: 'Infrastructure management and optimization' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, description: 'Quantum solutions and research' },
    { id: 'blockchain', name: 'Blockchain', icon: Network, description: 'Distributed ledger technology' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Zap, description: 'Custom software solutions' },
    { id: 'edge-computing', name: 'Edge Computing', icon: Cpu, description: 'Edge and IoT solutions' }
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Government',
    'Education',
    'Energy',
    'Transportation',
    'Other'
  ];

  const budgets = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K - $1M',
    '$1M+'
  ];

  const timelines = [
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProjectTypeChange = (projectType: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(projectType)
        ? prev.projectType.filter(pt => pt !== projectType)
        : [...prev.projectType, projectType]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Quote request submitted:', formData);
    setIsSubmitting(false);
    
    // Show success message or redirect
    alert('Thank you! Your quote request has been submitted. We\'ll get back to you within 24 hours.');
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const progress = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <div className="bg-zinc-800/50 border-b border-zinc-700/50">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Tell us about your project and we'll provide a detailed proposal tailored to your needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center ${currentStep >= 1 ? 'text-zion-cyan' : 'text-zinc-500'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep >= 1 ? 'border-zion-cyan bg-zion-cyan' : 'border-zinc-500'}`}>
                {currentStep > 1 ? <CheckCircle className="w-5 h-5 text-white" /> : '1'}
              </div>
              <span className="ml-2 font-medium">Company Info</span>
            </div>
            <div className={`flex items-center ${currentStep >= 2 ? 'text-zion-cyan' : 'text-zinc-500'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? 'border-zion-cyan bg-zion-cyan' : 'border-zinc-500'}`}>
                {currentStep > 2 ? <CheckCircle className="w-5 h-5 text-white" /> : '2'}
              </div>
              <span className="ml-2 font-medium">Project Details</span>
            </div>
            <div className={`flex items-center ${currentStep >= 3 ? 'text-zion-cyan' : 'text-zinc-500'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep >= 3 ? 'border-zion-cyan bg-zion-cyan' : 'border-zinc-500'}`}>
                3
              </div>
              <span className="ml-2 font-medium">Requirements</span>
            </div>
          </div>
          <div className="w-full bg-zinc-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Step 1: Company Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-3 text-zion-cyan" />
                  Company Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Company Size *
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end pt-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.companyName || !formData.contactName || !formData.email || !formData.companySize || !formData.industry}
                    className="px-8 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Next Step
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-zion-cyan" />
                  Project Details
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-4">
                    What services are you interested in? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectTypes.map(projectType => (
                      <label
                        key={projectType.id}
                        className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          formData.projectType.includes(projectType.id)
                            ? 'border-zion-cyan bg-zion-cyan/10'
                            : 'border-zinc-600 hover:border-zinc-500'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.projectType.includes(projectType.id)}
                          onChange={() => handleProjectTypeChange(projectType.id)}
                          className="mt-1 mr-3 text-zion-cyan focus:ring-zion-cyan"
                        />
                        <div>
                          <div className="flex items-center text-white font-medium">
                            <projectType.icon className="w-5 h-5 mr-2 text-zion-cyan" />
                            {projectType.name}
                          </div>
                          <p className="text-sm text-zinc-400 mt-1">{projectType.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-zinc-600 text-zinc-300 hover:bg-zinc-700/50 rounded-lg transition-all duration-300"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={formData.projectType.length === 0 || !formData.budget || !formData.timeline}
                    className="px-8 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Next Step
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Requirements */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-zion-cyan" />
                  Project Requirements
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Describe your project goals, challenges, and what you hope to achieve..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Specific Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Any specific technical requirements, integrations, or constraints..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    {[
                      { value: 'email', label: 'Email', icon: Mail },
                      { value: 'phone', label: 'Phone', icon: Phone },
                      { value: 'message', label: 'Message', icon: MessageSquare }
                    ].map(option => (
                      <label key={option.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={option.value}
                          checked={formData.preferredContact === option.value}
                          onChange={handleInputChange}
                          className="mr-2 text-zion-cyan focus:ring-zion-cyan"
                        />
                        <option.icon className="w-4 h-4 mr-1 text-zinc-400" />
                        <span className="text-zinc-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-zinc-600 text-zinc-300 hover:bg-zinc-700/50 rounded-lg transition-all duration-300"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.description}
                    className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <Rocket className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We deliver cutting-edge solutions with unmatched expertise and support
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Team",
                description: "Certified professionals with deep industry expertise"
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising quality"
              },
              {
                icon: DollarSign,
                title: "Competitive Pricing",
                description: "Transparent pricing with no hidden costs"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security protocols and compliance"
              },
              {
                icon: Globe,
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance"
              },
              {
                icon: Zap,
                title: "Innovation First",
                description: "Cutting-edge technologies and best practices"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
