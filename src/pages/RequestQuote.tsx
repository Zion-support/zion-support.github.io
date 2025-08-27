import React from 'react';
import { SEO } from '@/components/SEO';

export default function RequestQuote() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
			<SEO title="Request a Quote - Zion Tech Group" description="Tell us about your project and get a customized quote." />
			<div className="container-responsive text-white">
				<h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
				<p className="text-zion-slate-light max-w-2xl">Share your requirements, timelines, and goals. We'll follow up promptly.</p>
			</div>
		</div>
	);
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  DollarSign, 
  Users, 
  Calendar, 
  FileText, 
  MessageCircle, 
  Phone, 
  Mail, 
  Building, 
  Globe, 
  Target, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Network,
  Server,
  Rocket,
  Users as Team,
  Award,
  TrendingUp,
  Lightbulb,
  CheckSquare,
  Square,
  Info,
  HelpCircle
} from 'lucide-react';

interface QuoteForm {
  // Company Information
  companyName: string;
  industry: string;
  companySize: string;
  website: string;
  
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  
  // Project Details
  projectTitle: string;
  projectDescription: string;
  projectType: string;
  services: string[];
  budget: string;
  timeline: string;
  urgency: string;
  
  // Technical Requirements
  currentTechnology: string;
  integrationRequirements: string;
  complianceNeeds: string;
  scalabilityRequirements: string;
  
  // Additional Information
  teamSize: string;
  existingPartners: string;
  successMetrics: string;
  additionalNotes: string;
}

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Retail',
  'Education',
  'Government',
  'Non-profit',
  'Real Estate',
  'Transportation',
  'Energy',
  'Media & Entertainment',
  'Other'
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const projectTypes = [
  'New Development',
  'System Integration',
  'Migration/Upgrade',
  'Consulting',
  'Support & Maintenance',
  'Custom Solution',
  'Other'
];

const services = [
  'AI & Machine Learning',
  'Cloud & DevOps',
  'Cybersecurity',
  'IoT & Edge Computing',
  'Quantum Computing',
  'Digital Transformation',
  'IT Infrastructure',
  'Technology Consulting'
];

const budgets = [
  'Under $10,000',
  '$10,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $500,000',
  '$500,000 - $1,000,000',
  'Over $1,000,000'
];

const timelines = [
  'Immediate (1-2 weeks)',
  'Quick (1-2 months)',
  'Standard (3-6 months)',
  'Extended (6-12 months)',
  'Long-term (12+ months)',
  'Flexible'
];

const urgencyLevels = [
  'Low - Planning phase',
  'Medium - Need within 3 months',
  'High - Need within 1 month',
  'Critical - Need immediately'
];

const teamSizes = [
  '1-5 people',
  '6-15 people',
  '16-50 people',
  '51-100 people',
  '100+ people'
];

export default function RequestQuote() {
  const [formData, setFormData] = useState<QuoteForm>({
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    projectTitle: '',
    projectDescription: '',
    projectType: '',
    services: [],
    budget: '',
    timeline: '',
    urgency: '',
    currentTechnology: '',
    integrationRequirements: '',
    complianceNeeds: '',
    scalabilityRequirements: '',
    teamSize: '',
    existingPartners: '',
    successMetrics: '',
    additionalNotes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          companyName: '',
          industry: '',
          companySize: '',
          website: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          jobTitle: '',
          projectTitle: '',
          projectDescription: '',
          projectType: '',
          services: [],
          budget: '',
          timeline: '',
          urgency: '',
          currentTechnology: '',
          integrationRequirements: '',
          complianceNeeds: '',
          scalabilityRequirements: '',
          teamSize: '',
          existingPartners: '',
          successMetrics: '',
          additionalNotes: ''
        });
        setCurrentStep(1);
      }, 3000);
    }, 2000);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.companyName && formData.industry && formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.projectTitle && formData.projectDescription && formData.projectType && formData.services.length > 0;
      case 3:
        return formData.budget && formData.timeline && formData.urgency;
      case 4:
        return true; // Additional info is optional
      default:
        return false;
    }
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <Building className="h-5 w-5" />;
      case 2: return <Target className="h-5 w-5" />;
      case 3: return <Calculator className="h-5 w-5" />;
      case 4: return <FileText className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return 'Company & Contact';
      case 2: return 'Project Details';
      case 3: return 'Budget & Timeline';
      case 4: return 'Additional Info';
      default: return 'Complete';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Request a Quote
          </h1>
          <p className="text-zion-slate-light text-lg max-w-4xl mx-auto leading-relaxed">
            Get a detailed quote for your technology project. Our team will analyze your requirements 
            and provide a comprehensive proposal tailored to your business needs and budget.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {Array.from({ length: totalSteps }, (_, index) => (
              <div key={index + 1} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep > index + 1
                    ? 'bg-zion-cyan border-zion-cyan text-white'
                    : currentStep === index + 1
                    ? 'bg-zion-cyan/20 border-zion-cyan text-zion-cyan'
                    : 'bg-white/10 border-zion-slate-light text-zion-slate-light'
                }`}>
                  {currentStep > index + 1 ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    getStepIcon(index + 1)
                  )}
                </div>
                <div className="ml-3 text-left">
                  <div className={`text-sm font-medium ${
                    currentStep >= index + 1 ? 'text-white' : 'text-zion-slate-light'
                  }`}>
                    Step {index + 1}
                  </div>
                  <div className={`text-xs ${
                    currentStep >= index + 1 ? 'text-zion-cyan' : 'text-zion-slate-light'
                  }`}>
                    {getStepTitle(index + 1)}
                  </div>
                </div>
                {index < totalSteps - 1 && (
                  <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                    currentStep > index + 1 ? 'bg-zion-cyan' : 'bg-zion-slate-light/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center gap-4 max-w-2xl mx-auto"
          >
            <CheckCircle className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="text-green-400 font-bold text-lg">Quote Request Submitted!</h3>
              <p className="text-green-400/80">
                Thank you for your request. Our team will review your requirements and get back to you 
                with a detailed quote within 24-48 hours.
              </p>
            </div>
          </motion.div>
        )}

        {/* Quote Form */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8">
            {/* Step 1: Company & Contact Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Company & Contact Information</h2>
                  <p className="text-zion-slate-light">Tell us about your company and how to reach you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-white font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-white font-medium mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry} className="bg-zion-slate-dark text-white">
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="companySize" className="block text-white font-medium mb-2">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size} className="bg-zion-slate-dark text-white">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-white font-medium mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="jobTitle" className="block text-white font-medium mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Project Details</h2>
                  <p className="text-zion-slate-light">Describe your project and what you need</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="projectTitle" className="block text-white font-medium mb-2">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter a descriptive project title"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="projectDescription" className="block text-white font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your project goals, requirements, and expected outcomes..."
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-white font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type} className="bg-zion-slate-dark text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Services Needed *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map(service => (
                        <label key={service} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4 text-zion-cyan bg-white/10 border-zion-cyan/30 rounded focus:ring-zion-cyan focus:ring-2"
                          />
                          <span className="text-zion-slate-light text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget & Timeline */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Budget & Timeline</h2>
                  <p className="text-zion-slate-light">Help us understand your constraints and priorities</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget} className="bg-zion-slate-dark text-white">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-white font-medium mb-2">
                      Project Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline} className="bg-zion-slate-dark text-white">
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="urgency" className="block text-white font-medium mb-2">
                      Project Urgency *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select urgency level</option>
                      {urgencyLevels.map(level => (
                        <option key={level} value={level} className="bg-zion-slate-dark text-white">
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Additional Information */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Additional Information</h2>
                  <p className="text-zion-slate-light">Help us provide a more accurate quote</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentTechnology" className="block text-white font-medium mb-2">
                      Current Technology Stack
                    </label>
                    <input
                      type="text"
                      id="currentTechnology"
                      name="currentTechnology"
                      value={formData.currentTechnology}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="e.g., React, Node.js, AWS, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-white font-medium mb-2">
                      Development Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map(size => (
                        <option key={size} value={size} className="bg-zion-slate-dark text-white">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="integrationRequirements" className="block text-white font-medium mb-2">
                      Integration Requirements
                    </label>
                    <textarea
                      id="integrationRequirements"
                      name="integrationRequirements"
                      value={formData.integrationRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe any third-party integrations or systems that need to be connected..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="successMetrics" className="block text-white font-medium mb-2">
                      Success Metrics
                    </label>
                    <textarea
                      id="successMetrics"
                      name="successMetrics"
                      value={formData.successMetrics}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="How will you measure the success of this project? (KPIs, goals, etc.)"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="additionalNotes" className="block text-white font-medium mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Any additional information, special requirements, or questions you'd like to share..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-zion-cyan/20">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <div className="text-zion-slate-light text-sm">
                Step {currentStep} of {totalSteps}
              </div>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Next Step
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Quote Request
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Why Choose Zion Tech Group */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our team of 50+ experts brings deep expertise in AI, cloud, security, and emerging technologies.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Proven Track Record</h3>
              <p className="text-zion-slate-light">
                Successfully delivered 150+ projects with 98% client satisfaction rate.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">ROI Focused</h3>
              <p className="text-zion-slate-light">
                We focus on delivering measurable business value and return on investment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
            <p className="text-zion-slate-light mb-8">
              Can't wait for a quote? Our team is available to discuss your project right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border border-zion-cyan text-zion-cyan px-6 py-3 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Live Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
